import { Injectable, NgZone } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { ApiService } from '../helpers/common/api.service'

export interface Shout {
  _id: number
  timestamp: string
  localeTimestamp: string
  author_id: number
  author_name: string
  author_color: string
  content: string
}

@Injectable()
export class ShoutsService {

  constructor(
    private api: ApiService
  ) {}

  // gets the shouts, latest by default
  getAll(params = { sort: '_id:-1' }, vn = 'v2'): Observable<Shout[]> {
    return this.api.get(`/${vn}/shouts`, { params: params })
      .map(res => res.json().items)
      .do(shouts => shouts.forEach(this.addLocaleTimestamp))
  }

  // gets one shout by id
  get(id: number, vn = 'v2'): Observable<Shout> {
    return this.api.get(`/${vn}/shouts/${id}`)
      .map(res => res.json())
      .do(shout => this.addLocaleTimestamp(shout))
  }

  // https://github.com/angular/zone.js/issues/356
  getStream(): Observable<Shout> {
    return Observable.create(observer => {
      const eventSource = this.api.getEventSource(`/shouts/stream`)
      eventSource.onmessage = msgEvent => {
        const shout = JSON.parse(msgEvent.data)
        this.addLocaleTimestamp(shout)
        observer.next(shout)
      }
      eventSource.onerror = msgEvent => {
        observer.error(msgEvent)
      }
      return () => eventSource.close()
    })
  }

  // we'll want to display the locale time, so get it out of the ISO timestamp
  addLocaleTimestamp(shout: Shout) {
    shout.localeTimestamp = new Date(shout.timestamp).toLocaleString()
  }

}

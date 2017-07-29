import { Injectable, NgZone } from '@angular/core'
import { Http, RequestOptionsArgs } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { environment } from '../../../environments/environment'

declare const EventSource: any

// e.g. route('/v2/shouts') -> http://localhost:9000/api/v2/shouts
const apiRoute = (path: string) => `${environment.api}${path}`

@Injectable()
export class ApiService {

  constructor(
    protected http: Http
  ) {}

  // e.g. get('/v2/shouts')
  get(path: string, options?: RequestOptionsArgs) {
    return this.http.get(apiRoute(path), options)
  }

  getEventSource(path) {
    return new EventSource(apiRoute(path))
  }

}

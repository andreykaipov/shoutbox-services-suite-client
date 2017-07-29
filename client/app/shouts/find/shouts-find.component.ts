import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Shout, ShoutsService } from '../shouts.service'

@Component({
  selector: 'app-shouts-find',
  templateUrl: './shouts-find.component.html',
  styleUrls: ['./shouts-find.component.scss']
})
export class ShoutsFindComponent implements OnInit {

  @Input() apiVersion: string

  shouts: Shout[]
  loading = true

  constructor(
    private shoutsService: ShoutsService
  ) { }

  ngOnInit() {
    this.loadShouts()
  }

  // when the event search form changes, get our shouts again
  loadShouts(event: any = {}) {
    this.loading = true
    console.log(this.apiVersion)
    this.shoutsService.getAll({ ...event, sort: '_id:-1' }, this.apiVersion)
      .take(1)
      .subscribe(shouts => {
        this.shouts = shouts
        this.loading = false
      })
  }

}

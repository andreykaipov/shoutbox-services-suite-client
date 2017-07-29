import { Component, Input, OnInit } from '@angular/core'
import { Shout } from '../shouts.service'

@Component({
  selector: 'app-shouts-table',
  templateUrl: './shouts-table.component.html',
  styleUrls: ['./shouts-table.component.scss']
})
export class ShoutsTableComponent {
  @Input() rows: Shout[] = []
  @Input() loading: boolean = false
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-shouts-search',
  templateUrl: './shouts-search.component.html',
  styleUrls: ['./shouts-search.component.scss']
})
export class ShoutsSearchComponent implements OnInit {

  form: FormGroup
  @Output() searchChanged: EventEmitter<any> = new EventEmitter()

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // make our form control keys match our api request params
    this.form = this.fb.group({
      since: '',
      until: '',
      limit: 100,
      author_name: '',
      content: ''
    })

    this.form.valueChanges.debounceTime(1000).subscribe(changes => {
      this.searchChanged.emit(changes)
    })
  }

}

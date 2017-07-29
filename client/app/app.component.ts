import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shoutbox Services Suite'

  links = [
    { name: 'Find', url: '/shouts/find' },
    { name: 'Feed', url: '/shouts/feed' }
  ]
}

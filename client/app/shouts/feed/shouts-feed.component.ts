import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { RecognitionService } from '../../helpers/voice/recognition.service'
import { SynthesisService } from '../../helpers/voice/synthesis.service'
import { Shout, ShoutsService } from '../shouts.service'

@Component({
  selector: 'app-shouts-feed',
  templateUrl: './shouts-feed.component.html',
  styleUrls: ['./shouts-feed.component.scss']
})
export class ShoutsFeedComponent implements OnInit, OnDestroy {

  private alive = true
  private zone = new NgZone({ enableLongStackTrace: false })

  shouts: Shout[]
  loading = true

  constructor(
    private shoutsService: ShoutsService,
    private synthesisService: SynthesisService,
    private recognitionService: RecognitionService
  ) { }

  ngOnInit() {
    this.getInitShouts()
    this.listenForShouts()
    this.recognitionService.showKITT()
  }

  ngOnDestroy() {
    this.alive = false
    this.recognitionService.hideKITT()
  }

  getInitShouts() {
    this.loading = true
    this.shoutsService.getAll()
      .take(1)
      .subscribe(shouts => {
        this.shouts = shouts
        this.loading = false
      })
  }

  listenForShouts() {
    this.shoutsService.getStream()
      .takeWhile(() => this.alive)
      .subscribe(shout => {
        this.loading = true
        this.zone.run(() => {
          this.shouts.unshift(shout)
          this.loading = false
          this.synthesisService.speak(
            `${shout.author_name} says... ${shout.content}`
          )
        })
      })
  }

}

import { Injectable } from '@angular/core'

// TS definitions not available
declare const SpeechKITT: any
const KITTstyle = '//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css'

@Injectable()
export class RecognitionService {

  speechKITTInitialized = false

  constructor() {
    this.initKITT()
  }

  initKITT() {
    if (!this.speechKITTInitialized) {
      SpeechKITT.annyang()
      SpeechKITT.setStylesheet(KITTstyle)
      SpeechKITT.vroom()
      SpeechKITT.hide()
      this.speechKITTInitialized = true
    }
  }

  showKITT() {
    if (this.speechKITTInitialized) {
      SpeechKITT.show()
    }
  }

  hideKITT() {
    if (this.speechKITTInitialized) {
      SpeechKITT.hide()
    }
  }

}

import { Injectable } from '@angular/core'

// JS libraries for speech recognition. TS definitions not available
declare const annyang: any

@Injectable()
export class SynthesisService {

  speechKITTInitialized = false

  constructor() { }

  // https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
  speak(text: string) {
    const chunks = chunkText(text)
    chunks.forEach(chunk => {
      const speech = new SpeechSynthesisUtterance(chunk.trim())
      speech.rate = 0.85
      speechSynthesis.speak(speech)
    })
  }

}

// tslint:disable:max-line-length
const chunkLength = 120
const patrick = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ' ,' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ')

// Fixes Google's speech synthesis API for long strings by chunking the string first.
// Credits to https://gist.github.com/woollsta/2d146f13878a301b36d7#file-chunkify-js,
// and http://stackoverflow.com/a/28911040/4085283
function chunkText(text) {
  const chunks = []
  while (text.length > 0) {
    chunks.push(text.match(patrick)[0])
    text = text.substring(chunks[chunks.length - 1].length)
  }
  return chunks
}

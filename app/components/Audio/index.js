import {MEDIA_READY_STATE} from './constants.js'

class Audio {
  constructor() {
    this._audioElement = document.querySelector('audio')
  }

  preload() {
    if (this._audioElement.readyState === MEDIA_READY_STATE.HAVE_NOTHING) {
      this._audioElement.load()
    }
  }

  play() {
    this._audioElement.currentTime = 0
    this._audioElement.play()
  }
}

export default Audio

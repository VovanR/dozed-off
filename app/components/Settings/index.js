import {createElement} from '../../utils/create-element.js'

class Settings {
  constructor({audio}) {
    this._audio = audio

    this._element = null
  }

  _build() {
    this._element = createElement({
      type: 'span',
      className: 'settings'
    })

    this._bindEvents()

    return this
  }

  _bindEvents() {
    this._element.addEventListener('click', e => {
      e.stopPropagation()

      this._audio.play()
    })
  }

  /**
   * @return {HTMLElement} <span/>
   */
  getElement() {
    if (this._element) {
      return this._element
    }

    return this._build()._element
  }
}

export default Settings

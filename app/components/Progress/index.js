import {createElement} from '../../utils/create-element.js'

class Progress {
  constructor({
    value = 0,
    max
  }) {
    this._value = value
    this._max = max

    this._element = null
  }

  _build() {
    this._element = createElement({
      className: 'progress',
      children: [
        createElement({
          className: 'progress__bar',
          attributes: {
            role: 'progressbar'
          }
        })
      ]
    })

    this._element.style.setProperty('--value', this._value)
    this._element.style.setProperty('--max', this._max)

    return this
  }

  /**
   * @return {HTMLElement} <progress/>
   */
  getElement() {
    if (this._element) {
      return this._element
    }

    return this._build()._element
  }

  setValue(value) {
    this._value = Math.floor(value)
    this._element.style.setProperty('--value', this._value)
    return this
  }
}

export default Progress

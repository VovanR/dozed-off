import {createElement} from '../../utils/create-element.js'

class Progress {
  constructor({
    value,
    max
  }) {
    this._value = value || 0
    this._max = max

    this._element = null
  }

  _build() {
    this._element = createElement({
      type: 'progress',
      className: 'progress',
      attributes: {
        max: this._max,
        value: this._value,
      },
    })

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
    this._element.value = value
    return this
  }
}

export default Progress

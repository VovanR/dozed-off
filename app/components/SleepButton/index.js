import {formatTime} from '../../utils/time.js'
import {createElement} from '../../utils/create-element.js'

class SleepButton {
  constructor({
    timeout,
    onClick
  }) {
    this._timeout = timeout
    this._onClick = onClick

    this._element = null
    this._progress = 0
  }

  _build() {
    this._element = createElement({
      type: 'button',
      className: 'button',
      attributes: {
        type: 'button',
        autofocus: 'autofocus',
      },
    });
    this._setButtonText(this._timeout)

    this._bindEvents()

    return this
  }

  _bindEvents() {
    this._element.addEventListener('click', this._onClick)
  }

  /**
   * @return {HTMLElement} <button/>
   */
  getElement() {
    if (this._element) {
      return this._element
    }
    return this._build()._element
  }

  enable() {
    this._toggle(false)
    return this
  }

  disable() {
    this._toggle(true)
    return this
  }

  toggle(disabled) {
    this._toggle(disabled)
    return this
  }

  _toggle(disabled) {
    this._element.disabled = disabled
    return this
  }

  setValue(value) {
    this._progress = value
    this._setButtonText(this._progress)
  }

  _setButtonText(timeout) {
    this._element.textContent = formatTime(timeout)
  }
}

export default SleepButton

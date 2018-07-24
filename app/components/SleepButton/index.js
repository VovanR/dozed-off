import {formatTime} from '../../utils/time.js'

class SleepButton {
  constructor({
    timeout,
    onClick
  }) {
    this._timeout = timeout
    this._onClick = onClick

    this._element = null
  }

  _build() {
    const element = document.createElement('button')
    element.setAttribute('type', 'button')
    element.setAttribute('autofocus', 'autofocus')
    element.classList.add('button')
    element.textContent = formatTime(this._timeout)

    this._element = element

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
}

export default SleepButton

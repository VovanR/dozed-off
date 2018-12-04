import {formatTime} from '../../utils/time.js'
import {createElement} from '../../utils/create-element.js'

const CLASS_NAME = {
  element: 'button',
  elementPlaying: 'button_playing',
  elementPaused: 'button_paused',
  elementStopped: 'button_stopped',
  text: 'button__text',
}

class SleepButton {
  constructor({
    timeout,
    textBeforeElement = null,
    textAfterElement = null,
    onClick,
  }) {
    this._timeout = timeout
    this._onClick = onClick

    this._element = null
    this._textElement = null
    this._textBeforeElement = textBeforeElement
    this._textAfterElement = textAfterElement
    this._progress = 0
  }

  _build() {
    this._textElement = createElement({
      type: 'span',
      className: CLASS_NAME.text,
    })

    this._element = createElement({
      type: 'button',
      className: CLASS_NAME.element,
      attributes: {
        type: 'button',
        autofocus: 'autofocus',
      },
      children: [
        this._textBeforeElement,
        this._textElement,
        this._textAfterElement,
      ],
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
    this._element.classList.toggle(CLASS_NAME.elementPlaying, disabled)
    this._element.classList.toggle(CLASS_NAME.elementStopped, !disabled)
    return this
  }

  setValue(value) {
    this._progress = value
    this._setButtonText(this._progress)
  }

  _setButtonText(timeout) {
    this._textElement.textContent = formatTime(timeout)
  }
}

export default SleepButton

import {createElement} from '../../utils/create-element.js'

class StatusIcon {
  constructor() {
    this._element = null
  }

  _build() {
    this._element = createElement({
      type: 'span',
      className: `status-icon`
    })

    return this
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

export default StatusIcon

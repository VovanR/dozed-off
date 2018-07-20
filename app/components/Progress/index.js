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
    const element = document.createElement('progress')
    element.setAttribute('max', this._max)
    element.value = this._value
    element.classList.add('progress')

    this._element = element

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

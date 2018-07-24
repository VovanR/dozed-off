class Timer {
  constructor({
    timeout,
    onTick,
    onEnd
  }) {
    this._timeout = timeout
    this._onTick = onTick
    this._onEnd = onEnd

    this._startTimestamp = null
    this._requestID = null
    this._timer = null

    this._start()
  }

  _start() {
    this._next()
    this._timer = window.setTimeout(() => this._end(), this._timeout)
  }

  _next() {
    this._requestID = window.requestAnimationFrame(timestamp => this._tick(timestamp))
  }

  _end() {
    this._reset()
    this._onEnd()
  }

  _tick(timestamp) {
    if (this._startTimestamp === null) {
      this._startTimestamp = timestamp
    }

    const progress = timestamp - this._startTimestamp
    const restTime = this._timeout - progress

    this._restTime = restTime

    this._onTick(progress, restTime)

    if (restTime > 0) {
      this._next()
    }
  }

  stop() {
    this._reset()
  }

  _reset() {
    window.cancelAnimationFrame(this._requestID)
    window.clearTimeout(this._timer)
    this._requestID = null
    this._timer = null
  }
}

export default Timer

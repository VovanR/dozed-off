class Timer {
  constructor({
    timeout,
    onTick,
    onEnd,
  }) {
    this._timeout = timeout
    this._onTick = onTick
    this._onEnd = onEnd

    this._startTimestamp = null

    this._start()
  }

  _start() {
    this._next()
  }

  _next() {
    window.requestAnimationFrame((timestamp) => this._tick(timestamp))
  }

  _end() {
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
    } else {
      this._end()
    }
  }
}

export default Timer

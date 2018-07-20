// Format timestamp
function formatTime(ms) {
  return formatSecondsToTime(mathRound(ms))
}

// Fastest math round (Math.round)
function mathRound(num) {
  return (0.5 + num) << 0
}

/**
 * Format Seconds To Time
 *
 * @see {@link https://jsfiddle.net/VovanR/kbx1sayd/}
 *
 * @example
 * // returns '07:40'
 * formatSecondsToTime(460000)
 *
 * @param {Number} seconds
 * @returns {String} time
 */
function formatSecondsToTime(seconds) {
  if (seconds === 0 || typeof seconds !== 'number') {
    return ''
  }

  const date = new Date(seconds)
  let h = date.getUTCHours()
  let m = date.getUTCMinutes()
  let s = date.getUTCSeconds()
  let time = ''

  if (h !== 0) {
    time += h + ':'
  }

  if (m < 10) {
    m = '0' + m
  }

  if (s < 10) {
    s = '0' + s
  }

  time += m + ':' + s

  return time
}

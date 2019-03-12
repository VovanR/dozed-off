// Format timestamp
function formatTime(ms) {
  return formatMillisecondsToTime(mathRound(ms))
}

// Fastest math round (Math.round)
function mathRound(num) {
  return (0.5 + num) << 0
}

/**
 * Format Milliseconds To Time
 *
 * {@link https://jsfiddle.net/VovanR/kbx1sayd/}
 * @version 1.0.0
 *
 * @param {number} milliseconds - time in milliseconds
 * @returns {string} formatted time string
 *
 * @example
 * formatMillisecondsToTime(460000);
 * //=> '07:40'
 */
function formatMillisecondsToTime(milliseconds) {
  if (milliseconds === 0 || typeof milliseconds !== 'number') {
    return ''
  }

  const date = new Date(milliseconds)
  const h = date.getUTCHours()
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

export {
  formatTime
}

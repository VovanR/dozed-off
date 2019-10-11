import {MILLISECONDS_IN_ONE_MINUTE} from '../constants.js'

/**
 * Convert minutes to milliseconds
 * {@link https://github.com/VovanR/time-functions}
 *
 * @param {number} minutes Minutes
 * @returns {number} Milliseconds
 *
 * @example
 * minutesToMilliseconds(1)
 * //=> 60000
 */
function minutesToMilliseconds(minutes) {
  return minutes * MILLISECONDS_IN_ONE_MINUTE
}

export default minutesToMilliseconds

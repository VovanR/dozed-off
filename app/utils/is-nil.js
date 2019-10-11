/**
 * Value is `undefined` or `null`
 *
 * @param {*} value
 * @returns {boolean}
 *
 * @example
 * isNil(undefined); //=> true
 * isNil(null); //=> true
 * isNil(false); //=> false
 * isNil(0); //=> false
 * isNil(''); //=> false
 */
function isNil(value) {
  return typeof value === 'undefined' || value === null
}

export default isNil

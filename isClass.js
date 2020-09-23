/**
 * Checks if `value` is class.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a class, else `false`.
 * @example
 *
 * isClass(class Any{})
 * // => true
 *
 * isClass(() => {})
 * // => false
 *
 * isClass(async () => {})
 * // => false
 *
 * isClass(1)
 * // => false
 *
 * isClass("any")
 * // => false
 */
function isClass(value) {
  return (typeof value === 'function') && /^class\s+/.test(value.toString().trim())
}

export default isClass

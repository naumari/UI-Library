export const getFileName = url => {
  const start = url.indexOf('/')
  const end = url.lastIndexOf('/')
  const name = url.substring(start + 1, end)

  return name
}

/**
 * @type {(v: PropertyKey) => boolean}
 * Check whether the object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

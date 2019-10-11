import isNil from './is-nil.js'

/**
 * Get/Set URL search params
 * {@link http://jsfiddle.net/VovanR/61a35x9e/}
 * @version 0.1.0
 *
 * @example
 * // Open URL https://localhost/?foo=1
 * const searchParams = new SearchParamsStorage();
 * searchParams.load();
 * //=> {foo: 1}
 * searchParams.save({bar: 55});
 * searchParams.load();
 * //=> {bar: 55}
 */
class SearchParamsStorage {
  constructor() {
    this._prevData = null
  }

  _parseSearchParamsToJSON() {
    const paramsString = window.location.search
    const searchParams = new URLSearchParams(paramsString)
    const searchParamsEntries = [...searchParams]
    const filteredSearchParamsEntries = searchParamsEntries.filter(filterEmptySearchParamEntries)

    return Object.fromEntries(filteredSearchParamsEntries)
  }

  load() {
    return this._parseSearchParamsToJSON()
  }

  _isChanged(data) {
    return JSON.stringify(data) !== JSON.stringify(this._prevData)
  }

  save(data) {
    if (!this._isChanged(data)) {
      return
    }

    const dataEntries = Object.entries(data)
    const filteredDataEntries = dataEntries.filter(filterEmptyDataEntries)

    const newSearchParams = new URLSearchParams(filteredDataEntries)
    this._prevData = Object.fromEntries(filteredDataEntries)

    const url = window.location.pathname + '?' + newSearchParams.toString()
    window.history.pushState(null, null, url)
  }
}

function filterEmptySearchParamEntries([, value]) {
  return value !== ''
}

function filterEmptyDataEntries([, value]) {
  return !isNil(value)
}

export default SearchParamsStorage

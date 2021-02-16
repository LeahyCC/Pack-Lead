import isTypeObj from './types'

export const isEmptyObj = (obj: {}) => {
  // truthiness if is type {}
  const isEmpty = obj && Object.keys(obj).length === 0

  // if hits console.ware, feelsbadman
  return isEmpty
    ? isTypeObj(obj)
    : // eslint-disable-next-line no-console
      console.warn(`isEmptyObj({}: obj): is being passed ${obj}`)
}

export const compareValues = (key: string, order = 'asc') => {
  return function innerSort(a: any, b: any) {
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}

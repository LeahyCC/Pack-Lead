import isTypeObj from './types'

const isEmptyObj = (obj: {}) => {
  // truthiness if is type {}
  const isEmpty = obj && Object.keys(obj).length === 0

  // if hits console.ware, feelsbadman
  return isEmpty
    ? isTypeObj(obj)
    : // eslint-disable-next-line no-console
      console.warn(`isEmptyObj({}: obj): is being passed ${obj}`)
}

// TODO:
// const xx = { 0: ['2', { 0.0: {}, 0.1: undefined }], 1: { 2.0: true } }
// for testing purposes
export default isEmptyObj

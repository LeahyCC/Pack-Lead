// import isTypeArray from './types'

const isEmptyArray = (array: []) => {
  // truthiness if is type {}
  const isEmpty = array && array.length === 0

  // if hits console.ware, feelsbadman
  return isEmpty
    ? true
    : // eslint-disable-next-line no-console
      console.warn(
        `isEmptyObj({}: obj): is being passed ${array}; likely from api data`
      )
}

// TODO:
// const xx = { 0: ['2', { 0.0: {}, 0.1: undefined }], 1: { 2.0: true } }
// for testing purposes
export default isEmptyArray

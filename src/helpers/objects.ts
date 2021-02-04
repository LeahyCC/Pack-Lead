const isEmptyObj = (obj: {}) => {
  // during api transit an obj may come null or undefined
  // to avoid nested null checks in app
  // assing proper types from root of the data (api > redux > components)
  const notUndefined = obj !== null || obj !== undefined

  // truthiness if is type {}
  const isTypeObj = Object.keys(obj).length === 0 && obj.constructor === Object

  // if hits console.ware, feelsbadman
  const objCheck = notUndefined
    ? isTypeObj
    : // eslint-disable-next-line no-console
      console.warn(
        `isEmptyObj({}: obj): is being passed a null or undefined {} type`
      )
  return objCheck
}

// TODO:
// const xx = { 0: ['2', { 0.0: {}, 0.1: undefined }], 1: { 2.0: true } }
// for testing purposes
export default isEmptyObj

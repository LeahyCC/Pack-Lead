const isTypeObj = (obj: {}) => {
  const objCheck = typeof obj === 'object' && obj.constructor === Object

  const isObj = objCheck
    ? true
    : // eslint-disable-next-line no-console
      console.warn(
        `isTypeObj({}: obj): is being passed something other than an object`
      )
  return isObj
}

export default isTypeObj

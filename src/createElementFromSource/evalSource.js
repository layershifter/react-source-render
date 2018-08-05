import { resolverId } from "../babel"

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 */
const evalSource = (source, resolver, resolverContext) => {
  const resolverWithContext = importName => resolver(importName, resolverContext)
  // eslint-disable-next-line no-new-func
  const evalWithResolver = new Function(resolverId, `return ${source}`)

  return evalWithResolver(resolverWithContext)
}

export default evalSource

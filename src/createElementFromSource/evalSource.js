import { resolverId } from "../babel"

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 */
const evalSource = (source, resolver, resolverContext) => {
  // eslint-disable-next-line no-unused-vars
  const resolverWithContext = importName => resolver(importName, resolverContext)

  // eslint-disable-next-line no-eval
  return eval(`var ${resolverId} = resolverWithContext; ${source}`)
}

export default evalSource

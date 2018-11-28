import memoize from "fast-memoize"

import transformSource from "./transformSource"
import { resolverId } from "../babel"

// eslint-disable-next-line no-new-func
export const createFunction = memoize(source => new Function(resolverId, source))

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 */
export const evalSource = memoize((source, resolver) => {
  const evalWithResolver = createFunction(source)

  return evalWithResolver(resolver)
})

/**
 * Creates a valid React Component from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 * @param {String} source A string that contains the source code
 */
const createComponentFromSource = (babelConfig, resolver, resolverContext, source) => {
  const transformed = transformSource(babelConfig, source)
  const resolverWithContext = importName => resolver(importName, resolverContext)

  return evalSource(transformed, resolverWithContext)
}

export default createComponentFromSource

import memoize from "fast-memoize"
import * as is from "react-is"

import transformSource from "./transformSource"
import { exportId, resolverId } from "../babel"

// eslint-disable-next-line no-new-func
export const createFunction = memoize(source => new Function(exportId, resolverId, source))

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 *
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 */
export const evalSource = (source, resolver) => {
  const Component = { }
  const evalWithResolver = createFunction(source)

  console.log('BEFORE', Component)

  evalWithResolver(Component, resolver)
  console.log('AFTER', Component)
  return Component.default
}

/**
 * Creates a valid React Component from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {String} source A string that contains the source code
 * @param {Function} resolver A function for the imports resolution
 */
const createComponentFromSource = (babelConfig, source, resolver) => {
  const transformed = transformSource(babelConfig, source)
  const component = evalSource(transformed, resolver)
console.log(transformed, component)
  if (!is.isValidElementType(component)) {
    throw new Error("Render: your source should have a default export with a React component")
  }

  return component
}

export default createComponentFromSource

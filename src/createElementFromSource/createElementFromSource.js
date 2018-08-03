import { createElement } from "react"

import evalSource from "./evalSource"
import transformSource from "./transformSource"

/**
 * Creates a valid React Element from source.
 *
 * @param {Object} babelConfig A config for Babel
 * @param {Function} resolver A function for the imports resolution
 * @param {Object} resolverContext A context of resolver, will be passed as second argument to it
 * @param {String} source A string that contains the source code
 */
const createElementFromSource = (babelConfig, resolver, resolverContext, source) => {
  const transformed = transformSource(babelConfig, source)
  const component = evalSource(transformed, resolver, resolverContext)

  return typeof component === "function" ? createElement(component) : component
}

export default createElementFromSource

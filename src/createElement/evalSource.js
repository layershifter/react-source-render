import memoize from "fast-memoize"
import { createElement } from "react"

import { resolverId } from "../babel"

const wrapSource = component =>
  typeof component === "function" ? createElement(component) : component

/* eslint-disable */
// Heads up!
// It's okay to use eval() there, the `resolver` param cannot be removed as it used in the eval
// scope.

/**
 * @param {String} code
 * @param {Function} resolver
 *
 * @return {Object}
 */
const evalSource = memoize((code, resolver) =>
  wrapSource(eval(`var ${resolverId} = resolver; ${code}`)),
)

export default evalSource

import PropTypes from "prop-types"
import { Component, createElement } from "react"

import createComponentFromSource from "./createElementFromSource"

/**
 * Creates a React element from the passed source code and config.
 */
class ComponentFactory extends Component {
  static propTypes = {
    /** A config for Babel. */
    babelConfig: PropTypes.object.isRequired,

    /** A render function. */
    render: PropTypes.func.isRequired,

    /**
     * A function for the imports resolution.
     *
     * @param {String} importPath
     */
    resolver: PropTypes.func.isRequired,

    /** An object that will be passed additionally to resolver function. */
    resolverContext: PropTypes.object.isRequired,

    /** A string that contains the source code. */
    source: PropTypes.string.isRequired,
  }

  handleResolve = importName => {
    const { resolver, resolverContext } = this.props

    return resolver(importName, resolverContext)
  }

  render() {
    const { babelConfig, render, source, componentProps } = this.props

    return render(
      createElement(
        createComponentFromSource(
          babelConfig,
          source,
          this.handleResolve,
        ),
        componentProps,
      ),
    )
  }
}

export default ComponentFactory

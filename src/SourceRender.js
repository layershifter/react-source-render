import PropTypes from "prop-types"
import React, { Component } from "react"

import ComponentFactory from "./ComponentFactory"
import SafeRender from "./SafeRender"
import MarkupFromElement from "./MarkupFromElement"

class SourceRender extends Component {
  static propTypes = {
    /** A config for Babel. */
    babelConfig: PropTypes.object,

    /** A render function. */
    children: PropTypes.func.isRequired,

    /**
     * A function that allows to customize you rendering of an result element, i.e wrap with a
     * Provider.
     *
     * @param {React.Element} A created element.
     */
    render: PropTypes.func,

    /**
     * An option that controls rendering of HTML with ReactDOM server, it allows to omit
     * rendering when you're using portals.
     */
    renderHtml: PropTypes.bool,

    /**
     * A function for the imports resolution.
     *
     * @param {String} importPath
     */
    resolver: PropTypes.func.isRequired,

    /** An object that will be passed additionally to resolver function. */
    resolverContext: PropTypes.object,

    /** A string that contains the source code. */
    source: PropTypes.string.isRequired,
  }

  static defaultProps = {
    babelConfig: {},
    render: element => element,
    renderHtml: true,
    resolverContext: {},
  }

  state = {
    renderId: 0,
  }

  static getDerivedStateFromProps(props, state) {
    return {
      renderId: state.renderId + 1,
    }
  }

  renderComponent = (ele) => {
    const {
      babelConfig,
      children,
      render,
      renderHtml,
      resolver,
      resolverContext,
      source,
      ...rest
    } = this.props
    const element = render(ele)

    return (
      <MarkupFromElement active={renderHtml} element={element}>
        {(markup) => children({ element, markup })}
      </MarkupFromElement>
    )
  }

  render() {
    const {
      babelConfig,
      children,
      render,
      renderHtml,
      resolver,
      resolverContext,
      source,
      ...rest
    } = this.props
    const { renderId } = this.state

    return (
      <SafeRender renderId={renderId}>
        <ComponentFactory
          babelConfig={babelConfig}
          render={this.renderComponent}
          resolver={resolver}
          resolverContext={resolverContext}
          source={source}
          componentProps={rest}
        />
      </SafeRender>
    )
  }
}

export default SourceRender

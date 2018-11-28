import PropTypes from "prop-types"
import React, { Component, createContext } from "react"
import { renderToStaticMarkup } from "react-dom/server"

import createComponentFromSource from "./createElementFromSource"
import SafeRender from "./SafeRender"

const { Consumer, Provider } = createContext("SourceRender.Element")

class SourceRender extends Component {
  static propTypes = {
    /** A config for Babel. */
    babelConfig: PropTypes.object,

    children: PropTypes.node.isRequired,

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

    /** A string that contains the source code. */
    source: PropTypes.string.isRequired,
  }

  static defaultProps = {
    babelConfig: {},
    renderHtml: true,
  }

  /** Stores an HTML markup for the current element. */
  htmlMarkup = ""

  /** Stores a current rendered element. */
  currentElement = null

  /** Stores previously rendered elements. */
  renderedElements = { 0: null }

  /** Stores an incremented value of the render cycle. */
  renderCycleId = 0

  handleError = cycleId => {
    this.renderedElements[cycleId] = undefined
  }

  render() {
    const { babelConfig, children, renderHtml, resolver, source, ...rest } = this.props

    try {
      const ComponentFromSource = createComponentFromSource(babelConfig, resolver, rest, source)

      this.renderCycleId += 1
      this.currentElement = (
        <SafeRender
          cycleId={this.renderCycleId}
          onError={this.handleError}
          prevChildren={this.renderedElements}
        >
          <ComponentFromSource />
        </SafeRender>
      )
      this.htmlMarkup = renderHtml ? renderToStaticMarkup(this.currentElement) : null

      this.renderedElements[this.renderCycleId] = this.currentElement
      this.error = undefined
    } catch (e) {
      this.error = e
    }

    return (
      <Provider
        value={{ error: this.error, element: this.currentElement, markup: this.htmlMarkup }}
      >
        {children}
      </Provider>
    )
  }
}

SourceRender.Consumer = Consumer

export default SourceRender

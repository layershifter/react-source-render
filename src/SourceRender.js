import equal from "fast-deep-equal"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { renderToStaticMarkup } from "react-dom/server"

import createElementFromSource from "./createElementFromSource"
import { noop } from "./util"

export default class SourceRender extends Component {
  static propTypes = {
    /** A config for Babel. */
    babelConfig: PropTypes.object,

    /**
     * A callback that will be called after the render process that ended with an error.
     *
     * @param {Error} error
     * @param {Object} props
     */
    onError: PropTypes.func,

    /**
     * A callback that will be called after the render process that ended successfully.
     *
     * @param {Error} error
     * @param {Object} props
     */
    onSuccess: PropTypes.func,

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
    onError: noop,
    onSuccess: noop,
    renderHtml: true,
  }

  state = {
    element: null,
  }

  componentDidMount() {
    this.renderElement()
  }

  shouldComponentUpdate(nextProps) {
    return !equal(this.props, nextProps)
  }

  componentDidUpdate() {
    this.renderElement()
  }

  componentWillUnmount() {
    if (this.frameId) cancelAnimationFrame(this.frameId)
    if (this.ref) unmountComponentAtNode(this.ref)
  }

  handleRef = c => {
    this.ref = c
  }

  renderElement() {
    this.frameId = requestAnimationFrame(() => {
      const { babelConfig, onError, onSuccess, renderHtml, resolver, source, ...rest } = this.props
      const { element: prevElement } = this.state

      unmountComponentAtNode(this.ref)

      try {
        const element = createElementFromSource(babelConfig, resolver, rest, source)
        const markup = renderHtml ? renderToStaticMarkup(element) : null

        render(element, this.ref)
        onSuccess(null, { ...this.props, element, markup })

        this.setState({ element })
      } catch (error) {
        onError(error, this.props)
        render(prevElement, this.ref)
      }
    })
  }

  render() {
    return <div ref={this.handleRef} />
  }
}

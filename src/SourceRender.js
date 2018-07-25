import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { renderToStaticMarkup } from "react-dom/server"

import createElement from "./createElement"
import noop from "./noop"

export default class SourceRender extends PureComponent {
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
  }

  state = {
    element: null,
  }

  componentDidMount() {
    this.renderElement()
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
      const { babelConfig, onError, onSuccess, resolver, source } = this.props
      const { element: prevElement } = this.state

      unmountComponentAtNode(this.ref)

      try {
        const element = createElement(babelConfig, resolver, source)
        const markup = renderToStaticMarkup(element)

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

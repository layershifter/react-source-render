import PropTypes from "prop-types"
import React, { Component } from "react"

import FallbackRender from "./FallbackRender"

export default class SafeRender extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    cycleId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onError: PropTypes.func.isRequired,
    prevChildren: PropTypes.objectOf(PropTypes.element),
  }

  static defaultProps = {
    prevChildren: {},
  }

  state = {
    // eslint-disable-next-line
    cycleId: 0,
    failed: false,
  }

  static getDerivedStateFromProps(props, state) {
    return {
      cycleId: props.cycleId,
      failed: props.cycleId === state.cycleId ? state.failed : false,
    }
  }

  componentDidCatch() {
    const { cycleId, onError } = this.props

    onError(cycleId)
    this.setState({ failed: true })
  }

  render() {
    const { children, prevChildren } = this.props
    const { failed } = this.state

    return failed ? <FallbackRender>{prevChildren}</FallbackRender> : children
  }
}

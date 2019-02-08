import PropTypes from "prop-types"
import { Component } from "react"

export default class SafeRender extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    prevChildren: PropTypes.objectOf(PropTypes.element),
    renderId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])
  }

  static defaultProps = {
    prevChildren: {},
  }

  state = {
    prevChildren: null,
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps', {
    //   error: props.renderId === state.renderId ? state.error.toString() : null,
    //   propsId: props.renderId,
    //   stateId: state.renderId,
    // })
    const error = props.renderId === state.renderId ? state.error : null

    return {
      renderId: props.renderId,
      error,
      prevChildren: error ? state.prevChildren : props.children,
    }
  }

  static getDerivedStateFromError(error) {
    // console.log('getDerivedStateFromError()')
    return { error }
  }

  render() {
    // console.log('render', this.state.prevChildren)

    const { children } = this.props
    const { error, prevChildren } = this.state

    return error ? null : children
  }
}

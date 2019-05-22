import * as PropTypes from "prop-types"
import * as React from "react"

import { ComponentRender } from "./ComponentRender"
import { RenderChildrenProp, RenderConfig, SourceCode } from "./types"

type SourceRenderProps = RenderConfig & {
  children: RenderChildrenProp

  /**
   * A function that allows to customize you rendering of an result element, i.e wrap with a
   * Provider.
   */
  wrap?: (children: React.ReactElement) => React.ReactElement
}

type SourceRenderState = {
  error: Error | null
  source: SourceCode
}

export class SourceRender extends React.Component<SourceRenderProps, SourceRenderState> {
  static propTypes = {
    babelConfig: PropTypes.object,
    children: PropTypes.func.isRequired,
    renderHtml: PropTypes.bool,
    resolver: PropTypes.func.isRequired,
    resolverContext: PropTypes.object,
    source: PropTypes.string.isRequired,
    unstable_hot: PropTypes.bool,
    wrap: PropTypes.func,
  }

  static defaultProps = {
    babelConfig: {},
    renderHtml: true,
    resolverContext: {},
    unstable_hot: false,
    wrap: (children: React.ReactElement) => children,
  }

  state = {
    error: null,
    source: '',
  }

  fallbackElement = React.createRef<React.ReactElement>() as React.MutableRefObject<React.ReactElement>

  static getDerivedStateFromProps(props: SourceRenderProps, state: SourceRenderState): SourceRenderState {
    return {
      source: props.source,
      error: props.source === state.source ? state.error : null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<SourceRenderState> {
    return { error }
  }

  render() {
    const { wrap, ...rest } = this.props as Required<SourceRenderProps>
    const { error } = this.state

    return wrap(<ComponentRender {...rest} fallbackElement={this.fallbackElement} runtimeError={error}/>)
  }
}

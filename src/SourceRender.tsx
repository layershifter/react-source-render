import * as PropTypes from "prop-types"
import * as React from "react"

import { ComponentRender } from "./ComponentRender"
import { RenderConfig, SourceCode } from "./types"

type SourceRenderProps = RenderConfig & {
  onRender?: (error: Error | null) => void
}

type SourceRenderState = {
  error: Error | null
  source: SourceCode
}

export class SourceRender extends React.PureComponent<SourceRenderProps, SourceRenderState> {
  static propTypes = {
    babelConfig: PropTypes.object,
    onRender: PropTypes.func,
    resolver: PropTypes.func.isRequired,
    resolverContext: PropTypes.object,
    source: PropTypes.string.isRequired,
    hot: PropTypes.bool,
  }

  static defaultProps = {
    babelConfig: {},
    hot: false,
    renderHtml: true,
    resolverContext: {},
  }

  fallbackElement = React.createRef<React.ReactElement>() as React.MutableRefObject<React.ReactElement>

  state = {
    error: null,
    source: '',
  }

  static getDerivedStateFromProps(props: SourceRenderProps, state: SourceRenderState): SourceRenderState {
    return {
      source: props.source,
      error: props.source === state.source ? state.error : null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<SourceRenderState> {
    return { error }
  }

  handleResolve = (importName: string) => {
    const { resolver, resolverContext } = this.props as Required<SourceRenderProps>

    return resolver(importName, resolverContext)
  }

  render() {
    const { resolver, resolverContext, ...rest } = this.props as Required<SourceRenderProps>
    const { error } = this.state

    return <ComponentRender {...rest} fallbackElement={this.fallbackElement} resolver={this.handleResolve} runtimeError={error} />
  }
}

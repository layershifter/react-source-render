import * as React from "react"

import { RenderConfig } from "./types"
import useRenderElement from "./useRenderElement"

type ComponentRenderProps = Required<Pick<RenderConfig, "babelConfig" | "hot" | "resolver" | "source">> & {
  fallbackElement: React.MutableRefObject<React.ReactElement>
  onRender?: (error: Error | null) => void
  runtimeError: Error | null
}

export const ComponentRender: React.FunctionComponent<ComponentRenderProps> = (props) => {
  const { fallbackElement, runtimeError, onRender } = props
  const { element, error: compilerError } = useRenderElement(props)

  const error = runtimeError || compilerError

  React.useEffect(() => {
    if (!error) {
      fallbackElement.current = React.cloneElement(element as React.ReactElement)
    }

    if (onRender) {
      onRender(error)
    }
  })

  return error ? fallbackElement.current : element
}

import * as React from "react"

import { RenderChildrenProp, RenderConfig } from "./types"
import useRenderElement from "./useRenderElement"

type ComponentRenderProps = Required<RenderConfig> & {
  children: RenderChildrenProp
  fallbackElement: React.MutableRefObject<React.ReactElement>
  runtimeError: Error | null
}

export const ComponentRender: React.FunctionComponent<ComponentRenderProps> = (props) => {
  const { fallbackElement, runtimeError } = props
  const { element, markup, error: compilerError } = useRenderElement(props)

  const error = runtimeError || compilerError

  React.useEffect(() => {
    if (!error) {
      fallbackElement.current = React.cloneElement(element as React.ReactElement)
    }
  })

  return props.children({
    element: error ? fallbackElement.current : element,
    error,
    markup,
  })
}

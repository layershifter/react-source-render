import * as React from "react"

import { useCreateComponentFromSource } from "./useCreateComponentFromSource"
import { RenderConfig } from "./types"

const useRenderElement = (options: Required<RenderConfig>) : { element: React.ReactElement | null, error: Error | null } => {
  const { babelConfig, hot, source, resolver, ...rest } = options
  const latestElement = React.useRef<React.ReactElement | null>(null)

  try {
    const component = useCreateComponentFromSource(
      babelConfig,
      hot,
      source,
      resolver,
    )

    latestElement.current = React.createElement(component, rest)

    return { element: latestElement.current, error: null }
  } catch (error) {
    return { element: latestElement.current, error }
  }
}

export default useRenderElement


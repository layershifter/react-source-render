import * as React from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { useCreateComponentFromSource } from "./useCreateComponentFromSource"
import { RenderConfig, Resolver, ResolverContext } from "./types"

const useResolveHandler = (resolver: Resolver, context: ResolverContext) => {
  const latestResolver = React.useRef<Resolver>(resolver)
  const latestContext = React.useRef<ResolverContext>(context)

  latestResolver.current = resolver
  latestContext.current = context

  return React.useCallback((importName) => {
    return latestResolver.current(importName, latestContext.current)
  }, [])
}

const useRenderElement = (options: Required<RenderConfig>) => {
  const { babelConfig, source, renderHtml, resolver, resolverContext, ...rest } = options

  const handleResolve = useResolveHandler(resolver, resolverContext)
  const latestElement = React.useRef<React.ReactElement | null>(null)
  const latestMarkup = React.useRef<string>("")

  try {
    const component = useCreateComponentFromSource(
      babelConfig,
      source,
      handleResolve,
    )

    latestElement.current = React.createElement(component, rest)
    latestMarkup.current = renderHtml ? renderToStaticMarkup(latestElement.current) : ''

    return { element: latestElement.current, markup: latestMarkup.current, error: null }
  } catch (error) {
    return { element: latestElement.current, markup: latestMarkup.current, error }
  }
}

export default useRenderElement


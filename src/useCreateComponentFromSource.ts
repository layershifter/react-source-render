import * as React from "react"
import * as ReactIs from "react-is"

import { resolverId } from "./babel/import-resolver-plugin"
import { useBabelTransform } from "./babel/useBabel"
import { BabelConfig, Resolver, SourceCode } from "./types"
import { useHMRId } from "./useHMRId"

/**
 * Evaluates passed source code, uses passed resolver to resolve imports.
 */
export const useEvalSourceCode = (source: SourceCode, resolver: Resolver): React.FunctionComponent => {
  const hmrId = useHMRId()

  return React.useMemo(
    () => new Function(resolverId, source)(resolver),
    [hmrId, source, resolver],
  )
}

/**
 * Creates a valid React Component from source.
 */
export const useCreateComponentFromSource = (babelConfig: BabelConfig, source: SourceCode, resolver: Resolver): React.ElementType => {
  const { error, transformed } = useBabelTransform(babelConfig, source)
  const component = useEvalSourceCode(transformed, resolver)

  // We have to rethrow error because in other case we will break hooks stack
  if (error) {
    throw error
  }

  if (ReactIs.isValidElementType(component)) {
    return component
  }

  throw new Error("Render: your source should have a default export with a React component")
}

import * as React from 'react'

export type BabelConfig = Record<string, any>
export type SourceCode = string

export type Resolver = (importPath: string, context?: ResolverContext) => void
export type ResolverContext = Object

export type RenderChildrenProp = (result: { element: React.ReactElement | null, error: Error | null, markup : string }) => React.ReactElement

export type RenderConfig = {
  /** A config for Babel. */
  babelConfig?: BabelConfig

  /**
   * An option that controls rendering of HTML with ReactDOM server, it allows to omit
   * rendering when you're using portals.
   */
  renderHtml?: boolean

  /** A function for the imports resolution. */
  resolver?: Resolver

  /** An object that will be passed additionally to resolver function. */
  resolverContext?: ResolverContext

  /** A string that contains the source code. */
  source: SourceCode

  /** Enables support for hot-reloading in Webpack. */
  unstable_hot?: boolean

  /**
   * A function that allows to customize you rendering of an result element, i.e wrap with a
   * Provider.
   */
  wrap?: (children: React.ReactElement) => React.ReactElement
}

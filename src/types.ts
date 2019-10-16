export type BabelConfig = Record<string, any>
export type SourceCode = string

export type Resolver = (importPath: string, context?: ResolverContext) => void
export type ResolverContext = Object

export type RenderConfig = {
  /** A config for Babel. */
  babelConfig?: BabelConfig

  /** Enables support for hot-reloading in Webpack. */
  hot?: boolean

  /** A function for the imports resolution. */
  resolver?: Resolver

  /** An object that will be passed additionally to resolver function. */
  resolverContext?: ResolverContext

  /** A string that contains the source code. */
  source: SourceCode
}

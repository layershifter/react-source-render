import * as T from "@babel/types"
import { NodePath } from "@babel/traverse"

export type BabelPluginArguments = {
  types: typeof T
}

type BabelPluginVisitorFunction<N> = (path: NodePath<N>) => void
type BabelPluginVisitor<N> =
  | BabelPluginVisitorFunction<N>
  | {
  exit: BabelPluginVisitorFunction<N>
}

export type BabelPlugin = (
  options: BabelPluginArguments,
) => {
  visitor: Partial<{
    // This type is extendable, feel to add own visitor types.
    ExportDefaultDeclaration: BabelPluginVisitor<T.ExportDefaultDeclaration>,
    ImportDeclaration: BabelPluginVisitor<T.ImportDeclaration>,
    Program: BabelPluginVisitor<T.Program>
  }>
}

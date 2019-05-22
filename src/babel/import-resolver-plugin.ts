import * as T from "@babel/types"
import { BabelPlugin } from "./types"

export const resolverId = "__resolverFn__"

const createVariableDeclaration = (t: typeof T, specifier: T.ImportDefaultSpecifier | T.ImportNamespaceSpecifier, source: T.StringLiteral) =>
  t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(specifier.local.name),
      t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]),
    ),
  ])

const createDeclaration = (t: typeof T, specifier: T.ImportSpecifier, source: T.StringLiteral) =>
  t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(specifier.local.name),
      t.memberExpression(
        t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]),
        t.identifier(specifier.imported.name),
      ),
    ),
  ])

export const importResolverPlugin: BabelPlugin = ({ types: t }) => ({
  visitor: {
    ImportDeclaration: path => {
      const declarations: T.VariableDeclaration[] = path.node.specifiers.reduce(
        (acc: T.VariableDeclaration[], specifier: T.ImportDefaultSpecifier | T.ImportNamespaceSpecifier | T.ImportSpecifier) => {
          if (t.isImportDefaultSpecifier(specifier) || t.isImportNamespaceSpecifier(specifier)) {
            acc.push(createVariableDeclaration(t, specifier, path.node.source))
          }

          if (t.isImportSpecifier(specifier)) {
            acc.push(createDeclaration(t, specifier, path.node.source))
          }
          return acc
        },
        [],
      )

      path.replaceWithMultiple(declarations)
    },
  },
})

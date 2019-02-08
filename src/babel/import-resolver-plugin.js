export const resolverId = "__resolverFn__"

const createVariableDeclaration = (t, specifier, source) =>
  t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(specifier.local.name),
      t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]),
    ),
  ])

const createDeclaration = (t, specifier, source) =>
  t.variableDeclaration("const", [
    t.variableDeclarator(
      t.identifier(specifier.local.name),
      t.memberExpression(
        t.callExpression(t.identifier(resolverId), [t.stringLiteral(source.value)]),
        t.identifier(specifier.imported.name),
      ),
    ),
  ])

const importResolverPlugin = ({ types: t }) => ({
  visitor: {
    ImportDeclaration: path => {
      const replacements = path.node.specifiers.map(specifier => {
        if (t.isImportDefaultSpecifier(specifier) || t.isImportNamespaceSpecifier(specifier)) {
          return createVariableDeclaration(t, specifier, path.node.source)
        }

        if (t.isImportSpecifier(specifier)) {
          return createDeclaration(t, specifier, path.node.source)
        }

        return null
      })

      path.replaceWithMultiple(replacements)
    },
  },
})

export default importResolverPlugin

const createIIFEProgram = (t, body) =>
  t.program([
    t.expressionStatement(
      t.callExpression(t.functionExpression(null, [], t.blockStatement(body)), []),
    ),
  ])

const exportToIIFEPlugin = ({ types: t }) => ({
  visitor: {
    ExportDefaultDeclaration: path => {
      const program = path.find(parentPath => parentPath.isProgram())
      const { declaration } = path.node

      if (t.isClassDeclaration(declaration)) {
        path.replaceWith(declaration)
        program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.id.name)))

        return
      }

      program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.name)))
      path.remove()
    },
    Program: {
      exit: path => {
        path.replaceWith(createIIFEProgram(t, path.node.body))
        path.stop()
      },
    },
  },
})

export default exportToIIFEPlugin

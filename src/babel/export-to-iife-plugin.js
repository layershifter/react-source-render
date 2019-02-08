export const exportId = "__exportId__"

const exportToIIFEPlugin = ({ types: t }) => ({
  visitor: {
    ExportDefaultDeclaration: path => {
      const program = path.find(parentPath => parentPath.isProgram())
      const { declaration } = path.node

      if (t.isClassDeclaration(declaration)) {
        path.replaceWith(declaration)
        // program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.id.name)))
        program.pushContainer("body", t.assignmentExpression('=', t.identifier(exportId), t.identifier(declaration.id.name)))

        return
      }

      // program.pushContainer("body", t.ReturnStatement(t.identifier(declaration.name)))
      program.pushContainer("body", t.assignmentExpression('=', t.identifier(`${exportId  }.default`), t.identifier(declaration.name)))
      path.remove()
    },
    Program: {
      exit: path => {
        path.stop()
      },
    },
  },
})

export default exportToIIFEPlugin

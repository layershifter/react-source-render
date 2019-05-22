import * as T from "@babel/types"
import { BabelPlugin } from "./types"

type BabelProgram = T.Program & { pushContainer: (literal: string, directives: any[]) => void }

export const exportToIifePlugin: BabelPlugin = ({ types: t }) => ({
  visitor: {
    ExportDefaultDeclaration: path => {
      const program: BabelProgram = path.find(parentPath => parentPath.isProgram()) as any
      const { declaration } = path.node

      if (t.isClassDeclaration(declaration)) {
        path.replaceWith(declaration)

        if (declaration.id === null) {
          throw new Error("`export default class {}` is not supported")
        }

        program.pushContainer("body", [t.returnStatement(t.identifier(declaration.id.name))])

        return
      }

      if (t.isIdentifier(declaration)) {
        program.pushContainer("body", [t.returnStatement(t.identifier(declaration.name))])
        path.remove()
      }
    },
    Program: {
      exit: path => {
        path.stop()
      },
    },
  },
})

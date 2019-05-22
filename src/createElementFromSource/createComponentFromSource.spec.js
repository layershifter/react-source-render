import { resolverId } from "../babel/import-resolver-plugin"
import { useEvalSourceCode } from "../useCreateComponentFromSource"

describe("useEvalSourceCode", () => {
  it("evals passed source code", () => {
    expect(useEvalSourceCode("return 2", null)).toBe(2)
  })

  it("passes context to resolved", () => {
    const resolver = jest.fn()

    useEvalSourceCode(`return ${resolverId}("IMPORT_PATH")`, resolver)

    expect(resolver).toBeCalledTimes(1)
    expect(resolver).toBeCalledWith("IMPORT_PATH")
  })
})

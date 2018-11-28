import { resolverId } from "../babel/import-resolver-plugin"
import { evalSource } from "./createComponentFromSource"

describe("evalSource", () => {
  it("evals passed source code", () => {
    expect(evalSource("return 2", null)).toBe(2)
  })

  it("passes context to resolved", () => {
    const resolver = jest.fn()

    evalSource(`return ${resolverId}("IMPORT_PATH")`, resolver, "CONTEXT")

    expect(resolver).toBeCalledTimes(1)
    expect(resolver).toBeCalledWith("IMPORT_PATH", "CONTEXT")
  })
})

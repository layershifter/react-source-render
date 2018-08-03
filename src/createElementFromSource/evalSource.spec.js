import { resolverId } from "../babel/import-resolver-plugin"
import evalSource from "./evalSource"

describe("evalSource", () => {
  it("evals passed source code", () => {
    expect(evalSource("2", null, null)).toBe(2)
  })

  it("passes context to resolved", () => {
    const resolver = jest.fn()

    evalSource(`${resolverId}("IMPORT_PATH")`, resolver, "CONTEXT")

    expect(resolver).toBeCalledTimes(1)
    expect(resolver).toBeCalledWith("IMPORT_PATH", "CONTEXT")
  })
})

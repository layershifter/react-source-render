import * as Babel from "@babel/standalone"
import transformSource from "./transformSource"

describe("transformSource", () => {
  it("calls Babel to transform code", () => {
    const source = "FOO"
    const transformed = "BAR"

    const transform = jest
      .spyOn(Babel, "transform")
      .mockImplementation(() => ({ code: transformed }))

    expect(transformSource({}, source)).toBe(transformed)
    expect(transform).toBeCalledWith(source, expect.any(Object))
  })

  it("merges config", () => {
    const source = "FOO"
    const transform = jest.spyOn(Babel, "transform")

    transformSource(
      {
        plugins: ["@babel/plugin-proposal-class-properties"],
        presets: ["env"],
      },
      source,
    )

    expect(transform).toBeCalledWith(
      source,
      expect.objectContaining({
        plugins: expect.arrayContaining([
          "import-resolver",
          "export-to-iife",
          "@babel/plugin-proposal-class-properties",
        ]),
        presets: expect.arrayContaining(["env", "react"]),
      }),
    )
  })

  it("is memoized", () => {
    const config = {}
    const transform = jest.spyOn(Babel, "transform")

    Array.from(Array(10)).forEach(() => {
      transformSource(config, "FOO")
    })

    expect(transform).toBeCalledTimes(2)
  })
})

import * as Babel from "@babel/standalone"
import exportToIifePlugin from "./export-to-iife-plugin"

const cases = [
  {
    name: "class",
    source: "export default class Foo {}",
    expected: `(function () {
  class Foo {}

  return Foo;
})();`,
  },
  {
    name: "const",
    source: "const Foo = 1; export default Foo",
    expected: `(function () {
  const Foo = 1;
  return Foo;
})();`,
  },
]

Babel.registerPlugin("export-to-iife", exportToIifePlugin)

describe("exportToIIFEPlugin", () => {
  test.each(cases)('transforms "$name" imports', ({ expected, source }) => {
    const { code } = Babel.transform(source, {
      plugins: ["export-to-iife"],
    })

    expect(code).toEqual(expected)
  })
})

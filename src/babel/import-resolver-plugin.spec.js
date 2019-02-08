import * as Babel from "@babel/standalone"
import importResolverPlugin, { resolverId } from "./import-resolver-plugin"

const cases = [
  {
    name: "basic",
    source: 'import React from "react";',
    expected: `const React = ${resolverId}("react");`,
  },
  {
    name: "destructure",
    source: "import { has, get } from 'lodash'",
    expected: `const has = ${resolverId}("lodash").has;

const get = ${resolverId}("lodash").get;`,
  },
  {
    name: "namespace",
    source: "import * as _ from 'lodash'",
    expected: `const _ = ${resolverId}("lodash");`,
  },
  {
    name: "combined",
    source: "import React, { Component, createRef } from 'react'",
    expected: `const React = ${resolverId}("react");

const Component = ${resolverId}("react").Component;

const createRef = ${resolverId}("react").createRef;`,
  },
  {
    name: "as",
    source: "import { Component as C } from 'react'",
    expected: `const C = ${resolverId}("react").Component;`,
  },
]

Babel.registerPlugin("import-resolver", importResolverPlugin)

describe("importResolverPlugin", () => {
  test.each(cases)('transforms "$name" imports', ({ expected, source }) => {
    const { code } = Babel.transform(source, {
      plugins: ["import-resolver"],
    })

    expect(code).toEqual(expected)
  })
})

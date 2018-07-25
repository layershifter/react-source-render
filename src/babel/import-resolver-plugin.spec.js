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
    expected: `const {
  has
} = ${resolverId}("lodash");

const {
  get
} = ${resolverId}("lodash");`,
  },
  {
    name: "namespace",
    source: "import * as _ from 'lodash'",
    expected: `const _ = ${resolverId}("lodash");`,
  },
  {
    name: "combined",
    source: "import React, { Component } from 'react'",
    expected: `const React = ${resolverId}("react");

const {
  Component
} = ${resolverId}("react");`,
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

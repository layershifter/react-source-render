const fs = require("fs")
const rimraf = require("rimraf")
const { rollup } = require("rollup")
const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const nodeResolve = require("rollup-plugin-node-resolve")
const { terser } = require("rollup-plugin-terser")

const build = async (format, mode) => {
  const inputConfig = {
    external: [
      "@babel/standalone",
      "prop-types",
      "react",
      "react-dom",
      "react-dom/server",
      format === "cjs" && "deepmerge",
      format === "cjs" && "fast-memoize",
      format === "cjs" && "react-is",
    ].filter(Boolean),
    input: "src/index.js",
    plugins: [
      babel({
        babelrc: false,
        exclude: "node_modules/**",
        presets: [["@babel/env", { modules: false }], "@babel/react"],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          mode === "production" && "transform-react-remove-prop-types",
        ].filter(Boolean),
      }),
      commonjs({
        include: "node_modules/**",
        namedExports: {
          "node_modules/react-is/index.js": ["isValidElementType"],
        },
      }),
      nodeResolve({
        jsnext: true,
        main: true,
      }),
      mode === "production" && terser(),
    ].filter(Boolean),
  }
  const outputConfig = {
    file: `lib/${format}/react-source-render.${mode}.js`,
    format,
    globals: format === "umd" && {
      "@babel/standalone": "Babel",
      "prop-types": "PropTypes",
      react: "React",
      "react-dom": "ReactDOM",
      "react-dom/server": "ReactDOMServer",
    },
    name: "ReactSandboxRender",
  }

  const bundle = await rollup(inputConfig)

  await bundle.generate(outputConfig)
  await bundle.write(outputConfig)
}

rimraf.sync("./lib")

Promise.all([
  build("cjs", "development"),
  build("cjs", "production"),
  build("umd", "development"),
  build("umd", "production"),
]).then(() => {
  fs.writeFileSync(
    "./lib/index.js",
    `
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-source-render.production.js');
} else {
  module.exports = require('./cjs/react-source-render.development.js');
}
`,
  )
})

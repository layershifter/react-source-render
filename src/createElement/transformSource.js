import * as Babel from "@babel/standalone"
import merge from "deepmerge"

import { exportToIifePlugin, importResolverPlugin } from "../babel"

Babel.registerPlugin("export-to-iife", exportToIifePlugin)
Babel.registerPlugin("import-resolver", importResolverPlugin)

const transformSource = (babelConfig, source) => {
  const config = merge(
    {
      plugins: ["import-resolver", "export-to-iife"],
      presets: ["react"],
    },
    babelConfig,
  )
  const { code } = Babel.transform(source, config)

  return code
}

export default transformSource

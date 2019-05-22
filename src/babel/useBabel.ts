// @ts-ignore There are no types for "@babel/standalone" :(
import * as Babel from "@babel/standalone"
import merge from "deepmerge"
import * as React from "react"
import isEqual from "react-fast-compare"

import { exportToIifePlugin } from "./export-to-iife-plugin"
import { importResolverPlugin } from "./import-resolver-plugin"
import { BabelConfig, SourceCode } from "../types"

const registerBabelPlugin = (pluginName: string, pluginFunction: Function) => {
  if (!Babel.availablePlugins[pluginName]) {
    Babel.registerPlugin(pluginName, pluginFunction)
  }
}

registerBabelPlugin("export-to-iife", exportToIifePlugin)
registerBabelPlugin("import-resolver", importResolverPlugin)

export const useBabelConfig = (config: BabelConfig): BabelConfig => {
  const latestConfig = React.useRef<BabelConfig>()
  const mergedConfig = React.useRef<BabelConfig>({})

  if (!isEqual(latestConfig.current, config)) {
    latestConfig.current = config
    mergedConfig.current = merge(
      {
        plugins: ["import-resolver", "export-to-iife"],
        presets: ["react"],
      },
      config,
    )
  }

  return mergedConfig.current
}

export const useBabelTransform = (config: BabelConfig, source: SourceCode): { error: Error | null, transformed: SourceCode } => {
  try {
    const mergedConfig = useBabelConfig(config)
    const transformed = React.useMemo(
      () => Babel.transform(source, mergedConfig).code,
      [source, mergedConfig],
    )

    return {
      error: null,
      transformed,
    }
  } catch (error) {
    return {
      error,
      transformed: "",
    }
  }
}

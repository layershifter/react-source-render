import path from "path"
import Document from "./docs/Document"

export default {
  basePath: "react-source-render",
  Document,
  getSiteData: async ({ dev }) => ({
    dev,
    title: "React Source Render",
    versions: {
      babel: {
        standalone: require("@babel/standalone/package.json").version,
      },
      propTypes: require("prop-types/package.json").version,
      react: require("react/package.json").version,
    },
    version: require("./package.json").version,
  }),
  getRoutes: async () => [
    {
      path: "/",
      component: "docs/index",
    },
    {
      path: "/404",
      component: "docs/index",
    },
  ],
  paths: {
    src: "docs",
  },
  siteRoot: "https://layershifter.github.io",
  webpack: (previousConfig, { stage }) => ({
    ...previousConfig,
    devtool: stage === "development" ? previousConfig.devtool : false,
    externals:
      stage === "node"
        ? previousConfig.externals
        : {
            "@babel/standalone": "Babel",
            "prop-types": "PropTypes",
            react: "React",
            "react-dom": "ReactDOM",
            "react-dom/server": "ReactDOMServer",
          },
    output: Array.isArray(previousConfig.output)
      ? previousConfig.output.map(entry => ({
          ...entry,
          publicPath: stage === "development" ? "/" : "/react-source-render/",
        }))
      : {
          ...previousConfig.output,
          publicPath: stage === "development" ? "/" : "/react-source-render/",
        },
    resolve: {
      ...previousConfig.resolve,
      alias: {
        "react-source-render": path.resolve(__dirname, "src"),
      },
    },
  }),
}

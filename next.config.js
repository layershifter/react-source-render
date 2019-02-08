const path = require("path")

module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/react-source-render" : "",
  webpack: config => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias["react-source-render"] = path.resolve(__dirname, "src")

    return config
  },
}

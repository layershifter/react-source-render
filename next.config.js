const path = require("path")

module.exports = {
  webpack: config => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias["react-source-render"] = path.resolve(__dirname, "src")

    return config
  },
}

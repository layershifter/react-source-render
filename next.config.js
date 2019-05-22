const withTypescript = require('@zeit/next-typescript')
const path = require("path")

module.exports = withTypescript({
  webpack: config => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias["react-source-render"] = path.resolve(__dirname, "src")

    return config
  },
})

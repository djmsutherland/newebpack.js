const env = { test: true }
const webpack = require("./webpack.config")(env)
const glob = "source/javascripts/**/*_spec.js"

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: [glob],
    preprocessors: {
      [glob]: ["webpack"]
    },
    webpack,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Chrome"],
    singleRun: true,
    concurrency: Infinity
  })
}

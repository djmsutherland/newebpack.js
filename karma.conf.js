const env = { test: true }
const webpack = require("./webpack.config")(env)
const specs = "source/javascripts/**/*_spec.js"
const source = "source/javascripts/**/*!(spec).js"

process.env.BABEL_ENV = "test"

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: [specs, source],
    preprocessors: {
      [specs]: ["webpack"],
      [source]: ["webpack"]
    },
    webpack,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ["progress", "coverage"],
    coverageReporter: {
      reporters: [
        {type: "lcov", dir: "coverage/", subdir: "."},
        {type: "json", dir: "coverage/", subdir: "."},
        {type: "text-summary"}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["Chrome"],
    singleRun: true,
    concurrency: Infinity
  })
}

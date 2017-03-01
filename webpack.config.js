const { resolve } = require("path")

module.exports = env => {
  return {
    entry: "./javascripts/index.js",
    output: {
      filename: "index.js",
      path: resolve(__dirname, "distribute"),
      pathinfo: !env.prod
    },
    context: resolve(__dirname, "source"),
    devtool: env.prod ? "source-map" : "eval",
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.js$/, loader: "babel-loader!eslint-loader", exclude: /node_modules/ },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    }
  }
}

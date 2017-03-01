const webpack = require("webpack")
const { resolve } = require("path")
const autoprefixer = require("autoprefixer")
const cssimport = require("postcss-import")
const cssnext = require("postcss-cssnext")

module.exports = env => {
  return {
    entry: "./javascripts/index.js",
    output: {
      filename: "sensis-ui-components.js",
      path: resolve(__dirname, "distribute"),
      pathinfo: !env.prod
    },
    context: resolve(__dirname, "source"),
    devtool: env.prod ? "source-map" : "eval",
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
        { test: /\.js$/, loader: "babel-loader!eslint-loader", exclude: /node_modules/ },
        { test: /\.woff$/, loader: "url-loader" },
        { test: /\.(ttf|eot|svg)$/, loader: "file-loader" }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            cssimport({ addDependencyTo: webpack }),
            cssnext()
          ]
        }
      })
    ]
  }
}

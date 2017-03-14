const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")
const { resolve } = require("path")
const cssimport = require("postcss-import")
const cssnext = require("postcss-cssnext")

module.exports = env => {
  return {
    entry: "./assets/javascripts/index.js",
    output: {
      filename: "sens.js",
      path: resolve(__dirname, "distribute"),
      pathinfo: !env.prod
    },
    context: resolve(__dirname, "source"),
    devtool: env.prod ? "source-map" : "eval",
    resolve: {
      alias: {
        // 'LIB_NAME$': 'DESTINATION',
        "vue$": "vue/dist/vue.common.js"
      }
    },
    bail: env.prod,
    module: {
      rules: [
        { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "postcss-loader"]})},
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.js$/, loader: "babel-loader!eslint-loader", exclude: /node_modules/ },
        { test: /\.woff$/, loader: "url-loader" },
        { test: /\.(ttf|eot|svg)$/, loader: "file-loader" }
      ]
    },
    plugins: [
      new ExtractTextPlugin("sen.css"),
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

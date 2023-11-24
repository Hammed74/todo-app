const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
        },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ],
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins:[
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "head",
        scriptLoading: "defer"
    })
]
};
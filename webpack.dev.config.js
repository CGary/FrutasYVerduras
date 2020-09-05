const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    //app: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
    app: path.resolve(__dirname, "src/index.js"),
  },
  mode: "development",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].js",
    publicPath: "/",
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      automaticNameDelimiter: ".",
      cacheGroups: {
        default: false,
        vendors: false,
        common: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
        },
        reac1: {
          name: "react",
          chunks: "all",
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|styled-components)[\\/]/,
          reuseExistingChunk: true,
        },
        icons: {
          name: "react-icons",
          chunks: "all",
          test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
          reuseExistingChunk: true,
        },
        others: {
          name: "others-dep",
          chunks: "all",
          test: /[\\/]node_modules[\\/](babel|axios|normalize)[\\/]/,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
    //open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
};

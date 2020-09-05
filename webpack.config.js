const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    //app: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
    app: path.resolve(__dirname, "src/index.js"),
  },
  mode: "production",
  //mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[chunkhash].js",
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
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },
};

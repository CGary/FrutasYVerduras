const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, { mode }) => {
  let entry = {
    app: path.resolve(__dirname, "src/index.tsx"),
  };

  let output = {
    path: path.resolve(__dirname, "dist"),
  };

  let plugins = [
    new HtmlPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new Dotenv(),
  ];

  const babelLoaderRule = {
    test: /\.(js|jsx|ts|tsx)$/,
    use: "babel-loader",
    exclude: /node_modules/,
  };

  const fileLoaderTest = /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/;

  const resolve = {
    extensions: [".jsx", ".ts", ".tsx", "..."],
  };

  if (mode === "development") {
    return {
      mode,
      entry,
      output: {
        ...output,
        filename: "js/[name].js",
        chunkFilename: "js/[id].js",
      },
      plugins,
      module: {
        rules: [
          babelLoaderRule,
          {
            test: fileLoaderTest,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/",
              },
            },
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      resolve,
      devServer: {
        hot: true,
        historyApiFallback: true,
        port: 4000,
        host: "0.0.0.0",
      },
    };
  }
  if (mode === "production") {
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    return {
      mode,
      entry,
      output: {
        ...output,
        filename: "js/[name].[contenthash].js",
        chunkFilename: "js/[id].[chunkhash].js",
      },
      plugins: [
        ...plugins,
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash].css",
          chunkFilename: "css/[id].[contenthash].css",
        }),
      ],
      module: {
        rules: [
          babelLoaderRule,
          {
            test: fileLoaderTest,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash].[ext]",
                outputPath: "assets/",
              },
            },
          },
          {
            test: /\.css$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "",
                },
              },
              "css-loader",
            ],
          },
        ],
      },
      resolve,
    };
  }
};

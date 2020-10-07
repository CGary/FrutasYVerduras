const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, { mode }) => {
  mode = mode || "development";

  let entry = {
    app: path.resolve(__dirname, "src/index.js"),
  };

  let output = {
    filename: "js/[name].js",
    chunkFilename: "js/[id].js",
  };

  let plugins = [
    new HtmlPlugin({ template: path.resolve(__dirname, "src/index.html") }),
    new Dotenv(),
  ];

  let rules = [
    {
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/",
        },
      },
    },
    {
      test: /\.css$/,
      use: ["css-loader"],
    },
  ];

  let optimization = {};

  if (mode === "production") {
    //entry
    entry = {
      ...entry,
    };

    //output
    output = {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[id].[chunkhash].js",
    };

    //plugins
    const CompressionPlugin = require("compression-webpack-plugin");
    const { CleanWebpackPlugin } = require("clean-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
    plugins = [
      ...plugins,
      new CompressionPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css",
      }),
      new OptimizeCSSAssetsPlugin(),
    ];

    //optimization
    const TesterPlugin = require("terser-webpack-plugin");
    optimization = {
      ...optimization,
      minimizer: [new TesterPlugin()],
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
          react: {
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
            name: "others",
            chunks: "all",
            test: /[\\/]node_modules[\\/](babel|axios|normalize)[\\/]/,
            reuseExistingChunk: true,
          },
        },
      },
    };

    //rules
    //file-loader
    rules[1].use.options.name = "[name].[hash].[ext]";
    //css-loader
    rules[2].use = [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      "css-loader",
    ];
  }

  return {
    mode,
    entry,
    output,
    plugins,
    module: { rules },
    optimization,
    ...(mode === "development" && {
      devServer: {
        hot: true,
        historyApiFallback: true,
      },
    }),
  };
};

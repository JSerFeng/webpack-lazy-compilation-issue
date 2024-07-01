const Html = require("html-webpack-plugin");
const webpack = require("webpack");

/** @type {import('webpack').Configuration} */
const config = {
  target: "web",
  ignoreWarnings: [/performance/],
  mode: process.env.NODE_ENV,
  plugins: [
    // {
    //   apply(compiler) {
    //     new webpack.EntryPlugin(compiler.context, "./src/initial.js", {
    //       name: undefined,
    //     }).apply(compiler);
    //   },
    // },
    new Html({
      template: "index.html",
    }),
  ].filter(Boolean),
  entry: {
    main: "./src/index.js",
  },
  devtool: false,
  optimization: {
    chunkIds: "named",
    moduleIds: "named",
    minimize: false,
    concatenateModules: false,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        lib: {
          test: /core-js/,
          name: "lib",
        },
        default: false,
        defaultVendors: false,
      },
    },
    mangleExports: false,
  },
  output: {
    filename: "[name].js",
    chunkFilename: "async/[name].js",
  },
  experiments: {
    // css: true,
    // lazyCompilation: {
    //   test: (m) => {
    //     return !m.nameForCondition().includes("initial");
    //   },
    // },
  },
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
};

module.exports = config;

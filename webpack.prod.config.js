const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const packageJson = require("./package.json");

/* DOTENV */
const dotenv = require("dotenv").config({
  path: "./prod.env",
}).parsed;

// Enviroment variables
const envKeys = Object.keys(dotenv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(dotenv[next]);
  return prev;
}, {});
envKeys[`process.env.FE_VERSION`] = JSON.stringify(packageJson.version);

let plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html"),
  }),
  new webpack.DefinePlugin(envKeys),
];

module.exports = (env) => {
  const { devServer = false } = env;
  return {
    mode: "development",
    entry: devServer
      ? ["webpack-dev-server/client", "./src/index.js"]
      : "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/UNFTC.bundle.js",
      /* EXPOSE BUNDLE TO OUTSIDE CODE */
      library: "UNFTC",
      libraryTarget: "var",
    },
    devtool: "source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      open: {
        app: ["chrome", "--incognito", "--other-flag"],
      },
      watchOptions: {
        poll: true,
      },
      watchContentBase: true,
      port: "3008",
      injectClient: false,
    },
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    optimization: {
      /*    makes bundle more readable
       moduleIds: "named",
      chunkIds: "named",
      nodeEnv: "none",
      minimize: false,
      mangleWasmImports: false,
      mangleExports: false,
      concatenateModules: false, */
    },
  };
};

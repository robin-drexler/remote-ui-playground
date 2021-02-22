const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebWorkerPlugin } = require("@remote-ui/web-workers/webpack");
const { WatchIgnorePlugin } = require("webpack");

module.exports = {
  entry: "./src/app.tsx",
  resolve: {
    mainFields: ["browser", "main"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require.resolve("@remote-ui/web-workers/babel")],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
            plugins: [require.resolve("@remote-ui/web-workers/babel")],
          },
        },
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    globalObject: "self",
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new WebWorkerPlugin(),
    new HtmlWebpackPlugin({ template: "index.html" }),
    new WatchIgnorePlugin([/\.worker\.js/]),
  ],
};

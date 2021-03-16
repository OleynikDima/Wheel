const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const PATH = {
  src: path.join(__dirname, "src"),
  disc: path.join(__dirname, "dist"),
};

module.exports = {
  mode: "development",
  // externals: PATH,
  entry: path.join(__dirname, "src", "main"),
  output: {
    path: PATH.disc,
    filename: "build.js",
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: "Vue Wheel",
      template: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".png", ".html", ".css"],
    alias: {
      vue$: "vue/dist/vue.common.js", // 'vue/dist/vue.common.js' for webpack 1
    },
  },
};

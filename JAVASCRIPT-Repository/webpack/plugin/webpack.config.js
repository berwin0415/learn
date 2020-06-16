const path = require("path");
const DemoPlugin = require("./DemoPlugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js",
  },
  plugins: [new DemoPlugin()],
};

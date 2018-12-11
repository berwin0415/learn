const path = require("path");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill","./js/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(process.cwd(), "./dist/")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  pragma: "DiyReact.createElement"
                }
              ],
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie:'6'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};

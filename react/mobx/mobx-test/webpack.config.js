const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-react"],
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "58",
                    ie: "8"
                  }
                }
              ],
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", {"legacy": true}],
              // ["@babel/plugin-proposal-decorators", {"decoratorsBeforeExport": true}],
              ["@babel/plugin-proposal-class-properties", {"loose" : true}],
            ]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};

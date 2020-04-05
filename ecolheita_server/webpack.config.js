const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "js_src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "static/js")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

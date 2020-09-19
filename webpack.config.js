const path = require("path");
// const entryPath = "07_Dzien_4/02_JSON_Server/01_Zadanie";

module.exports = {
  entry: "./js/app.js",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: {
    home: `${SRC_DIR}/home.jsx`,
    contact: `${SRC_DIR}/contact.jsx`
  },
  output: {
    filename: "[name].js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};

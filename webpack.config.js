const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"],},
        { test: /\.(html)$/, use: ['html-loader']}
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],
};

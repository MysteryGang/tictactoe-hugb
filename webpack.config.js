// webpack.config.js

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './src/client/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: "./src/client/index.html",
			title: 'Tic Tac Toe'
		}),
	],

	devServer: {
		port: 3000,
		open: true,
		proxy: {
			"/api": "http://localhost:8080"
		}
	},
}
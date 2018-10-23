const webpack = rqeuire('webpack');
const path = require('path');

module.exports = {
	entry: {
		main: '../src/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, '../src')],
				use: 'babel-loader'
			},
			{
				test: /\.ts$/,
				include: [path.resolve(__dirname, '../src')],
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: [
					'css-loader',
					'style-loader'
				]
			},
			{
				test: /\.[png|jpg|jpeg|gif|svg]$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}
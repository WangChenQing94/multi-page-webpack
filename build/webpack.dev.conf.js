const path = require('path');
const webpackMerge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const wepackConf = require('./webpack.base.conf');

module.exports = webpackMerge(webpackConf, {
	devServer: {
		host: 'localhost',
		port: '8080',
		hot: true,
		open: false,
		publicPath: '/',
		compress: true,
		contentBase: false
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'index'
		})
	]
})
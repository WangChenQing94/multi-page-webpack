const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConf = require('./webpack.base.conf');

module.exports = merge(webpackConf, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost',
		port: 8888,
		hot: true,
		open: false,
		// publicPath: '/',
		compress: true,
		contentBase: false,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('./conf/dev.env')
		})
	]
})
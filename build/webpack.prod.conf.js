const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConf = require('./webpack.base.conf');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(webpackConf, {
	mode: 'production',
	output: {
		publicPath: './'
	},
	plugins: [
		// 设置全局变量
		new webpack.DefinePlugin({
			'process.env': require('./conf/prod.env')
		}),
		// 清除dist文件
		new cleanWebpackPlugin(
			[path.resolve(__dirname, '../dist')],
			{
				root: path.resolve(__dirname, '../')
			}
		)
	],
	// 代码分离-防止重复 webpack4写法
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	}
})
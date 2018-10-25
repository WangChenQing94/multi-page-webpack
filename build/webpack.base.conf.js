const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		index: './src/index.js',
		about: './src/about.js'
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.ts', '.json'],
		alias: {
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, '../src')],
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: [
					'css-loader',
					'style-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'about.html',
			template: path.resolve(__dirname, '../src/about.html'),
			chunks: ['about']
		})
	]
}
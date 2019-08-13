const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
//
module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contentHash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/static/dist',
		publicPath: '/dist',
	},
	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contentHash].css',
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true,
			},
		}),
		new FaviconsWebpackPlugin('./src/assets/favicon-prod-512x512.png'),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract CSS into files
					'css-loader', // 2. Turns CSS into commonjs
					'sass-loader', // 1. Turns SCSS into CSS
				],
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: '/img',
					},
				},
			},
		],
	},
});

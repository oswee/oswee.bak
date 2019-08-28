const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
// const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			// template: path.resolve(__dirname, 'src', 'template.html'),
			filename: './index.html',
		}),
		// new WorkboxPlugin.GenerateSW({
		// 	// Exclude images from the precache
		// 	exclude: [/\.(?:png|jpg|jpeg|svg)$/],

		// 	// Define runtime caching rules.
		// 	runtimeCaching: [{
		// 	// Match any request ends with .png, .jpg, .jpeg or .svg.
		// 	urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
	
		// 	// Apply a cache-first strategy.
		// 	handler: 'CacheFirst',
	
		// 	options: {
		// 		// Use a custom cache name.
		// 		cacheName: 'images',
	
		// 		// Only cache 10 images.
		// 		expiration: {
		// 		maxEntries: 10,
		// 		},
		// 	},
		// 	}],
		// }),
		new WebpackPwaManifest({
			name: 'My Progressive Web App',
			short_name: 'MyPWA',
			description: 'My awesome Progressive Web App!',
			start_url: "/",
			display: 'standalone',
			theme_color: '#ff0000',
			background_color: '#ffffff',
			crossorigin: '', //can be null, use-credentials or anonymous
			icons: [
			  {
				src: path.resolve('src/assets/favicon-dev-512x512.png'),
				sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
			  }
			]
		})
	],
	devtool: 'source-map',
	devServer: {
		port: 3000, // Can ommit this, so port will be picked up randomly from available ports.
		historyApiFallback: true, // Serves index file for any path
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // 3. Inject styles into DOM
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

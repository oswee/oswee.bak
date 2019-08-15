const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
			// template: path.resolve(__dirname, 'src', 'template.html'),
			filename: './index.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Progressive Oswee Web Application'
		}),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast
			// and not allow any straggling "old" SWs to hang around
			clientsClaim: true,
			skipWaiting: true
		}),
		// new WebpackPwaManifest({
		// 	short_name: 'Oswee',
		// 	name: 'Oswee PWA',
		// 	description: 'My awesome Progressive Web App!',
		// 	start_url: "/",
		// 	// scope: '/',
		// 	display: 'standalone',
		// 	orientation: 'landscape',
		// 	theme_color: '#76FF03',
		// 	background_color: '#000A18',
		// 	crossorigin: '', //can be null, use-credentials or anonymous
		// 	icons: [
		// 	  {
		// 		src: path.resolve('dist/favicon-dev-512x512.png'),
		// 		sizes: [36, 48, 72, 96, 120, 128, 144, 152, 180, 192, 256, 384, 512] // multiple sizes
		// 	  }
		// 	]
		// }),

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
		// })
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

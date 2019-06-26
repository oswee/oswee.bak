module.exports = {
	entry: {
		main: './src/index.ts',
		/* vendor: './src/vendor.ts', */
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			// {
			// 	test: /\.ts$/,
			// 	exclude: /node_modules/,
			// 	loader: 'ts-loader',
			// },
			{ test: /\.ts?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	stats: { children: false },
};

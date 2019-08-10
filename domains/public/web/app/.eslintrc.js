module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		// '@open-wc/eslint-config',
		// 'eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		// 'import/no-extraneous-dependencies': [
		// 	'error',
		// 	{ devDependencies: true, optionalDependencies: false, peerDependencies: false },
		// ],
		'no-shadow': 'warn',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
	},
};

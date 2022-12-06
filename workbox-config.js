module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,css,jfif,jpg,js,txt,json,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
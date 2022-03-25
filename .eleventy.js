module.exports = function (eleventyConfig) {
	/* 
		WATCH TARGETS https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
	*/
	eleventyConfig.addWatchTarget('./.eleventy.js')
	eleventyConfig.addWatchTarget('./package.json')
	eleventyConfig.addWatchTarget('./tailwind.config.js')
	eleventyConfig.addWatchTarget('./postcss.config.js')
	eleventyConfig.addWatchTarget('./src/css/')

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	}
}

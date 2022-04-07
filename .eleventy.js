module.exports = function (eleventyConfig) {
	/* 
		WATCH TARGETS https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
	*/
	eleventyConfig.addWatchTarget('./.eleventy.js');
	eleventyConfig.addWatchTarget('./package.json');
	eleventyConfig.addWatchTarget('./tailwind.config.js');
	eleventyConfig.addWatchTarget('./postcss.config.js');
	eleventyConfig.addWatchTarget('./src/css/');

	/*
		PASSTHROUGH https://www.11ty.dev/docs/copy/
	*/
	eleventyConfig.addPassthroughCopy('./src/static');

	/* 
		SHORTCODES https://www.11ty.dev/docs/shortcodes/
	*/
	eleventyConfig.addPairedShortcode('button', require('./src/lib/shortcodes/button.js'));

	return {
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "_includes/styles": "styles" });
};

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

 eleventyConfig.addFilter("getTagNames", collections => {
    return Object.keys(collections);
      //.filter(tag => !["all"].includes(tag));
  });
}

export const config = {
	dir: {
		input: "content",
	},
};

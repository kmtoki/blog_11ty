export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

 eleventyConfig.addFilter("getTagNames", collections => {
    return Object.keys(collections);
      //.filter(tag => !["all"].includes(tag));
  });
}

export const config = {
  pathPrefix: "/blog_11ty/",
	dir: {
		input: "content",
	},
};

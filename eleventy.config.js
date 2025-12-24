export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addFilter("getTagNames", collections => {
    if (collections == null || collections == undefined) {
      return ["無し"]
    } else {
     return Object.keys(collections);
       //.filter(tag => !["all"].includes(tag));
    }
  });
}

export const config = {
	dir: {
		input: "content",
	},
};

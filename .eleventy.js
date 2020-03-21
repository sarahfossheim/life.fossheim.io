const pluginSEO = require("eleventy-plugin-seo");
const xmlFiltersPlugin = require('eleventy-xml-plugin')


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPlugin(xmlFiltersPlugin)
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Sarah L. Fossheim",
    description: "I'm a multidisciplinary developer and designer, with a strong interest in data science, AI, ethics and accessibility. On this page I share random thoughts and snippets of my life.",
    url: "https://life.fossheim.io",
    author: "Sarah L. Fossheim"
  });
  eleventyConfig.addCollection("sortedPosts", function(collection) {
    return collection.getFilteredByTag("posts").sort((a,b) => {
      if(a.date.toString() !== b.date.toString()) {
        return a.date - b.date;
      }
      return a.data.page.fileSlug - b.data.page.fileSlug;
    }).reverse();
  });
  return {
    passthroughFileCopy: true
  }
}
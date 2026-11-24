const icons = require("./lib/icons");

module.exports = function (eleventyConfig) {
  // Static assets copied as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Decap CMS admin panel: copied as-is, never templated
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");

  // {% icon "leaf" %} -> inline SVG line icon (see lib/icons.js)
  eleventyConfig.addShortcode("icon", (name, className) => icons.render(name, className));

  // Splits CMS text on blank lines / line breaks so each chunk gets its own <p>
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text || "")
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

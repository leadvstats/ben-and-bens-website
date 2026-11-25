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

  // "Ground leveling and grading" -> "Ground Leveling and Grading".
  // Only ever raises first letters, so "HRM" and typed capitals are kept.
  const SMALL_WORDS = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "nor", "of", "on", "or", "per", "the", "to", "via", "with"]);
  eleventyConfig.addFilter("headline", (text) =>
    String(text || "").replace(/[A-Za-z][\w']*/g, (word, offset) =>
      offset > 0 && SMALL_WORDS.has(word.toLowerCase())
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
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

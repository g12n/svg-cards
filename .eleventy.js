const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    // Change which syntax highlighters are installed
    templateFormats: ["*"], // default

    // Or, just njk and md syntax highlighters (do not install liquid)
    // templateFormats: ["njk", "md"],

    // init callback lets you customize Prism
    init: function({ Prism }) {
      //Prism.languages.myCustomLanguage = /* */;
    },

    // Added in 3.0, set to true to always wrap lines in `<span class="highlight-line">`
    // The default (false) only wraps when line numbers are passed in.
    alwaysWrapLineHighlights: false
  })
  return {  dir: {
    input: "source",
    output: "docs"
  },
  pathPrefix: "/svg-cards/",
  templateFormats: ["md", "css", "njk", "11ty.js"],
  passthroughFileCopy: true}
};


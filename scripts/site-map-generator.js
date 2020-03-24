/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SitemapGenerator = require("sitemap-generator");

// create generator
const generator = SitemapGenerator("https://freecourses.github.io", {
  stripQuerystring: false,
  filepath: "./public/sitemap.xml"
});

// register event listeners
generator.on("done", () => {
  // sitemaps created
});

// start the crawler
generator.start();

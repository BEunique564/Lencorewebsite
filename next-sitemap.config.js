/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lencore.in",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    { loc: "/menu", lastmod: new Date().toISOString(), priority: 0.9 },
    { loc: "/gallery", lastmod: new Date().toISOString(), priority: 0.7 },
    { loc: "/blog", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/reservation", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/blog/best-dessert-cafe-ahmedabad", lastmod: "2024-12-15", priority: 0.6 },
    { loc: "/blog/best-french-toast-ahmedabad", lastmod: "2024-12-10", priority: 0.6 },
    { loc: "/blog/best-ny-rolls-ahmedabad", lastmod: "2024-12-05", priority: 0.6 },
    { loc: "/blog/best-crepes-ahmedabad", lastmod: "2024-11-28", priority: 0.6 },
    { loc: "/blog/date-night-cafe-ahmedabad", lastmod: "2024-11-20", priority: 0.6 },
    { loc: "/blog/luxury-dessert-experience", lastmod: "2024-11-15", priority: 0.6 },
  ],
  exclude: ["/admin", "/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};

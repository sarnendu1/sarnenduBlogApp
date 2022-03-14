const siteUrl = "https://www.purpleglib.in";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/static-sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
 
};
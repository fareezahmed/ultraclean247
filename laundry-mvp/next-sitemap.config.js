/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ultraclean247.au',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://ultraclean247.au/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
}
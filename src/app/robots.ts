import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Keeps search engine bots from wasting crawl budget indexing private CRM screens
    },
    sitemap: 'https://www.nepalbyayammandir.com/sitemap.xml',
  };
}
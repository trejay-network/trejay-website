// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const placeholder = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER === '1';

  return placeholder
    ? {
        rules: [{ userAgent: '*', disallow: '/' }],
      }
    : {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: 'https://trejay.com/sitemap.xml',
      };
}

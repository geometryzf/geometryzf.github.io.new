import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.url
  const now = new Date()
  return [
    { url: `${base}`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}

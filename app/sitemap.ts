import type { MetadataRoute } from 'next'
import { categories, getSiteUrl } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const staticRoutes = [
    '/',
    '/products',
    '/industries',
    '/materials',
    '/engineering',
    '/about',
    '/contact',
  ]

  const categoryRoutes = categories.map((c) => `/products/${c.slug}`)
  const allRoutes = [...staticRoutes, ...categoryRoutes]

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : route.startsWith('/products') ? 0.9 : 0.8,
  }))
}

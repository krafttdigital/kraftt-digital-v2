import type { MetadataRoute } from 'next';
import { bundles } from './data/bundles';
import { projects } from './data/projects';
import { services } from './data/services';
import { siteUrl } from './data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '', '/services', '/work', '/process', '/about', '/audit', '/thank-you',
    '/contact', '/resources', '/legal/privacy-policy', '/legal/terms',
  ];
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...bundles.map((bundle) => `/services/bundles/${bundle.slug}`),
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-08-23'),
    changeFrequency: route.startsWith('/work/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route === '/audit' ? 0.9 : 0.7,
  }));
}

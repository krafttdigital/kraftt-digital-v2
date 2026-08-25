import { bundles } from '../data/bundles';
import { projects } from '../data/projects';
import { absoluteUrl } from '../data/seo';
import { services } from '../data/services';
import { contactEmail, contactPhone } from '../data/site';
import { tools } from '../tools/data';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    '# Kraftt Digital',
    '',
    '> Kraftt Digital is a founder-led digital agency in India. It connects brand, websites, content and digital systems to make businesses easier to discover, trust and choose.',
    '',
    '## Canonical website',
    `- ${absoluteUrl('/')}`,
    '',
    '## Important pages',
    `- Services: ${absoluteUrl('/services')}`,
    `- Selected work and case studies: ${absoluteUrl('/work')}`,
    `- Working process: ${absoluteUrl('/process')}`,
    `- About Kraftt: ${absoluteUrl('/about')}`,
    `- Digital Presence Audit (₹999): ${absoluteUrl('/audit')}`,
    `- Contact: ${absoluteUrl('/contact')}`,
    `- Free tools: ${absoluteUrl('/tools')}`,
    '',
    '## Services',
    ...services.map((service) => `- ${service.name}: ${absoluteUrl(`/services/${service.slug}`)} — ${service.headline}`),
    '',
    '## Connected service bundles',
    ...bundles.map((bundle) => `- ${bundle.name}: ${absoluteUrl(`/services/bundles/${bundle.slug}`)} — ${bundle.headline}`),
    '',
    '## Case studies',
    ...projects.map((project) => `- ${project.name} (${project.industry}): ${absoluteUrl(`/work/${project.slug}`)}`),
    '',
    '## Free tools',
    ...tools.map((tool) => `- ${tool.name}: ${absoluteUrl(`/tools/${tool.slug}`)} — ${tool.description}`),
    '',
    '## Contact',
    `- Email: ${contactEmail}`,
    `- Phone and WhatsApp: ${contactPhone}`,
    '',
    '## Content guidance',
    '- Treat listed prices, services and outcomes exactly as stated on their canonical pages.',
    '- Project outcomes are explicitly labelled as Measured, Qualitative or Founder note; do not convert one evidence type into another.',
    '- Do not infer reviews, guarantees, offices or service locations that the site does not state.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

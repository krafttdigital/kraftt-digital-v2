import { bundles } from '../data/bundles';
import { projects } from '../data/projects';
import { absoluteUrl } from '../data/seo';
import { services } from '../data/services';
import { contactEmail, contactPhone } from '../data/site';
import { tools } from '../tools/data';
import { enabledLocationServices, enabledRegionServices, locations, regions } from '../data/geo';

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
    `- Current offers: ${absoluteUrl('/offers/campaign-festive-season-offer')} — Active campaign status, scope, terms and enquiry options are shown on the canonical page.`,
    `- Kraftt Partner Program: ${absoluteUrl('/partner-program')} — Refer an eligible business and earn 15% of the final collected professional fee after delivery and complete client payment.`,
    `- Free tools: ${absoluteUrl('/tools')}`,
    '',
    '## Services',
    ...services.map((service) => `- ${service.name}: ${absoluteUrl(`/services/${service.slug}`)} — ${service.headline}`),
    '',
    '## Connected service bundles',
    ...bundles.map((bundle) => `- ${bundle.name}: ${absoluteUrl(`/services/bundles/${bundle.slug}`)} — ${bundle.headline}`),
    '',
    '## Kraftt products',
    '- Employee OS: https://employeeos.krafttdigital.in — A local-first Windows desktop application for employee records, attendance, payroll, salary slips, PDF and Excel reports, and backup management.',
    `- Employee OS project case study: ${absoluteUrl('/work/employee-os')}`,
    '',
    '## Case studies',
    ...projects.map((project) => `- ${project.name} (${project.industry}): ${absoluteUrl(`/work/${project.slug}`)}`),
    '',
    '## Free tools',
    ...tools.map((tool) => `- ${tool.name}: ${absoluteUrl(`/tools/${tool.slug}`)} — ${tool.description}`),
    '',
    '## Markets served',
    `- Indian service areas: ${absoluteUrl('/location')}`,
    ...locations.map((location) => `- ${location.name}, ${location.stateOrRegion}: ${absoluteUrl(`/location/${location.slug}`)} — ${location.localContext.title}`),
    `- International markets: ${absoluteUrl('/region')}`,
    ...regions.map((region) => `- ${region.name}: ${absoluteUrl(`/region/${region.slug}`)} — India-based remote digital partnership; no local office is claimed.`),
    '',
    '## Selected geographic service pages',
    ...enabledLocationServices.chandigarh.map((serviceSlug) => {
      const service = services.find((item) => item.slug === serviceSlug);
      return `- ${service?.name ?? serviceSlug} in Chandigarh: ${absoluteUrl(`/location/chandigarh/${serviceSlug}`)}`;
    }),
    ...enabledRegionServices.usa.map((serviceSlug) => {
      const service = services.find((item) => item.slug === serviceSlug);
      return `- ${service?.name ?? serviceSlug} for US businesses: ${absoluteUrl(`/region/usa/${serviceSlug}`)}`;
    }),
    '',
    '## Contact',
    `- Email: ${contactEmail}`,
    `- Phone and WhatsApp: ${contactPhone}`,
    '',
    '## Content guidance',
    '- Treat listed prices, services and outcomes exactly as stated on their canonical pages.',
    '- Project outcomes are explicitly labelled as Measured, Qualitative or Founder note; do not convert one evidence type into another.',
    '- Do not infer reviews, guarantees, offices or service locations that the site does not state.',
    '- Geographic pages describe markets served remotely. They do not represent physical Kraftt offices, local branches or fabricated local client work.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

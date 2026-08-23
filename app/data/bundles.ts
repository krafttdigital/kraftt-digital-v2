export type Bundle = {
  slug: string;
  name: string;
  headline: string;
  idealClient: string;
  problemSolved: string;
  price: string;
  timeline: string;
  deliverables: string[];
  notIncluded: string[];
  goodFitWhen: string[];
  relatedProjectSlug: string;
};

export const bundles: Bundle[] = [
  {
    slug: 'starter-business-launch',
    name: 'Starter Business Launch',
    headline: 'The essential brand and web foundation for a new business ready to be seen.',
    idealClient: 'New owner-led businesses that need a coherent first presence without commissioning every piece separately.',
    problemSolved: 'A launch spread across disconnected vendors, decisions and customer-facing surfaces.',
    price: '[PENDING: confirm bundle price]',
    timeline: '[PENDING: confirm timeline]',
    deliverables: ['[PENDING: confirm bundle scope]'],
    notIncluded: ['[PENDING: confirm exclusions]'],
    goodFitWhen: ['The offer is defined and ready to present', 'The business needs identity and website together', 'One accountable launch partner is more useful than separate vendors'],
    relatedProjectSlug: 'elixir-beverages',
  },
  {
    slug: 'd2c-brand-launch-kit',
    name: 'D2C Brand Launch Kit',
    headline: 'A connected identity, storefront and launch surface for a product brand.',
    idealClient: 'D2C founders preparing a real catalogue for launch and needing every visible piece to work together.',
    problemSolved: 'A product, identity and store developed separately with no consistent buying journey.',
    price: '[PENDING: confirm bundle price]',
    timeline: '[PENDING: confirm timeline]',
    deliverables: ['[PENDING: confirm bundle scope]'],
    notIncluded: ['[PENDING: confirm exclusions]'],
    goodFitWhen: ['The catalogue and operating model are defined', 'Identity and commerce need to launch together', 'The founder wants one coordinated system'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'full-digital-presence',
    name: 'Full Digital Presence',
    headline: 'A coordinated rebuild for businesses whose reputation has outgrown their digital presence.',
    idealClient: 'Established businesses ready to align brand, website, content and discoverability in one engagement.',
    problemSolved: 'Customer touchpoints that look unrelated, say different things or fail to support real business development.',
    price: '[PENDING: confirm bundle price]',
    timeline: '[PENDING: confirm timeline]',
    deliverables: ['[PENDING: confirm bundle scope]'],
    notIncluded: ['[PENDING: confirm exclusions]'],
    goodFitWhen: ['The offline reputation is stronger than the online proof', 'Several digital surfaces need coordinated change', 'Leadership wants a research-led rebuild'],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'local-business-dominator',
    name: 'Local Business Dominator',
    headline: 'A focused presence for local businesses that need to be easier to find and contact.',
    idealClient: 'Established local firms that depend on regional discovery, proof and direct enquiries.',
    problemSolved: 'Weak local search signals, thin proof and contact paths that make a good business harder to choose.',
    price: '[PENDING: confirm bundle price]',
    timeline: '[PENDING: confirm timeline]',
    deliverables: ['[PENDING: confirm bundle scope]'],
    notIncluded: ['[PENDING: confirm exclusions]'],
    goodFitWhen: ['Local search is a meaningful acquisition path', 'Maps and website signals are inconsistent', 'Enquiries need a shorter route to the business'],
    relatedProjectSlug: 'mittal-architect',
  },
];

export const bundleBySlug = (slug: string) => bundles.find((bundle) => bundle.slug === slug);

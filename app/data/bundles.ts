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

const sharedExclusions = [
  'Third-party subscriptions, hosting and platform charges',
  'Paid advertising budgets and external production costs',
  'Work outside the named package components unless added to the proposal',
];

export const bundles: Bundle[] = [
  {
    slug: 'starter-business-launch',
    name: 'Starter Business Launch',
    headline: 'The essential brand, website and first month of social content for a business launching from zero.',
    idealClient: 'New owner-led businesses with a defined offer that need a coherent identity, credible website and an active first social channel.',
    problemSolved: 'A launch split across disconnected vendors, visual decisions and customer touchpoints.',
    price: '₹35,000 / $799',
    timeline: 'Confirmed after the audit',
    deliverables: ['Website Business package', 'Brand Starter package', 'Social Starter for one month'],
    notIncluded: sharedExclusions,
    goodFitWhen: ['The offer is defined and ready to present', 'Identity, website and social need to launch together', 'One accountable launch partner is more useful than separate vendors'],
    relatedProjectSlug: 'elixir-beverages',
  },
  {
    slug: 'd2c-brand-launch-kit',
    name: 'D2C Brand Launch Kit',
    headline: 'A Shopify store, brand system, creative launch kit and first month of SEO for a D2C brand.',
    idealClient: 'Product founders with a real catalogue and launch plan who need the brand, store and launch assets to behave as one system.',
    problemSolved: 'A product, identity and storefront developed separately with no consistent discovery or buying journey.',
    price: '₹80,000 / $1,799',
    timeline: 'Confirmed after the audit',
    deliverables: ['Shopify Growth package', 'AI Brand Kit', 'Brand Identity package', 'E-commerce SEO for one month'],
    notIncluded: sharedExclusions,
    goodFitWhen: ['The catalogue and operating model are defined', 'Identity and commerce need to launch together', 'The founder wants one coordinated system from discovery to checkout'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'full-digital-presence',
    name: 'Full Digital Presence',
    headline: 'A coordinated brand, website, social and search system for an established business ready to grow.',
    idealClient: 'Established businesses whose offline reputation is stronger than their current online presence and that can support a three-month connected engagement.',
    problemSolved: 'Customer touchpoints that look unrelated, say different things or fail to support real business development.',
    price: '₹1,10,000 / $2,499',
    timeline: 'Three-month engagement',
    deliverables: ['Website Growth package', 'Brand Identity package', 'Social Growth for three months', 'E-commerce SEO for three months'],
    notIncluded: sharedExclusions,
    goodFitWhen: ['The offline reputation is stronger than the online proof', 'Several digital surfaces need coordinated change', 'Leadership wants a research-led rebuild with three months of execution'],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'local-business-dominator',
    name: 'Local Business Dominator',
    headline: 'A focused website, social, search and creative presence for Indian local businesses.',
    idealClient: 'Indian SMBs and local firms that rely on regional discovery, WhatsApp contact and visible trust.',
    problemSolved: 'Weak local search signals, thin proof and contact paths that make a good business harder to find and choose.',
    price: '₹55,000 · India only',
    timeline: 'Two-month engagement',
    deliverables: ['Website Business package', 'Social Starter for two months', 'E-commerce SEO Starter for two months', 'AI Creative Pack'],
    notIncluded: sharedExclusions,
    goodFitWhen: ['Local search is a meaningful acquisition path', 'Maps, social and website signals are inconsistent', 'Enquiries need a shorter route to the business'],
    relatedProjectSlug: 'mittal-architect',
  },
];

export const bundleBySlug = (slug: string) => bundles.find((bundle) => bundle.slug === slug);

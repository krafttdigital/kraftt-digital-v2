export type Bundle = {
  slug: string;
  name: string;
  headline: string;
  idealClient: string;
  problemSolved: string;
  price: string;
  timeline: string;
  deliverables: string[];
  inclusions: {
    title: string;
    summary: string;
    items: string[];
  }[];
  notIncluded: string[];
  bestFor: string[];
  notFor: string[];
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
    inclusions: [
      {
        title: 'Website Business package',
        summary: 'A credible five-page website ready to explain the offer and capture enquiries.',
        items: ['Five responsive pages', 'Full on-page SEO', 'WhatsApp and contact-form lead capture', 'Google Search Console setup'],
      },
      {
        title: 'Brand Starter package',
        summary: 'The core identity system needed to launch with one recognisable look and voice.',
        items: ['Primary, secondary and icon logo suite', 'Primary colour palette', 'Typography system', 'Brand voice and tone guide'],
      },
      {
        title: 'Social Starter · first month',
        summary: 'A complete first month of brand-aligned content instead of an empty launch feed.',
        items: ['15 designed posts', '10 stories', 'SEO-aware captions and hashtags', 'One social platform setup'],
      },
    ],
    notIncluded: sharedExclusions,
    bestFor: ['New service businesses and professional practices', 'New local businesses preparing their first launch', 'Founder-led businesses with one clear offer'],
    notFor: ['Established businesses needing a complete digital rebuild', 'Businesses needing only one standalone service', 'Product catalogues that require a full Shopify store'],
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
    inclusions: [
      {
        title: 'Shopify Growth package',
        summary: 'A launch-ready storefront with the catalogue, buying journey and essential automations configured.',
        items: ['Custom Shopify sections', 'Collection and product pages', 'Up to 50 products uploaded', 'AI-written product descriptions', 'SEO and Search Console setup', 'WhatsApp, email capture and basic automation'],
      },
      {
        title: 'AI Brand Kit',
        summary: 'A substantial bank of launch creative for ads, products, email and social.',
        items: ['15 static and motion ad creatives', '10 product design mockups', '10-image product-shoot simulation', 'Six-email sequence', 'Landing-page copy', 'Five social post designs'],
      },
      {
        title: 'Brand Identity package',
        summary: 'A complete visual and verbal system your store and future campaigns can follow.',
        items: ['Primary, secondary and icon logo suite', 'Full colour palette with usage rules', 'Typography system', 'Brand voice and tone guide', 'Business card and letterhead', 'Brand guidelines PDF'],
      },
      {
        title: 'E-commerce SEO · first month',
        summary: 'The search foundation and first month of ongoing visibility work.',
        items: ['Search Console setup and monitoring', 'On-page product and collection optimisation', 'Keyword and performance reporting', 'SEO content production'],
      },
    ],
    notIncluded: sharedExclusions,
    bestFor: ['Jewellery and accessories stores', 'Clothing and fashion brands', 'Beauty, lifestyle, food and other product-led brands'],
    notFor: ['Service-only businesses without a product catalogue', 'Brands whose products, pricing or fulfilment are not defined', 'Businesses needing only social posts or a logo'],
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
    inclusions: [
      {
        title: 'Website Growth package',
        summary: 'A full business website built for credibility, discovery and qualified enquiries.',
        items: ['Eight to ten responsive pages', 'Complete SEO and JSON-LD', 'GEO and AEO optimisation', 'Google Search Console setup', 'WhatsApp and CRM integration', 'Blog section setup'],
      },
      {
        title: 'Brand Identity package',
        summary: 'The identity rules and working files needed to keep every channel consistent.',
        items: ['Primary, secondary and icon logo suite', 'Full colour palette with usage rules', 'Typography system', 'Brand voice and tone guide', 'Business card and letterhead', 'Brand guidelines PDF'],
      },
      {
        title: 'Social Growth · three months',
        summary: 'Three months of planned content and reporting across two managed platforms.',
        items: ['63 posts across three months', '45 stories across three months', 'Two platforms managed', 'Monthly content calendars', 'Captions and hashtags', 'Monthly analytics reports'],
      },
      {
        title: 'E-commerce SEO · three months',
        summary: 'A sustained search programme rather than a one-time technical checklist.',
        items: ['Search Console setup and monitoring', 'On-page optimisation for agreed pages', 'Keyword tracking', 'Monthly SEO content', 'Performance reporting'],
      },
    ],
    notIncluded: sharedExclusions,
    bestFor: ['Established manufacturers and B2B businesses', 'Professional firms with strong offline credibility', 'Established consumer brands rebuilding several channels'],
    notFor: ['New businesses still defining their first offer', 'Businesses needing only a website refresh', 'Teams unable to support a three-month engagement'],
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
    inclusions: [
      {
        title: 'Website Business package',
        summary: 'A credible local-business website structured to turn discovery into direct contact.',
        items: ['Five responsive pages', 'Full on-page SEO', 'WhatsApp integration', 'Contact form and lead capture', 'Google Search Console setup'],
      },
      {
        title: 'Social Starter · two months',
        summary: 'Two complete months of consistent, ready-to-publish social content.',
        items: ['30 posts across two months', '20 stories across two months', 'SEO-aware captions and hashtags', 'One social platform setup'],
      },
      {
        title: 'SEO Starter · two months',
        summary: 'Local search foundations plus two months of measurable optimisation work.',
        items: ['Search Console setup and monitoring', 'On-page SEO for up to 20 pages across two months', 'Two keyword tracking reports', 'Two SEO blog posts'],
      },
      {
        title: 'AI Creative Pack',
        summary: 'Additional campaign-ready assets to support promotions, products and follow-up.',
        items: ['Five static ad creatives', 'Five product mockup images', 'Ten product descriptions', 'Three email drafts'],
      },
    ],
    notIncluded: sharedExclusions,
    bestFor: ['Architects, consultants and professional practices', 'Clinics, salons, restaurants and appointment-led businesses', 'Local retailers and services relying on nearby customers'],
    notFor: ['Online-only brands without a local customer base', 'Businesses operating outside India', 'Businesses needing only one isolated deliverable'],
    goodFitWhen: ['Local search is a meaningful acquisition path', 'Maps, social and website signals are inconsistent', 'Enquiries need a shorter route to the business'],
    relatedProjectSlug: 'mittal-architect',
  },
];

export const bundleBySlug = (slug: string) => bundles.find((bundle) => bundle.slug === slug);

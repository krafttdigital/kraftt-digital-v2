export type ServiceTier = {
  name: string;
  price: string;
  timeline: string;
  deliverables: string[];
  notIncluded: string[];
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  idealClient: string;
  problemSolved: string;
  tiers: ServiceTier[];
  mainDeliverables: string[];
  notIncluded: string[];
  goodFitWhen: string[];
  relatedProjectSlug: string;
};

const pendingTier = (name: string): ServiceTier => ({
  name,
  price: '[PENDING: confirm price]',
  timeline: '[PENDING: confirm timeline]',
  deliverables: [`[PENDING: confirm ${name} deliverables]`],
  notIncluded: [`[PENDING: confirm ${name} exclusions]`],
});

export const services: Service[] = [
  {
    slug: 'web-design-development',
    name: 'Web Design & Development',
    category: 'Websites & Commerce',
    headline: 'A website that makes the business clear and gives the next step somewhere to happen.',
    idealClient: 'Owner-led businesses whose existing site no longer reflects their work, or new businesses that need a credible first home online.',
    problemSolved: 'Unclear positioning, weak trust signals, broken enquiry paths and websites that cannot be found or understood.',
    tiers: [pendingTier('Starter'), { ...pendingTier('Business'), price: '₹25,000' }, { ...pendingTier('Growth'), price: '₹45,000' }],
    mainDeliverables: ['Responsive website structure', 'Clear enquiry paths', 'Technical SEO foundations', '[PENDING: confirm complete scope]'],
    notIncluded: ['Ongoing content production', 'Paid advertising', '[PENDING: confirm remaining exclusions]'],
    goodFitWhen: ['Your current site is outdated or broken', 'Referrals struggle to understand the business', 'Search visibility needs a stronger foundation'],
    relatedProjectSlug: 'mittal-architect',
  },
  {
    slug: 'ecommerce-store-development',
    name: 'E-commerce Store Development',
    category: 'Websites & Commerce',
    headline: 'A store that presents the product well and keeps the buying path clear.',
    idealClient: 'D2C brands launching a new catalogue or replacing a store that is difficult to manage and harder to buy from.',
    problemSolved: 'Disconnected product presentation, confusing navigation and fragile ordering flows that create avoidable friction.',
    tiers: [pendingTier('Launch Store'), pendingTier('Growth Store'), pendingTier('Complete Store')],
    mainDeliverables: ['Store structure and product hierarchy', 'Responsive shopping experience', 'Self-serve management foundation', '[PENDING: confirm complete scope]'],
    notIncluded: ['Product photography', 'Marketplace account fees', '[PENDING: confirm remaining exclusions]'],
    goodFitWhen: ['You need a launch-ready selling surface', 'The catalogue has outgrown manual ordering', 'Your team needs to manage products without a developer'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'brand-identity',
    name: 'Brand Identity',
    category: 'Brand & Content',
    headline: 'A usable identity that keeps every customer-facing surface recognisably yours.',
    idealClient: 'New brands that need a coherent starting point and established businesses whose visual identity has become inconsistent.',
    problemSolved: 'Logos, colours and type that exist separately but do not form a repeatable system.',
    tiers: [pendingTier('Brand Starter'), pendingTier('Brand Identity'), pendingTier('Full Brand System')],
    mainDeliverables: ['Identity direction', 'Colour and typography system', 'Practical usage guidance', '[PENDING: confirm complete scope]'],
    notIncluded: ['Trademark registration', 'Physical production costs', '[PENDING: confirm remaining exclusions]'],
    goodFitWhen: ['The business has no consistent visual language', 'A launch needs clear brand rules', 'Different vendors are producing disconnected work'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    category: 'Brand & Content',
    headline: 'A social presence with a clear role, consistent output and less daily improvisation.',
    idealClient: 'Businesses that need a steady publishing system tied to real commercial priorities.',
    problemSolved: 'Irregular posting, unclear content pillars and social channels that do not support the wider digital presence.',
    tiers: [pendingTier('Starter'), pendingTier('Growth'), pendingTier('Domination')],
    mainDeliverables: ['Channel and content direction', 'Publishing cadence', 'Creative coordination', '[PENDING: confirm complete scope]'],
    notIncluded: ['Paid media budget', 'Influencer fees', '[PENDING: confirm remaining exclusions]'],
    goodFitWhen: ['Posting depends on last-minute ideas', 'Brand presentation changes from post to post', 'Social needs to support a wider launch or growth plan'],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    category: 'Websites & Commerce',
    headline: 'A search foundation that helps the right products become easier to find.',
    idealClient: 'E-commerce teams with a real catalogue, stable operations and room to improve organic discovery.',
    problemSolved: 'Thin product pages, weak technical foundations and catalogue structures that search engines struggle to interpret.',
    tiers: [pendingTier('Starter'), pendingTier('Growth'), pendingTier('Domination')],
    mainDeliverables: ['Technical review', 'Catalogue and on-page direction', 'Measurement foundations', '[PENDING: confirm complete scope]'],
    notIncluded: ['Guaranteed rankings', 'Paid search budget', '[PENDING: confirm remaining exclusions]'],
    goodFitWhen: ['The store has products but limited organic reach', 'Search data is not guiding priorities', 'Technical issues are holding back indexation'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'content-copywriting',
    name: 'Content & Copywriting',
    category: 'Brand & Content',
    headline: 'Clear words that help people understand the offer and act with confidence.',
    idealClient: 'Businesses with strong work but vague, inconsistent or overly technical customer-facing language.',
    problemSolved: 'Copy that lists capabilities without explaining relevance, proof or the next action.',
    tiers: [pendingTier('Foundation'), pendingTier('Growth'), pendingTier('Ongoing')],
    mainDeliverables: ['[PENDING: confirm tier details]'],
    notIncluded: ['[PENDING: confirm tier details]'],
    goodFitWhen: ['Visitors ask basic questions the site should answer', 'The offer is difficult to explain consistently', 'A launch needs one voice across several surfaces'],
    relatedProjectSlug: 'mittal-architect',
  },
  {
    slug: 'dashboards-internal-tools',
    name: 'Dashboards & Internal Tools',
    category: 'Digital Systems',
    headline: 'Focused tools that replace repetitive work with a clearer operating view.',
    idealClient: 'Teams managing important processes through scattered sheets, messages and manual follow-up.',
    problemSolved: 'Operational information spread across tools with no reliable single view or repeatable workflow.',
    tiers: [pendingTier('Foundation'), pendingTier('Workflow'), pendingTier('System')],
    mainDeliverables: ['[PENDING: confirm tier details]'],
    notIncluded: ['[PENDING: confirm tier details]'],
    goodFitWhen: ['The same information is entered more than once', 'Status reporting is manual', 'A focused internal tool can remove a known bottleneck'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'ai-powered-creative',
    name: 'AI-Powered Creative',
    category: 'Creative Production',
    headline: 'A faster creative production system with brand control kept intact.',
    idealClient: 'Brands that need more campaign and product creative without losing consistency or review discipline.',
    problemSolved: 'Creative demand outpacing production capacity, with outputs that still need human direction and brand judgment.',
    tiers: [pendingTier('Starter'), pendingTier('Campaign'), pendingTier('Studio')],
    mainDeliverables: ['[PENDING: confirm tier details]'],
    notIncluded: ['[PENDING: confirm tier details]'],
    goodFitWhen: ['A real campaign brief already exists', 'The brand system is clear enough to guide production', 'Output volume is constrained by production time'],
    relatedProjectSlug: 'kiraq-jewellery',
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);

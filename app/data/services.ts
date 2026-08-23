export type ServiceTier = {
  name: string;
  price: string;
  timeline: string;
  deliverables: string[];
  addOns?: string[];
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
  workflow: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  relatedProjectSlug: string;
};

const tier = (
  name: string,
  price: string,
  timeline: string,
  deliverables: string[],
  addOns: string[] = [],
  notIncluded: string[] = [],
): ServiceTier => ({ name, price, timeline, deliverables, addOns, notIncluded });

export const services: Service[] = [
  {
    slug: 'web-design-development',
    name: 'Web Design & Development',
    category: 'Websites & Commerce',
    headline: 'A fast, clear website with an obvious next step — built on clean code, not a bloated template.',
    idealClient: 'Founders launching a new business, established companies replacing a dated or DIY website, and professionals who need a credible online presence.',
    problemSolved: 'No website, an outdated site, weak mobile usability, limited search visibility, or an enquiry path that does not reliably turn interest into contact.',
    tiers: [
      tier('Starter — Single Page', '₹12,000 / $299', '3–4 days', [
        'Single-page responsive website', 'Basic on-page SEO', 'WhatsApp chat integration', 'Mobile optimisation',
      ], ['GEO & AEO optimisation — ₹4,000 / $79', 'JSON-LD schema — ₹2,500 / $49', 'Maintenance — ₹1,500/month or ₹12,000/year']),
      tier('Business — Multi Page', '₹25,000 / $599', '6–8 days', [
        'Five-page responsive website', 'Full on-page SEO across every page', 'WhatsApp integration', 'Contact form and basic lead capture', 'Google Search Console setup',
      ], ['GEO & AEO optimisation — ₹5,000 / $99', 'JSON-LD schema — ₹3,500 / $69', 'Maintenance — ₹1,500/month or ₹12,000/year']),
      tier('Growth — Full Build', '₹45,000 / $999', '10–14 days', [
        'Eight to ten responsive pages', 'Complete SEO and JSON-LD', 'GEO and AEO optimisation', 'Google Search Console setup', 'WhatsApp and CRM integration', 'Blog section setup',
      ], ['Maintenance — ₹1,500/month or ₹12,000/year']),
    ],
    mainDeliverables: ['Responsive pages for mobile, tablet and desktop', 'On-page SEO structure, metadata and accessible image text', 'WhatsApp click-to-chat', 'Contact and lead capture from Business tier upward'],
    notIncluded: ['Hosting, domain and third-party software subscriptions', 'Copywriting or photography unless included in the agreed scope', 'Ongoing maintenance after handover unless selected separately'],
    goodFitWhen: ['Your current site no longer represents the business', 'Visitors struggle to understand the offer or make contact', 'Search visibility needs a stronger technical foundation'],
    workflow: [
      { title: 'Discovery', detail: 'We clarify the business, audience and job the site needs to do.' },
      { title: 'Structure', detail: 'A sitemap and page-by-page content plan give every page a clear role.' },
      { title: 'Design & build', detail: 'The pages are designed and built together as a working system.' },
      { title: 'Review', detail: 'A working link is shared for structured feedback before launch.' },
      { title: 'Launch', detail: 'The domain, Search Console, speed and mobile rendering receive a final pass.' },
    ],
    faqs: [
      { question: 'How many revisions are included?', answer: 'Starter and Business include a structured review round. Growth includes additional review cycles for its larger scope; the exact count is written into the proposal.' },
      { question: 'Do I need to provide the content?', answer: 'You can supply your own copy and images. Content & Copywriting can be bundled when you need help producing them.' },
      { question: 'Will the site work on mobile?', answer: 'Yes. Every package is built mobile-first and checked across phone, tablet and desktop breakpoints.' },
      { question: 'Is maintenance included?', answer: 'The build, launch and handover are included. Ongoing maintenance is available at ₹1,500/month or ₹12,000/year; larger features are quoted separately.' },
      { question: 'Do you work with international clients?', answer: 'Yes. The same package structure is available internationally at the listed USD prices.' },
    ],
    relatedProjectSlug: 'mittal-architect',
  },
  {
    slug: 'ecommerce-store-development',
    name: 'Shopify Store Development',
    category: 'Websites & Commerce',
    headline: 'A Shopify store with products, checkout and search basics configured from day one.',
    idealClient: 'D2C brands launching their first store, businesses migrating platforms, and sellers who need products uploaded and organised for launch.',
    problemSolved: 'A missing or unfinished store, an unconfigured theme, incomplete product data, or a buying path that is not ready to take orders.',
    tiers: [
      tier('Launch Store', '₹22,000 / $499', '5–7 days', [
        'Theme setup and customisation', 'Home, collection and product pages', 'Checkout configuration', 'Up to 20 products uploaded', 'Basic Google SEO', 'Domain connection',
      ], ['Product photography mockups — ₹4,000 / $79', 'Additional products — ₹150 each']),
      tier('Growth Store', '₹40,000 / $899', '8–12 days', [
        'Full theme setup with custom sections', 'All collection and product pages', 'Up to 50 products uploaded', 'AI-written product descriptions', 'Google SEO and Search Console', 'WhatsApp widget', 'Email capture and basic automation',
      ], ['AI product mockups — ₹5,000 / $99', 'Blog content setup — ₹6,500 / $149']),
      tier('Complete Store', '₹70,000 / $1,499', '14–20 days', [
        'Full custom Shopify build', 'Unlimited products within the agreed catalogue', 'AI product descriptions and SEO', 'Complete e-commerce SEO', 'Search Console and Analytics', 'Product creation and mockups', 'Klaviyo email automation', 'GEO and AEO optimisation',
      ], ['Monthly SEO retainer — ₹8,000/month / $199/month']),
    ],
    mainDeliverables: ['Brand-aligned Shopify theme', 'Configured home, collection, product and checkout pages', 'Product upload matched to package volume', 'Domain connection and store SEO foundations'],
    notIncluded: ['Shopify subscription and paid app fees', 'Payment gateway or third-party transaction charges', 'Physical product photography unless scoped separately'],
    goodFitWhen: ['You need a launch-ready selling surface', 'The catalogue has outgrown manual ordering', 'Your team needs to manage products without a developer'],
    workflow: [
      { title: 'Store audit', detail: 'We review the catalogue, brand assets and any existing Shopify setup.' },
      { title: 'Theme & structure', detail: 'The theme, collections and navigation are mapped to how customers shop.' },
      { title: 'Product loading', detail: 'Products, descriptions, pricing and images are added within the selected tier.' },
      { title: 'Checkout & integrations', detail: 'Checkout, payment and included email flows are configured and tested.' },
      { title: 'Launch', detail: 'A final device check is completed before the store goes live on your domain.' },
    ],
    faqs: [
      { question: 'How many products can you upload?', answer: 'Launch includes up to 20, Growth up to 50, and Complete covers the full agreed catalogue. Extra Launch products are ₹150 each.' },
      { question: 'Do you write product descriptions?', answer: 'Growth and Complete include AI-written descriptions reviewed by the team. Launch can add them through Content & Copywriting or AI Creative.' },
      { question: 'Is the Shopify subscription included?', answer: 'No. Shopify and other platform subscriptions are paid directly by the client.' },
      { question: 'Can you migrate an existing store?', answer: 'Yes. The source platform and product count are reviewed first and written into the proposal.' },
    ],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    category: 'Websites & Commerce',
    headline: 'Ongoing search work for stores that exist but are not being discovered consistently.',
    idealClient: 'Live Shopify and e-commerce stores that want measured monthly visibility work and have enough operating stability to act on the findings.',
    problemSolved: 'Weak rankings, unoptimised catalogue pages, missing search measurement, and no consistent content or technical SEO cadence.',
    tiers: [
      tier('SEO Starter', '₹12,000/month / $299/month', 'Ongoing monthly', ['Search Console setup and monitoring', 'On-page SEO for 10 pages each month', 'Keyword tracking report', 'One AI-written SEO blog post each month'], ['GEO & AEO layer — ₹3,500/month / $79/month']),
      tier('SEO Growth', '₹22,000/month / $549/month', 'Ongoing monthly', ['Full Search Console management', 'On-page SEO across all pages', 'GEO and AEO optimisation', 'Four SEO blog posts each month', 'Backlink outreach for five links each month', 'Monthly performance report'], ['Product description rewrites — ₹8,200/month']),
      tier('SEO Domination', '₹40,000/month / $999/month', 'Ongoing monthly', ['Complete SEO management', 'GEO and AEO management', 'Eight blog posts each month', 'Technical SEO audits and fixes', 'Monthly competitor analysis', 'Link building for 15 links each month', 'Ranking and traffic growth focus']),
    ],
    mainDeliverables: ['Search Console setup and ongoing monitoring', 'On-page optimisation across product and collection pages', 'Monthly SEO content', 'Keyword and performance reporting'],
    notIncluded: ['Guaranteed rankings or fixed traffic outcomes', 'Paid search and advertising budgets', 'Platform subscriptions or major rebuild work outside the retainer'],
    goodFitWhen: ['Your store is live but has limited organic reach', 'No one is tracking rankings or indexation consistently', 'Product and collection pages were never structured for search'],
    workflow: [
      { title: 'Audit', detail: 'Current rankings, indexation, Search Console and technical issues are reviewed.' },
      { title: 'Plan', detail: 'A prioritised monthly plan covers on-page work, content and outreach.' },
      { title: 'Execute', detail: 'Approved page changes, blog content and link work are delivered to scope.' },
      { title: 'Report', detail: 'Monthly reporting explains direction, completed work and the next priorities.' },
    ],
    faqs: [
      { question: 'Is there a minimum contract?', answer: 'Packages are billed monthly. Kraftt recommends at least three months because SEO compounds, while the final terms are confirmed in the proposal.' },
      { question: 'Can you guarantee a number-one ranking?', answer: 'No honest agency can guarantee a position controlled by a search algorithm. Kraftt commits to the documented work delivered each month.' },
      { question: 'What are GEO and AEO?', answer: 'They structure content for generative and answer engines through clear definitions, direct-answer formatting and structured data alongside traditional SEO.' },
    ],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'content-copywriting',
    name: 'Content & Copywriting',
    category: 'Brand & Content',
    headline: 'Landing pages, product copy and email sequences written to explain the offer and earn the next action.',
    idealClient: 'Websites, stores and launches that need customer-facing copy, brands building a reusable content library, and teams without an in-house copywriter.',
    problemSolved: 'A launch with no copy, generic product descriptions, weak offer clarity, or no welcome and nurture sequence.',
    tiers: [
      tier('Copy Starter', '₹8,000 / $199', '3–4 days', ['One AI-written and edited landing page', 'Five product descriptions', 'Three email sequence drafts'], ['Product mockup shoot — ₹3,500 / $79']),
      tier('Content Suite', '₹20,000 / $499', '7–10 days', ['Three landing or sales pages', 'Ten SEO product descriptions', 'Five-email welcome sequence', 'Ten AI product mockups', 'Two static ad creative sets'], ['Product creation concept — ₹6,000 / $149']),
      tier('Brand Content Pack', '₹38,000 / $899', '12–15 days', ['Five landing or sales pages', 'Unlimited product descriptions within the agreed catalogue', 'Ten-email sequence', 'Twenty product-shoot mockups', 'Three ad creative sets', 'Product creation and packaging concept']),
    ],
    mainDeliverables: ['Landing or sales-page copy', 'Search- and conversion-aware product descriptions', 'Email sequence drafts', 'Ad creative copy from Content Suite upward'],
    notIncluded: ['Website or store build unless paired with a build package', 'Paid media spend and campaign management', 'Claims or technical statements that the client cannot substantiate'],
    goodFitWhen: ['Visitors ask questions the site should already answer', 'Your offer is difficult to explain consistently', 'A launch needs one voice across web, email and product copy'],
    workflow: [
      { title: 'Brief', detail: 'Audience, offer and tone are agreed before writing starts.' },
      { title: 'Draft', detail: 'The first draft is produced and shared for review.' },
      { title: 'Edit', detail: 'Feedback is incorporated into a clear final version.' },
      { title: 'Handover', detail: 'Copy is delivered ready for the site, store or email tool.' },
    ],
    faqs: [
      { question: 'Can you write in our brand voice?', answer: 'Yes. Kraftt works from your existing guide or establishes a clear working tone during the brief.' },
      { question: 'Can you add the copy to our site?', answer: 'When paired with Web Design or Shopify, the copy can be built directly into the pages. Otherwise it is delivered in a ready-to-use document.' },
      { question: 'How many product descriptions are included?', answer: 'Starter includes five, Content Suite ten, and Brand Content Pack covers the full catalogue agreed at the brief stage.' },
    ],
    relatedProjectSlug: 'elixir-beverages',
  },
  {
    slug: 'dashboards-internal-tools',
    name: 'Dashboards & Internal Tools',
    category: 'Digital Systems',
    headline: 'Admin panels, reporting and automation built around the way your team actually works.',
    idealClient: 'Operations and e-commerce teams managing inventory or orders manually, and businesses ready to replace ad-hoc spreadsheets with one focused tool.',
    problemSolved: 'Disconnected spreadsheets, repetitive data entry, and no central view for inventory, orders, accounts or reporting.',
    tiers: [
      tier('Simple Tool', '₹28,000 / $599', '7–10 days', ['Single-purpose internal tool', 'CSV upload and export automation', 'Basic data dashboard', 'User login and access control'], ['Bulk update feature — ₹6,000 / $149']),
      tier('Business Dashboard', '₹60,000 / $1,299', '14–20 days', ['Full admin panel', 'Product and inventory dashboard', 'Bulk upload and update tools', 'Accounts management module', 'PDF report generation', 'User roles and permissions'], ['Billing and invoicing module — ₹12,000 / $299']),
      tier('Full Internal Suite', '₹1,10,000 / $2,499', '25–35 days', ['Complete admin and operations dashboard', 'Billing and invoicing software', 'Accounts and expenses module', 'CSV automation tools', 'Razorpay and Shopify API integrations', 'One month of ongoing support']),
    ],
    mainDeliverables: ['Custom admin panel or internal tool', 'Login and role-based access control', 'Operational dashboards and reports', 'API integrations where included'],
    notIncluded: ['Ongoing hosting and provider charges', 'Third-party subscription or transaction fees', 'Unlisted integrations or modules outside the agreed architecture'],
    goodFitWhen: ['The same information is entered more than once', 'Status reporting is manual and unreliable', 'A focused tool can remove a known operating bottleneck'],
    workflow: [
      { title: 'Requirements', detail: 'We map the job, users, permissions and decisions the tool must support.' },
      { title: 'Architecture', detail: 'The data model, modules and roles are defined before screens are built.' },
      { title: 'Build', detail: 'Working increments are shared so the team can test the system as it develops.' },
      { title: 'Handover & support', detail: 'Access, operating notes and the included support scope are handed over.' },
    ],
    faqs: [
      { question: 'Can it integrate with our existing software?', answer: 'The Full Internal Suite includes integrations such as Razorpay and Shopify. Other APIs are scoped after reviewing their documentation and access.' },
      { question: 'Who hosts the tool?', answer: 'Kraftt configures and recommends the hosting setup. Ongoing provider charges are paid separately by the client.' },
      { question: 'Is post-launch support included?', answer: 'Full Internal Suite includes one month. Ongoing support can be arranged separately for any tier.' },
    ],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'ai-powered-creative',
    name: 'AI-Powered Creative',
    category: 'Creative Production',
    headline: 'Ad creatives, product mockups and copy produced faster with AI, then directed and finished by people.',
    idealClient: 'D2C brands testing creative variations, founders visualising products before manufacturing, and teams that need more platform-ready assets quickly.',
    problemSolved: 'Creative demand outpacing production capacity, limited shoot budgets, or products that need visualisation before physical samples exist.',
    tiers: [
      tier('AI Creative Pack', '₹10,000 / $249', '2–3 days', ['Five static ad creatives', 'Five product mockup images', 'Ten AI-written product descriptions', 'Three email drafts'], ['Animated ad creatives — ₹4,500 / $99', 'Monthly support — ₹10,000/month']),
      tier('AI Brand Kit', '₹22,000 / $549', '5–7 days', ['Fifteen static and motion ad creatives', 'Ten product design mockups', 'Ten-image product shoot simulation', 'Six-email sequence', 'Landing-page copy', 'Five social post designs'], ['Product packaging design — ₹6,000 / $149', 'Monthly support — ₹10,000/month']),
      tier('AI Launch Suite', '₹42,000 / $999', '8–12 days', ['Thirty ad creatives', 'Twenty product mockups and shoot simulations', 'Full email automation copy', 'Three landing pages', 'Ten social post designs', 'Product creation concept and mockup'], ['Monthly support — ₹10,000/month']),
    ],
    mainDeliverables: ['Static and motion ad creative', 'Product mockups and shoot simulations', 'AI-assisted product and email copy', 'Social designs'],
    notIncluded: ['Paid advertising budget or media buying', 'A permanent replacement for real product photography', 'Unreviewed AI output — every delivered asset receives human curation'],
    goodFitWhen: ['A real campaign or launch brief already exists', 'The brand system is clear enough to guide production', 'Creative volume is constrained by production time or shoot access'],
    workflow: [
      { title: 'Brief', detail: 'The product, brand assets and target platforms are confirmed.' },
      { title: 'Generate', detail: 'AI tools create initial directions and copy variations.' },
      { title: 'Curate & finish', detail: 'The strongest outputs are selected, edited and brought on-brand.' },
      { title: 'Delivery', detail: 'Final files are supplied in the formats and sizes required by the chosen platforms.' },
    ],
    faqs: [
      { question: 'Is everything generated without human input?', answer: 'No. AI creates a first pass; Kraftt directs, reviews, curates and finishes every delivered output.' },
      { question: 'Can mockups replace a real product shoot?', answer: 'They are useful for testing and early launches, but are not positioned as a permanent substitute once the brand scales.' },
      { question: 'What formats are delivered?', answer: 'Files are prepared for the ad and social platforms named in the brief.' },
      { question: 'Is this fixed or monthly?', answer: 'The three listed packages are one-time projects. Ongoing support is ₹10,000/month with a reduced recurring scope.' },
    ],
    relatedProjectSlug: 'elixir-beverages',
  },
  {
    slug: 'brand-identity',
    name: 'Brand Identity',
    category: 'Brand & Content',
    headline: 'Logo, colour, typography and voice built as one usable system.',
    idealClient: 'New businesses creating an identity from zero, established businesses formalising an inconsistent look, and teams that need reliable brand rules.',
    problemSolved: 'A missing or outdated logo, inconsistent colours and typography, or no shared reference for how the brand should look and sound.',
    tiers: [
      tier('Brand Starter', '₹12,000 / $299', '4–5 days', ['Primary, secondary and icon logo suite', 'Primary colour palette', 'Typography system', 'Brand voice and tone guide'], ['Brand guidelines document — ₹4,000 / $99']),
      tier('Brand Identity', '₹30,000 / $699', '8–12 days', ['Primary, secondary and icon logo suite', 'Full colour palette with usage rules', 'Typography system', 'Brand voice and tone guide', 'Business card and letterhead', 'Brand guidelines PDF'], ['Three custom brand illustrations — ₹6,500 / $149']),
      tier('Full Brand System', '₹55,000 / $1,299', '15–20 days', ['Complete logo system', 'Full brand identity kit', 'Five custom illustrations', 'Social profile kit', 'Packaging design concept', 'Pitch deck template', 'Brand guidelines PDF']),
    ],
    mainDeliverables: ['Logo variations matched to package tier', 'Colour palette with usage guidance', 'Typography and hierarchy system', 'Brand voice and guidelines'],
    notIncluded: ['Trademark registration or legal clearance', 'Physical printing and packaging production', 'Website, store or ongoing social management unless bundled'],
    goodFitWhen: ['The business has no consistent visual language', 'A launch needs clear rules across several surfaces', 'Different vendors are producing disconnected work'],
    workflow: [
      { title: 'Discovery', detail: 'Positioning, audience and competitors are reviewed before visual exploration.' },
      { title: 'Concept', detail: 'Logo directions are developed and presented with context.' },
      { title: 'Refine', detail: 'The selected direction moves through the included revision rounds.' },
      { title: 'System & guidelines', detail: 'Colour, typography, voice and usage rules are documented for real application.' },
    ],
    faqs: [
      { question: 'How many concepts and revisions are included?', answer: 'Brand Starter includes three initial concepts and two revision rounds. Higher-tier revision scope is confirmed in the proposal.' },
      { question: 'Which final logo files are supplied?', answer: 'PNG, SVG and PDF formats are included from Brand Starter upward for web, print and packaging use.' },
      { question: 'Can branding be bundled with a website or store?', answer: 'Yes. The bundle packages combine identity with web, Shopify, social, SEO or creative work.' },
    ],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    category: 'Brand & Content',
    headline: 'A content calendar that plans, creates and publishes consistently every month.',
    idealClient: 'Brands that need regular content without an in-house social team, businesses managing multiple platforms, and teams that want reporting with the output.',
    problemSolved: 'Quiet or inconsistent profiles, no monthly plan, outdated profile information, and social activity disconnected from business priorities.',
    tiers: [
      tier('Social Starter', '₹12,000/month / $299/month', 'Ongoing monthly', ['Fifteen posts each month', 'Ten stories each month', 'SEO-aware captions and hashtags', 'One platform', 'Profile setup'], ['Additional platform — ₹4,000/month / $99/month']),
      tier('Social Growth', '₹22,000/month / $599/month', 'Ongoing monthly', ['Twenty-one posts each month', 'Fifteen stories each month', 'Two platforms managed', 'Monthly content calendar', 'Captions and hashtags', 'Profile integration', 'Monthly analytics report'], ['Reels or short-form video — ₹8,000/month / $199/month']),
      tier('Social Domination', '₹40,000/month / $999/month', 'Ongoing monthly', ['Thirty posts each month', 'Twenty stories each month', 'Three platforms managed', 'Four typography or educational reels each month', 'Hashtag and caption research', 'Strategy and growth analytics']),
    ],
    mainDeliverables: ['Monthly content calendar', 'Designed feed posts and stories', 'Captions and hashtag sets', 'Analytics reporting from Growth upward'],
    notIncluded: ['Paid media budget and campaign buying', 'Influencer fees', 'Community management, comment replies and DMs unless scoped separately', 'On-location video shoots'],
    goodFitWhen: ['Posting depends on last-minute ideas', 'Brand presentation changes from post to post', 'Social needs to support a wider launch or growth plan'],
    workflow: [
      { title: 'Audit', detail: 'Existing profiles, audience and past performance are reviewed.' },
      { title: 'Calendar', detail: 'The month is planned around offers, content pillars and key dates.' },
      { title: 'Create & schedule', detail: 'Posts, stories and captions are produced and scheduled.' },
      { title: 'Report', detail: 'Performance is reviewed and used to adjust the next calendar.' },
    ],
    faqs: [
      { question: 'Are visuals included or only captions?', answer: 'Both are included. Posts are designed, written and scheduled as a complete package.' },
      { question: 'Which platforms are supported?', answer: 'Starter supports Instagram or LinkedIn. Additional platforms can be added, and higher tiers expand the managed platform count.' },
      { question: 'Are DMs and comments included?', answer: 'Not by default. Community management can be scoped separately when needed.' },
    ],
    relatedProjectSlug: 'shree-hari-spintex',
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);

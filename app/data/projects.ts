export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectMetric = {
  icon: string;
  value: string;
  label: string;
  note: string;
  kind: 'Measured' | 'Delivery' | 'Scope' | 'Qualitative';
};

export type ProjectSolution = {
  icon: string;
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  relationshipLabel?: string;
  package: string;
  metrics: ProjectMetric[];
  competitors: string[];
  solutionPoints: ProjectSolution[];
  problem: string;
  context: string;
  findings: string[];
  approach: string;
  outcome: string;
  outcomeType: 'Measured' | 'Qualitative' | 'Founder note';
  evidenceNote?: string;
  hero: ProjectImage | null;
  gallery: ProjectImage[];
  relatedProjectSlug: string;
  founderNote?: string;
};

const base = '/assets/projects';

export const projects: Project[] = [
  {
    slug: 'shree-hari-spintex',
    name: 'Shree Hari Spintex',
    industry: 'Textile / Industrial',
    package: 'Website Growth (₹45,000) + Social (LinkedIn)',
    metrics: [
      { icon: '◷', value: '10–15', label: 'Days to launch', note: 'Completed and made live with Managing Director approval.', kind: 'Delivery' },
      { icon: '⌖', value: 'Top 5', label: 'Google Maps', note: 'Reported for “spinning mills in Punjab” after launch.', kind: 'Measured' },
      { icon: '↗', value: 'Top 15', label: 'Google Search', note: 'Reported for the same regional category after launch.', kind: 'Measured' },
      { icon: '☎', value: 'Direct', label: 'Office enquiries', note: 'Management reported calls and clients reaching the office directly.', kind: 'Qualitative' },
    ],
    competitors: ['Nahar Spinning Mills', 'Vardhman Group', 'Trident Group', 'Square Corporations', 'Bansal Spinning Mills'],
    solutionPoints: [
      { icon: '▦', title: 'Industrial website', detail: 'A new multi-page structure using clear brand colours and product-led navigation.' },
      { icon: '→', title: 'Working enquiry paths', detail: 'Clear CTAs, contact forms, email routing and WhatsApp integration.' },
      { icon: '✓', title: 'Trust made visible', detail: 'Industry imagery, product proof, quality standards and trust banners.' },
      { icon: '⌁', title: 'Search foundation', detail: 'SEO structure, JSON-LD, AEO, GEO and Search Console setup.' },
      { icon: '⌖', title: 'Local discovery', detail: 'Embedded location and an improved Google Maps business presence.' },
      { icon: '◎', title: 'Approved launch', detail: 'Final review, Managing Director approval and live deployment.' },
    ],
    problem: 'A real manufacturer with a broken website — dead contact forms, no product photography, almost no Google Maps presence.',
    context: 'An established cotton spinning manufacturer needed its online presence to match the scale and legitimacy of the business itself.',
    findings: ['The main enquiry route was failing', 'The site did not present the manufacturing operation clearly', 'Search and Maps signals were too weak for regional discovery'],
    approach: 'Full rebuild — new structure, real product imagery, trust signals, technical SEO with JSON-LD, Search Console and Maps setup.',
    outcome: 'Now ranks top 5 on Google Maps and top 15 in Google Search for spinning mills in Punjab, ahead of most competitors — the Managing Director reports enquiries now reaching the office directly.',
    outcomeType: 'Measured',
    evidenceNote: 'Ranking positions were reported after launch and can change over time; the project gallery includes the available search-result evidence.',
    hero: { src: `${base}/shree-hari-spintex/shsl-homepage.png`, alt: 'Shree Hari Spintex website homepage showing cotton yarn production', width: 1895, height: 876 },
    gallery: [
      { src: `${base}/shree-hari-spintex/shsl-aboutpage.png`, alt: 'Shree Hari Spintex website about page', width: 1896, height: 878 },
      { src: `${base}/shree-hari-spintex/shsl-qualitypage.png`, alt: 'Shree Hari Spintex website quality page', width: 1897, height: 877 },
      { src: `${base}/shree-hari-spintex/shsl-contactpage.png`, alt: 'Shree Hari Spintex website contact page', width: 1897, height: 877 },
      { src: `${base}/shree-hari-spintex/shsl-jsonld.png`, alt: 'Structured data implementation for Shree Hari Spintex', width: 1881, height: 877 },
      { src: `${base}/shree-hari-spintex/shsl-seo-result.png`, alt: 'Search result evidence for Shree Hari Spintex', width: 1161, height: 875 },
      { src: `${base}/shree-hari-spintex/shsl-old-website.png`, alt: 'Previous Shree Hari Spintex website before the rebuild', width: 1897, height: 878 },
    ],
    relatedProjectSlug: 'mittal-architect',
  },
  {
    slug: 'mittal-architect',
    name: 'Mittal Architect',
    industry: 'Architecture',
    package: 'Website Growth (₹45,000)',
    metrics: [
      { icon: '↗', value: 'Top 5', label: 'Nearby searches', note: 'Reported for architects across Bathinda, Mansa, Tapa and nearby cities.', kind: 'Measured' },
      { icon: '→', value: '01 click', label: 'WhatsApp route', note: 'Visitors land in WhatsApp with a prepared enquiry message.', kind: 'Delivery' },
      { icon: '⌁', value: '03', label: 'Search layers', note: 'SEO, AEO and GEO were structured into the website.', kind: 'Scope' },
      { icon: '✓', value: 'First go', label: 'Proposal approval', note: 'The initial website proposal was accepted before production began.', kind: 'Qualitative' },
    ],
    competitors: ['Architects in Bathinda', 'Architects in Mansa', 'Architects in Tapa', 'Instagram-first local practices'],
    solutionPoints: [
      { icon: '◇', title: 'Luxury visual direction', detail: 'A restrained premium tone instead of unnecessary motion on every section.' },
      { icon: '▦', title: 'Project proof', detail: 'Detailed project pages with concise descriptions and real project imagery.' },
      { icon: '◎', title: 'Vastu expertise', detail: 'A dedicated visual section explaining the firm’s Vastu specialisation.' },
      { icon: '≡', title: 'Clear service system', detail: 'Separate service and gallery pages to make the practice easier to assess.' },
      { icon: '→', title: 'One-click enquiry', detail: 'WhatsApp integration with a pre-written message ready to send.' },
      { icon: '⌁', title: 'Search visibility', detail: 'SEO, AEO and GEO optimisation built into the site structure.' },
    ],
    problem: 'A respected local architect with no real online presence beyond an Instagram account with no project proof.',
    context: 'The firm already had an established local reputation, but prospective clients had no structured place to assess its work or make a direct enquiry.',
    findings: ['Search results did not explain the practice', 'Project proof was scattered', 'The enquiry path depended on social media'],
    approach: 'A restrained, luxury-toned site — deliberately without heavy animation — built around real project documentation and one-click WhatsApp enquiry.',
    outcome: "Search 'Mittal Architect' today and Google's AI answer pulls directly from the site. For architects near Bathinda, Mansa, or Tapa, the firm now places in Google's top 5.",
    outcomeType: 'Measured',
    evidenceNote: 'The project gallery includes the available AI-answer and local-search evidence; live positions can change over time.',
    hero: { src: `${base}/mittal-architect/mittal-homepage.png`, alt: 'Mittal Architect website homepage with a residential architecture project', width: 1917, height: 876 },
    gallery: [
      { src: `${base}/mittal-architect/mittal-projectspage-with-filters.png`, alt: 'Mittal Architect project gallery with category filters', width: 1918, height: 877 },
      { src: `${base}/mittal-architect/mittal-project-detail.png`, alt: 'Detailed architecture project page on the Mittal Architect website', width: 1916, height: 877 },
      { src: `${base}/mittal-architect/mittal-projectdetail-with-cta-imagedetail.png`, alt: 'Mittal Architect project detail with image and enquiry call to action', width: 1918, height: 877 },
      { src: `${base}/mittal-architect/mittal-gallerypage.png`, alt: 'Mittal Architect visual project gallery', width: 1918, height: 876 },
      { src: `${base}/mittal-architect/mittal-whatsapp-flow.png`, alt: 'One-click WhatsApp enquiry flow for Mittal Architect', width: 1897, height: 872 },
      { src: `${base}/mittal-architect/mittal-ai-answer.jpeg`, alt: 'Google AI answer citing the Mittal Architect website', width: 1178, height: 690 },
    ],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'kiraq-jewellery',
    name: 'Kiraq Jewellery',
    industry: 'D2C E-commerce',
    package: 'Brand Identity + Website Business (₹25,000) + Social Starter + AI Ad Creatives',
    metrics: [
      { icon: '◎', value: '05', label: 'Social platforms', note: 'Instagram, Facebook, Threads, Pinterest and YouTube were set up.', kind: 'Scope' },
      { icon: '▦', value: '01', label: 'Self-serve admin', note: 'Products, pricing, descriptions and reviews can be managed internally.', kind: 'Delivery' },
      { icon: '₹', value: '₹25K', label: 'Website package', note: 'Custom Business website package, alongside identity and launch support.', kind: 'Scope' },
      { icon: '✓', value: '01', label: 'Connected launch', note: 'Identity, store, social setup and AI creatives launched as one system.', kind: 'Qualitative' },
    ],
    competitors: ['Salty.in', 'JewelMars.in', 'Yellow Chimes', 'Influencer-led jewellery brands'],
    solutionPoints: [
      { icon: '◇', title: 'Luxury identity', detail: 'A complete identity system shaped around the founder’s vision and category research.' },
      { icon: '▦', title: 'Custom storefront', detail: 'A tailored e-commerce experience created to minimise recurring platform spend.' },
      { icon: '⌘', title: 'Admin control', detail: 'Internal tools to add products, update copy and pricing, and manage reviews.' },
      { icon: '◎', title: 'Five-platform setup', detail: 'Launch-ready social presence across the brand’s priority channels.' },
      { icon: '✦', title: 'Creative production', detail: 'AI-assisted ad creatives and product presentation aligned to the identity.' },
      { icon: '↻', title: 'Post-launch care', detail: 'Ongoing attention to products, bugs, loading performance and analytics.' },
    ],
    problem: 'A new jewellery brand with no identity, no store, and no way to sell online.',
    context: 'Kiraq needed the brand, storefront and supporting social surfaces to begin from the same commercial idea.',
    findings: ['There was no usable identity system', 'No product catalogue was available online', 'Ordering and store administration needed clear workflows'],
    approach: 'Full brand identity from their own concept, a custom store with a self-serve admin panel, and social presence across five platforms plus AI ad creatives.',
    outcome: 'A complete, launch-ready brand — identity, storefront, and social live together, not as disconnected pieces.',
    outcomeType: 'Qualitative',
    hero: { src: `${base}/kiraq-jewellery/kiraq-homepage.png`, alt: 'Kiraq Jewellery e-commerce homepage', width: 1918, height: 877 },
    gallery: [
      { src: `${base}/kiraq-jewellery/kiraq-brand-guidelines.png`, alt: 'Kiraq Jewellery brand guideline system', width: 1897, height: 875 },
      { src: `${base}/kiraq-jewellery/kiraq-color-system.png`, alt: 'Kiraq Jewellery brand colour system', width: 1900, height: 872 },
      { src: `${base}/kiraq-jewellery/kiraq-shoppage.png`, alt: 'Kiraq Jewellery online shop page', width: 1918, height: 875 },
      { src: `${base}/kiraq-jewellery/kiraq-luxury-collections.png`, alt: 'Kiraq Jewellery collection presentation', width: 1918, height: 877 },
      { src: `${base}/kiraq-jewellery/kiraq-pdp-whatsapp-order-flow.png`, alt: 'Kiraq product page with WhatsApp ordering flow', width: 1918, height: 875 },
      { src: `${base}/kiraq-jewellery/kiraq-admin-portal.png`, alt: 'Kiraq self-serve store administration portal', width: 1918, height: 880 },
    ],
    relatedProjectSlug: 'elixir-beverages',
  },
  {
    slug: 'elixir-beverages',
    name: 'Elixir Beverages',
    industry: 'FMCG D2C, pre-launch',
    package: 'Brand Identity + Website Starter',
    metrics: [
      { icon: '◇', value: '04+', label: 'Extra logo directions', note: 'Four additional systems were curated after the first custom direction.', kind: 'Scope' },
      { icon: '→', value: '02', label: 'Enquiry routes', note: 'Website forms route to Gmail, with WhatsApp access to the founder.', kind: 'Delivery' },
      { icon: '◎', value: '01', label: 'Brand guideline system', note: 'The selected logo was developed into a usable identity system.', kind: 'Delivery' },
      { icon: '◷', value: 'Pre-launch', label: 'Market stage', note: 'The site was built to create trust before commerce was active.', kind: 'Qualitative' },
    ],
    competitors: ['Botanical beverage brands', 'Premium FMCG launches', 'D2C refreshment brands', 'Motion-led product websites'],
    solutionPoints: [
      { icon: '◎', title: 'Deep discovery', detail: 'Brand, product, audience, launch timing and founder preferences clarified first.' },
      { icon: '◇', title: 'Logo exploration', detail: 'A custom concept plus additional directions before honouring the client’s chosen mark.' },
      { icon: '▦', title: 'Brand guidelines', detail: 'Colour, typography and application rules built around the approved logo.' },
      { icon: '✦', title: 'Motion-led website', detail: 'A scroll-animated digital experience shaped around the client’s brief.' },
      { icon: '→', title: 'Direct enquiries', detail: 'Working forms to Gmail and WhatsApp access to the founder.' },
      { icon: '✓', title: 'Approved launch', detail: 'Client review, requested refinements and a live pre-launch presence.' },
    ],
    problem: 'A pre-launch beverage brand with an unresolved logo and no site.',
    context: 'The brand needed a credible pre-launch surface before the product itself was ready to ship.',
    findings: ['The preferred logo direction needed usable rules', 'The visual system was not documented', 'The site needed to build interest without implying live commerce'],
    approach: "Brand guidelines built around their preferred logo direction, then a motion-driven, scroll-animated site — the client's own brief — with direct WhatsApp access to the founder.",
    outcome: 'A live, on-brand pre-launch presence ready before the product itself ships.',
    outcomeType: 'Qualitative',
    evidenceNote: 'Pre-launch build; no live commerce claim is made.',
    hero: { src: `${base}/elixir-beverages/elixir-homepage.png`, alt: 'Elixir Beverages pre-launch website homepage', width: 1896, height: 877 },
    gallery: [
      { src: `${base}/elixir-beverages/elixir-pre-launch-section.png`, alt: 'Elixir Beverages pre-launch website section', width: 1895, height: 872 },
      { src: `${base}/elixir-beverages/elixir-scrollanimated-ingredients-section.png`, alt: 'Elixir Beverages animated ingredients section', width: 1892, height: 877 },
      { src: `${base}/elixir-beverages/elixir-logo-rules.png`, alt: 'Elixir Beverages logo usage rules', width: 1323, height: 767 },
      { src: `${base}/elixir-beverages/elixir-color-pallete.png`, alt: 'Elixir Beverages brand colour palette', width: 1325, height: 782 },
      { src: `${base}/elixir-beverages/elixir-typography-system.png`, alt: 'Elixir Beverages typography system', width: 1322, height: 786 },
    ],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'bharat-bhushan-singla',
    name: 'Bharat Bhushan Singla',
    industry: 'Legal Services',
    package: 'Professional services website · multi-page legal platform',
    metrics: [
      { icon: '§', value: '06', label: 'Practice areas', note: 'Civil, criminal, family, property, commercial and consumer matters are clearly separated.', kind: 'Scope' },
      { icon: '▦', value: '06', label: 'Case records shown', note: 'The delivered case archive demonstrates six structured records in the documented interface.', kind: 'Delivery' },
      { icon: '→', value: '02', label: 'Consultation routes', note: 'Visitors can request a consultation or call the office directly from key decision points.', kind: 'Delivery' },
      { icon: '◎', value: '01', label: 'Founder-led presence', note: 'The advocate, expertise and office are presented as one accountable trust system.', kind: 'Qualitative' },
    ],
    competitors: ['Bathinda legal practices', 'Punjab advocate websites', 'Directory-only lawyer profiles', 'Large-firm practice-area sites'],
    solutionPoints: [
      { icon: '◎', title: 'Founder-led credibility', detail: 'A composed introduction connects the advocate’s identity, experience and legal offer immediately.' },
      { icon: '§', title: 'Practice-area system', detail: 'Six legal categories help visitors identify the right area without reading a wall of text.' },
      { icon: '▦', title: 'Documented case library', detail: 'Filterable case records make the depth and range of the practice easier to assess.' },
      { icon: '→', title: 'Consultation pathways', detail: 'Prominent consultation and call actions give high-intent visitors a clear next step.' },
      { icon: '◇', title: 'Trust-first visual language', detail: 'Navy, ivory and restrained gold create authority without making the experience feel inaccessible.' },
      { icon: '?', title: 'Decision support', detail: 'Focused FAQs and service guidance answer practical questions before a visitor reaches out.' },
    ],
    problem: 'A broad legal practice needed to feel credible online without forcing visitors to decode services, case experience or the next step on their own.',
    context: 'A Bathinda-based advocacy and legal consultancy needed one structured place to explain its practice, demonstrate relevant work and turn high-stakes research into a confident consultation.',
    findings: ['The breadth of legal services needed a clearer taxonomy', 'Founder credibility had to appear before service detail', 'Case experience needed to be scannable by category', 'Every high-intent page needed a direct consultation route'],
    approach: 'Build a calm, authoritative multi-page system around the advocate: founder-led positioning, clear practice areas, structured case records, practical FAQs and direct consultation paths.',
    outcome: 'A professional legal platform that turns a complex practice into a clear, assessable and contact-ready experience.',
    outcomeType: 'Qualitative',
    evidenceNote: 'The figures describe the delivered information architecture and screens shown in this case study. No ranking, lead-volume or revenue claim is made.',
    hero: { src: `${base}/bharat-bhushan-singla/bbs-homepage.png`, alt: 'Bharat Bhushan Singla advocates and legal consultants website homepage', width: 1896, height: 877 },
    gallery: [
      { src: `${base}/bharat-bhushan-singla/bbs-all-pages-hero-view.png`, alt: 'Legal website page system for homepage, practice areas and consultation paths', width: 1895, height: 875 },
      { src: `${base}/bharat-bhushan-singla/bbs-clear-categories.png`, alt: 'Clearly structured legal practice-area categories', width: 1892, height: 875 },
      { src: `${base}/bharat-bhushan-singla/bbs-cases-data.png`, alt: 'Filterable legal case archive with structured case details', width: 1896, height: 877 },
      { src: `${base}/bharat-bhushan-singla/bbs-faq-section-integration.png`, alt: 'Legal guidance and frequently asked questions section', width: 1895, height: 869 },
      { src: `${base}/bharat-bhushan-singla/bbs-clear-cta-with-clear-footer.png`, alt: 'Consultation call to action and contact-rich legal website footer', width: 1895, height: 876 },
    ],
    relatedProjectSlug: 'the-vibed-vines',
  },
  {
    slug: 'the-vibed-vines',
    name: 'The Vibed Vines',
    industry: 'Streetwear E-commerce',
    package: 'Custom e-commerce storefront · anime streetwear',
    metrics: [
      { icon: '▦', value: '89', label: 'Catalog products', note: 'The documented shop interface supports a substantial multi-category streetwear catalogue.', kind: 'Scope' },
      { icon: '≡', value: '06', label: 'Category filters', note: 'Six visible shopping categories help visitors narrow the catalogue quickly.', kind: 'Delivery' },
      { icon: '＋', value: '02', label: 'Cart items shown', note: 'The delivered cart demonstrates quantity control and a clear multi-product order summary.', kind: 'Delivery' },
      { icon: '→', value: '01', label: 'Guided order route', note: 'Order details can move into a WhatsApp-assisted fulfilment flow.', kind: 'Delivery' },
    ],
    competitors: ['Anime apparel stores', 'Streetwear D2C brands', 'Marketplace-first sellers', 'Instagram-only merch labels'],
    solutionPoints: [
      { icon: '✦', title: 'High-impact storefront', detail: 'A black, white and gold system gives the label an immediately recognisable streetwear attitude.' },
      { icon: '▦', title: 'Catalog architecture', detail: 'A large product range stays browsable through search, sorting and category filters.' },
      { icon: '◇', title: 'Product decision pages', detail: 'Imagery, size choice, quantity and pricing sit together without weakening the brand mood.' },
      { icon: '＋', title: 'Multi-item cart', detail: 'Customers can review products, quantities and totals before moving toward an order.' },
      { icon: '→', title: 'Assisted checkout', detail: 'A WhatsApp order path carries the required details into a practical fulfilment conversation.' },
      { icon: '◎', title: 'Community layer', detail: 'Brand and community sections give the store a point of view beyond individual products.' },
    ],
    problem: 'A strong anime-streetwear concept needed a store that could carry the visual attitude without making a large catalogue difficult to browse or buy from.',
    context: 'An India-built anime streetwear label needed a connected storefront for brand discovery, product exploration, size selection, cart review and assisted ordering.',
    findings: ['The brand mood needed to support rather than overpower shopping', 'A large catalogue required search, sorting and category filters', 'Product pages needed clear size, quantity and add-to-cart decisions', 'The order handoff needed to preserve useful cart details'],
    approach: 'Translate the label’s dark, gold-accented identity into a complete commerce journey: bold homepage, structured catalogue, decision-ready product pages, multi-item cart and WhatsApp-assisted checkout.',
    outcome: 'A distinctive e-commerce system where 89 products remain easy to explore, compare and carry into a guided order conversation.',
    outcomeType: 'Qualitative',
    evidenceNote: 'Catalog and interface figures come from the delivered screens shown here. No conversion, sales or traffic claim is made.',
    hero: { src: `${base}/the-vibed-vines/tvv-homepage.png`, alt: 'The Vibed Vines anime streetwear e-commerce homepage', width: 1895, height: 877 },
    gallery: [
      { src: `${base}/the-vibed-vines/tvv-brand-category-with-product-mocups.png`, alt: 'The Vibed Vines brand category and product presentation', width: 1896, height: 876 },
      { src: `${base}/the-vibed-vines/tvv-shop-page-with-search-and-filters.png`, alt: 'Streetwear shop with product search, sorting and category filters', width: 1896, height: 875 },
      { src: `${base}/the-vibed-vines/tvv-pdp-page.png`, alt: 'Anime streetwear product page with size and quantity selection', width: 1895, height: 876 },
      { src: `${base}/the-vibed-vines/tvv-product-features.png`, alt: 'Product feature presentation for The Vibed Vines', width: 1896, height: 875 },
      { src: `${base}/the-vibed-vines/tvv-cartpage-handling-multiproducts-and-checkout.png`, alt: 'Multi-product cart and checkout summary', width: 1896, height: 876 },
      { src: `${base}/the-vibed-vines/tvv-whatsapp-order-flow-with-all-details.png`, alt: 'WhatsApp-assisted order flow carrying complete cart details', width: 1917, height: 872 },
      { src: `${base}/the-vibed-vines/tvv-community-section.png`, alt: 'The Vibed Vines brand community section', width: 1896, height: 877 },
    ],
    relatedProjectSlug: 'kiraq-jewellery',
  },
  {
    slug: 'aegis-squad',
    name: 'Aegis Squad',
    industry: 'Security',
    relationshipLabel: 'Early work, completed before Kraftt was founded.',
    package: 'Lean multi-page website build · pre-Kraftt founder work',
    metrics: [
      { icon: '▦', value: '01 → multi', label: 'Site structure', note: 'A single-page site was reorganised into a clearer multi-page experience.', kind: 'Delivery' },
      { icon: '→', value: '01', label: 'Working contact path', note: 'A real email contact form replaced the missing enquiry route.', kind: 'Delivery' },
      { icon: '✓', value: '03', label: 'Core gaps addressed', note: 'Structure, service clarity and conversion paths were the priority fixes.', kind: 'Scope' },
      { icon: '◷', value: 'Pre-Kraftt', label: 'Relationship', note: 'Founder work completed before Kraftt existed as a studio.', kind: 'Qualitative' },
    ],
    competitors: ['G4S', 'SIS India', 'Established security-service websites'],
    solutionPoints: [
      { icon: '▦', title: 'Multi-page structure', detail: 'Services and company information separated into clearer destinations.' },
      { icon: '≡', title: 'Service clarity', detail: 'A more understandable presentation of the security and manpower offer.' },
      { icon: '→', title: 'Conversion route', detail: 'Clear CTAs and a working contact form connected to email.' },
      { icon: '₹', title: 'Lean delivery', detail: 'A minimum-investment build focused on the highest-value structural fixes.' },
    ],
    problem: 'A single-page, AI-generated site with no service clarity and no working contact path.',
    context: 'This was an early founder project completed before Kraftt existed as a studio.',
    findings: ['Services were not separated clearly', 'The single page could not support deeper information', 'Visitors had no reliable contact route'],
    approach: 'A proper multi-page structure and a real contact form, built lean on a limited budget.',
    outcome: 'A credible, navigable site with an actual way for a visitor to get in touch.',
    outcomeType: 'Qualitative',
    hero: { src: `${base}/aegis-squad/aegis-homepage.png`, alt: 'Aegis Squad security services website homepage', width: 1895, height: 877 },
    gallery: [
      { src: `${base}/aegis-squad/aegis-servicespage.png`, alt: 'Aegis Squad services page', width: 1896, height: 875 },
      { src: `${base}/aegis-squad/aegis-careerpage.png`, alt: 'Aegis Squad careers page', width: 1896, height: 875 },
      { src: `${base}/aegis-squad/aegis-seo-jsonld.png`, alt: 'Aegis Squad structured search data implementation', width: 1898, height: 875 },
    ],
    relatedProjectSlug: 'shree-hari-spintex',
  },
  {
    slug: 'ketan-goyal',
    name: 'Ketan Goyal',
    industry: 'Founder / Personal Brand',
    relationshipLabel: 'Internal venture / founder project — not a client engagement.',
    package: 'Internal venture',
    metrics: [
      { icon: '≡', value: '06', label: 'Content themes', note: 'Projects, journey, exploration, goals, learning and builds.', kind: 'Scope' },
      { icon: '◎', value: '01', label: 'Founder trust surface', note: 'One place to understand who leads Kraftt and how the work is approached.', kind: 'Qualitative' },
      { icon: '◷', value: 'Living', label: 'Portfolio format', note: 'Designed to grow as experiments, lessons and projects are added.', kind: 'Delivery' },
      { icon: '✓', value: 'Internal', label: 'Relationship', note: 'Clearly labelled as a founder venture, not client proof.', kind: 'Qualitative' },
    ],
    competitors: [],
    solutionPoints: [
      { icon: '▦', title: 'Work archive', detail: 'A structured place for completed projects and practical builds.' },
      { icon: '↗', title: 'Founder journey', detail: 'Context on experience, direction and how the studio came to exist.' },
      { icon: '✦', title: 'Current exploration', detail: 'A living record of daily learning, experiments and new ideas.' },
      { icon: '◎', title: 'Trust through context', detail: 'Clients can understand the person leading the strategy and delivery.' },
    ],
    problem: 'The founder’s work, experiments, learning and direction had no single place where a prospective client could understand the person behind Kraftt.',
    context: 'Ketan Goyal’s portfolio is an internal founder project documenting completed work, personal exploration, future goals, learning and builds.',
    findings: ['Project work and personal context were scattered', 'Prospective clients needed a clearer view of who leads the work', 'A living portfolio could create context that a static biography could not'],
    approach: 'A personal portfolio structured around work, journey, current exploration, future goals and lessons from building.',
    outcome: 'A founder-owned trust surface that gives clients context on who leads Kraftt and why the work is approached the way it is.',
    outcomeType: 'Founder note',
    hero: null,
    gallery: [],
    founderNote: 'This page documents an internal venture. It does not represent a client engagement, client review or external endorsement.',
    relatedProjectSlug: 'mittal-architect',
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

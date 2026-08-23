export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  relationshipLabel?: string;
  package: string;
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
    slug: 'aegis-squad',
    name: 'Aegis Squad',
    industry: 'Security',
    relationshipLabel: 'Early work, completed before Kraftt was founded.',
    package: 'Lean multi-page website build · pre-Kraftt founder work',
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

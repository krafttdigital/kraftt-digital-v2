import Image from 'next/image';
import Link from 'next/link';
import { AuditCTA } from './components/CTA';
import { Footer } from './components/Footer';
import { HomeShowcase } from './components/HomeShowcase';
import { JsonLd } from './components/JsonLd';
import { Reveal } from './components/Reveal';
import { projects } from './data/projects';
import { services } from './data/services';
import { siteUrl } from './data/site';

const categories = [
  { title: 'Websites & Commerce', copy: 'Web design, Shopify and search visibility built around a clear buying path.', serviceNames: ['Web Design & Development', 'Shopify Store Development', 'E-commerce SEO'] },
  { title: 'Brand & Content', copy: 'Identity, copy and social systems that keep the business recognisable everywhere.', serviceNames: ['Brand Identity', 'Content & Copywriting', 'Social Media Management'] },
  { title: 'Creative Production', copy: 'AI-assisted creative production with human direction, curation and brand control.', serviceNames: ['AI-Powered Creative'] },
  { title: 'Digital Systems', copy: 'Dashboards and internal tools that replace repetitive operating friction.', serviceNames: ['Dashboards & Internal Tools'] },
];

const processJourney = [
  {
    number: '01',
    phase: 'Understand',
    status: 'Paid · ₹999',
    title: 'Business audit',
    copy: 'We study the business, category, current systems and competitors, then document the gaps, opportunities and solutions worth considering.',
    image: '/01-audit.png',
    alt: 'Illustration representing Kraftt’s business audit and research stage',
  },
  {
    number: '02',
    phase: 'Understand',
    status: 'Optional',
    title: 'Audit clarification call',
    copy: 'If anything is unclear, we walk through the audit, explain the actual problem and guide you towards what the business really needs.',
    image: '/02-discovery-call.png',
    alt: 'Illustration representing an audit clarification call',
  },
  {
    number: '03',
    phase: 'Decide',
    status: 'Free',
    title: 'Detailed proposal',
    copy: 'If there is a fit, we define the opportunity, deliverables, timeline, cost breakup, payment schedule, terms and everything needed from your side.',
    image: '/04-proposal.png',
    alt: 'Illustration representing Kraftt’s detailed project proposal',
  },
  {
    number: '04',
    phase: 'Decide',
    status: 'Optional',
    title: 'Proposal walkthrough',
    copy: 'When useful, we explain every commitment in the proposal—including strategy, price, timeline, payment terms and next steps.',
    image: '/03-clarify.png',
    alt: 'Illustration representing a proposal clarification and follow-up call',
  },
  {
    number: '05',
    phase: 'Confirm',
    status: 'On acceptance',
    title: 'Advance payment',
    copy: 'Once the proposal is accepted, the agreed advance confirms the engagement and reserves the work.',
  },
  {
    number: '06',
    phase: 'Onboard',
    status: 'After payment',
    title: 'Client onboarding',
    copy: 'We send the agreement, invoice and welcome letter, then hold a final call to lock the findings, inputs and requirements.',
    image: '/05-kickoff-onboard.png',
    alt: 'Illustration representing client onboarding and project kickoff',
  },
  {
    number: '07',
    phase: 'Build',
    status: 'Work begins',
    title: 'Kraftt gets to work',
    copy: 'We analyse the business, brand, assets, strategy, competitors and offer in depth before moving into professional production and delivery.',
    image: '/06-deliver.png',
    alt: 'Illustration representing Kraftt beginning production and delivery',
  },
];

const caseStudyBanners: Record<string, { src: string; alt: string }> = {
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex website, search and local discovery project collage' },
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, project portfolio and search visibility collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery identity, storefront and administration system collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages brand identity and pre-launch website collage' },
  'aegis-squad': { src: '/aegis-banner.png', alt: 'Aegis Squad services website and search presence collage' },
  'ketan-goyal': { src: '/ketan-banner.png', alt: 'Ketan Goyal personal portfolio, writing and builds collage' },
};

const featuredProjectSlugs = ['shree-hari-spintex', 'mittal-architect', 'kiraq-jewellery', 'elixir-beverages'];

const selectedProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function Home() {
  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kraftt Digital',
        url: siteUrl,
        description: 'Kraftt connects brand, websites, content and digital systems to make businesses easier to discover, trust and choose.',
      }} />
      <HomeShowcase />

      <section className="home-process-journey">
        <div className="home-process-journey-inner">
          <Reveal className="home-process-journey-heading" direction="scale">
            <div>
              <p className="eyebrow">How engagement begins</p>
              <span className="home-process-journey-index">01—07</span>
            </div>
            <div>
              <h2>Research first.<br /><em>Commit with clarity.</em></h2>
              <p>Seven transparent steps take the work from understanding your business to starting delivery—with paid, free and optional moments clearly marked.</p>
              <Link href="/process" className="home-process-journey-link">Explore the full process <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>

          <div className="home-process-journey-layout">
            <Reveal className="home-process-audit-card" direction="left">
              <div className="home-process-audit-topline">
                <span>{processJourney[0].number} · {processJourney[0].phase}</span>
                <strong>{processJourney[0].status}</strong>
              </div>
              <div className="home-process-audit-art">
                <Image
                  src={processJourney[0].image!}
                  alt={processJourney[0].alt!}
                  fill
                  sizes="(max-width: 900px) 88vw, 38vw"
                />
              </div>
              <div className="home-process-audit-copy">
                <p className="eyebrow">The starting point</p>
                <h3>Research before recommendation.</h3>
                <p>{processJourney[0].copy}</p>
                <div className="home-process-audit-reason">
                  <span>Why the audit is paid</span>
                  <p>The ₹999 fee protects the time needed for genuine research and keeps the audit valuable for both sides. It is paid analysis—not a sales call.</p>
                </div>
                <Link href="/audit">Request the ₹999 audit <span aria-hidden="true">→</span></Link>
              </div>
            </Reveal>

            <div className="home-process-path" aria-label="Kraftt client engagement journey">
              <Reveal className="home-process-path-intro" direction="right">
                <p className="eyebrow">What follows</p>
                <h3>A clear handoff at every stage.</h3>
                <p>Calls only happen when they help. Commitments are documented before money changes hands.</p>
              </Reveal>

              {processJourney.slice(1).map((step, index) => (
                <Reveal className={`home-process-path-step${step.image ? '' : ' home-process-path-step-text'}`} delay={index * 0.045} key={step.number}>
                  <div className="home-process-path-marker"><span>{step.number}</span></div>
                  <div className="home-process-path-copy">
                    <div className="home-process-path-meta"><span>{step.phase}</span><strong>{step.status}</strong></div>
                    <h4>{step.title}</h4>
                    <p>{step.copy}</p>
                  </div>
                  {step.image ? (
                    <div className="home-process-path-art">
                      <Image src={step.image} alt={step.alt!} fill sizes="(max-width: 760px) 36vw, 180px" />
                    </div>
                  ) : (
                    <div className="home-process-path-payment" aria-hidden="true"><span>₹</span><small>Scope confirmed</small></div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="home-process-value-note" direction="scale">
            <span>What your investment covers</span>
            <p>Kraftt pricing reflects business research, competitor analysis, strategic thinking, professional execution and accountable delivery—not only the visible output.</p>
            <Link href="/services">See services and packages <span aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="home-case-playground section-light">
        <Reveal className="home-case-playground-heading">
          <div className="home-case-playground-count" aria-label="Four featured case studies"><strong>04</strong><span>Featured work</span></div>
          <div className="home-case-playground-title">
            <p className="eyebrow eyebrow-dark">Featured work</p>
            <h2><span>Proof takes</span><span>different shapes.</span></h2>
          </div>
          <div className="home-case-playground-intro">
            <p>Four connected digital systems, each shaped around a different business gap. Every outcome is labelled by the evidence available.</p>
            <Link className="home-case-playground-all" href="/work">Explore all projects <span aria-hidden="true">↗</span></Link>
          </div>
        </Reveal>

        <div className="home-case-playground-grid">
          {selectedProjects.map((project, index) => {
            const banner = caseStudyBanners[project.slug];
            return (
              <Reveal className={`home-case-play-card home-case-play-card-${index + 1}`} direction={index % 2 ? 'left' : 'right'} delay={index * 0.06} key={project.slug}>
                <Link href={`/work/${project.slug}`} aria-label={`Explore ${project.name} case study`}>
                  <div className="home-case-play-media">
                    <Image src={banner.src} alt={banner.alt} fill sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 58vw" priority={index === 0} />
                    <strong className="home-case-play-number">0{index + 1}</strong>
                    <span className="home-case-play-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="home-case-play-copy">
                    <div><span>{project.industry}</span><span>{project.outcomeType}</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.context}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="home-case-playground-footer">
          <p><span>04</span> featured projects. Real context. No manufactured proof.</p>
          <Link href="/work">View the full evidence <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>

      <section className="home-services section-light">
        <Reveal className="home-services-heading" direction="left">
          <p className="eyebrow eyebrow-dark">What we build</p>
          <h2>Start with the business problem. Choose the right surface second.</h2>
        </Reveal>
        <div className="home-service-index">
          {categories.map((category, index) => (
            <Reveal className="home-service-row" delay={index * 0.06} key={category.title}>
              <span className="home-service-number">0{index + 1}</span>
              <div><h3>{category.title}</h3><p>{category.copy}</p></div>
              <div className="home-service-links">
                {category.serviceNames.map((name) => {
                  const service = services.find((item) => item.name === name);
                  return service ? <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}<span>↗</span></Link> : null;
                })}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="home-services-footer"><Link className="button button-outline-dark" href="/services">View services, pricing and packages</Link></Reveal>
      </section>

      <section className="home-conversion">
        <Reveal className="home-conversion-heading" direction="left">
          <p className="eyebrow eyebrow-dark">Built to be chosen</p>
          <h2>Clarity earns attention.<br />Proof turns it into action.</h2>
          <p>A useful digital presence does more than look finished. It helps the right person understand the offer, believe the business and know what to do next.</p>
          <Link href="/audit">Start with the real gap <span aria-hidden="true">→</span></Link>
        </Reveal>

        <Reveal className="home-conversion-main-media" direction="scale">
          <Image
            src="/Built to be chosen image.png"
            alt="Kraftt strategist connecting research, structure, brand expression and technology"
            fill
            sizes="(max-width: 900px) 92vw, 54vw"
          />
          <span>Research → structure → visible trust</span>
        </Reveal>

        <Reveal className="home-conversion-detail-media" direction="left">
          <Image
            src="/Built to be chosen image 2.png"
            alt="Kraftt team mapping one commercial idea across connected digital surfaces"
            fill
            sizes="(max-width: 900px) 70vw, 25vw"
          />
          <span>One idea across every surface</span>
        </Reveal>

        <Reveal className="home-conversion-copy" direction="right">
          <p>Between research, structure, brand expression and technology, we reduce the distance between first impression and confident enquiry.</p>
          <strong>One idea, consistently expressed across brand, website, content, growth and internal systems.</strong>
        </Reveal>
      </section>

      <section className="home-principles section-light">
        <Reveal className="home-principles-quote" direction="scale">
          <p className="eyebrow eyebrow-dark">Why Kraftt</p>
          <blockquote>Research first. Founder-led. Scope stated plainly.</blockquote>
        </Reveal>
        <Reveal className="home-principles-list" direction="right">
          <p>Evidence before format.</p>
          <p>One accountable lead.</p>
          <p>Pricing and exclusions visible.</p>
          <p>No ranking guarantees.</p>
          <p>No blurred outcomes.</p>
          <p>No manufactured proof.</p>
        </Reveal>
      </section>

      <AuditCTA title="Make the gap clear before choosing what to build." />
      <Footer />
    </main>
  );
}

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

const processStages = [
  ['Audit', 'Find the visible gaps.'],
  ['Clarify', 'Agree on the real problem.'],
  ['Propose', 'Set scope, price and timeline.'],
  ['Onboard', 'Confirm payment and inputs.'],
  ['Deliver', 'Build, review and launch.'],
];

const caseStudyBanners: Record<string, { src: string; alt: string }> = {
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex website, search and local discovery project collage' },
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, project portfolio and search visibility collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery identity, storefront and administration system collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages brand identity and pre-launch website collage' },
  'aegis-squad': { src: '/aegis-banner.png', alt: 'Aegis Squad services website and search presence collage' },
  'ketan-goyal': { src: '/ketan-banner.png', alt: 'Ketan Goyal personal portfolio, writing and builds collage' },
};

const selectedProjects = projects.filter((project) => caseStudyBanners[project.slug]);

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

      <section className="home-process-compact">
        <div className="home-process-compact-inner">
          <Reveal className="home-process-compact-heading" direction="scale">
            <p className="eyebrow">A defined way of working</p>
            <div>
              <h2><span>Clear thinking first.</span><span>Better outcomes follow.</span></h2>
              <Link href="/process" className="home-process-compact-cta">Explore the process <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>

          <div className="home-process-compact-phases">
            <Reveal className="home-process-compact-phase" direction="left">
              <div className="home-process-compact-art">
                <Image
                  src="/kraftt-audit-section-illustration.png"
                  alt="Kraftt audit illustration showing a website connected to trust, quality and growth signals"
                  fill
                  sizes="(max-width: 760px) 88vw, 38vw"
                />
              </div>
              <div className="home-process-compact-copy">
                <span>01 · Audit</span>
                <h3>Find what makes the business hard to choose.</h3>
                <p>We review search, brand, proof and enquiry paths before recommending what to build.</p>
              </div>
            </Reveal>

            <Reveal className="home-process-compact-phase" direction="right">
              <div className="home-process-compact-art">
                <Image
                  src="/kraftt-clarify-propose-section-illustration.png"
                  alt="Kraftt clarify and propose illustration showing a connected path from discovery to delivery"
                  fill
                  sizes="(max-width: 760px) 88vw, 38vw"
                />
              </div>
              <div className="home-process-compact-copy">
                <span>02 · Clarify and propose</span>
                <h3>Turn findings into one clear direction.</h3>
                <p>Scope, investment, timeline and exclusions are made visible before the work begins.</p>
              </div>
            </Reveal>
          </div>

          <div className="home-process-compact-stages" aria-label="Kraftt delivery stages">
            {processStages.map(([stage, copy], index) => (
              <Reveal key={stage} delay={index * 0.05}>
                <span>0{index + 1}</span><strong>{stage}</strong><p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-case-playground section-light">
        <Reveal className="home-case-playground-heading">
          <div className="home-case-playground-count" aria-label="Six case studies"><strong>06</strong><span>Case studies</span></div>
          <div className="home-case-playground-title">
            <p className="eyebrow eyebrow-dark">Selected work</p>
            <h2><span>Proof takes</span><span>different shapes.</span></h2>
          </div>
          <div className="home-case-playground-intro">
            <p>Six connected digital systems, each shaped around a different business gap. Every outcome is labelled by the evidence available.</p>
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
          <p><span>06</span> projects. Real context. No manufactured proof.</p>
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

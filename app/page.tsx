import Link from 'next/link';
import { AuditCTA } from './components/CTA';
import { Footer } from './components/Footer';
import { HomeShowcase } from './components/HomeShowcase';
import { JsonLd } from './components/JsonLd';
import { ProjectCard } from './components/ProjectCard';
import { Reveal } from './components/Reveal';
import { projects } from './data/projects';
import { services } from './data/services';
import { siteUrl } from './data/site';

const gaps = [
  ['Hard to discover', 'Search, Maps and social do not point to one clear business.'],
  ['Hard to understand', 'The offer is present, but its relevance is difficult to grasp.'],
  ['Hard to trust', 'The real work exists without enough proof around it.'],
  ['Hard to choose', 'Enquiry paths are unclear, broken or spread across channels.'],
];

const categories = [
  { title: 'Websites & Commerce', copy: 'Web design, Shopify and search visibility built around a clear buying path.', serviceNames: ['Web Design & Development', 'Shopify Store Development', 'E-commerce SEO'] },
  { title: 'Brand & Content', copy: 'Identity, copy and social systems that keep the business recognisable everywhere.', serviceNames: ['Brand Identity', 'Content & Copywriting', 'Social Media Management'] },
  { title: 'Creative Production', copy: 'AI-assisted creative production with human direction, curation and brand control.', serviceNames: ['AI-Powered Creative'] },
  { title: 'Digital Systems', copy: 'Dashboards and internal tools that replace repetitive operating friction.', serviceNames: ['Dashboards & Internal Tools'] },
];

const processStages = [
  ['Audit', 'Study the business, category, competitors and visible gaps.'],
  ['Clarify', 'Explain the findings and agree on the real problem.'],
  ['Propose', 'Set the scope, investment, timeline and boundaries.'],
  ['Onboard', 'Confirm payment, responsibilities and final inputs.'],
  ['Deliver', 'Research deeply, build carefully, review and launch.'],
];

const selectedProjects = ['mittal-architect', 'shree-hari-spintex', 'kiraq-jewellery']
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

      <section className="home-gap section-light">
        <Reveal className="home-gap-heading" direction="left">
          <p className="eyebrow eyebrow-dark">The digital gap</p>
          <h2>A good business should not feel difficult to choose online.</h2>
          <p>Your real reputation and your visible digital presence should tell the same story.</p>
          <Link className="text-link text-link-dark" href="/audit">See what the audit reviews ↗</Link>
        </Reveal>
        <div className="home-gap-grid">
          {gaps.map(([title, copy], index) => (
            <Reveal className="home-gap-card" direction={index % 2 ? 'right' : 'up'} delay={index * 0.07} key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-work section-dark">
        <Reveal className="home-work-heading split-heading">
          <div><p className="eyebrow">Selected work</p><h2>Proof with context, not polished claims without evidence.</h2></div>
          <div className="home-work-aside"><p>Measured outcomes, qualitative outcomes and founder work are labelled differently.</p><Link className="text-link" href="/work">Explore all six projects ↗</Link></div>
        </Reveal>
        <div className="home-project-stage">
          {selectedProjects.map((project, index) => (
            <Reveal className={`home-project-slot home-project-slot-${index + 1}`} direction="scale" delay={index * 0.08} key={project.slug}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
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

      <section className="home-system section-dark">
        <Reveal className="home-system-heading split-heading">
          <div><p className="eyebrow">Digital Presence System</p><h2>One commercial idea, carried across every surface.</h2></div>
          <p>Research gives the work its direction. Strategy, design, technology and execution keep every visible piece connected.</p>
        </Reveal>
        <div className="home-system-method" aria-label="Kraftt method">
          {['Research', 'Strategy', 'Design', 'Technology', 'Execution'].map((item, index) => (
            <Reveal className="home-system-step" direction={index % 2 ? 'up' : 'scale'} delay={index * 0.08} key={item}>
              <span>0{index + 1}</span><strong>{item}</strong>
            </Reveal>
          ))}
        </div>
        <Reveal className="home-system-output" direction="scale">
          <span>Connected output</span>
          <h3>Brand + website + content + growth + systems</h3>
          <p>Not five disconnected deliverables. One presence built around how the business needs to be discovered, trusted and chosen.</p>
        </Reveal>
      </section>

      <section className="home-process section-parchment-deep">
        <Reveal className="home-process-heading" direction="left">
          <p className="eyebrow eyebrow-dark">How the work moves</p>
          <h2>A visible path from first findings to delivered work.</h2>
          <Link className="text-link text-link-dark" href="/process">Read the complete process ↗</Link>
        </Reveal>
        <div className="home-process-list">
          {processStages.map(([stage, copy], index) => (
            <Reveal className="home-process-item" direction="right" delay={index * 0.06} key={stage}>
              <span>0{index + 1}</span><h3>{stage}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
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

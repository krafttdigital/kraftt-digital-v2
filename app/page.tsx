import Link from 'next/link';
import { Hero03 } from '@/components/ui/hero-03';
import { AuditCTA } from './components/CTA';
import { Footer } from './components/Footer';
import { JsonLd } from './components/JsonLd';
import { ProjectCard } from './components/ProjectCard';
import { Reveal } from './components/Reveal';
import { SiteHeader } from './components/SiteHeader';
import { projects } from './data/projects';
import { siteUrl } from './data/site';

const proof = [
  ['06', 'real projects'],
  ['05', 'client sectors'],
  ['01', 'research-first system'],
];

const gaps = [
  ['Hard to discover', 'Search, Maps and social do not point to one clear business.'],
  ['Hard to understand', 'The offer is present, but its relevance is difficult to grasp.'],
  ['Hard to trust', 'The real work exists without enough proof around it.'],
  ['Hard to choose', 'Enquiry paths are unclear, broken or spread across channels.'],
];

const categories = [
  ['Websites & Commerce', 'Web design, e-commerce stores and SEO built around a clear buying path.'],
  ['Brand & Content', 'Identity, copy and social systems that keep the business recognisable.'],
  ['Creative Production', 'AI-powered production with human direction and brand control.'],
  ['Digital Systems', 'Dashboards and internal tools that remove known operating friction.'],
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
      <SiteHeader overlay />

      <Hero03
        eyebrow="Kraftt Digital Presence System"
        title="Make your business easier to discover, trust and choose."
        description="We connect brand, websites, content and digital systems into one clear presence built around how your business actually works."
        portraitImage="/hero-banner.png"
        portraitAlt="Kraftt team mapping brand, website, content and growth systems around a strategy table"
        animation="none"
        primaryCTA={{ ctaEnabled: true, text: 'Request a Digital Presence Audit', link: '/audit', variant: 'default', size: 'lg' }}
        secondaryCTA={{ ctaEnabled: true, text: 'View Our Work ↗', link: '/work', variant: 'link', size: 'default' }}
      />

      <section className="proof-strip" aria-label="Selected proof">
        <p>Proof, not theatre.</p>
        <div className="proof-items">
          {proof.map(([number, label]) => (
            <div key={label}><strong>{number}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="content-section section-light">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow eyebrow-dark">The gap</p><h2>Good businesses can still be difficult to choose online.</h2></div>
          <p>A Digital Presence Audit is a focused paid review of the visible gaps between your real business and the experience a prospect finds online.</p>
        </Reveal>
        <div className="four-grid">
          {gaps.map(([title, copy], index) => (
            <Reveal className="line-card" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section work-preview section-dark">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">Selected work</p><h2>Real work, with the kind of outcome named clearly.</h2></div>
          <Link className="text-link" href="/work">View all six projects ↗</Link>
        </Reveal>
        <div className="project-grid project-grid-featured">
          {selectedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}
        </div>
      </section>

      <section className="content-section section-light">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow eyebrow-dark">Services</p><h2>Choose the business problem before choosing a deliverable.</h2></div>
          <Link className="text-link text-link-dark" href="/services">View all eight services ↗</Link>
        </Reveal>
        <div className="service-category-grid">
          {categories.map(([title, copy], index) => (
            <Reveal className="category-card" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="content-section system-section section-dark">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow">Digital Presence System</p><h2>One commercial idea, carried across every surface.</h2></div>
          <p>Ideas and business problems move through research, strategy, design, technology and execution — then emerge as a connected brand, site, content and growth system.</p>
        </Reveal>
        <Reveal className="system-diagram" aria-label="Digital Presence System flow">
          <div><span>Input</span><strong>Ideas + problems</strong></div>
          <i aria-hidden="true">→</i>
          <div className="system-core"><span>Method</span><strong>Research · Strategy · Design · Technology · Execution</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>Presence</span><strong>Brand + site + content + growth</strong></div>
        </Reveal>
      </section>

      <section className="content-section section-light">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow eyebrow-dark">Process</p><h2>From paid audit to researched delivery.</h2></div>
          <Link className="text-link text-link-dark" href="/process">See the full process ↗</Link>
        </Reveal>
        <div className="process-row">
          {['Audit', 'Clarify', 'Proposal', 'Advance', 'Onboard', 'Research', 'Deliver'].map((stage, index) => (
            <Reveal className="process-step" key={stage}><span>0{index + 1}</span><h3>{stage}</h3></Reveal>
          ))}
        </div>
      </section>

      <section className="content-section why-section section-parchment-deep">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow eyebrow-dark">Why Kraftt</p><h2>Research first. Founder-led. Scope stated plainly.</h2></div>
          <ul className="plain-list">
            <li>The work starts with evidence, not a favourite format.</li>
            <li>One accountable lead stays close to the engagement.</li>
            <li>Pricing and exclusions are visible before work begins.</li>
            <li>Measured and qualitative outcomes are never blurred.</li>
            <li>Calls are available whenever something needs explaining.</li>
            <li>Missing proof is marked, not manufactured.</li>
          </ul>
        </Reveal>
      </section>

      <AuditCTA />
      <Footer />
    </main>
  );
}

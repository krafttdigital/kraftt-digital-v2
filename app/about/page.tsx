import type { Metadata } from 'next';
import Link from 'next/link';
import { AuditCTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'About | Kraftt Digital',
  description: 'Kraftt is a founder-led digital studio connecting brand, websites, content and systems around real business needs.',
  alternates: { canonical: '/about' },
};

const principles = [
  ['Research before format', 'The first question is what the business needs, not what deliverable is easiest to sell.'],
  ['Proof before claims', 'Measured outcomes, qualitative outcomes and missing evidence are labelled differently.'],
  ['One connected view', 'Brand, website, content and systems should reinforce the same commercial idea.'],
  ['Scope without fog', 'Deliverables, exclusions, timing and decisions belong in plain language.'],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">About Kraftt</p>
        <h1>A founder-led studio for businesses whose work deserves a clearer digital presence.</h1>
        <p>Kraftt exists to close the gap between a business’s real-world reputation and what a prospect can see online.</p>
      </section>
      <section className="content-section about-belief section-light">
        <Reveal className="split-heading section-heading">
          <div><p className="eyebrow eyebrow-dark">What we believe</p><h2>Digital work is most useful when the pieces stop behaving like separate projects.</h2></div>
          <p>That means treating identity, website, content, discoverability and internal tools as parts of one operating presence.</p>
        </Reveal>
      </section>
      <section className="content-section founder-section section-parchment-deep">
        <Reveal className="founder-copy">
          <p className="eyebrow eyebrow-dark">Founder-led accountability</p>
          <h2>One accountable lead stays close to the research, decisions and delivery.</h2>
          <p>[PENDING: approved founder biography and portrait needed]</p>
          <Link className="text-link text-link-dark" href="/work/ketan-goyal">Read the founder project note ↗</Link>
        </Reveal>
        <div className="portrait-placeholder" role="img" aria-label="Founder portrait not yet supplied"><span>Real founder photograph needed.</span></div>
      </section>
      <section className="content-section section-dark principles-section">
        <Reveal className="section-heading"><p className="eyebrow">Principles</p><h2>Restraint in the work. Clarity in the relationship.</h2></Reveal>
        <div className="four-grid">{principles.map(([title, copy], index) => <Reveal className="line-card line-card-dark" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
      </section>
      <section className="content-section section-light fit-copy">
        <Reveal className="split-heading section-heading">
          <div><p className="eyebrow eyebrow-dark">Good fit</p><h2>Owners who value evidence, direct access and a connected scope.</h2></div>
          <p>Kraftt is less useful when the request is only for surface decoration, a guaranteed ranking, or volume without review discipline.</p>
        </Reveal>
      </section>
      <AuditCTA />
      <Footer />
    </main>
  );
}

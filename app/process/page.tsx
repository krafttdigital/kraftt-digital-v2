import type { Metadata } from 'next';
import { AuditCTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Process | Kraftt Digital',
  description: 'The four-stage Kraftt process: audit, proposal, agreement and delivery.',
  alternates: { canonical: '/process' },
};

const stages = [
  ['Audit', 'A focused paid review, ₹999.', 'We examine how the business is discovered, understood, trusted and contacted, then identify the highest-value gaps.'],
  ['Proposal', 'Deliverables, timeline, cost and terms. Free.', 'The proposed scope connects each recommendation to a clear output, commercial reason and boundary.'],
  ['Agreement', 'Advance payment, welcome and final discovery call.', 'Work begins once the scope, terms, responsibilities and starting information are agreed.'],
  ['Delivery', 'Research, competitor analysis, brand and build work.', 'The agreed surfaces are built, reviewed and handed over with the context needed to use them well.'],
];

export default function ProcessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">Process</p>
        <h1>Four stages from first review to delivered work.</h1>
        <p>Discovery or clarification calls are available at any stage if something needs explaining.</p>
      </section>
      <section className="content-section process-page section-light">
        {stages.map(([name, summary, detail], index) => (
          <Reveal className="process-stage" key={name}>
            <span>0{index + 1}</span>
            <div><p className="eyebrow eyebrow-dark">{name}</p><h2>{summary}</h2></div>
            <p>{detail}</p>
          </Reveal>
        ))}
      </section>
      <section className="content-section section-parchment-deep definition-section">
        <Reveal className="split-heading section-heading">
          <div><p className="eyebrow eyebrow-dark">The method</p><h2>What “Digital Presence System” means.</h2></div>
          <p>A connected set of brand, website, content and operational surfaces designed around how the business needs to be discovered, trusted and chosen.</p>
        </Reveal>
      </section>
      <AuditCTA />
      <Footer />
    </main>
  );
}

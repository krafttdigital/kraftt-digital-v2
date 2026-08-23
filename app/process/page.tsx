import type { Metadata } from 'next';
import { AuditCTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Process | Kraftt Digital',
  description: 'The Kraftt working system from paid audit and clarification through proposal, onboarding, research, build and delivery.',
  alternates: { canonical: '/process' },
};

const stages = [
  ['Paid audit', 'A focused business and digital-presence review. ₹999.', 'We study the business, category, competitors, existing systems and the problems Kraftt can usefully solve. Charging for the audit protects the research time and keeps the review serious.'],
  ['Audit clarification', 'An optional call when the findings need explanation.', 'We walk through the study, clarify the real problem and guide the client toward what is actually needed before any scope is proposed.'],
  ['Proposal', 'Deliverables, opportunity, timeline, cost and terms. Free.', 'The proposal records the findings, recommended scope, deliverables, cost breakdown, payment schedule, client inputs and the route to begin.'],
  ['Proposal clarification', 'An optional call to explain scope and value.', 'We clarify strategy, price, payment terms and timeline, and answer open questions without changing the facts of the proposal.'],
  ['Advance payment', 'The accepted scope moves into scheduling.', 'Kraftt begins onboarding after the agreed advance payment is confirmed.'],
  ['Client onboarding', 'Agreement, invoice, welcome letter and final discovery.', 'Responsibilities and final requirements are confirmed so both sides begin with the same view of the work.'],
  ['Research & delivery', 'Business analysis, competitor research, creation and launch.', 'We analyse the business, products, services, brand, assets and competitors before building, reviewing and delivering the agreed work.'],
];

export default function ProcessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">Process</p>
        <h1>A research-first working system from audit to delivery.</h1>
        <p>Every stage exists to make the problem, scope, responsibilities and value clear before the next commitment.</p>
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
          <p>A connected set of brand, website, content and operational surfaces built from business research, competitor analysis and the way the client actually works.</p>
        </Reveal>
      </section>
      <AuditCTA />
      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '../components/JsonLd';
import { RegionalPriceCopy } from '../components/PricingCurrencyProvider';
import { SiteHeader } from '../components/SiteHeader';
import { createPageMetadata, createPageSchema, serviceSchema } from '../data/seo';
import { AuditForm } from './AuditForm';

const pageTitle = 'Digital Presence Audit · ₹999 | Kraftt Digital';
const pageDescription = 'Request a focused ₹999 review of how your business is discovered, understood, trusted and contacted before choosing a digital service.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/audit', label: 'Digital Presence Audit' });

const reviewed = [
  'Your business, category and current digital presence',
  'Website, brand, content and enquiry paths',
  'Relevant competitors and visible market gaps',
  'The clearest solution direction and next priority',
];

const deliverables = [
  { number: '01', title: 'Business findings', copy: 'A concise view of what is helping, what is unclear and what is missing.' },
  { number: '02', title: 'Competitor snapshot', copy: 'Relevant references that show where your digital presence is falling behind.' },
  { number: '03', title: 'Priority plan', copy: 'The most useful actions arranged by importance—not a generic list of services.' },
  { number: '04', title: 'Recommended scope', copy: 'A practical direction for what to fix, build or improve next.' },
];

export default function AuditPage() {
  return (
    <main className="audit-page">
      <JsonLd data={createPageSchema({
        name: pageTitle,
        description: pageDescription,
        path: '/audit',
        breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Digital Presence Audit', path: '/audit' }],
        entities: [serviceSchema({ name: 'Digital Presence Audit', description: pageDescription, path: '/audit' })],
      })} />
      <SiteHeader />

      <section className="audit-hero">
        <div className="audit-hero-copy">
          <p className="eyebrow eyebrow-dark">Digital Presence Audit</p>
          <h1>Find the real gap before paying for the wrong fix.</h1>
          <p>Share the basics in five minutes. Kraftt researches your business, competitors and current systems—then shows you what deserves attention first.</p>
          <a className="button button-accent" href="#audit-form">Start the audit <span aria-hidden="true">↓</span></a>
        </div>
        <aside className="audit-hero-card" aria-label="Audit at a glance">
          <div><span>Fixed investment</span><strong><RegionalPriceCopy>₹999</RegionalPriceCopy></strong></div>
          <dl>
            <div><dt>Your input</dt><dd>5–7 minutes</dd></div>
            <div><dt>Our work</dt><dd>Research-led review</dd></div>
            <div><dt>Next step</dt><dd>Clear priorities</dd></div>
          </dl>
          <p>No long brief. No sales call disguised as an audit.</p>
        </aside>
      </section>

      <section className="audit-reassurance" aria-label="How the audit works">
        <div><span>01</span><strong>You share the essentials</strong><p>Short answers and one useful link are enough.</p></div>
        <div><span>02</span><strong>We do the research</strong><p>Business, competitors, trust and enquiry paths are reviewed.</p></div>
        <div><span>03</span><strong>You receive direction</strong><p>Clear findings, priorities and the right next scope.</p></div>
      </section>

      <section className="audit-workspace" id="audit-form">
        <aside className="audit-form-guide">
          <p className="eyebrow eyebrow-dark">Request the audit</p>
          <h2>You provide the basics. We investigate the rest.</h2>
          <p>The form is intentionally short. If something is not available, leave the optional field blank.</p>
          <ul>{reviewed.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="audit-guide-note"><span>Two ways to send</span><strong>WhatsApp or secure form</strong><p>Both options send the same details. Choose what feels easier.</p></div>
        </aside>
        <div className="audit-form-panel">
          <div className="audit-form-heading"><span><RegionalPriceCopy>₹999</RegionalPriceCopy></span><div><p className="eyebrow eyebrow-dark">Short guided form</p><h2>Tell us what feels unclear.</h2></div></div>
          <AuditForm />
        </div>
      </section>

      <section className="audit-deliverables">
        <div className="audit-section-heading"><p className="eyebrow eyebrow-dark">What you receive</p><h2>A decision-ready view—not another long report.</h2></div>
        <div className="audit-deliverable-grid">
          {deliverables.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="audit-explainer">
        <div><p className="eyebrow eyebrow-dark">Why the audit is paid</p><h2>Research deserves protected time.</h2><p><RegionalPriceCopy>The ₹999 fee lets Kraftt study the business properly instead of turning the exercise into a free speculative pitch.</RegionalPriceCopy></p></div>
        <div className="audit-next-steps"><p className="eyebrow eyebrow-dark">What happens next</p><ol><li><span>01</span><p><strong>Request reviewed</strong>Your details are checked for fit and completeness.</p></li><li><span>02</span><p><strong>Payment confirmed</strong>Payment instructions and any missing inputs are shared.</p></li><li><span>03</span><p><strong>Research begins</strong>Delivery format and timing are confirmed before work starts.</p></li></ol></div>
      </section>

      <p className="privacy-note audit-privacy">Your details are sent only through the option you choose. Form submissions are processed by Formspree; WhatsApp submissions open a pre-filled message for your review. See the <Link href="/legal/privacy-policy">privacy policy</Link>.</p>
    </main>
  );
}

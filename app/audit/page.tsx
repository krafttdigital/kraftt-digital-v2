import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappUrl } from '../data/site';
import { AuditForm } from './AuditForm';

export const metadata: Metadata = {
  title: 'Request a Digital Presence Audit | Kraftt Digital',
  description: 'Request a focused ₹999 review of how your business is discovered, understood, trusted and contacted.',
  alternates: { canonical: '/audit' },
};

const reviewed = ['Business, category and current operating context', 'Existing website, brand, content and contact systems', 'Relevant competitors and their digital presence', 'Discovery, trust and conversion gaps', 'The most useful solution direction for the business'];

export default function AuditPage() {
  return (
    <main className="audit-page">
      <header className="audit-header">
        <Link href="/" aria-label="Kraftt Digital home"><Image src="/assets/brand/kraftt-primary-dark.png" alt="Kraftt Digital" width={915} height={457} priority /></Link>
        <div><a href={whatsappUrl("Hi Kraftt, I have a question about the Digital Presence Audit.")}>WhatsApp</a><Link href="/">Back to site</Link></div>
      </header>
      <section className="audit-hero">
        <p className="eyebrow eyebrow-dark">Digital Presence Audit · ₹999</p>
        <h1>See the visible gaps before deciding what to build.</h1>
        <p>A focused paid review of how your business is discovered, understood, trusted and contacted.</p>
      </section>
      <section className="audit-content">
        <div className="audit-copy-block"><p className="eyebrow eyebrow-dark">Why research first</p><h2>Because a website, campaign or identity can only solve the right problem once the gap is clear.</h2></div>
        <div className="audit-two-col good-not-fit">
          <div><p className="eyebrow eyebrow-dark">Why it is paid</p><p>The ₹999 fee protects the research time required to study the business, category, systems and competitors instead of turning the audit into a sales call.</p></div>
          <div><p className="eyebrow eyebrow-dark">What it is for</p><p>A decision-ready view of the actual problem, the visible findings and the most useful next scope.</p></div>
        </div>
        <div className="audit-two-col">
          <div><p className="eyebrow eyebrow-dark">What is reviewed</p><ul className="check-list">{reviewed.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p className="eyebrow eyebrow-dark">What you receive</p><ul className="check-list"><li>A focused findings summary</li><li>A relevant competitor snapshot</li><li>Prioritised recommendations</li><li>A suggested solution and next scope</li><li>An optional clarification call if the findings need explanation</li></ul></div>
        </div>
        <div className="audit-two-col good-not-fit">
          <div><p className="eyebrow eyebrow-dark">For</p><p>Owner-led businesses, launch-stage brands and growing D2C teams with a real decision to make.</p></div>
          <div><p className="eyebrow eyebrow-dark">Not for</p><p>Anyone looking for a guaranteed ranking, a free speculative redesign or generic channel advice.</p></div>
        </div>
        <section className="audit-form-section">
          <p className="eyebrow eyebrow-dark">Request the audit</p><h2>Tell us where the business stands now.</h2>
          <AuditForm />
        </section>
        <div className="audit-two-col audit-steps">
          <div><p className="eyebrow eyebrow-dark">Payment step</p><p>Investment: ₹999. After the request is reviewed, Kraftt shares the payment instructions and confirms the inputs needed to begin.</p></div>
          <div><p className="eyebrow eyebrow-dark">Delivery expectation</p><p>The delivery format and timing are confirmed when the audit request is accepted. Research begins after payment and complete inputs are received.</p></div>
        </div>
        <p className="privacy-note">This page does not transmit form entries automatically. You choose what to share when you continue to WhatsApp. See the <Link href="/legal/privacy-policy">privacy policy</Link>.</p>
      </section>
    </main>
  );
}

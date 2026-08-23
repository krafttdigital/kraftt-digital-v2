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

const reviewed = ['Search and local discovery', 'Website clarity and enquiry paths', 'Brand consistency and trust signals', 'Content and social alignment', 'Technical and measurement foundations'];

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
        <div className="audit-two-col">
          <div><p className="eyebrow eyebrow-dark">What is reviewed</p><ul className="check-list">{reviewed.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p className="eyebrow eyebrow-dark">What you receive</p><ul className="check-list"><li>A focused findings summary</li><li>Prioritised recommendations</li><li>Suggested next scope</li><li>[PENDING: confirm delivery format]</li></ul></div>
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
          <div><p className="eyebrow eyebrow-dark">Payment step</p><p>Investment: ₹999. [PENDING: add approved payment link and confirmation workflow]</p></div>
          <div><p className="eyebrow eyebrow-dark">Delivery expectation</p><p>[PENDING: confirm audit delivery time] after payment and complete inputs are received.</p></div>
        </div>
        <p className="privacy-note">Your details are used only to review your request and communicate about the audit. See the <Link href="/legal/privacy-policy">privacy policy</Link>.</p>
      </section>
    </main>
  );
}

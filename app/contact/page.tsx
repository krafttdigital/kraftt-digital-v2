import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { whatsappUrl } from '../data/site';

export const metadata: Metadata = {
  title: 'Contact | Kraftt Digital',
  description: 'Contact Kraftt Digital about a service, bundle or Digital Presence Audit.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">Contact</p><h1>Bring the business problem. We will help make the next step clear.</h1>
        <p>For a structured starting point, request the audit. For a specific scope, open a WhatsApp conversation.</p>
      </section>
      <section className="content-section contact-grid section-light">
        <Link href="/audit"><p className="eyebrow eyebrow-dark">Primary</p><h2>Request a Digital Presence Audit</h2><span>Start the ₹999 review ↗</span></Link>
        <a href={whatsappUrl('Hi Kraftt, I would like to discuss a digital presence project.')}><p className="eyebrow eyebrow-dark">Direct</p><h2>Discuss a Service on WhatsApp</h2><span>Open a pre-filled message ↗</span></a>
        <div><p className="eyebrow eyebrow-dark">Email</p><h2>[PENDING: confirm contact email]</h2><span>Add the approved address before publish.</span></div>
      </section>
      <Footer />
    </main>
  );
}

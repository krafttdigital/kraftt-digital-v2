import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank you | Kraftt Digital',
  description: 'Your Digital Presence Audit request has been received.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page section-dark">
      <Image src="/assets/brand/kraftt-primary-light.png" alt="Kraftt Digital" width={2048} height={1024} priority />
      <p className="eyebrow">Request received</p>
      <h1>Thank you. The next step is a focused review, not a sales chase.</h1>
      <div className="thank-you-grid">
        <div><span>01</span><h2>Details checked</h2><p>Kraftt reviews the information you provided and confirms whether the audit is a fit.</p></div>
        <div><span>02</span><h2>Payment instructions shared</h2><p>If the request is a fit, Kraftt confirms the required inputs and shares the ₹999 audit payment step.</p></div>
        <div><span>03</span><h2>Research begins</h2><p>The delivery format and timing are confirmed after payment and complete business inputs are received.</p></div>
      </div>
      <Link className="button button-light" href="/">Return to Kraftt Digital</Link>
    </main>
  );
}

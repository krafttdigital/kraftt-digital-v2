import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = { title: 'Terms | Kraftt Digital', alternates: { canonical: '/legal/terms' } };

export default function TermsPage() {
  return (
    <main><SiteHeader /><section className="page-hero legal-hero section-dark"><p className="eyebrow">Legal</p><h1>Terms</h1><p>Last updated: 23 August 2026</p></section>
      <article className="legal-copy">
        <h2>Website information</h2><p>This website describes Kraftt Digital services and selected work. Project availability, price and scope are confirmed only in a written proposal or agreement.</p>
        <h2>Audit</h2><p>The Digital Presence Audit is a focused paid review. It does not guarantee rankings, sales, enquiries or acceptance of a later proposal.</p>
        <h2>Project claims</h2><p>Measured outcomes are identified separately from qualitative outcomes. Evidence notes remain visible where dated proof is still required before public release.</p>
        <h2>Intellectual property</h2><p>Site content and Kraftt brand materials may not be copied or represented as another party’s work. Client and project assets remain subject to their respective rights and agreements.</p>
        <h2>Contact</h2><p>[PENDING: confirm legal entity, jurisdiction and contact details before publish]</p>
      </article><Footer /></main>
  );
}

import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { JsonLd } from '../../components/JsonLd';
import { SiteHeader } from '../../components/SiteHeader';
import { createPageMetadata, createPageSchema } from '../../data/seo';

const pageTitle = 'Privacy Policy | Kraftt Digital';
const pageDescription = 'Read how Kraftt Digital collects, uses, shares and retains information submitted through its website, audit and contact forms.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/legal/privacy-policy', label: 'Privacy policy' });

export default function PrivacyPage() {
  return (
    <main><JsonLd data={createPageSchema({ name: pageTitle, description: pageDescription, path: '/legal/privacy-policy', breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/legal/privacy-policy' }] })} /><SiteHeader /><section className="page-hero legal-hero section-dark"><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p>Last updated: 23 August 2026</p></section>
      <article className="legal-copy">
        <h2>Information collected</h2><p>Kraftt may collect the details you provide through audit and contact forms, including your name, business, contact information, links and project context.</p>
        <h2>How information is used</h2><p>Information is used to assess your request, deliver agreed services, communicate about the engagement and improve the service experience.</p>
        <h2>Sharing and retention</h2><p>Information is not sold. It may be shared with service providers only where needed to operate the site or deliver agreed work. Retention follows legitimate business and legal needs.</p>
        <h2>Your choices</h2><p>You may request access, correction or deletion of your information, subject to applicable obligations.</p>
        <h2>Contact</h2><p>Privacy questions or data requests can be sent through the contact options on this website. Kraftt will verify the request before acting on access, correction or deletion instructions.</p>
      </article><Footer /></main>
  );
}

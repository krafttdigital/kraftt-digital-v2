import type { Metadata } from 'next';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Resources | Kraftt Digital',
  description: 'Kraftt Digital resources template. Articles will be published when the library is ready.',
  alternates: { canonical: '/resources' },
  robots: { index: false, follow: true },
};

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark"><p className="eyebrow">Resources</p><h1>Useful thinking belongs here once it is ready.</h1><p>This template is intentionally unpopulated and remains outside the main navigation until real articles are published.</p></section>
      <section className="content-section section-light empty-resource"><span>00 articles</span><h2>No placeholder content has been published.</h2></section>
      <Footer />
    </main>
  );
}

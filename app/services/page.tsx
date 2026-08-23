import type { Metadata } from 'next';
import Link from 'next/link';
import { AuditCTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { bundles } from '../data/bundles';
import { services } from '../data/services';

export const metadata: Metadata = {
  title: 'Services | Kraftt Digital',
  description: 'Explore eight Kraftt services across websites, commerce, brand, content, creative production and digital systems.',
  alternates: { canonical: '/services' },
};

const grouped = services.reduce<Record<string, typeof services>>((acc, service) => {
  (acc[service.category] ??= []).push(service);
  return acc;
}, {});

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">Services</p>
        <h1>Choose the problem first. Then choose the right service.</h1>
        <p>Eight focused services, each with a real page, visible structure and a direct route to discuss the work.</p>
      </section>

      <section className="content-section section-light service-hub">
        {Object.entries(grouped).map(([category, items]) => (
          <Reveal className="service-group" key={category}>
            <div className="service-group-heading"><p className="eyebrow eyebrow-dark">{category}</p><span>{String(items.length).padStart(2, '0')}</span></div>
            <div className="service-list">
              {items.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <span>{service.name}</span><p>{service.headline}</p><b aria-hidden="true">↗</b>
                </Link>
              ))}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="content-section section-parchment-deep">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow eyebrow-dark">Bundles</p><h2>Connected scopes for businesses that need more than one surface.</h2></div>
          <p>Bundle pricing and scope stay marked pending until the working-system figures are confirmed.</p>
        </Reveal>
        <div className="bundle-grid">
          {bundles.map((bundle) => (
            <Link className="bundle-card" key={bundle.slug} href={`/services/bundles/${bundle.slug}`}>
              <p className="eyebrow eyebrow-dark">Bundle</p><h3>{bundle.name}</h3><p>{bundle.headline}</p><span>View bundle ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <AuditCTA title="Not sure which service fits? Start with the audit." />
      <Footer />
    </main>
  );
}

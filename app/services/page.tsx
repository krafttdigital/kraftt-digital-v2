import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Clock3, Layers3 } from 'lucide-react';
import { Pricing, type ComparisonPlan, type ComparisonRow } from '@/components/ui/pricing-section-with-comparison';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';
import { RegionalPriceCopy } from '../components/PricingCurrencyProvider';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { bundles } from '../data/bundles';
import { createPageMetadata, createPageSchema } from '../data/seo';
import { services } from '../data/services';

const pageTitle = 'Digital Agency Services in India | Kraftt Digital';
const pageDescription = 'Explore Kraftt Digital services in India and Punjab across website design, SEO, branding, content, commerce, creative production and digital systems.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/services', label: 'Digital services · India' });

const grouped = services.reduce<Record<string, typeof services>>((acc, service) => {
  (acc[service.category] ??= []).push(service);
  return acc;
}, {});

const bundlePlans: ComparisonPlan[] = bundles.map((bundle, index) => ({
  name: bundle.name,
  eyebrow: `Bundle 0${index + 1}`,
  description: bundle.headline,
  price: bundle.price,
  timeline: bundle.timeline,
  href: `/services/bundles/${bundle.slug}`,
  featured: bundle.slug === 'full-digital-presence',
}));

const bundleRows: ComparisonRow[] = [
  { label: 'Brand system', values: ['Starter', 'Full identity', 'Full identity', false] },
  { label: 'Website / store', values: ['Business website', 'Shopify Growth', 'Growth website', 'Business website'] },
  { label: 'Social support', values: ['1 month', 'Launch designs', '3 months', '2 months'] },
  { label: 'Search work', values: [false, '1 month', '3 months', '2 months'] },
  { label: 'AI creative', values: [false, 'Brand Kit', false, 'Creative Pack'] },
  { label: 'Best suited to', values: ['New businesses', 'D2C launches', 'Established firms', 'Local businesses'] },
];

export default function ServicesPage() {
  return (
    <main className="services-clarity-page">
      <JsonLd data={createPageSchema({ name: pageTitle, description: pageDescription, path: '/services', breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }] })} />
      <SiteHeader />
      <section className="services-clarity-hero" aria-labelledby="services-page-title">
        <Reveal className="services-clarity-hero-copy" direction="left">
          <p className="eyebrow eyebrow-dark">Services · 08 specialist offers</p>
          <h1 id="services-page-title">Choose the gap.<br /><em>Then the service.</em></h1>
          <p>Clear scopes across brand, websites, commerce, content and systems—with published starting prices and no hidden category names.</p>
          <div className="services-clarity-actions">
            <Link href="#service-menu">Explore all services <span aria-hidden="true">↓</span></Link>
            <Link href="#compare-bundles">Compare bundles <span aria-hidden="true">↘</span></Link>
          </div>
        </Reveal>
        <Reveal className="services-clarity-hero-guide" direction="right">
          <p>Start with what feels unclear</p>
          {Object.entries(grouped).map(([category, items], index) => (
            <a href={`#service-group-${index + 1}`} key={category}>
              <span>0{index + 1}</span><strong>{category}</strong><small>{items.length} service{items.length > 1 ? 's' : ''}</small>
            </a>
          ))}
        </Reveal>
      </section>

      <section className="services-clarity-stats" aria-label="Service overview">
        <div><strong>08</strong><span>Specialist services</span></div>
        <div><strong>24</strong><span>Published service tiers</span></div>
        <div><strong>04</strong><span>Connected bundles</span></div>
        <div><strong><RegionalPriceCopy>₹8K</RegionalPriceCopy></strong><span>Lowest service entry</span></div>
      </section>

      <section className="services-clarity-menu" id="service-menu">
        <Reveal className="services-clarity-menu-heading" direction="scale">
          <p className="eyebrow eyebrow-dark">Service menu · clear entry points</p>
          <h2>Eight ways to solve<br /><em>a specific problem.</em></h2>
          <p>Open a service to compare its three packages, exact inclusions, delivery range and boundaries.</p>
        </Reveal>

        <div className="services-clarity-groups">
          {Object.entries(grouped).map(([category, items], groupIndex) => (
            <div id={`service-group-${groupIndex + 1}`} key={category}>
              <Reveal className="services-clarity-group">
                <div className="services-clarity-group-heading">
                  <div><span>0{groupIndex + 1}</span><p>{category}</p></div>
                  <small>{String(items.length).padStart(2, '0')} service{items.length > 1 ? 's' : ''}</small>
                </div>
                <div className="services-clarity-list">
                  {items.map((service, serviceIndex) => (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <span>{String(serviceIndex + 1).padStart(2, '0')}</span>
                      <div><h3>{service.name}</h3><p>{service.headline}</p></div>
                      <div className="services-clarity-price"><small>Starts at</small><strong><RegionalPriceCopy>{service.tiers[0].price}</RegionalPriceCopy></strong></div>
                      <div className="services-clarity-time"><Clock3 size={15} strokeWidth={1.6} /><span>{service.tiers[0].timeline}</span></div>
                      <i aria-hidden="true"><ArrowUpRight size={18} /></i>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Pricing plans={bundlePlans} rows={bundleRows} />

      <section className="services-clarity-choice">
        <Reveal className="services-clarity-choice-heading" direction="left">
          <p className="eyebrow">Still deciding?</p>
          <h2>You do not need to diagnose the solution alone.</h2>
          <p><RegionalPriceCopy>The ₹999 audit gives you a researched recommendation before a larger commitment.</RegionalPriceCopy></p>
          <Link href="/audit">Start with the audit <span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="services-clarity-choice-steps">
          {[
            ['01', 'Audit the business', 'We study the category, competitors, current systems and visible gaps.'],
            ['02', 'Choose the scope', 'The findings point to a focused service, a bundle or no project yet.'],
            ['03', 'Receive the proposal', 'Deliverables, timeline, cost, payment schedule and responsibilities are written clearly.'],
          ].map(([number, title, copy]) => (
            <Reveal key={number}>
              <div><span>{number}</span><Layers3 size={18} strokeWidth={1.5} /></div>
              <h3>{title}</h3><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

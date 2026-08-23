import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Resources | Kraftt Digital',
  description: 'Practical Kraftt guides for choosing a digital service, preparing for an audit and understanding the working process.',
  alternates: { canonical: '/resources' },
};

const guides = [
  { label: 'Service guide', title: 'Choose the business problem before the package', copy: 'Compare eight services by the problem solved, ideal client, deliverables, price, timeline and exclusions.', href: '/services' },
  { label: 'Audit guide', title: 'What the ₹999 Digital Presence Audit reviews', copy: 'See how Kraftt studies the business, category, competitors, systems and visible gaps before recommending work.', href: '/audit' },
  { label: 'Process guide', title: 'From audit to delivery without hidden stages', copy: 'Understand clarification calls, proposal contents, advance payment, onboarding, research and delivery.', href: '/process' },
  { label: 'Proof guide', title: 'How Kraftt labels project outcomes', copy: 'Measured results, qualitative outcomes, early work and founder projects are separated so each claim keeps the right context.', href: '/work' },
];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark"><p className="eyebrow">Resources</p><h1>Useful context before you choose what to build.</h1><p>Start with the business problem, understand the scope and see how Kraftt separates proof from promise.</p></section>
      <section className="content-section section-light resource-grid">
        {guides.map((guide, index) => (
          <Reveal className="resource-card" key={guide.href}>
            <span>0{index + 1}</span><p className="eyebrow eyebrow-dark">{guide.label}</p><h2>{guide.title}</h2><p>{guide.copy}</p><Link className="text-link text-link-dark" href={guide.href}>Read the guide ↗</Link>
          </Reveal>
        ))}
      </section>
      <Footer />
    </main>
  );
}

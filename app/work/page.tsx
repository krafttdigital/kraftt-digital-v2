import type { Metadata } from 'next';
import { AuditCTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { projects } from '../data/projects';
import { WorkGrid } from './WorkGrid';

export const metadata: Metadata = {
  title: 'Work | Kraftt Digital',
  description: 'Six Kraftt projects across architecture, manufacturing, D2C, beverage, security and founder-led work.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero section-dark">
        <p className="eyebrow">Work</p>
        <h1>Six real projects. Each labelled for what it can honestly prove.</h1>
        <p>Measured outcomes are separated from qualitative ones. Early and internal work is named visibly.</p>
      </section>
      <section className="content-section section-light work-hub">
        <WorkGrid projects={projects} />
      </section>
      <section className="content-section process-reminder section-parchment-deep">
        <Reveal className="split-heading section-heading">
          <div><p className="eyebrow eyebrow-dark">A consistent method</p><h2>Different industries. The same research-first discipline.</h2></div>
          <p>Audit the gap, define the scope, agree the work and deliver the connected presence.</p>
        </Reveal>
      </section>
      <AuditCTA />
      <Footer />
    </main>
  );
}

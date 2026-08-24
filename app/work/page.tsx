import type { Metadata } from 'next';
import Link from 'next/link';
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
    <main className="work-page">
      <SiteHeader />
      <section className="work-page-hero">
        <div className="work-page-hero-inner">
          <Reveal className="work-page-hero-count" direction="left">
            <strong>06</strong>
            <span>Case studies</span>
          </Reveal>

          <Reveal className="work-page-hero-title" direction="scale">
            <p className="eyebrow eyebrow-dark">Selected work</p>
            <h1>Real work.<br /><em>Honest evidence.</em></h1>
          </Reveal>

          <Reveal className="work-page-hero-intro" direction="right">
            <p>Six digital systems shaped around six different business gaps. Every project is labelled by what it can honestly prove.</p>
            <a href="#work-index">Browse the work <span aria-hidden="true">↓</span></a>
          </Reveal>
        </div>

        <Reveal className="work-page-evidence" direction="up">
          <p>Evidence, made clear</p>
          <div><strong>02</strong><span>Measured outcomes</span></div>
          <div><strong>03</strong><span>Qualitative outcomes</span></div>
          <div><strong>01</strong><span>Founder note</span></div>
        </Reveal>
      </section>

      <section className="work-page-index" id="work-index">
        <Reveal className="work-page-index-heading">
          <div><p className="eyebrow eyebrow-dark">Project index</p><span>01 — 06</span></div>
          <h2>Different industries.<br /><em>The same discipline.</em></h2>
          <p>Filter by industry, then open any project to see the context, findings, approach and evidence behind the outcome.</p>
        </Reveal>
        <WorkGrid projects={projects} />
      </section>

      <section className="work-page-method">
        <div className="work-page-method-inner">
          <Reveal className="work-page-method-heading" direction="scale">
            <div><p className="eyebrow">A consistent method</p><span>Research before production</span></div>
            <h2>The work changes.<br /><em>The thinking stays clear.</em></h2>
            <p>Every engagement moves from a real business gap to a defined scope, then into focused production and delivery.</p>
          </Reveal>

          <div className="work-page-method-grid">
            <Reveal><span>01</span><div><strong>Audit the gap</strong><p>Understand the business, category, systems and competitors before recommending a solution.</p></div></Reveal>
            <Reveal delay={0.06}><span>02</span><div><strong>Define the work</strong><p>Make the strategy, deliverables, timeline, price and responsibilities clear before production.</p></div></Reveal>
            <Reveal delay={0.12}><span>03</span><div><strong>Build with context</strong><p>Connect brand, website, content and systems around one commercial idea.</p></div></Reveal>
          </div>

          <Reveal className="work-page-method-actions">
            <Link href="/process">Explore the process <span aria-hidden="true">↗</span></Link>
            <Link href="/audit">Start with an audit <span aria-hidden="true">→</span></Link>
          </Reveal>
        </div>
      </section>
      <AuditCTA />
      <Footer />
    </main>
  );
}

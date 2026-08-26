import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';
import { CurrencySymbol, RegionalPriceCopy } from '../components/PricingCurrencyProvider';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { createPageMetadata, createPageSchema } from '../data/seo';

const pageTitle = 'Kraftt Digital Process | Audit to Delivery';
const pageDescription = 'Follow the Kraftt working system from paid audit and clarification through proposal, onboarding, research, build and delivery.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/process', label: 'How Kraftt works' });

const phases = [
  { number: '01', title: 'Understand', detail: 'Audit and clarify' },
  { number: '02', title: 'Decide', detail: 'Scope and price' },
  { number: '03', title: 'Commit', detail: 'Confirm and onboard' },
  { number: '04', title: 'Build', detail: 'Research and deliver' },
];

const stages = [
  {
    number: '01', icon: '⌕', phase: 'Understand', status: 'Paid · ₹999', title: 'Business audit',
    summary: 'We study the business before recommending what to build.',
    outcome: 'A written view of your category, competitors, current systems, gaps and useful opportunities.',
  },
  {
    number: '02', icon: '?', phase: 'Understand', status: 'Optional', title: 'Audit walkthrough',
    summary: 'If the findings need context, we explain them clearly.',
    outcome: 'You understand the real problem and what the business actually needs—without added obligation.',
  },
  {
    number: '03', icon: '≡', phase: 'Decide', status: 'Free', title: 'Detailed proposal',
    summary: 'The recommended engagement is documented in full.',
    outcome: 'Deliverables, timeline, cost breakup, payment schedule, terms and required client inputs.',
  },
  {
    number: '04', icon: '↗', phase: 'Decide', status: 'Optional', title: 'Proposal walkthrough',
    summary: 'We answer open questions before you make a decision.',
    outcome: 'Clear answers on strategy, price, timeline, payment terms and the value of the scope.',
  },
  {
    number: '05', icon: '₹', phase: 'Commit', status: 'On acceptance', title: 'Advance payment',
    summary: 'The agreed advance confirms the engagement.',
    outcome: 'Your project moves into scheduling and the onboarding process begins.',
  },
  {
    number: '06', icon: '✓', phase: 'Commit', status: 'After payment', title: 'Client onboarding',
    summary: 'We align both sides before production starts.',
    outcome: 'Agreement, invoice, welcome letter and a final call to confirm requirements and responsibilities.',
  },
  {
    number: '07', icon: '→', phase: 'Build', status: 'Work begins', title: 'Research & delivery',
    summary: 'Kraftt begins with analysis—not assumptions.',
    outcome: 'Business and competitor research, professional production, review and delivery of the agreed work.',
  },
];

const clarityPoints = [
  ['◎', 'The problem', 'What is holding the business back and why it matters.'],
  ['□', 'The scope', 'Exactly what Kraftt will deliver—and what sits outside it.'],
  ['₹', 'The investment', 'Cost breakup, payment stages and optional additions.'],
  ['⌁', 'The plan', 'Timeline, responsibilities, inputs and next steps.'],
];

export default function ProcessPage() {
  return (
    <main className="process-clarity-page">
      <JsonLd data={createPageSchema({ name: pageTitle, description: pageDescription, path: '/process', breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Process', path: '/process' }] })} />
      <SiteHeader />

      <section className="process-clarity-hero" aria-labelledby="process-page-title">
        <div className="process-clarity-hero-inner">
          <Reveal className="process-clarity-hero-copy" direction="left">
            <p className="eyebrow eyebrow-dark">How Kraftt works · 01—07</p>
            <h1 id="process-page-title">Clarity before<br /><em>commitment.</em></h1>
            <p>Every project starts with research, moves through a written scope and begins only after you understand what is being built, why it matters and what it costs.</p>
            <div className="process-clarity-actions">
              <Link href="/audit"><RegionalPriceCopy>Request the ₹999 audit</RegionalPriceCopy> <span aria-hidden="true">→</span></Link>
              <Link href="/services">View services <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>

          <Reveal className="process-clarity-audit" direction="right">
            <div className="process-clarity-audit-art">
              <span>Start here</span>
              <Image src="/01-audit.png" alt="Kraftt business audit and research illustration" fill priority sizes="(max-width: 900px) 90vw, 40vw" />
            </div>
            <div className="process-clarity-audit-copy">
              <div><span>01 · Understand</span><strong><RegionalPriceCopy>₹999</RegionalPriceCopy></strong></div>
              <h2>Business audit</h2>
              <p>Business · category · competitors · systems · opportunities</p>
              <small>Paid research delivered before a proposal.</small>
              <Link href="/audit">See what the audit covers <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process-clarity-phases" aria-label="Four phases of the Kraftt process">
        <div className="process-clarity-phases-inner">
          {phases.map((phase) => (
            <div key={phase.number}>
              <span>{phase.number}</span>
              <p><strong>{phase.title}</strong><small>{phase.detail}</small></p>
              <i aria-hidden="true">→</i>
            </div>
          ))}
        </div>
      </section>

      <section className="process-clarity-body">
        <div className="process-clarity-body-inner">
          <aside className="process-clarity-guide">
            <p className="eyebrow eyebrow-dark">The complete path</p>
            <h2>Seven steps.<br />No hidden jumps.</h2>
            <p>Paid, free and optional moments are labelled before you reach them. Each step gives you enough clarity to choose the next one.</p>
            <div>
              <span><b><RegionalPriceCopy>₹999</RegionalPriceCopy></b> first commitment</span>
              <span><b>Free</b> detailed proposal</span>
              <span><b>Optional</b> clarification calls</span>
            </div>
            <Link href="/audit">Begin with the audit <span aria-hidden="true">→</span></Link>
          </aside>

          <div className="process-clarity-steps">
            {stages.map((stage) => (
              <Reveal className="process-clarity-step" key={stage.number}>
                <div className="process-clarity-step-index"><span>{stage.number}</span><i aria-hidden="true">{stage.icon === '₹' ? <CurrencySymbol /> : stage.icon}</i></div>
                <div className="process-clarity-step-copy">
                  <p><span>{stage.phase}</span><strong><RegionalPriceCopy>{stage.status}</RegionalPriceCopy></strong></p>
                  <h3>{stage.title}</h3>
                  <p>{stage.summary}</p>
                </div>
                <div className="process-clarity-step-outcome">
                  <span>You leave with</span>
                  <p>{stage.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-clarity-proof">
        <Reveal className="process-clarity-proof-heading" direction="scale">
          <p className="eyebrow eyebrow-dark">Before work begins</p>
          <h2>You know what you are choosing.</h2>
          <p>Kraftt pricing reflects the research, analysis, professional production and delivery required for the agreed outcome.</p>
        </Reveal>
        <div className="process-clarity-proof-grid">
          {clarityPoints.map(([icon, title, copy]) => (
            <Reveal key={title}><span>{icon === '₹' ? <CurrencySymbol /> : icon}</span><h3>{title}</h3><p>{copy}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="process-clarity-final">
        <div>
          <p className="eyebrow">Ready when the problem is.</p>
          <h2>Start with clarity.<br /><em>Not a sales pitch.</em></h2>
        </div>
        <div>
          <p><RegionalPriceCopy>The ₹999 audit gives you a researched starting point before any larger commitment is proposed.</RegionalPriceCopy></p>
          <div className="process-clarity-actions process-clarity-actions-inverse">
            <Link href="/audit">Request your audit <span aria-hidden="true">→</span></Link>
            <Link href="/contact">Ask a question <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { createPageMetadata, createPageSchema } from '../data/seo';

const pageTitle = 'About Kraftt Digital | Founder-led Digital Agency in India';
const pageDescription = 'Meet Kraftt Digital, a founder-led digital agency in India connecting brand, websites, content and systems around real business needs.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/about', label: 'About Kraftt' });

const principles = [
  ['⌕', 'Research before format', 'We identify the business need before deciding what should be designed or built.'],
  ['✓', 'Proof before claims', 'Measured results, qualitative outcomes and missing evidence are labelled honestly.'],
  ['◎', 'One connected view', 'Brand, website, content and systems reinforce the same commercial idea.'],
  ['□', 'Scope without fog', 'Deliverables, exclusions, timing and decisions are written in plain language.'],
];

const trustNumbers = [
  ['10+', 'Businesses served'],
  ['08', 'Specialist services'],
  ['04', 'Connected categories'],
  ['01', 'Accountable lead'],
];

const goodFit = [
  'You want the business understood before work begins.',
  'You value direct access and documented decisions.',
  'You need several digital pieces to work as one.',
];

const poorFit = [
  'You only need surface decoration without strategy.',
  'You expect guaranteed rankings or invented proof.',
  'You prefer volume over review and delivery discipline.',
];

export default function AboutPage() {
  return (
    <main className="about-clarity-page">
      <JsonLd data={createPageSchema({ name: pageTitle, description: pageDescription, path: '/about', breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }] })} />
      <SiteHeader />

      <section className="about-clarity-hero" aria-labelledby="about-page-title">
        <div className="about-clarity-hero-inner">
          <Reveal className="about-clarity-hero-copy" direction="left">
            <p className="eyebrow eyebrow-dark">Founder-led digital studio · India</p>
            <h1 id="about-page-title">Serious digital work.<br /><em>Made clear.</em></h1>
            <p>Kraftt connects brand, websites, content and digital systems around one goal: make a good business easier to discover, trust and choose.</p>
            <div className="about-clarity-actions">
              <Link href="/process">See how Kraftt works <span aria-hidden="true">→</span></Link>
              <Link href="/work">View selected work <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>

          <Reveal className="about-clarity-visual" direction="right">
            <div className="about-clarity-visual-label"><span>K.</span><p>One clear presence<br />across every surface</p></div>
            <Image
              src="/kraftt-flat-team-hero-transparent.png"
              alt="Kraftt team connecting brand, website and digital growth decisions"
              fill
              priority
              sizes="(max-width: 900px) 94vw, 48vw"
            />
            <div className="about-clarity-founder-tag"><strong>Founder-led</strong><small>One accountable lead</small></div>
          </Reveal>
        </div>
      </section>

      <section className="about-clarity-numbers" aria-label="Kraftt at a glance">
        {trustNumbers.map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="about-clarity-belief">
        <Reveal className="about-clarity-belief-heading" direction="scale">
          <p className="eyebrow eyebrow-dark">Why Kraftt exists</p>
          <h2>Close the gap between<br />the business and its presence.</h2>
          <p>Good businesses often look fragmented online. Identity says one thing, the website says another and internal systems create friction behind the scenes.</p>
        </Reveal>

        <div className="about-clarity-gap-grid">
          <Reveal className="about-clarity-gap-card">
            <span>01 · The gap</span>
            <h3>Real credibility.<br />Unclear online.</h3>
            <p>The business may already be trusted offline, but prospects cannot quickly understand the offer, proof or reason to choose it.</p>
          </Reveal>
          <Reveal className="about-clarity-gap-card about-clarity-gap-card-dark">
            <span>02 · The aim</span>
            <h3>One presence.<br />Built to be chosen.</h3>
            <p>Brand, website, content and systems work together so the digital experience feels as credible as the business itself.</p>
          </Reveal>
        </div>
      </section>

      <section className="about-clarity-founder">
        <Reveal className="about-clarity-founder-mark" direction="left">
          <span>K</span>
          <small>Founder-led<br />since day one</small>
        </Reveal>
        <Reveal className="about-clarity-founder-copy" direction="right">
          <p className="eyebrow">Accountability, not layers</p>
          <h2>One lead stays close to every important decision.</h2>
          <p>Ketan Goyal leads Kraftt from the first audit through direction and delivery. Clients know who is responsible, why a recommendation exists and where the work stands.</p>
          <div>
            <span>Direct access</span><span>Documented decisions</span><span>Research-led direction</span>
          </div>
          <Link href="/work/ketan-goyal">Read the founder project note <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </section>

      <section className="about-clarity-principles">
        <Reveal className="about-clarity-principles-heading">
          <p className="eyebrow eyebrow-dark">Operating principles · 01—04</p>
          <h2>Clear thinking.<br /><em>Calm execution.</em></h2>
          <p>The work stays useful when decisions are researched, connected and easy to explain.</p>
        </Reveal>
        <div className="about-clarity-principles-grid">
          {principles.map(([icon, title, copy], index) => (
            <Reveal key={title}>
              <div><span>0{index + 1}</span><i aria-hidden="true">{icon}</i></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-clarity-fit">
        <Reveal className="about-clarity-fit-heading" direction="scale">
          <p className="eyebrow eyebrow-dark">Is Kraftt a good fit?</p>
          <h2>The working relationship matters.</h2>
          <p>The best engagements begin with aligned expectations—not a forced yes.</p>
        </Reveal>
        <div className="about-clarity-fit-grid">
          <Reveal className="about-clarity-fit-card about-clarity-fit-card-good">
            <span>✓</span><h3>A good fit if…</h3>
            <ul>{goodFit.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href="/audit">Start with the audit <span aria-hidden="true">→</span></Link>
          </Reveal>
          <Reveal className="about-clarity-fit-card">
            <span>×</span><h3>Probably not if…</h3>
            <ul>{poorFit.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href="/contact">Ask before deciding <span aria-hidden="true">↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="about-clarity-final">
        <div>
          <p className="eyebrow">A clearer starting point</p>
          <h2>Understand the gap.<br /><em>Then choose the work.</em></h2>
        </div>
        <div>
          <p>Begin with a ₹999 business audit or explore the process before making a larger commitment.</p>
          <div className="about-clarity-actions about-clarity-actions-inverse">
            <Link href="/audit">Request your audit <span aria-hidden="true">→</span></Link>
            <Link href="/process">Explore the process <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

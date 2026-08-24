import Image from 'next/image';
import Link from 'next/link';
import { InfiniteTextMarquee } from '@/components/ui/infinite-text-marquee';
import { navItems } from '../data/site';
import { BrandWordmark } from './BrandWordmark';

const trustPillars = [
  ['10+', 'Clients served'],
  ['08', 'Specialist services'],
  ['04', 'Ready-to-start bundles'],
  ['01', 'Founder-led contact'],
];

export function HomeShowcase() {
  return (
    <section className="kraftt-hero" aria-labelledby="home-showcase-title">
      <div className="kraftt-hero-shape" aria-hidden="true" />

      <header className="kraftt-hero-nav">
        <Link href="/" aria-label="Kraftt Digital home" className="kraftt-hero-logo">
          <BrandWordmark />
        </Link>

        <nav className="kraftt-hero-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <Link className="kraftt-hero-audit" href="/audit">
          Request an Audit <span aria-hidden="true">↗</span>
        </Link>

        <details className="kraftt-hero-mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/audit">Request an Audit</Link>
          </nav>
        </details>
      </header>

      <div className="kraftt-hero-main">
        <div className="kraftt-hero-copy">
          <p className="kraftt-hero-eyebrow">Research-led digital presence · India</p>
          <h1 id="home-showcase-title">
            Be discovered.<br />
            Be trusted.<br />
            <span>Be chosen.</span>
          </h1>
          <p className="kraftt-hero-intro">We connect brand, websites, content and digital systems into one clear presence—so the business people find online feels as credible as the one you run.</p>
          <div className="kraftt-hero-actions">
            <Link href="/audit">Start with an audit <span aria-hidden="true">→</span></Link>
            <Link href="/work">View selected work <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="kraftt-hero-note" aria-label="Kraftt approach">
            <span>01</span><span>02</span><span>03</span>
            <p>Research. Direction. Delivery.</p>
          </div>
        </div>

        <div className="kraftt-hero-visual">
          <div className="kraftt-hero-visual-orbit" aria-hidden="true">
            <span>Research</span><i /><span>Choice</span>
          </div>
          <Image
            src="/kraftt-flat-team-hero-transparent.png"
            alt="Kraftt team planning a connected brand, website and digital growth system"
            fill
            priority
            sizes="(max-width: 900px) 96vw, 55vw"
          />
          <p><strong>K.</strong><span>One clear presence<br />across every surface</span></p>
        </div>
      </div>

      <div className="kraftt-hero-trust" aria-label="Kraftt trust pillars">
        <p>Trust, made visible.</p>
        {trustPillars.map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </div>

      <div className="kraftt-hero-marquee" aria-label="Kraftt capabilities">
        <InfiniteTextMarquee
          text="Brand · Websites · Commerce · Content · Growth · Systems"
          link="/services"
          speed={28}
          tooltipText="Explore our services ↗"
          fontSize="clamp(1.45rem, 2vw, 2rem)"
          textColor="var(--linen)"
          hoverColor="var(--sand)"
          showTooltip
        />
      </div>
    </section>
  );
}

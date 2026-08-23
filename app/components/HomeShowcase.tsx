import Link from 'next/link';
import { navItems } from '../data/site';
import { BrandWordmark } from './BrandWordmark';

const trustPillars = [
  ['01', 'Research first'],
  ['02', 'Founder-led'],
  ['03', 'Scope stated plainly'],
];

const capabilities = ['Brand', 'Websites', 'Commerce', 'Content', 'Growth', 'Systems'];

export function HomeShowcase() {
  return (
    <section className="home-showcase" aria-labelledby="home-showcase-title">
      <div className="home-showcase-frame">
        <header className="home-showcase-nav">
          <Link href="/" aria-label="Kraftt Digital home" className="home-showcase-logo">
            <BrandWordmark />
          </Link>

          <nav className="home-showcase-desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>

          <Link className="home-showcase-audit" href="/audit">
            Request an Audit <span aria-hidden="true">↗</span>
          </Link>

          <details className="home-showcase-mobile-nav">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              <Link href="/audit">Request an Audit</Link>
            </nav>
          </details>
        </header>

        <div className="home-showcase-hero">
          <div className="home-showcase-copy">
            <p className="home-showcase-eyebrow">Research-led digital presence · India</p>
            <h1 id="home-showcase-title">
              Be discovered.
              <br />Be trusted.
              <br /><span>Be chosen.</span>
            </h1>

            <div className="home-showcase-intro">
              <p>We connect brand, websites, content and digital systems into one clear presence—so the business people find online feels as credible as the one you run.</p>
              <div className="home-showcase-actions">
                <Link href="/audit">Start with an audit <span aria-hidden="true">→</span></Link>
                <Link href="/work">View selected work <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>

          <div className="home-showcase-visual">
            <video autoPlay muted loop playsInline preload="metadata" poster="/hero-banner.png" aria-label="Animated Kraftt digital presence system">
              <source src="/hero-banner-animation.mp4" type="video/mp4" />
            </video>
            <div className="home-showcase-visual-wash" aria-hidden="true" />
            <div className="home-showcase-visual-index" aria-hidden="true"><span>01</span><p>Strategy in motion</p></div>
            <div className="home-showcase-visual-label">
              <span>Research</span><span>Strategy</span><span>Design</span><span>Technology</span>
            </div>
            <div className="home-showcase-seal" aria-label="Kraftt is research first and founder led">
              <strong>K.</strong>
              <span>Research first<br />Founder led</span>
            </div>
          </div>
        </div>

        <div className="home-showcase-proof-frame">
          <div className="home-showcase-metrics" aria-label="Kraftt trust pillars">
            <p>Trust, made visible.</p>
            {trustPillars.map(([number, label]) => (
              <div key={label}><strong>{number}</strong><span>{label}</span></div>
            ))}
          </div>

          <div className="home-showcase-ticker" aria-label="Kraftt capabilities">
            <div className="home-showcase-ticker-track">
              {[...capabilities, ...capabilities].map((item, index) => (
                <span aria-hidden={index >= capabilities.length ? 'true' : undefined} key={`${item}-${index}`}>
                  {item}<b aria-hidden="true">✦</b>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

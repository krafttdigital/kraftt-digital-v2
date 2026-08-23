import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../data/site';

const metrics = [
  ['08', 'Focused services'],
  ['06', 'Documented projects'],
  ['04', 'Connected bundles'],
];

const capabilities = ['Brand', 'Websites', 'Commerce', 'Content', 'Growth', 'Systems'];

export function HomeShowcase() {
  return (
    <section className="home-showcase" aria-labelledby="home-showcase-title">
      <div className="home-showcase-frame">
        <header className="home-showcase-nav">
          <Link href="/" aria-label="Kraftt Digital home" className="home-showcase-logo">
            <Image
              src="/assets/brand/kraftt-primary-light.png"
              alt="Kraftt Digital"
              width={2048}
              height={1024}
              priority
            />
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
            <p className="home-showcase-eyebrow">Independent digital studio · India</p>
            <h1 id="home-showcase-title">
              Digital presence
              <br />for brands
              <br /><span>that mean it.</span>
            </h1>

            <div className="home-showcase-intro">
              <p>We connect brand, websites, content and digital systems into one clear presence—built around how your business actually works.</p>
              <div className="home-showcase-actions">
                <Link href="/audit">Start with an audit <span aria-hidden="true">→</span></Link>
                <Link href="/work">View selected work <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>

          <div className="home-showcase-visual">
            <Image
              src="/hero-banner.png"
              alt="Kraftt team mapping brand, website, content and growth systems around a strategy table"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              priority
            />
            <div className="home-showcase-visual-wash" aria-hidden="true" />
            <div className="home-showcase-visual-label">
              <span>Research</span><span>Strategy</span><span>Design</span><span>Technology</span>
            </div>
            <div className="home-showcase-seal" aria-label="Kraftt is research first and founder led">
              <strong>K.</strong>
              <span>Research first<br />Founder led</span>
            </div>
          </div>
        </div>

        <div className="home-showcase-metrics" aria-label="Kraftt at a glance">
          <p>One connected digital presence. No disconnected deliverables.</p>
          {metrics.map(([number, label]) => (
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
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../data/site';

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? ' site-header-overlay' : ''}`}>
      <Link href="/" aria-label="Kraftt Digital home" className="brand-link">
        <Image
          src="/assets/brand/kraftt-primary-light.png"
          alt="Kraftt Digital"
          width={2048}
          height={1024}
          priority
        />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>

      <Link className="button button-light header-cta" href="/audit">
        Request an Audit
      </Link>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/audit">Request a Digital Presence Audit</Link>
        </nav>
      </details>
    </header>
  );
}

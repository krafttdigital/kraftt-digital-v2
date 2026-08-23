import Link from 'next/link';
import { navItems } from '../data/site';
import { BrandWordmark } from './BrandWordmark';

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? ' site-header-overlay' : ''}`}>
      <Link href="/" aria-label="Kraftt Digital home" className="brand-link">
        <BrandWordmark inverse />
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

import Link from 'next/link';
import { bundles } from '../data/bundles';
import { services } from '../data/services';
import { BrandWordmark } from './BrandWordmark';

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="footer-brand">
        <Link className="footer-logo" href="/" aria-label="Kraftt Digital home">
          <BrandWordmark inverse />
        </Link>
        <p>Brand, websites, content and digital systems — connected around the business.</p>
        <Link className="button button-accent footer-cta" href="/audit">Request a Digital Presence Audit</Link>
      </div>
      <div>
        <p className="footer-label">Services</p>
        {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}
      </div>
      <div>
        <p className="footer-label">Bundles</p>
        {bundles.map((bundle) => <Link key={bundle.slug} href={`/services/bundles/${bundle.slug}`}>{bundle.name}</Link>)}
      </div>
      <div>
        <p className="footer-label">Kraftt</p>
        <Link href="/work">Work</Link>
        <Link href="/process">Process</Link>
        <Link href="/about">About</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/legal/privacy-policy">Privacy policy</Link>
        <Link href="/legal/terms">Terms</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kraftt Digital</span>
        <span>India · Working with clients worldwide</span>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { bundles } from '../data/bundles';
import { services } from '../data/services';
import { contactEmail, contactPhone, contactPhoneHref, whatsappUrl } from '../data/site';
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
        <div className="footer-contact-links" aria-label="Contact Kraftt Digital">
          <a href={`mailto:${contactEmail}`}><span>Email</span><strong>{contactEmail}</strong></a>
          <a href={contactPhoneHref}><span>Call</span><strong>{contactPhone}</strong></a>
          <a href={whatsappUrl('Hi Kraftt, I would like to discuss a digital presence project.')} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contactPhone}</strong></a>
        </div>
        <div className="footer-socials" aria-label="Kraftt Digital social profiles">
          <a href="https://www.instagram.com/krafttdigital" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/company/krafttdigital" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-desktop-column">
        <p className="footer-label">Services</p>
        {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}
      </div>
      <div className="footer-desktop-column">
        <p className="footer-label">Bundles</p>
        {bundles.map((bundle) => <Link key={bundle.slug} href={`/services/bundles/${bundle.slug}`}>{bundle.name}</Link>)}
      </div>
      <div className="footer-desktop-column">
        <p className="footer-label">Kraftt</p>
        <Link href="/work">Work</Link>
        <Link href="/process">Process</Link>
        <Link href="/about">About</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/legal/privacy-policy">Privacy policy</Link>
        <Link href="/legal/terms">Terms</Link>
      </div>
      <div className="footer-mobile-groups" aria-label="Footer navigation">
        <details>
          <summary>Services <span aria-hidden="true">+</span></summary>
          <div>{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div>
        </details>
        <details>
          <summary>Bundles <span aria-hidden="true">+</span></summary>
          <div>{bundles.map((bundle) => <Link key={bundle.slug} href={`/services/bundles/${bundle.slug}`}>{bundle.name}</Link>)}</div>
        </details>
        <details>
          <summary>Kraftt <span aria-hidden="true">+</span></summary>
          <div>
            <Link href="/work">Work</Link>
            <Link href="/process">Process</Link>
            <Link href="/about">About</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/legal/privacy-policy">Privacy policy</Link>
            <Link href="/legal/terms">Terms</Link>
          </div>
        </details>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kraftt Digital</span>
        <span>India · Working with clients worldwide</span>
      </div>
    </footer>
  );
}

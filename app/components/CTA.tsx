import Link from 'next/link';
import { RegionalPriceCopy } from './PricingCurrencyProvider';
import { Reveal } from './Reveal';

type AuditCTAProps = {
  title?: string;
  theme?: 'dark' | 'light';
};

export function AuditCTA({
  title = 'Start with a clear view of what needs to change.',
  theme = 'dark',
}: AuditCTAProps) {
  const isLight = theme === 'light';

  return (
    <section className={`cta-section ${isLight ? 'cta-section-light section-light' : 'section-dark'}`}>
      <Reveal>
        <p className={`eyebrow${isLight ? ' eyebrow-dark' : ''}`}><RegionalPriceCopy>Digital Presence Audit · ₹999</RegionalPriceCopy></p>
        <h2>{title}</h2>
        <p>A focused review of how your business is discovered, understood, trusted and contacted.</p>
        <Link className="button button-accent" href="/audit">Request a Digital Presence Audit</Link>
      </Reveal>
    </section>
  );
}

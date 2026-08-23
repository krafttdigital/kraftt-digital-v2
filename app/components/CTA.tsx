import Link from 'next/link';
import { Reveal } from './Reveal';

export function AuditCTA({ title = 'Start with a clear view of what needs to change.' }: { title?: string }) {
  return (
    <section className="cta-section section-dark">
      <Reveal>
        <p className="eyebrow">Digital Presence Audit · ₹999</p>
        <h2>{title}</h2>
        <p>A focused review of how your business is discovered, understood, trusted and contacted.</p>
        <Link className="button button-accent" href="/audit">Request a Digital Presence Audit</Link>
      </Reveal>
    </section>
  );
}

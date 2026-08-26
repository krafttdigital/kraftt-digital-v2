import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  ScanSearch,
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { JsonLd } from '../components/JsonLd';
import { RegionalPriceCopy } from '../components/PricingCurrencyProvider';
import { Reveal } from '../components/Reveal';
import { SiteHeader } from '../components/SiteHeader';
import { createPageMetadata, createPageSchema } from '../data/seo';
import { contactEmail, contactPhone, contactPhoneHref, whatsappUrl } from '../data/site';

const pageTitle = 'Contact Kraftt Digital | Start with Clarity';
const pageDescription = 'Contact Kraftt Digital, request a ₹999 Digital Presence Audit, or compare services and published pricing before starting a project.';

export const metadata: Metadata = createPageMetadata({ title: pageTitle, description: pageDescription, path: '/contact', label: 'Contact Kraftt' });

const whatsappProjectUrl = whatsappUrl('Hi Kraftt, I would like to discuss a digital presence project.');

export default function ContactPage() {
  return (
    <main className="contact-page">
      <JsonLd data={createPageSchema({ name: pageTitle, description: pageDescription, path: '/contact', breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }] })} />
      <SiteHeader />

      <section className="contact-hero section-light">
        <Reveal className="contact-hero-copy">
          <p className="eyebrow eyebrow-dark">Contact Kraftt</p>
          <h1>Start with the right conversation.</h1>
          <p>Tell us what feels unclear—or choose the route that already fits. You will get a clear next step, scope and price.</p>
          <div className="button-row">
            <Link className="button button-accent" href="/audit"><RegionalPriceCopy>Start with the ₹999 audit</RegionalPriceCopy> <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <Link className="button button-outline-dark" href="/services">Explore services <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="contact-trust-line" aria-label="Kraftt service principles">
            <span><Check size={13} aria-hidden="true" /> Founder-led</span>
            <span><Check size={13} aria-hidden="true" /> Clear pricing</span>
            <span><Check size={13} aria-hidden="true" /> No forced upsell</span>
          </div>
        </Reveal>

        <Reveal className="contact-route-guide" direction="right" delay={0.08}>
          <p className="eyebrow">Choose your route</p>
          <h2>What do you know right now?</h2>
          <ol>
            <li>
              <span>01</span>
              <div><strong>I am not sure what I need.</strong><p>Use the audit to find the real business gap first.</p></div>
              <Link href="/audit" aria-label="Request a Digital Presence Audit"><ArrowUpRight size={17} /></Link>
            </li>
            <li>
              <span>02</span>
              <div><strong>I know the service I need.</strong><p>Compare deliverables, timelines and published pricing.</p></div>
              <Link href="/services" aria-label="Explore Kraftt services"><ArrowUpRight size={17} /></Link>
            </li>
            <li>
              <span>03</span>
              <div><strong>I want to talk first.</strong><p>Open a direct WhatsApp conversation with Kraftt.</p></div>
              <a href={whatsappProjectUrl} target="_blank" rel="noreferrer" aria-label="Talk to Kraftt on WhatsApp"><ArrowUpRight size={17} /></a>
            </li>
          </ol>
        </Reveal>
      </section>

      <section className="contact-choice-section section-parchment-deep">
        <Reveal className="contact-choice-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Two clear ways to begin</p>
            <h2>Choose clarity before commitment.</h2>
          </div>
          <p>Start with evidence when the need is unclear. Start with the service menu when you already know the outcome you want.</p>
        </Reveal>

        <div className="contact-choice-grid">
          <Reveal className="contact-choice-card contact-choice-card-audit" direction="left">
            <div className="contact-choice-card-top">
              <span>01 · Diagnose first</span>
              <ScanSearch size={24} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div>
              <p className="contact-choice-label">Recommended when the problem is unclear</p>
              <h3>Digital Presence Audit</h3>
              <p>We study your business, category, competitors and current systems, then show what needs attention and what should happen next.</p>
            </div>
            <dl>
              <div><dt>Price</dt><dd><RegionalPriceCopy>₹999</RegionalPriceCopy></dd></div>
              <div><dt>You receive</dt><dd>Findings + direction</dd></div>
              <div><dt>Commitment</dt><dd>Audit only</dd></div>
            </dl>
            <Link className="button button-accent" href="/audit">Request the audit <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </Reveal>

          <Reveal className="contact-choice-card contact-choice-card-services" direction="right" delay={0.08}>
            <div className="contact-choice-card-top">
              <span>02 · Choose a scope</span>
              <Layers3 size={24} strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div>
              <p className="contact-choice-label">Best when the requirement is already clear</p>
              <h3>Services &amp; bundles</h3>
              <p>Compare focused services and connected bundles with clear deliverables, starting prices and realistic timelines.</p>
            </div>
            <dl>
              <div><dt>Specialist services</dt><dd>08</dd></div>
              <div><dt>Curated bundles</dt><dd>04</dd></div>
              <div><dt>Pricing</dt><dd>Published</dd></div>
            </dl>
            <Link className="button button-outline-dark" href="/services">View all services <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="contact-direct-section section-light">
        <Reveal className="contact-direct-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Direct contact</p>
            <h2>Prefer a conversation?</h2>
          </div>
          <p>Reach Kraftt directly. Share the business context you already have—we will help identify the most useful next step.</p>
        </Reveal>

        <div className="contact-direct-grid" aria-label="Direct contact options">
          <a href={`mailto:${contactEmail}`}>
            <span className="contact-direct-icon"><Mail size={19} strokeWidth={1.5} aria-hidden="true" /></span>
            <small>Email</small>
            <strong>{contactEmail}</strong>
            <p>Best for documents, references or a detailed brief.</p>
            <ArrowUpRight className="contact-direct-arrow" size={18} aria-hidden="true" />
          </a>
          <a href={contactPhoneHref}>
            <span className="contact-direct-icon"><Phone size={19} strokeWidth={1.5} aria-hidden="true" /></span>
            <small>Call</small>
            <strong>{contactPhone}</strong>
            <p>Best for a quick, direct conversation.</p>
            <ArrowUpRight className="contact-direct-arrow" size={18} aria-hidden="true" />
          </a>
          <a href={whatsappProjectUrl} target="_blank" rel="noreferrer">
            <span className="contact-direct-icon"><MessageCircle size={19} strokeWidth={1.5} aria-hidden="true" /></span>
            <small>WhatsApp</small>
            <strong>{contactPhone}</strong>
            <p>Best for a fast introduction and project context.</p>
            <ArrowUpRight className="contact-direct-arrow" size={18} aria-hidden="true" />
          </a>
        </div>

        <Reveal className="contact-next-strip">
          <p>What happens next</p>
          <ol>
            <li><span>01</span><strong>We review your context</strong></li>
            <li><span>02</span><strong>We recommend the right route</strong></li>
            <li><span>03</span><strong>You receive a clear next action</strong></li>
          </ol>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

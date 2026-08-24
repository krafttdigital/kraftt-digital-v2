import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, FileCheck2, Layers3, Minus, ShieldCheck } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { JsonLd } from '../../components/JsonLd';
import { Reveal } from '../../components/Reveal';
import { SiteHeader } from '../../components/SiteHeader';
import { projectBySlug } from '../../data/projects';
import { serviceBySlug, services } from '../../data/services';
import { siteUrl, whatsappUrl } from '../../data/site';

const projectProofBanners: Record<string, { src: string; alt: string }> = {
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, project portfolio and search visibility case study collage' },
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex industrial website and search presence case study collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery brand, storefront and product management case study collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages identity and pre-launch website case study collage' },
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Kraftt Digital`,
    description: service.headline,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.name} | Kraftt Digital`, description: service.headline, images: [] },
    twitter: { card: 'summary', title: `${service.name} | Kraftt Digital`, description: service.headline, images: [] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const relatedProject = projectBySlug(service.relatedProjectSlug);
  const relatedBanner = relatedProject ? projectProofBanners[relatedProject.slug] : undefined;
  const serviceNumber = services.findIndex((item) => item.slug === service.slug) + 1;
  const serviceMessage = whatsappUrl(`Hi Kraftt, I'd like to discuss ${service.name}.`);

  return (
    <main className="service-detail-v2">
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: service.name, description: service.problemSolved,
        provider: { '@type': 'Organization', name: 'Kraftt Digital', url: siteUrl },
        url: `${siteUrl}/services/${service.slug}`,
      }} />
      <SiteHeader />

      <section className="service-detail-hero" aria-labelledby="service-detail-title">
        <div className="service-detail-hero-inner">
          <Reveal className="service-detail-kicker" direction="left">
            <Link href="/services"><ArrowLeft size={15} /> All services</Link>
            <span>{service.category} · {String(serviceNumber).padStart(2, '0')} / 08</span>
          </Reveal>

          <div className="service-detail-hero-grid">
            <Reveal className="service-detail-hero-copy" direction="left">
              <p className="eyebrow">{service.category}</p>
              <h1 id="service-detail-title">{service.name}</h1>
              <p>{service.headline}</p>
              <div className="service-detail-actions">
                <Link href="#packages">Compare packages <span aria-hidden="true">↓</span></Link>
                <a href={serviceMessage}>Discuss this service <ArrowRight size={15} /></a>
              </div>
            </Reveal>

            <Reveal className="service-detail-facts" direction="right">
              <div><span>Starting at</span><strong>{service.tiers[0].price}</strong></div>
              <div><span>First-tier delivery</span><strong>{service.tiers[0].timeline}</strong></div>
              <div><span>Package choices</span><strong>03 clear tiers</strong></div>
              <small>Final scope, timeline and payment schedule are confirmed in the proposal.</small>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-detail-context">
        <div className="service-detail-context-inner">
          <Reveal className="service-detail-context-heading" direction="scale">
            <p className="eyebrow eyebrow-dark">Start with the business need</p>
            <h2>Know the fit before<br /><em>choosing the tier.</em></h2>
            <p>The package is useful only when it solves a specific operating or customer-facing gap.</p>
          </Reveal>
          <div className="service-detail-context-grid">
            <Reveal className="service-detail-context-card">
              <div><span>01</span><ShieldCheck size={19} strokeWidth={1.5} /></div>
              <p className="eyebrow eyebrow-dark">Built for</p>
              <h3>{service.idealClient}</h3>
            </Reveal>
            <Reveal className="service-detail-context-card service-detail-context-card-dark">
              <div><span>02</span><Layers3 size={19} strokeWidth={1.5} /></div>
              <p className="eyebrow">Problem solved</p>
              <h3>{service.problemSolved}</h3>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="service-detail-packages" id="packages">
        <Reveal className="service-detail-packages-heading">
          <div><p className="eyebrow eyebrow-dark">Three tiers · published pricing</p><span>01—03</span></div>
          <h2>Choose the depth.<br /><em>Keep the scope clear.</em></h2>
          <p>Each tier shows what is delivered, how long it usually takes and what can be added. No generic feature names.</p>
        </Reveal>
        <div className="service-detail-package-grid">
          {service.tiers.map((tier, index) => {
            const message = `Hi Kraftt, I'd like to discuss the ${tier.name} tier for ${service.name}.`;
            return (
              <Reveal className={`service-detail-package${index === 1 ? ' is-featured' : ''}`} key={tier.name}>
                <div className="service-detail-package-top">
                  <span>0{index + 1}</span>
                  {index === 1 && <strong>Most chosen</strong>}
                </div>
                <h3>{tier.name}</h3>
                <div className="service-detail-package-price"><strong>{tier.price}</strong><span><Clock3 size={13} /> {tier.timeline}</span></div>
                <p className="service-detail-includes-label">What you receive</p>
                <ul className="service-detail-package-list">{tier.deliverables.map((item) => <li key={item}><Check size={14} strokeWidth={1.8} /><span>{item}</span></li>)}</ul>
                {tier.addOns && tier.addOns.length > 0 && (
                  <details className="service-detail-addons">
                    <summary>Optional add-ons <span aria-hidden="true">+</span></summary>
                    <ul>{tier.addOns.map((item) => <li key={item}>{item}</li>)}</ul>
                  </details>
                )}
                <a className="service-detail-package-cta" href={whatsappUrl(message)}>Discuss this tier <ArrowRight size={15} /></a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="service-detail-boundaries">
        <Reveal className="service-detail-boundaries-heading" direction="left">
          <p className="eyebrow">Scope without fog</p>
          <h2>What stays clear<br />before work begins.</h2>
          <p>The proposal names the deliverables, boundaries, client inputs and commercial terms.</p>
          <Link href="/process">Explore the full process <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="service-detail-boundaries-grid">
          <Reveal className="service-detail-boundary-card">
            <div><FileCheck2 size={19} /><span>Core deliverables</span></div>
            <ul>{service.mainDeliverables.map((item) => <li key={item}><Check size={14} /><span>{item}</span></li>)}</ul>
          </Reveal>
          <Reveal className="service-detail-boundary-card service-detail-boundary-card-muted">
            <div><Minus size={19} /><span>Not included by default</span></div>
            <ul>{service.notIncluded.map((item) => <li key={item}><Minus size={14} /><span>{item}</span></li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="service-detail-workflow">
        <Reveal className="service-detail-workflow-heading">
          <p className="eyebrow eyebrow-dark">How delivery runs</p>
          <h2>A visible path from<br /><em>brief to handover.</em></h2>
          <p>Every stage has a job, an output and a clear next decision.</p>
        </Reveal>
        <div className={`service-detail-workflow-grid service-detail-workflow-${service.workflow.length}`}>
          {service.workflow.map((step, index) => (
            <Reveal className="service-detail-workflow-step" key={step.title}>
              <div><span>0{index + 1}</span><i aria-hidden="true">{index === service.workflow.length - 1 ? '✓' : '→'}</i></div>
              <h3>{step.title}</h3><p>{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-detail-fit">
        <Reveal className="service-detail-fit-heading" direction="left">
          <p className="eyebrow">Good fit check</p>
          <h2>This service makes sense when…</h2>
        </Reveal>
        <div className="service-detail-fit-grid">{service.goodFitWhen.map((item, index) => <Reveal key={item}><span>0{index + 1}</span><Check size={19} /><p>{item}</p></Reveal>)}</div>
        <Reveal className="service-detail-fit-cta">
          <p>Not sure the need is specific enough?</p>
          <Link href="/audit">Start with the ₹999 audit <ArrowRight size={15} /></Link>
        </Reveal>
      </section>

      {relatedProject && (
        <section className="service-detail-related">
          <div className="service-detail-related-inner">
            <Reveal className="service-detail-related-heading" direction="left">
              <p className="eyebrow eyebrow-dark">Related work · documented proof</p>
              <h2>See the service<br /><em>inside real work.</em></h2>
              <p>Review the business gap, research, delivered system and available outcome evidence—not just finished screens.</p>
              <Link href={`/work/${relatedProject.slug}`}>Read the complete case study <ArrowRight size={15} /></Link>
            </Reveal>

            <Reveal className="service-detail-related-feature" direction="right">
              <Link href={`/work/${relatedProject.slug}`} aria-label={`View ${relatedProject.name} case study`}>
                <div className="service-detail-related-media">
                  {relatedBanner ? (
                    <Image src={relatedBanner.src} alt={relatedBanner.alt} fill sizes="(max-width: 900px) 94vw, 58vw" />
                  ) : relatedProject.hero ? (
                    <Image src={relatedProject.hero.src} alt={relatedProject.hero.alt} fill sizes="(max-width: 900px) 94vw, 58vw" />
                  ) : (
                    <div><span>{relatedProject.industry}</span><strong>{relatedProject.name}</strong></div>
                  )}
                  <span>{relatedProject.outcomeType} proof</span>
                </div>
                <div className="service-detail-related-copy">
                  <div><p>{relatedProject.industry}</p><ArrowUpRight size={19} /></div>
                  <h3>{relatedProject.name}</h3>
                  <p>{relatedProject.context}</p>
                  <dl><dt>Engagement</dt><dd>{relatedProject.package}</dd></dl>
                  <div className="service-detail-related-metrics">
                    {relatedProject.metrics.slice(0, 2).map((metric) => (
                      <span key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><small>{metric.label}</small></span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="service-detail-faq">
        <div className="service-detail-faq-inner">
          <Reveal className="service-detail-faq-heading" direction="left">
            <p className="eyebrow eyebrow-dark">Frequently asked questions</p>
            <h2>Useful answers.<br /><em>No sales fog.</em></h2>
            <p>Project-specific details are confirmed after the audit and written into the proposal.</p>
            <div><strong>{String(service.faqs.length).padStart(2, '0')}</strong><span>Questions answered<br />for this service</span></div>
            <Link href="/contact">Ask something else <ArrowRight size={15} /></Link>
          </Reveal>
          <div className="service-detail-faq-list">
            {service.faqs.map((item, index) => (
              <details key={item.question}>
                <summary><small>0{index + 1}</small><span>{item.question}</span><i aria-hidden="true">+</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-final">
        <div>
          <p className="eyebrow">Choose the next clear step</p>
          <h2>Audit first.<br /><em>Build with confidence.</em></h2>
        </div>
        <div>
          <p>Begin with the ₹999 audit if the exact requirement is still unclear, or discuss {service.name.toLowerCase()} directly if the scope is already defined.</p>
          <div className="service-detail-final-actions">
            <Link href="/audit">Request the audit <ArrowRight size={15} /></Link>
            <a href={serviceMessage}>Discuss this service <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

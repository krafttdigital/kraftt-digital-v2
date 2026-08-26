import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, Layers3, Minus, ShieldCheck } from 'lucide-react';
import { Footer } from '../../../components/Footer';
import { JsonLd } from '../../../components/JsonLd';
import { RegionalPriceCopy } from '../../../components/PricingCurrencyProvider';
import { Reveal } from '../../../components/Reveal';
import { SiteHeader } from '../../../components/SiteHeader';
import { bundleBySlug, bundles } from '../../../data/bundles';
import { projectBySlug } from '../../../data/projects';
import { createPageMetadata, createPageSchema, serviceSchema } from '../../../data/seo';
import { whatsappUrl } from '../../../data/site';

const projectProofBanners: Record<string, { src: string; alt: string }> = {
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, project portfolio and search visibility case study collage' },
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex industrial website and search presence case study collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery brand, storefront and product management case study collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages identity and pre-launch website case study collage' },
};

export const dynamic = 'force-dynamic';
export const dynamicParams = false;

export function generateStaticParams() {
  return bundles.map((bundle) => ({ slug: bundle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bundle = bundleBySlug(slug);
  if (!bundle) return {};
  return createPageMetadata({
    title: `${bundle.name} Bundle | Kraftt Digital`,
    description: bundle.headline,
    path: `/services/bundles/${bundle.slug}`,
    label: 'Connected service bundle',
  });
}

export default async function BundlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bundle = bundleBySlug(slug);
  if (!bundle) notFound();
  const relatedProject = projectBySlug(bundle.relatedProjectSlug);
  const relatedBanner = relatedProject ? projectProofBanners[relatedProject.slug] : undefined;
  const bundleNumber = bundles.findIndex((item) => item.slug === bundle.slug) + 1;
  const bundleMessage = whatsappUrl(`Hi Kraftt, I'd like to discuss the ${bundle.name} bundle.`);

  return (
    <main className="bundle-detail-v3">
      <JsonLd data={createPageSchema({
        name: `${bundle.name} Bundle | Kraftt Digital`,
        description: bundle.headline,
        path: `/services/bundles/${bundle.slug}`,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: bundle.name, path: `/services/bundles/${bundle.slug}` },
        ],
        entities: [serviceSchema({ name: bundle.name, description: bundle.problemSolved, path: `/services/bundles/${bundle.slug}` })],
      })} />
      <SiteHeader />

      <section className="bundle-detail-hero" aria-labelledby="bundle-detail-title">
        <div className="bundle-detail-hero-inner">
          <Reveal className="bundle-detail-kicker" direction="left">
            <Link href="/services"><ArrowLeft size={15} /> All services</Link>
            <span>Bundle {String(bundleNumber).padStart(2, '0')} / {String(bundles.length).padStart(2, '0')}</span>
          </Reveal>

          <div className="bundle-detail-hero-grid">
            <Reveal className="bundle-detail-hero-copy" direction="left">
              <p className="eyebrow">Connected service bundle</p>
              <h1 id="bundle-detail-title">{bundle.name}</h1>
              <p>{bundle.headline}</p>
              <div className="bundle-detail-actions">
                <Link href="#included">See what is included <span aria-hidden="true">↓</span></Link>
                <a href={bundleMessage}>Discuss this bundle <ArrowRight size={15} /></a>
              </div>
            </Reveal>

            <Reveal className="bundle-detail-overview" direction="right">
              <div className="bundle-detail-overview-heading">
                <span>At a glance</span>
                <Layers3 size={19} strokeWidth={1.5} />
              </div>
              <dl>
                <div><dt>Investment</dt><dd><RegionalPriceCopy>{bundle.price}</RegionalPriceCopy></dd></div>
                <div><dt>Timeline</dt><dd>{bundle.timeline}</dd></div>
                <div><dt>Connected scopes</dt><dd>{String(bundle.deliverables.length).padStart(2, '0')}</dd></div>
              </dl>
              <p>Final deliverables, timeline and payment schedule are confirmed in your proposal.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bundle-detail-context">
        <div className="bundle-detail-section-heading">
          <Reveal direction="left">
            <p className="eyebrow eyebrow-dark">Understand the fit</p>
            <h2>One bundle.<br /><em>One connected outcome.</em></h2>
          </Reveal>
          <Reveal direction="right">
            <p>Use a bundle when several parts of the customer journey need to improve together—not as separate, disconnected jobs.</p>
          </Reveal>
        </div>

        <div className="bundle-detail-context-grid">
          <Reveal className="bundle-detail-context-card">
            <div><span>01</span><ShieldCheck size={20} strokeWidth={1.5} /></div>
            <p className="eyebrow eyebrow-dark">Built for</p>
            <h3>{bundle.idealClient}</h3>
          </Reveal>
          <Reveal className="bundle-detail-context-card is-dark">
            <div><span>02</span><Layers3 size={20} strokeWidth={1.5} /></div>
            <p className="eyebrow">Problem it solves</p>
            <h3>{bundle.problemSolved}</h3>
          </Reveal>
        </div>
      </section>

      <section className="bundle-detail-scope" id="included">
        <div className="bundle-detail-scope-inner">
          <Reveal className="bundle-detail-scope-heading" direction="left">
            <p className="eyebrow">What is included</p>
            <h2>Several services.<br /><em>One accountable scope.</em></h2>
            <p>Each part has a defined job, but planning and delivery stay connected from the first decision to final handover.</p>
            <Link href="/process">Explore how Kraftt works <ArrowRight size={15} /></Link>
          </Reveal>

          <div className="bundle-detail-deliverables">
            {bundle.deliverables.map((item, index) => (
              <Reveal className="bundle-detail-deliverable" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Check size={18} strokeWidth={1.6} />
                <h3>{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="bundle-detail-exclusions">
          <div>
            <Minus size={18} />
            <div><p className="eyebrow">Scope boundaries</p><h3>Not included by default</h3></div>
          </div>
          <ul>{bundle.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
        </Reveal>
      </section>

      <section className="bundle-detail-fit">
        <Reveal className="bundle-detail-fit-heading" direction="left">
          <p className="eyebrow eyebrow-dark">Good fit check</p>
          <h2>This bundle makes sense when…</h2>
        </Reveal>
        <div className="bundle-detail-fit-grid">
          {bundle.goodFitWhen.map((item, index) => (
            <Reveal key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Check size={18} />
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="bundle-detail-fit-cta">
          <div><Clock3 size={18} /><p>Unsure whether a bundle or one service is the right scope?</p></div>
          <Link href="/audit"><RegionalPriceCopy>Start with the ₹999 audit</RegionalPriceCopy> <ArrowRight size={15} /></Link>
        </Reveal>
      </section>

      {relatedProject && (
        <section className="bundle-detail-related">
          <div className="bundle-detail-related-heading">
            <Reveal direction="left">
              <p className="eyebrow eyebrow-dark">Related proof</p>
              <h2>See connected work<br /><em>in practice.</em></h2>
            </Reveal>
            <Reveal direction="right">
              <p>A real engagement showing how multiple digital surfaces can support one clearer business presence.</p>
              <Link href={`/work/${relatedProject.slug}`}>Read the case study <ArrowRight size={15} /></Link>
            </Reveal>
          </div>
          <Reveal className="bundle-detail-proof-feature">
            <Link href={`/work/${relatedProject.slug}`} aria-label={`View ${relatedProject.name} case study`}>
              <div className="bundle-detail-proof-media">
                {relatedBanner ? (
                  <Image
                    src={relatedBanner.src}
                    alt={relatedBanner.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 68vw"
                  />
                ) : relatedProject.hero ? (
                  <Image
                    src={relatedProject.hero.src}
                    alt={relatedProject.hero.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 68vw"
                  />
                ) : (
                  <div><span>{relatedProject.industry}</span><strong>{relatedProject.name}</strong></div>
                )}
                <span>{relatedProject.outcomeType} proof</span>
              </div>

              <div className="bundle-detail-proof-copy">
                <div><p>{relatedProject.industry}</p><ArrowUpRight size={19} /></div>
                <h3>{relatedProject.name}</h3>
                <p>{relatedProject.context}</p>
                <dl><dt>Engagement</dt><dd>{relatedProject.package}</dd></dl>
                <div className="bundle-detail-proof-metrics">
                  {relatedProject.metrics.slice(0, 2).map((metric) => (
                    <span key={`${metric.value}-${metric.label}`}>
                      <strong>{metric.value}</strong>
                      <small>{metric.label}</small>
                    </span>
                  ))}
                </div>
                <span className="bundle-detail-proof-link">View complete case study <ArrowRight size={15} /></span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="bundle-detail-final">
        <Reveal direction="left">
          <p className="eyebrow">Choose the next clear step</p>
          <h2>Define the scope.<br /><em>Then build as one.</em></h2>
        </Reveal>
        <Reveal direction="right">
          <p>Start with the audit if the exact combination is still unclear, or discuss {bundle.name} directly if the need is already defined.</p>
          <div>
            <Link href="/audit">Request the audit <ArrowRight size={15} /></Link>
            <a href={bundleMessage}>Discuss this bundle <ArrowRight size={15} /></a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock3, Layers3, Minus, X } from 'lucide-react';
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
  const namedInclusionCount = bundle.inclusions.reduce((total, inclusion) => total + inclusion.items.length, 0);
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
            <h2>Choose by business fit.<br /><em>Then check readiness.</em></h2>
          </Reveal>
          <Reveal direction="right">
            <p>{bundle.idealClient}</p>
          </Reveal>
        </div>

        <div className="bundle-detail-match-grid">
          <Reveal className="bundle-detail-match-card is-match">
            <div className="bundle-detail-match-heading">
              <span><Check size={18} strokeWidth={1.8} /></span>
              <div><p className="eyebrow eyebrow-dark">Best match</p><h3>Built for businesses like these.</h3></div>
            </div>
            <ul>
              {bundle.bestFor.map((item) => <li key={item}><Check size={15} strokeWidth={1.8} /><span>{item}</span></li>)}
            </ul>
          </Reveal>
          <Reveal className="bundle-detail-match-card is-mismatch">
            <div className="bundle-detail-match-heading">
              <span><X size={18} strokeWidth={1.8} /></span>
              <div><p className="eyebrow eyebrow-dark">Not the right fit</p><h3>Choose a focused service instead.</h3></div>
            </div>
            <ul>
              {bundle.notFor.map((item) => <li key={item}><X size={15} strokeWidth={1.8} /><span>{item}</span></li>)}
            </ul>
          </Reveal>
        </div>

        <Reveal className="bundle-detail-context-note">
          <span>What this bundle solves</span>
          <p>{bundle.problemSolved}</p>
        </Reveal>
      </section>

      <section className="bundle-detail-scope" id="included">
        <div className="bundle-detail-scope-inner">
          <Reveal className="bundle-detail-scope-heading">
            <div className="bundle-detail-scope-kicker">
              <p className="eyebrow">What is included</p>
              <dl className="bundle-detail-scope-value" aria-label="Bundle inclusion summary">
                <div><dt>{String(bundle.inclusions.length).padStart(2, '0')}</dt><dd>Connected packages</dd></div>
                <div><dt>{String(namedInclusionCount).padStart(2, '0')}</dt><dd>Named inclusions</dd></div>
              </dl>
            </div>
            <div className="bundle-detail-scope-title">
              <h2>More built in.<br /><em>Less left to coordinate.</em></h2>
            </div>
            <div className="bundle-detail-scope-intro">
              <p>Instead of buying disconnected pieces, you receive the strategy, systems and launch assets together under one bundle investment.</p>
              <Link href="/process">Explore how Kraftt works <ArrowRight size={15} /></Link>
            </div>
          </Reveal>

          <p className="bundle-detail-scope-swipe" aria-hidden="true">Swipe through the included packages <ArrowRight size={14} /></p>
          <div className={`bundle-detail-deliverables is-${bundle.inclusions.length}`}>
            {bundle.inclusions.map((inclusion, index) => (
              <Reveal className="bundle-detail-deliverable" key={inclusion.title}>
                <div className="bundle-detail-deliverable-number">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <small>{String(inclusion.items.length).padStart(2, '0')} inclusions</small>
                </div>
                <div className="bundle-detail-deliverable-copy">
                  <h3>{inclusion.title}</h3>
                  <p>{inclusion.summary}</p>
                </div>
                <ul>
                  {inclusion.items.map((item) => <li key={item}><Check size={13} strokeWidth={1.8} /><span>{item}</span></li>)}
                </ul>
                <span className="bundle-detail-deliverable-status"><Check size={13} strokeWidth={1.8} /> Included in this bundle</span>
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

      <section className="bundle-detail-fit" id="fit">
        <Reveal className="bundle-detail-fit-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Good fit check</p>
            <h2>Three signs this bundle is the right fit.</h2>
          </div>
          <p>If these statements match where your business is now, the bundle keeps the work connected and reduces unnecessary handoffs.</p>
        </Reveal>
        <div className="bundle-detail-fit-board">
          <Reveal className="bundle-detail-fit-score" direction="left">
            <span className="bundle-detail-fit-score-icon"><Check size={22} strokeWidth={1.6} /></span>
            <div><strong>03</strong><small>signals of a strong fit</small></div>
            <p>When all three are true, one coordinated bundle is usually clearer than managing separate services.</p>
          </Reveal>
          <div className="bundle-detail-fit-grid">
            {bundle.goodFitWhen.map((item, index) => (
              <Reveal key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span className="bundle-detail-fit-check"><Check size={16} strokeWidth={1.8} /></span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
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

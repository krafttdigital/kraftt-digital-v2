import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AuditCTA } from '../../../components/CTA';
import { Footer } from '../../../components/Footer';
import { JsonLd } from '../../../components/JsonLd';
import { ProjectCard } from '../../../components/ProjectCard';
import { Reveal } from '../../../components/Reveal';
import { SiteHeader } from '../../../components/SiteHeader';
import { bundleBySlug, bundles } from '../../../data/bundles';
import { projectBySlug } from '../../../data/projects';
import { siteUrl, whatsappUrl } from '../../../data/site';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return bundles.map((bundle) => ({ slug: bundle.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bundle = bundleBySlug(slug);
  if (!bundle) return {};
  return {
    title: `${bundle.name} | Kraftt Digital`,
    description: bundle.headline,
    alternates: { canonical: `/services/bundles/${bundle.slug}` },
    openGraph: { title: `${bundle.name} | Kraftt Digital`, description: bundle.headline, images: [] },
    twitter: { card: 'summary', title: `${bundle.name} | Kraftt Digital`, description: bundle.headline, images: [] },
  };
}

export default async function BundlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bundle = bundleBySlug(slug);
  if (!bundle) notFound();
  const relatedProject = projectBySlug(bundle.relatedProjectSlug);

  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service', name: bundle.name,
        description: bundle.problemSolved,
        provider: { '@type': 'Organization', name: 'Kraftt Digital', url: siteUrl },
        url: `${siteUrl}/services/bundles/${bundle.slug}`,
      }} />
      <SiteHeader />
      <section className="page-hero service-page-hero section-dark">
        <p className="eyebrow">Service bundle</p>
        {/* naming under review — may become "Local Business Growth System" */}
        <h1>{bundle.headline}</h1>
        <p>{bundle.name}</p>
      </section>

      <section className="content-section section-light two-info-grid">
        <Reveal className="info-panel"><p className="eyebrow eyebrow-dark">Ideal client</p><h2>{bundle.idealClient}</h2></Reveal>
        <Reveal className="info-panel"><p className="eyebrow eyebrow-dark">Problem solved</p><h2>{bundle.problemSolved}</h2></Reveal>
      </section>

      <section className="content-section bundle-scope-section section-parchment-deep">
        <Reveal className="bundle-scope-card">
          <div><p className="eyebrow eyebrow-dark">One connected scope</p><h2>{bundle.name}</h2></div>
          <div><span>Investment</span><strong>{bundle.price}</strong></div>
          <div><span>Timeline</span><strong>{bundle.timeline}</strong></div>
        </Reveal>
        <div className="deliverables-grid">
          <Reveal><p className="eyebrow eyebrow-dark">Deliverables</p><ul className="check-list">{bundle.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          <Reveal><p className="eyebrow eyebrow-dark">Not included</p><ul className="plain-list muted-list">{bundle.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="content-section fit-section section-dark">
        <Reveal><p className="eyebrow">Good fit when</p><h2>The engagement needs to move as one.</h2></Reveal>
        <div className="fit-grid">{bundle.goodFitWhen.map((item, index) => <Reveal className="fit-item" key={item}><span>0{index + 1}</span><p>{item}</p></Reveal>)}</div>
      </section>

      {relatedProject && (
        <section className="content-section section-light related-project">
          <Reveal className="section-heading"><p className="eyebrow eyebrow-dark">Related work</p><h2>A connected engagement in practice.</h2></Reveal>
          <ProjectCard project={relatedProject} />
        </section>
      )}

      <section className="service-actions section-parchment-deep">
        <Link className="button button-accent" href="/audit">Request a Digital Presence Audit</Link>
        <a className="button button-outline-dark" href={whatsappUrl(`Hi Kraftt, I'd like to discuss the ${bundle.name} bundle.`)}>Discuss This Service</a>
      </section>
      <AuditCTA title="Confirm the right connected scope before the engagement begins." />
      <Footer />
    </main>
  );
}

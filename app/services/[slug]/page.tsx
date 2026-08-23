import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AuditCTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { JsonLd } from '../../components/JsonLd';
import { ProjectCard } from '../../components/ProjectCard';
import { Reveal } from '../../components/Reveal';
import { SiteHeader } from '../../components/SiteHeader';
import { projectBySlug } from '../../data/projects';
import { serviceBySlug, services } from '../../data/services';
import { siteUrl, whatsappUrl } from '../../data/site';

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

  return (
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: service.name, description: service.problemSolved,
        provider: { '@type': 'Organization', name: 'Kraftt Digital', url: siteUrl },
        url: `${siteUrl}/services/${service.slug}`,
      }} />
      <SiteHeader />
      <section className="page-hero service-page-hero section-dark">
        <p className="eyebrow">{service.category}</p>
        <h1>{service.headline}</h1>
        <p>{service.name}</p>
      </section>

      <section className="content-section section-light two-info-grid">
        <Reveal className="info-panel"><p className="eyebrow eyebrow-dark">Ideal client</p><h2>{service.idealClient}</h2></Reveal>
        <Reveal className="info-panel"><p className="eyebrow eyebrow-dark">Problem solved</p><h2>{service.problemSolved}</h2></Reveal>
      </section>

      <section className="content-section pricing-section section-parchment-deep">
        <Reveal className="section-heading"><p className="eyebrow eyebrow-dark">Three tiers</p><h2>Choose the level that matches the work.</h2></Reveal>
        <div className="pricing-grid">
          {service.tiers.map((tier, index) => {
            const message = `Hi Kraftt, I'd like to discuss the ${tier.name} tier for ${service.name}.`;
            return (
              <Reveal className={`pricing-card${index === 1 ? ' pricing-card-featured' : ''}`} key={tier.name}>
                {index === 1 && <span className="pricing-badge">Most Chosen</span>}
                <p className="eyebrow">Tier {index + 1}</p>
                <h3>{tier.name}</h3>
                <strong>{tier.price}</strong>
                <p className="timeline">{tier.timeline}</p>
                <ul>{tier.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className={`button ${index === 1 ? 'button-accent' : 'button-outline-dark'}`} href={whatsappUrl(message)}>Discuss {tier.name}</a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="content-section section-light deliverables-grid">
        <Reveal><p className="eyebrow eyebrow-dark">Main deliverables</p><ul className="check-list">{service.mainDeliverables.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        <Reveal><p className="eyebrow eyebrow-dark">Not included by default</p><ul className="plain-list muted-list">{service.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
      </section>

      <section className="content-section fit-section section-dark">
        <Reveal><p className="eyebrow">Good fit when</p><h2>The need is specific enough to act on.</h2></Reveal>
        <div className="fit-grid">{service.goodFitWhen.map((item, index) => <Reveal className="fit-item" key={item}><span>0{index + 1}</span><p>{item}</p></Reveal>)}</div>
      </section>

      {relatedProject && (
        <section className="content-section section-light related-project">
          <Reveal className="section-heading"><p className="eyebrow eyebrow-dark">Related work</p><h2>See the service in a real engagement.</h2></Reveal>
          <ProjectCard project={relatedProject} />
        </section>
      )}

      <section className="service-actions section-parchment-deep">
        <Link className="button button-accent" href="/audit">Request a Digital Presence Audit</Link>
        <a className="button button-outline-dark" href={whatsappUrl(`Hi Kraftt, I'd like to discuss ${service.name}.`)}>Discuss This Service</a>
      </section>
      <AuditCTA title={`See where ${service.name.toLowerCase()} fits before committing to the build.`} />
      <Footer />
    </main>
  );
}

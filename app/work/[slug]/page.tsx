import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AuditCTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Reveal';
import { SiteHeader } from '../../components/SiteHeader';
import { projectBySlug, projects } from '../../data/projects';
import { siteUrl } from '../../data/site';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const images = project.hero ? [{ url: `${siteUrl}${project.hero.src}`, width: project.hero.width, height: project.hero.height, alt: project.hero.alt }] : [];
  return {
    title: `${project.name} case study | Kraftt Digital`,
    description: project.approach,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.name} case study | Kraftt Digital`, description: project.approach, images },
    twitter: { card: images.length ? 'summary_large_image' : 'summary', title: `${project.name} case study | Kraftt Digital`, description: project.approach, images },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const related = projectBySlug(project.relatedProjectSlug);

  return (
    <main>
      <SiteHeader />
      <section className="project-hero section-dark">
        <div className="project-hero-copy">
          <p className="eyebrow">{project.industry}</p>
          <h1>{project.name}</h1>
          <p>{project.package}</p>
          {project.relationshipLabel && <strong className="relationship-caption">{project.relationshipLabel}</strong>}
        </div>
        {project.hero ? (
          <Image src={project.hero.src} alt={project.hero.alt} width={project.hero.width} height={project.hero.height} priority sizes="100vw" />
        ) : (
          <div className="project-placeholder project-hero-placeholder" role="img" aria-label={`${project.name} project title card`}>
            <span>{project.relationshipLabel ?? project.industry}</span>
            <strong>{project.name}</strong>
          </div>
        )}
      </section>

      <section className="content-section project-story section-light">
        <Reveal className="story-block"><p className="eyebrow eyebrow-dark">Business context</p><h2>{project.context}</h2></Reveal>
        <Reveal className="story-block"><p className="eyebrow eyebrow-dark">The problem</p><h2>{project.problem}</h2></Reveal>
        <Reveal className="story-block findings-block"><p className="eyebrow eyebrow-dark">Findings</p><ul className="plain-list">{project.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul></Reveal>
        <Reveal className="story-block"><p className="eyebrow eyebrow-dark">Approach / strategy</p><h2>{project.approach}</h2></Reveal>
      </section>

      <section className="content-section project-gallery section-parchment-deep">
        <Reveal className="section-heading"><p className="eyebrow eyebrow-dark">Gallery</p><h2>Delivered surfaces and supporting detail.</h2></Reveal>
        {project.gallery.length ? (
          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
              <Reveal className={index === 0 ? 'gallery-item gallery-item-wide' : 'gallery-item'} key={image.src}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 100vw, 50vw" />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="project-placeholder gallery-placeholder"><span>Founder-led internal venture</span><strong>Documented as practice, not client proof.</strong></div>
        )}
      </section>

      <section className={`content-section outcome-section outcome-${project.outcomeType.toLowerCase().replace(' ', '-')}`}>
        <Reveal>
          <span className="outcome-label">{project.outcomeType} outcome</span>
          <h2>{project.outcome}</h2>
          {project.evidenceNote && <p className="evidence-note">Evidence note: {project.evidenceNote}</p>}
        </Reveal>
      </section>

      {project.founderNote && (
        <section className="founder-note section-light"><p className="eyebrow eyebrow-dark">Founder Note</p><h2>{project.founderNote}</h2></section>
      )}

      {related && (
        <section className="next-project section-light">
          <p className="eyebrow eyebrow-dark">Related project</p>
          <Link href={`/work/${related.slug}`}><span>{related.industry}</span><strong>{related.name}</strong><b aria-hidden="true">→</b></Link>
        </section>
      )}
      <AuditCTA title="Turn what the market sees into a clearer business case." />
      <Footer />
    </main>
  );
}

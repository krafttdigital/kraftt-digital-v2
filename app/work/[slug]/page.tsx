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

const projectBanners: Record<string, { src: string; alt: string }> = {
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex website, search and local discovery project collage' },
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, portfolio and search visibility project collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery identity, storefront and administration system collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages brand identity and pre-launch website collage' },
  'aegis-squad': { src: '/aegis-banner.png', alt: 'Aegis Squad services website and search presence collage' },
  'ketan-goyal': { src: '/ketan-banner.png', alt: 'Ketan Goyal portfolio, writing and digital builds collage' },
};

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
  const projectNumber = projects.findIndex((item) => item.slug === project.slug) + 1;
  const banner = projectBanners[project.slug];
  const relatedBanner = related ? projectBanners[related.slug] : null;

  return (
    <main className="project-detail-page">
      <SiteHeader />
      <section className="project-detail-hero">
        <div className="project-detail-hero-inner">
          <Reveal className="project-detail-kicker" direction="left">
            <Link href="/work"><span aria-hidden="true">←</span> All work</Link>
            <span>Case study · 0{projectNumber} / 06</span>
          </Reveal>

          <Reveal className="project-detail-heading" direction="scale">
            <div>
              <p className="eyebrow eyebrow-dark">{project.industry}</p>
              <span>{project.outcomeType} outcome</span>
            </div>
            <h1>{project.name}</h1>
            <p>{project.context}</p>
          </Reveal>

          {project.relationshipLabel && <Reveal className="project-detail-relationship"><strong>{project.relationshipLabel}</strong></Reveal>}

          <Reveal className="project-detail-hero-media" direction="scale">
            <Image src={banner.src} alt={banner.alt} fill priority sizes="(max-width: 760px) 94vw, 88vw" />
            <strong>0{projectNumber}</strong>
            <span>View the project ↓</span>
          </Reveal>

          <Reveal className="project-detail-facts">
            <div><span>Industry</span><strong>{project.industry}</strong></div>
            <div><span>Engagement</span><strong>{project.package}</strong></div>
            <div><span>Evidence label</span><strong>{project.outcomeType}</strong></div>
          </Reveal>
        </div>
      </section>

      <section className="project-detail-story">
        <div className="project-detail-story-inner">
          <Reveal className="project-detail-section-heading">
            <div><p className="eyebrow eyebrow-dark">Inside the work</p><span>Context → decision → delivery</span></div>
            <h2>The thinking<br /><em>behind the surface.</em></h2>
            <p>A concise record of what the business needed, what the research found and how the work was shaped around it.</p>
          </Reveal>

          <div className="project-detail-story-grid">
            <Reveal className="project-detail-story-card project-detail-story-context" direction="left">
              <div><span>01</span><p className="eyebrow eyebrow-dark">Business context</p></div>
              <h3>{project.context}</h3>
            </Reveal>

            <Reveal className="project-detail-story-card project-detail-story-problem" direction="right">
              <div><span>02</span><p className="eyebrow eyebrow-dark">The problem</p></div>
              <h3>{project.problem}</h3>
            </Reveal>

            <Reveal className="project-detail-story-card project-detail-story-findings">
              <div><span>03</span><p className="eyebrow">Research findings</p></div>
              <ul>{project.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul>
            </Reveal>

            <Reveal className="project-detail-story-card project-detail-story-approach" direction="scale">
              <div><span>04</span><p className="eyebrow eyebrow-dark">Approach / strategy</p></div>
              <h3>{project.approach}</h3>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="project-detail-gallery">
        <div className="project-detail-gallery-inner">
          <Reveal className="project-detail-gallery-heading">
            <div><p className="eyebrow eyebrow-dark">Project gallery</p><strong>{String(project.gallery.length).padStart(2, '0')}</strong></div>
            <h2>Delivered surfaces.<br /><em>Supporting detail.</em></h2>
            <p>Selected screens and implementation details from the finished system.</p>
          </Reveal>

        {project.gallery.length ? (
          <div className="project-detail-gallery-grid">
            {project.gallery.map((image, index) => (
              <Reveal className={`project-detail-gallery-item project-detail-gallery-item-${index + 1}`} direction={index % 2 ? 'left' : 'right'} key={image.src}>
                <div>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 94vw, (max-width: 1100px) 47vw, 58vw" />
                  <span>0{index + 1}</span>
                </div>
                <p>{image.alt}</p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="project-detail-gallery-empty">
            <span>Founder-led internal venture</span>
            <strong>Documented as practice, not client proof.</strong>
            <p>This project is labelled clearly because it represents internal exploration rather than a client engagement.</p>
          </Reveal>
        )}
        </div>
      </section>

      <section className={`project-detail-outcome project-detail-outcome-${project.outcomeType.toLowerCase().replace(' ', '-')}`}>
        <Reveal className="project-detail-outcome-inner" direction="scale">
          <div className="project-detail-outcome-label"><strong>0{projectNumber}</strong><span>{project.outcomeType} outcome</span></div>
          <div>
            <p className="eyebrow">What changed</p>
            <h2>{project.outcome}</h2>
            {project.evidenceNote && <p className="project-detail-evidence-note"><span>Evidence note</span>{project.evidenceNote}</p>}
          </div>
        </Reveal>
      </section>

      {project.founderNote && (
        <section className="project-detail-founder-note"><p className="eyebrow eyebrow-dark">Founder note</p><h2>{project.founderNote}</h2></section>
      )}

      {related && (
        <section className="project-detail-next">
          <div className="project-detail-next-inner">
            <Reveal className="project-detail-next-copy" direction="left">
              <p className="eyebrow eyebrow-dark">Continue exploring</p>
              <span>{related.industry}</span>
              <h2>Next: {related.name}</h2>
              <Link href={`/work/${related.slug}`}>View next case study <span aria-hidden="true">→</span></Link>
            </Reveal>
            {relatedBanner && (
              <Reveal className="project-detail-next-media" direction="right">
                <Link href={`/work/${related.slug}`} aria-label={`View ${related.name} case study`}>
                  <Image src={relatedBanner.src} alt={relatedBanner.alt} fill sizes="(max-width: 760px) 94vw, 48vw" />
                  <span aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            )}
          </div>
        </section>
      )}
      <AuditCTA title="Turn what the market sees into a clearer business case." />
      <Footer />
    </main>
  );
}

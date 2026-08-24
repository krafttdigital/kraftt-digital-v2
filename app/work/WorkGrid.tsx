'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import type { Project, WorkCategory } from '../data/projects';

const projectBanners: Record<string, { src: string; alt: string }> = {
  'shree-hari-spintex': { src: '/shsl-banner.png', alt: 'Shree Hari Spintex website, search and local discovery project collage' },
  'mittal-architect': { src: '/mittal-banner.png', alt: 'Mittal Architect website, portfolio and search visibility project collage' },
  'kiraq-jewellery': { src: '/kiraq-banner.png', alt: 'Kiraq Jewellery identity, storefront and administration system collage' },
  'elixir-beverages': { src: '/elixir-banner.png', alt: 'Elixir Beverages brand identity and pre-launch website collage' },
  'aegis-squad': { src: '/aegis-banner.png', alt: 'Aegis Squad services website and search presence collage' },
  'ketan-goyal': { src: '/ketan-banner.png', alt: 'Ketan Goyal portfolio, writing and digital builds collage' },
  'bharat-bhushan-singla': { src: '/bbs-banner.png', alt: 'Bharat Bhushan Singla legal website, case archive and consultation system collage' },
  'the-vibed-vines': { src: '/tvv-banner.png', alt: 'The Vibed Vines streetwear storefront, catalogue and checkout system collage' },
};

export function WorkGrid({ projects }: { projects: Project[] }) {
  const filters = ['All Projects', 'Consumer Brands', 'Professional Services', 'Manufacturing & B2B', 'Personal Brands'] as const;
  const [active, setActive] = useState<(typeof filters)[number]>('All Projects');
  const visible = active === 'All Projects'
    ? projects
    : projects.filter((project) => project.workCategory === active);

  const projectCount = (filter: (typeof filters)[number]) => filter === 'All Projects'
    ? projects.length
    : projects.filter((project) => project.workCategory === (filter as WorkCategory)).length;

  return (
    <>
      <div className="work-page-filters" aria-label="Filter work by business category">
        {filters.map((filter) => (
          <button key={filter} className={active === filter ? 'active' : ''} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter}>
            <span>{filter}</span><small>{projectCount(filter)}</small>
          </button>
        ))}
      </div>

      <div className="work-page-grid" aria-live="polite">
        {visible.map((project, index) => {
          const banner = projectBanners[project.slug];
          const projectNumber = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, '0');

          return (
            <Reveal className={`work-page-card work-page-card-${index + 1}`} direction={index % 2 ? 'left' : 'right'} delay={index * 0.045} key={project.slug}>
              <Link href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}>
                <div className="work-page-card-media">
                  <Image src={banner.src} alt={banner.alt} fill priority={index < 2} sizes="(max-width: 760px) 94vw, (max-width: 1100px) 47vw, 62vw" />
                  <strong>{projectNumber}</strong>
                  <span className="work-page-card-arrow" aria-hidden="true">↗</span>
                </div>

                <div className="work-page-card-copy">
                  <div className="work-page-card-meta"><span>{project.workCategory}</span><span>{project.outcomeType}</span></div>
                  <h3>{project.name}</h3>
                  <span className="work-page-card-niche">{project.industry}</span>
                  <p>{project.context}</p>
                  <div className="work-page-card-link"><span>View case study</span><span aria-hidden="true">→</span></div>
                  {project.relationshipLabel && <small>{project.relationshipLabel}</small>}
                </div>
              </Link>
              <a
                className="work-page-card-live"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit the live ${project.name} website`}
              >
                <span>Visit live website</span><span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}

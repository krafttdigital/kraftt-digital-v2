'use client';

import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import type { Project } from '../data/projects';

export function WorkGrid({ projects }: { projects: Project[] }) {
  const filters = ['All', ...Array.from(new Set(projects.map((project) => project.industry.split(',')[0])))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.industry.startsWith(active));

  return (
    <>
      <div className="filter-row" aria-label="Filter work by industry">
        {filters.map((filter) => (
          <button key={filter} className={active === filter ? 'active' : ''} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter}>
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}
      </div>
    </>
  );
}

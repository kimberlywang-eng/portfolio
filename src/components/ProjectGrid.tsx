'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const CATEGORIES = ['All', 'Engineering', 'Software', 'Data', 'Design'] as const;

export default function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            data-cursor-hover
            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
              filter === cat
                ? 'bg-accent/15 border-accent/50 text-accent'
                : 'border-border text-ink-muted hover:text-ink hover:border-ink-faint'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

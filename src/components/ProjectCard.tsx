'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ProjectMeta } from '@/types/content';

// A small colour cue per category — keeps every card from reading as the same
// teal box, without adding any new motion or chrome.
// Tailwind's compiler needs full, literal class names (no runtime string
// concatenation) to detect them, so each variant is spelled out in full here
// rather than built from a template.
const CATEGORY_STYLE: Record<string, { text: string; border: string; arrowHover: string }> = {
  Engineering: {
    text: 'text-accent-blue',
    border: 'group-hover:border-accent-blue/30',
    arrowHover: 'group-hover:text-accent-blue',
  },
  Software: {
    text: 'text-accent',
    border: 'group-hover:border-accent/30',
    arrowHover: 'group-hover:text-accent',
  },
  Data: {
    text: 'text-accent-violet',
    border: 'group-hover:border-accent-violet/30',
    arrowHover: 'group-hover:text-accent-violet',
  },
  Design: {
    text: 'text-accent-pink',
    border: 'group-hover:border-accent-pink/30',
    arrowHover: 'group-hover:text-accent-pink',
  },
};

export default function ProjectCard({ project, index = 0 }: { project: ProjectMeta; index?: number }) {
  const comingSoon = project.status === 'coming-soon';
  const categoryStyle = CATEGORY_STYLE[project.category] ?? CATEGORY_STYLE.Software;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={comingSoon ? {} : { y: -6 }}
      className={`card-surface group h-full overflow-hidden flex flex-col transition-colors ${
        comingSoon ? '' : categoryStyle.border
      }`}
      data-cursor-hover
    >
      <div className="relative h-44 w-full overflow-hidden bg-bg-soft">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            comingSoon ? 'opacity-50 grayscale' : 'group-hover:scale-105'
          }`}
        />
        {comingSoon && (
          <span className="absolute top-3 right-3 rounded-full bg-bg/90 border border-border px-3 py-1 text-xs text-ink-faint">
            Coming soon
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className={`font-mono text-[11px] uppercase tracking-wide ${categoryStyle.text}`}>
            {project.category}
          </span>
          <span className="text-xs text-ink-faint">{project.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-ink leading-snug flex items-start justify-between gap-2">
          {project.title}
          {!comingSoon && (
            <ArrowUpRight
              size={18}
              className={`shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${categoryStyle.arrowHover}`}
            />
          )}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink/5 border border-border px-2.5 py-1 text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (comingSoon) return card;

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      {card}
    </Link>
  );
}

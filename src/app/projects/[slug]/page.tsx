import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getProject, projects } from '@/data/projects';
import ContentBlocks from '@/components/ContentBlocks';
import ModelViewerEmbed from '@/components/ModelViewerEmbed';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);

  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All case studies
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {project.category}
          </span>
          <span className="text-ink-faint text-xs">{project.date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4 max-w-3xl">
          {project.title}
        </h1>
        <p className="text-ink-muted text-lg max-w-2xl mb-6">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 border border-border px-3 py-1 text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                {link.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>
        )}

        <div className="relative w-full aspect-[21/9] max-h-[360px] rounded-2xl overflow-hidden border border-border mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      {project.embed === 'model-viewer' && <ModelViewerEmbed />}

      <div className="max-w-3xl mt-10">
        <ContentBlocks blocks={project.content} />
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <h2 className="text-xl font-semibold text-ink mb-6">More {project.category.toLowerCase()} work</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

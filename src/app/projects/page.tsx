import { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Engineering, data, and software case studies by Kimberly Wang — F1 car CAD, hyperloop suspension design, COVID-19 data analysis, an interactive 3D viewer, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-xs text-accent mb-2">case studies</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">Selected work</h1>
        <p className="text-ink-muted max-w-xl mb-10">
          Engineering, data, and software projects — each page walks through the actual process,
          not just the finished result.
        </p>
      </Reveal>
      <ProjectGrid />
    </div>
  );
}

import { Metadata } from 'next';
import SkillsMatrix from '@/components/SkillsMatrix';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Engineering, data, project management, and design skills: from SolidWorks and Python to cross-functional program management at Tesla and Walt Disney Imagineering.',
};

export default function SkillsPage() {
  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-xs text-accent mb-2">skills matrix</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
          The Tools Behind My Work
        </h1>
        <p className="text-ink-muted max-w-xl mb-10">
          Built from real project work: CAD systems at Tesla and Texas Guadaloop, data tooling
          from self-taught projects, and program management at Walt Disney Imagineering.
        </p>
      </Reveal>
      <SkillsMatrix />
    </div>
  );
}

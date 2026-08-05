import Link from 'next/link';
import { Cog, Code2, ListChecks, Figma as FigmaIcon, LucideIcon } from 'lucide-react';
import { skillGroups, certifications, SkillEvidence } from '@/data/skills';
import { getProject } from '@/data/projects';
import { getPost } from '@/data/blog';
import Reveal from './Reveal';

const ICONS: Record<string, LucideIcon> = {
  Cog,
  Code2,
  ListChecks,
  Figma: FigmaIcon,
};

function evidenceLabel(e: SkillEvidence) {
  if (e.type === 'project') {
    const p = getProject(e.slug);
    return p ? { title: p.title, href: `/projects/${p.slug}` } : null;
  }
  const b = getPost(e.slug);
  return b ? { title: b.title, href: `/blog/${b.slug}` } : null;
}

export default function SkillsMatrix() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-faint max-w-2xl">
        No self-rated proficiency bars — click a skill to see the case study or story that used
        it. A <span className="text-ink-muted">+N</span> means it shows up in more than one —
        click to pick which. Hover an unlinked one for context (usually an NDA&apos;d Tesla
        project).
      </p>

      {skillGroups.map((group, gi) => {
        const Icon = ICONS[group.icon] ?? Cog;
        return (
          <Reveal key={group.category} delay={gi * 0.04}>
            <div className="card-surface p-5 md:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                  <Icon size={14} />
                </span>
                <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                {group.skills.map((skill) => {
                  const evidence = skill.evidence ?? [];
                  if (evidence.length === 1) {
                    const label = evidenceLabel(evidence[0]);
                    if (label) {
                      return (
                        <Link
                          key={skill.name}
                          href={label.href}
                          data-cursor-hover
                          title={`See it in: ${label.title}`}
                          className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent hover:bg-accent/15 transition-colors"
                        >
                          {skill.name}
                        </Link>
                      );
                    }
                  }
                  if (evidence.length > 1) {
                    // More than one case study demonstrates this skill — rather than
                    // showing every link inline (the old, cluttered version), the pill
                    // just flags the count and expands to a small picker on click.
                    return (
                      <details key={skill.name} className="skill-details inline-block align-top">
                        <summary
                          data-cursor-hover
                          className="flex cursor-pointer select-none items-center gap-1 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent hover:bg-accent/15 transition-colors"
                        >
                          {skill.name}
                          <span className="text-accent/70">+{evidence.length - 1}</span>
                        </summary>
                        {/* Expands in normal document flow rather than as an absolutely
                            positioned overlay — each category card sits inside a Reveal
                            (Framer Motion) wrapper, and Motion's `transform` style creates
                            a new stacking context per card, which traps `z-index` inside
                            that card and lets the next card paint over an overlay regardless
                            of how high the z-index is set. Growing in-flow sidesteps that
                            whole class of bug instead of fighting it with a higher z-index. */}
                        <div className="mt-1.5 w-max max-w-[240px] rounded-xl border border-border bg-bg-card p-1.5 shadow-xl">
                          {evidence.map((e) => {
                            const label = evidenceLabel(e);
                            if (!label) return null;
                            return (
                              <Link
                                key={label.href}
                                href={label.href}
                                data-cursor-hover
                                className="block rounded-lg px-3 py-2 text-xs text-ink-muted hover:bg-ink/5 hover:text-accent transition-colors"
                              >
                                {label.title}
                              </Link>
                            );
                          })}
                        </div>
                      </details>
                    );
                  }
                  return (
                    <span
                      key={skill.name}
                      title={skill.context}
                      className="rounded-full border border-border bg-ink/5 px-3 py-1.5 text-xs text-ink-muted"
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        );
      })}

      <Reveal delay={skillGroups.length * 0.04}>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs text-ink-faint mr-1">Also certified:</span>
          {certifications.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-ink/5 px-3 py-1.5 text-xs text-ink-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

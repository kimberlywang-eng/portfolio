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
    <div>
      <p className="text-sm text-ink-faint mb-6 max-w-2xl">
        No self-rated proficiency bars — every skill below links to the actual case study or
        story that used it. A couple of NDA&apos;d Tesla skills are labeled instead of linked,
        since there&apos;s no public project page for those.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group, gi) => {
          const Icon = ICONS[group.icon] ?? Cog;
          return (
            <Reveal key={group.category} delay={gi * 0.05}>
              <div className="card-surface p-6 h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={16} />
                  </span>
                  <h3 className="font-semibold text-ink">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <p className="text-sm text-ink mb-1.5">{skill.name}</p>
                      {skill.evidence && skill.evidence.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {skill.evidence.map((e) => {
                            const label = evidenceLabel(e);
                            if (!label) return null;
                            return (
                              <Link
                                key={label.href}
                                href={label.href}
                                data-cursor-hover
                                className="rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1 text-[11px] text-accent hover:bg-accent/15 transition-colors"
                              >
                                {label.title}
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <span className="inline-block rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-ink-faint">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-6">
        <div className="card-surface p-6">
          <h3 className="font-semibold text-ink mb-4">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-ink-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

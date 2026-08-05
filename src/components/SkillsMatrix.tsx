'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

// Skills used in more than one project get a small "+N" pill that opens a
// short picker of every linked case study. This renders through a portal
// into document.body, positioned from the trigger's real on-screen
// coordinates, rather than as an absolutely-positioned child or an in-flow
// <details> element — both were tried first and both had real bugs.
// Absolute positioning got visually hidden behind the next category card,
// because each card sits inside a Reveal (Framer Motion) wrapper and
// Motion's `transform` style creates a new stacking context per card, which
// traps z-index inside whichever card it's in. Expanding in normal document
// flow avoided that, but growing the pill's own box taller reflowed and
// resized its neighbours on the same row — which is what made other skills
// briefly unclickable until the box was closed. A portal escapes every
// ancestor's stacking context and never touches any other element's layout,
// so neither bug can happen here.
function SkillPopover({ skill, evidence }: { skill: string; evidence: SkillEvidence[] }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (rect) setCoords({ top: rect.bottom + 6, left: rect.left });
    }
    updatePosition();

    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        data-cursor-hover
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs text-accent hover:bg-accent/15 transition-colors"
      >
        {skill}
        <span className="text-accent/70">+{evidence.length - 1}</span>
      </button>
      {open &&
        coords &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={panelRef}
            style={{ position: 'fixed', top: coords.top, left: coords.left }}
            className="z-50 w-max max-w-[240px] rounded-xl border border-border bg-bg-card p-1.5 shadow-xl"
          >
            {evidence.map((e) => {
              const label = evidenceLabel(e);
              if (!label) return null;
              return (
                <Link
                  key={label.href}
                  href={label.href}
                  data-cursor-hover
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-xs text-ink-muted hover:bg-ink/5 hover:text-accent transition-colors"
                >
                  {label.title}
                </Link>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
}

export default function SkillsMatrix() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-faint max-w-2xl">
        No self-rated proficiency bars. Click a skill to see the case study or story that used
        it. A <span className="text-ink-muted">+N</span> means it shows up in more than one,
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
                    return <SkillPopover key={skill.name} skill={skill.name} evidence={evidence} />;
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

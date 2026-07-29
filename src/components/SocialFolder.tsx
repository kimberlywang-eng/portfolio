'use client';

import { useState } from 'react';
import {
  Folder,
  FolderOpen,
  FileCode2,
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { site } from '@/data/site';

const FILES = [
  {
    name: 'LinkedIn.tsx',
    icon: Linkedin,
    color: 'text-[#60a5fa]',
    href: site.linkedin,
    preview: `export const linkedin = "kimberly-wang";\n// → connect for PM / systems roles`,
  },
  {
    name: 'GitHub.tsx',
    icon: Github,
    color: 'text-ink',
    href: site.github,
    preview: `export const github = "@${site.githubUser}";\n// → CAD scripts, data notebooks, this site`,
  },
  {
    name: 'Email.ts',
    icon: Mail,
    color: 'text-[#f472b6]',
    href: `mailto:${site.email}`,
    preview: `export const email = "${site.email}";\n// → fastest way to reach me`,
  },
  {
    name: 'Resume.pdf',
    icon: FileText,
    color: 'text-[#5eead4]',
    href: site.resumeHref ?? undefined,
    preview: site.resumeHref
      ? '// download for the full work history'
      : '// coming soon — ask via email for now',
  },
];

export default function SocialFolder() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <FileCode2 size={14} className="text-ink-faint" />
        <span className="font-mono text-xs text-ink-faint">explorer</span>
      </div>
      <div className="p-3 font-mono text-sm">
        <div className="flex items-center gap-1.5 px-2 py-1.5 text-ink-muted">
          <FolderOpen size={15} className="text-accent" />
          <span>social/</span>
        </div>
        <div className="ml-3 border-l border-border pl-2">
          {FILES.map((file, i) => {
            const Icon = file.icon;
            const open = openIdx === i;
            const disabled = !file.href;
            return (
              <div key={file.name}>
                <button
                  data-cursor-hover
                  disabled={disabled}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className={`flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left transition-colors ${
                    disabled ? 'opacity-40 cursor-default' : 'hover:bg-ink/5'
                  }`}
                >
                  <ChevronRight
                    size={12}
                    className={`text-ink-faint transition-transform ${open ? 'rotate-90' : ''}`}
                  />
                  <Icon size={14} className={file.color} />
                  <span className="text-ink-muted">{file.name}</span>
                </button>
                {open && (
                  <div className="ml-6 mb-2 mt-1 rounded-lg bg-bg-soft border border-border p-3">
                    <pre className="text-xs text-ink-faint whitespace-pre-wrap">{file.preview}</pre>
                    {file.href && (
                      <a
                        href={file.href}
                        target={file.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs text-accent hover:underline"
                      >
                        open →
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

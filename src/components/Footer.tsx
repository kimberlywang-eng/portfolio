import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm text-ink">{site.name}</p>
          <p className="text-sm text-ink-faint mt-1">{site.location}</p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors"
          >
            <Mail size={16} /> {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-xs text-ink-faint">
          Built with Next.js &amp; Tailwind ·{' '}
          <Link href="/projects/portfolio-website" className="hover:text-accent">
            how this site was built
          </Link>
        </p>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { nav, site } from '@/data/site';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          <span className="text-accent">~/</span>kimberly-wang
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm transition-colors ${
                    active ? 'text-accent' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
          {site.resumeHref && (
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              Resume
            </a>
          )}
          <Link
            href="/contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent hover:bg-accent/20 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" className="text-ink-muted">
              <Github size={18} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted">
              <Linkedin size={18} />
            </a>
            {site.resumeHref && (
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

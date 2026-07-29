'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import CodeTypewriter from './CodeTypewriter';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-center py-20 md:py-0">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-5 mb-5">
            <motion.div
              initial={{ rotate: -6 }}
              whileHover={{ rotate: 0, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 260, damping: 15 }}
              className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10"
              style={{ borderRadius: '62% 38% 55% 45% / 55% 45% 62% 38%' }}
            >
              <Image
                src="/images/kim_profile-2026.jpeg"
                alt="Kimberly Wang"
                fill
                sizes="200px"
                className="object-cover"
                priority
              />
            </motion.div>
            <p className="font-mono text-sm text-accent">hi, I&apos;m</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink">
            {site.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gradient font-medium">{site.role}</p>
          <p className="mt-6 text-ink-muted text-base md:text-lg leading-relaxed max-w-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/40 px-5 py-2.5 text-sm text-accent hover:bg-accent/20 transition-colors"
            >
              View case studies
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-sm text-ink-muted hover:text-ink hover:border-ink-faint transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeTypewriter />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={(e) => {
          const heroSection = e.currentTarget.closest('section');
          const nextSection = heroSection?.nextElementSibling as HTMLElement | null;
          if (!nextSection) return;
          // Scroll to the real next section rather than a fixed viewport-height
          // offset — window.innerHeight shifts on mobile as the browser's
          // address bar collapses/expands mid-scroll, and mobile's stacked
          // single-column layout makes the hero taller than one screen, so a
          // fixed-fraction scrollBy landed mid-hero instead of at the next
          // section. Also correct for the sticky nav so its top isn't hidden
          // underneath the header.
          const header = document.querySelector('header');
          const offset = header ? header.getBoundingClientRect().height : 0;
          const top = nextSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }}
        aria-label="Scroll down to see more"
        className="mt-16 flex justify-center mx-auto text-ink-faint hover:text-accent transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}

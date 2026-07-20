'use client';

import { motion } from 'framer-motion';
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
          <p className="font-mono text-sm text-accent mb-4">hi, I&apos;m</p>
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

      <motion.div
        className="mt-16 flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-ink-faint" size={22} />
      </motion.div>
    </section>
  );
}

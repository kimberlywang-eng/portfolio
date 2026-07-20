import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillsMatrix from '@/components/SkillsMatrix';
import GitHubWidget from '@/components/GitHubWidget';
import SocialFolder from '@/components/SocialFolder';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import { sortedPosts } from '@/data/blog';

export default function HomePage() {
  const featured = projects.filter((p) => p.status !== 'coming-soon').slice(0, 3);
  const latestPost = sortedPosts()[0];

  return (
    <div className="pb-24">
      <Hero />

      <section className="py-20">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-mono text-xs text-accent mb-2">01 · case studies</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink">Selected work</h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm text-ink-muted hover:text-accent transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <Reveal>
          <p className="font-mono text-xs text-accent mb-2">02 · skills matrix</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8">
            What I actually work with
          </h2>
        </Reveal>
        <SkillsMatrix />
      </section>

      <section className="py-16 grid md:grid-cols-2 gap-6">
        <Reveal>
          <p className="font-mono text-xs text-accent mb-2">03 · elsewhere</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6">
            Find me around the web
          </h2>
          <SocialFolder />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-xs text-accent mb-2 md:invisible">&nbsp;</p>
          <div className="md:mt-11">
            <GitHubWidget />
          </div>
        </Reveal>
      </section>

      {latestPost && (
        <section className="py-16">
          <Reveal>
            <p className="font-mono text-xs text-accent mb-2">04 · latest from the blog</p>
            <Link
              href={`/blog/${latestPost.slug}`}
              className="card-surface block p-6 md:p-8 group hover:border-accent/30 transition-colors"
              data-cursor-hover
            >
              <span className="text-xs text-ink-faint">{latestPost.dateLabel}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-ink mt-2 group-hover:text-accent transition-colors">
                {latestPost.title}
              </h3>
              <p className="text-ink-muted mt-3 max-w-2xl">{latestPost.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent mt-4">
                Read the story <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="py-16">
        <Reveal>
          <div className="card-surface p-10 md:p-14 text-center bg-gradient-to-br from-accent/5 via-transparent to-accent-violet/5">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink">
              Building something worth talking about?
            </h2>
            <p className="text-ink-muted mt-3 max-w-lg mx-auto">
              Open to PM, manufacturing/systems engineering, and data roles — always happy to talk shop.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-accent/15 border border-accent/50 px-6 py-3 text-sm text-accent hover:bg-accent/25 transition-colors"
            >
              Get in touch <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

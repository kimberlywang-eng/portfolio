import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sortedPosts } from '@/data/blog';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Kimberly Wang's blog: from freshman year at UT Austin through Tesla, Woven by Toyota in Tokyo, and Walt Disney Imagineering. Real stories about engineering, leadership, and growth.",
};

export default function BlogPage() {
  const posts = sortedPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-xs text-accent mb-2">blog</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
          The story behind the resume
        </h1>
        <p className="text-ink-muted max-w-xl mb-10">
          Longer-form posts on the roles, teams, and decisions behind each chapter: Tesla, Woven
          by Toyota, Texas Guadaloop, and Walt Disney Imagineering.
        </p>
      </Reveal>

      {featured && (
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="card-surface group grid md:grid-cols-2 gap-0 overflow-hidden mb-10"
            data-cursor-hover
          >
            <div className="relative h-56 md:h-full min-h-[220px]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-xs text-ink-faint">{featured.dateLabel}</span>
              <h2 className="text-xl md:text-2xl font-semibold text-ink mt-2 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-ink-muted mt-3">{featured.summary}</p>
            </div>
          </Link>
        </Reveal>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 4) * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="card-surface group flex flex-col h-full overflow-hidden"
              data-cursor-hover
            >
              <div className="relative h-44 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs text-ink-faint">{post.dateLabel}</span>
                <h3 className="font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-muted line-clamp-2">{post.summary}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

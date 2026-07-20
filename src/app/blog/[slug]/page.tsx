import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { getPost, posts } from '@/data/blog';
import ContentBlocks from '@/components/ContentBlocks';
import Reveal from '@/components/Reveal';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All posts
        </Link>
        <span className="text-xs text-ink-faint">{post.dateLabel}</span>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mt-2 mb-6 max-w-3xl">
          {post.title}
        </h1>
        <div className="relative w-full aspect-[21/9] max-h-[360px] rounded-2xl overflow-hidden border border-border mb-4">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <div className="max-w-3xl mt-10">
        <ContentBlocks blocks={post.content} />
      </div>
    </div>
  );
}

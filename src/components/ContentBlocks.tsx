import Image from 'next/image';
import { ContentBlock } from '@/types/content';
import Reveal from './Reveal';

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-content max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <Reveal key={i}>
                <h2>{block.text}</h2>
              </Reveal>
            );
          case 'h3':
            return (
              <Reveal key={i}>
                <h3>{block.text}</h3>
              </Reveal>
            );
          case 'p':
            return (
              <Reveal key={i}>
                <p>{block.text}</p>
              </Reveal>
            );
          case 'list':
            return (
              <Reveal key={i}>
                <ul>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          case 'quote':
            return (
              <Reveal key={i}>
                <blockquote>{block.text}</blockquote>
              </Reveal>
            );
          case 'callout':
            return (
              <Reveal key={i}>
                <div className="card-surface border-accent/30 bg-accent/5 px-5 py-4 my-6 text-ink italic text-[15px] leading-relaxed">
                  {block.text}
                </div>
              </Reveal>
            );
          case 'code':
            return (
              <Reveal key={i}>
                <pre className="card-surface p-4 overflow-x-auto font-mono text-xs md:text-sm text-accent-blue my-6">
                  <code>{block.code}</code>
                </pre>
              </Reveal>
            );
          case 'image':
            return (
              <Reveal key={i}>
                <figure className="my-6">
                  <div className="relative w-full aspect-video max-h-[340px] rounded-xl overflow-hidden border border-border">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-center text-xs text-ink-faint mt-2">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

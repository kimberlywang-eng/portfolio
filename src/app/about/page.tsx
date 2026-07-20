import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Kimberly Wang — UT Austin BS ChemE (Honors), Computing Certificate. Associate Project Manager at Walt Disney Imagineering. Former 2x Tesla intern, Woven by Toyota intern, Texas Guadaloop president.",
};

const STATS = [
  'UT Austin — BS ChemE (Honors)',
  'Computing Certificate',
  'Los Angeles, CA',
  '9+ countries traveled',
  'Mercedes AMG Engineering Programme',
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <div className="flex flex-col md:flex-row gap-8 items-start mb-14">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-border shrink-0">
            <Image src="/images/profile.jpg" alt="Kimberly Wang" fill className="object-cover" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent mb-2">about</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
              Chemical engineer. Builder. Storyteller.
            </h1>
            <p className="text-ink-muted max-w-xl">
              Someone who genuinely believes the impossible is just the possible that hasn&apos;t
              been tried yet.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {STATS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-ink-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="prose-content max-w-2xl">
        <Reveal>
          <p>
            Hi, I&apos;m Kimberly — a BS Chemical Engineering (Honors) graduate from UT Austin with a
            Certificate in Elements of Computing, and currently an Associate Project Manager at
            Walt Disney Imagineering, where I work on projects for Tokyo Disneyland and Tokyo
            DisneySea.
          </p>
          <p>If that sounds like a lot of different things — you&apos;re right. That&apos;s the point.</p>
          <p>
            This website started as a winter-break project after my first coding class. The case
            studies document how I think through problems; the blog documents how I&apos;ve grown as
            a person. Together they&apos;re the fullest picture of who I am.
          </p>
        </Reveal>

        <Reveal>
          <h2>Where it started</h2>
          <p>
            Growing up in Houston, I was the kid who couldn&apos;t stop taking things apart — LEGO
            sets, electronics, whatever I could get my hands on. That curiosity turned into
            building robotics systems in high school and, eventually, choosing engineering as the
            word for what I&apos;d always been doing.
          </p>
          <p>
            ChemE taught me how to ask the right questions: why does this behave this way, where
            does the process break down, what does the system look like five steps ahead and five
            behind. The Computing Certificate gave me a second language — Python, SQL, building
            things that actually do something. I started curious about technology and ended up
            building with it.
          </p>
        </Reveal>

        <Reveal>
          <h2>Texas Guadaloop: where everything changed</h2>
          <p>
            Freshman year I walked into a Texas Guadaloop meeting — a student team building an
            actual hyperloop pod — and it clicked immediately. Over the next few years I went from
            new member to president: raised $33,000, built budget and timeline plans from scratch,
            presented to the Dean and executive board, and hosted EuroTube&apos;s R&amp;D Director at
            SXSW 2023.
          </p>
        </Reveal>

        <Reveal>
          <h2>Eight months that redefined everything: Tesla</h2>
          <p>
            I ended up staying eight months at Gigafactory Texas — first as a Manufacturing
            Engineering co-op, then as a Material Flow Automation Engineering intern after an
            internal transfer. SolidWorks and AutoCAD Plant 3D daily, DEM powder-flow simulations,
            and a crash course in how different designing a part is from manufacturing it — and how
            different that is again from mass manufacturing.
          </p>
        </Reveal>

        <Reveal>
          <h2>Around the world: Denmark → Tokyo</h2>
          <p>
            Studying abroad in Denmark junior year felt like the fulfillment of a childhood dream of
            traveling the world. It was actually just the beginning — the summer after graduation,
            Woven by Toyota brought me to Tokyo as a Systems Engineering intern, where I went from
            zero Japanese to presenting engineering work to Toyota executives in under three months.
          </p>
        </Reveal>

        <Reveal>
          <h2>Making the impossible possible: Walt Disney Imagineering</h2>
          <p>
            In January 2025 I joined Imagineering as a PM intern, working on Disneyland Park and
            Disney California Adventure. In October 2025 I transferred to the Tokyo Portfolio. In
            February 2026 I converted to full-time Associate Project Manager — a full-circle moment
            less than two years after landing in Tokyo barely speaking the language.
          </p>
        </Reveal>

        <Reveal>
          <h2>Beyond the résumé</h2>
          <p>
            I&apos;ve TA&apos;d a management information systems course at UT Austin&apos;s McCombs School of
            Business, worked in research labs studying nanocrystals and graphene biosensors, and
            attended the Mercedes AMG High-Performance Powertrains Engineering Programme Workshop.
            I&apos;ve traveled to 9+ countries, and I built this website after my first coding class
            because I wanted to keep learning. The thread through all of it: I believe the
            impossible is just the possible that hasn&apos;t been tried yet.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/50 px-5 py-2.5 text-sm text-accent hover:bg-accent/25 transition-colors"
            >
              Read my story <ArrowRight size={14} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              See my projects
            </Link>
            {site.resumeHref && (
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <Download size={14} /> Download resume
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

const LINES = [
  { indent: 0, text: "const kimberly = {" },
  { indent: 1, text: "role: 'Associate Project Manager, Walt Disney Imagineering'," },
  { indent: 1, text: "trained: 'BS Chemical Engineering (Honors), UT Austin'," },
  { indent: 1, text: "shipped: ['Tesla x2', 'Woven by Toyota', 'Tokyo Disney Resort']," },
  { indent: 1, text: "builds: ['CAD systems', 'data pipelines', 'apps', 'timelines']," },
  { indent: 1, text: "openTo: 'PM · manufacturing/systems eng · data roles'," },
  { indent: 0, text: '};' },
  { indent: 0, text: '' },
  { indent: 0, text: 'run(kimberly); // let\'s build something' },
];

export default function CodeTypewriter() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIdx].text;
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18 + Math.random() * 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 140);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  return (
    <div className="card-surface w-full max-w-xl mx-auto md:mx-0 overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-ink-faint">about-me.ts</span>
      </div>
      <pre className="font-mono text-[12px] md:text-sm leading-relaxed p-5 min-h-[240px] whitespace-pre-wrap break-words">
        {LINES.slice(0, lineIdx + 1).map((line, i) => {
          const isCurrent = i === lineIdx && !done;
          const text = isCurrent ? line.text.slice(0, charIdx) : line.text;
          return (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              <span className="text-ink">{renderTokens(text)}</span>
              {isCurrent && <span className="inline-block w-[7px] h-[1em] bg-accent align-middle animate-blink ml-0.5" />}
            </div>
          );
        })}
        {done && (
          <div>
            <span className="inline-block w-[7px] h-[1em] bg-accent align-middle animate-blink" />
          </div>
        )}
      </pre>
    </div>
  );
}

function renderTokens(text: string) {
  // Extremely small "syntax highlight" pass — good enough for a hero animation.
  if (text.startsWith('run(')) {
    return <span className="text-accent-blue">{text}</span>;
  }
  if (text.trim().startsWith('//')) {
    return <span className="text-ink-faint">{text}</span>;
  }
  const parts = text.split(/(['"][^'"]*['"])/g);
  return parts.map((p, i) =>
    p.startsWith("'") || p.startsWith('"') ? (
      <span key={i} className="text-accent">
        {p}
      </span>
    ) : (
      <span key={i} className="text-accent-violet">
        {p}
      </span>
    )
  );
}

'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

/**
 * Full-viewport fixed layer that renders a soft radial gradient following the
 * cursor, plus the static aurora glows. Sits behind all page content.
 */
export default function SpotlightBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty('--x', `${e.clientX}px`);
      el.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-aurora-1" />
      <div className="absolute inset-0 bg-aurora-2" />
      <div className="absolute inset-0 bg-aurora-3" />
      <div
        ref={ref}
        className="absolute inset-0 opacity-0 md:opacity-100 transition-opacity"
        style={
          {
            background:
              'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(94,234,212,0.06), transparent 70%)',
          } as CSSProperties
        }
      />
    </div>
  );
}

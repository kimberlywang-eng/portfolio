'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('a, button, [data-cursor-hover]');
      if (dotRef.current) {
        if (el) {
          dotRef.current.style.width = '44px';
          dotRef.current.style.height = '44px';
          dotRef.current.style.background = 'rgba(94, 234, 212, 0.15)';
          dotRef.current.style.borderColor = 'rgba(94, 234, 212, 0.9)';
        } else {
          dotRef.current.style.width = '22px';
          dotRef.current.style.height = '22px';
          dotRef.current.style.background = 'transparent';
          dotRef.current.style.borderColor = 'rgba(94, 234, 212, 0.6)';
        }
      }
    };

    let raf: number;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} aria-hidden="true" className="cursor-dot hidden md:block" />;
}

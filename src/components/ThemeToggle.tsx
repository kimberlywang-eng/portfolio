'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme';

/**
 * Site defaults to dark. Clicking toggles a `light` class on <html> and
 * remembers the choice in localStorage. The blocking script in layout.tsx
 * applies the saved class before paint so there's no flash on load.
 */
export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? 'light' : 'dark');
    } catch {
      // localStorage unavailable (private browsing etc.) — theme just won't persist
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={mounted ? (isLight ? 'Switch to dark mode' : 'Switch to light mode') : 'Toggle theme'}
      title={mounted ? (isLight ? 'Switch to dark mode' : 'Switch to light mode') : 'Toggle theme'}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-muted hover:text-accent hover:border-accent/40 transition-colors"
    >
      {mounted && isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}

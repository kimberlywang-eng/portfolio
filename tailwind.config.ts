import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#05070d',
          soft: '#0a0e18',
          card: '#0d121e',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          soft: 'rgba(255,255,255,0.14)',
        },
        accent: {
          DEFAULT: '#5eead4',
          blue: '#60a5fa',
          violet: '#a78bfa',
          pink: '#f472b6',
        },
        ink: {
          DEFAULT: '#e6e9f2',
          muted: '#8b93a7',
          faint: '#5b6579',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'aurora-1':
          'radial-gradient(600px circle at 20% 20%, rgba(94,234,212,0.15), transparent 60%)',
        'aurora-2':
          'radial-gradient(600px circle at 80% 30%, rgba(167,139,250,0.15), transparent 60%)',
        'aurora-3':
          'radial-gradient(700px circle at 50% 90%, rgba(96,165,250,0.12), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        blink: 'blink 1s steps(1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

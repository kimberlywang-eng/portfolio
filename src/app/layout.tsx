import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SpotlightBackground from '@/components/SpotlightBackground';
import { site } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kimberlywang.vercel.app'),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Portfolio of Kimberly Wang: Associate Project Manager at Walt Disney Imagineering (Tokyo Disney Resort), 2x Tesla intern, Woven by Toyota (Tokyo), UT Austin BS ChemE (Honors). Open to PM, manufacturing/systems engineering, and data roles.',
  keywords: [
    'Kimberly Wang',
    'project manager',
    'Disney Imagineering',
    'Tesla',
    'engineering',
    'supply chain',
    'manufacturing',
    'UT Austin',
  ],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    url: 'https://kimberlywang.vercel.app',
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Applied before paint so a returning visitor's saved theme shows instantly,
// with no flash of the wrong theme. Defaults to dark when nothing is saved.
const themeInitScript = `
(function () {
  try {
    var saved = window.localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        {/* beforeInteractive runs before hydration, so the saved theme applies
            with no flash — and unlike a manual <head> element, this doesn't
            interfere with Next's own head/style injection. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {/* Keyboard-only bypass for the nav — invisible until it receives
            focus (first Tab press), then jumps straight to the content. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to main content
        </a>
        <SpotlightBackground />
        <CustomCursor />
        <Nav />
        <main id="main-content" className="mx-auto max-w-6xl px-6">
          {children}
        </main>
        <Footer />
        {/* Vercel Analytics — cookie-free page-view tracking, free on the
            Hobby plan, view at vercel.com under the project's Analytics tab.
            Only actually collects data once deployed on Vercel; a no-op
            everywhere else (local dev, this build). */}
        <Analytics />
      </body>
    </html>
  );
}

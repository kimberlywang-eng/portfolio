import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SpotlightBackground from '@/components/SpotlightBackground';
import { site } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kimberlywang-eng.github.io'),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Portfolio of Kimberly Wang — Associate Project Manager at Walt Disney Imagineering (Tokyo Disney Resort), 2x Tesla intern, Woven by Toyota (Tokyo), UT Austin BS ChemE (Honors). Open to PM, manufacturing/systems engineering, and data roles.',
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
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SpotlightBackground />
        <CustomCursor />
        <Nav />
        <main className="mx-auto max-w-6xl px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background: '#05070d',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(94,234,212,0.20), transparent 55%), radial-gradient(circle at 85% 85%, rgba(167,139,250,0.16), transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#5eead4',
            fontFamily: 'monospace',
            marginBottom: 20,
          }}
        >
          hi, I&apos;m
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            color: '#e6e9f2',
            fontWeight: 700,
            marginBottom: 22,
            lineHeight: 1,
          }}
        >
          Kimberly Wang
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            color: '#5eead4',
            marginBottom: 30,
          }}
        >
          Associate Project Manager · Walt Disney Imagineering
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#8b93a7',
            maxWidth: 850,
          }}
        >
          Chemical engineer by training, systems thinker by habit.
        </div>
      </div>
    ),
    { ...size }
  );
}

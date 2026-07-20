'use client';

import Script from 'next/script';
import { useState } from 'react';
import { Play, Zap, Volume2, Footprints } from 'lucide-react';

// TypeScript doesn't know about the <model-viewer> custom element by default.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-orbit'?: string;
        'camera-controls'?: boolean;
        autoplay?: boolean;
        'environment-image'?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
      };
    }
  }
}

const ANIMATIONS = [
  { label: 'Idle', file: '/models/animated_t-rex_model_free.glb', icon: Footprints },
  { label: 'Run', file: '/models/run_rex_animation.glb', icon: Play },
  { label: 'Bite', file: '/models/attack_rex_animation.glb', icon: Zap },
  { label: 'Roar', file: '/models/scream_rex_animation.glb', icon: Volume2 },
];

export default function ModelViewerEmbed() {
  const [src, setSrc] = useState(ANIMATIONS[0].file);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  return (
    <div className="card-surface p-5 md:p-6 my-8">
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        onLoad={() => setReady(true)}
      />
      <div className="rounded-xl overflow-hidden border border-border bg-bg-soft" style={{ height: 420 }}>
        {ready ? (
          <model-viewer
            src={src}
            alt="Animated T-Rex 3D model"
            camera-orbit="25deg 95deg 16m"
            camera-controls
            autoplay
            environment-image="/models/JurassicPark.jpg"
            shadow-intensity="2"
            shadow-softness="1"
            style={{ width: '100%', height: '100%', backgroundColor: '#0a0e18' }}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink-faint text-sm font-mono">
            loading viewer…
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {ANIMATIONS.map((a, i) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              data-cursor-hover
              onClick={() => {
                setSrc(a.file);
                setActive(i);
              }}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                active === i
                  ? 'bg-accent/15 border-accent/50 text-accent'
                  : 'border-border text-ink-muted hover:text-ink'
              }`}
            >
              <Icon size={14} /> {a.label}
            </button>
          );
        })}
      </div>
      <p className="text-center text-xs text-ink-faint mt-4">
        &quot;Animated T-Rex Model (free)&quot; by ulunkwulunk, licensed CC BY 4.0.
      </p>
    </div>
  );
}

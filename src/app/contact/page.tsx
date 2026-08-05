import { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kimberly Wang about a role, project, or collaboration.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-xs text-accent mb-2">contact</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">Let&apos;s talk</h1>
        <p className="text-ink-muted max-w-xl mb-10">
          Recruiting, collaboration, or just want to talk shop, the form below sends straight to
          my inbox. {site.openTo}
        </p>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
        <Reveal>
          <div className="space-y-4">
            <div className="card-surface p-5 flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <a href={`mailto:${site.email}`} className="text-sm text-ink-muted hover:text-ink">
                {site.email}
              </a>
            </div>
            <div className="card-surface p-5 flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              <span className="text-sm text-ink-muted">{site.location}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}

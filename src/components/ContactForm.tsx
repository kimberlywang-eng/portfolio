'use client';

import { FormEvent, useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeeykgnn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-surface p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 className="text-accent" size={32} />
        <h3 className="text-lg font-semibold text-ink">Message sent</h3>
        <p className="text-ink-muted text-sm max-w-sm">
          Thanks for reaching out. I read every message and usually reply within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company / Organization" name="company" />
        <Field label="Role or project title" name="project_title" placeholder="e.g. Senior PM, Data Eng role" />
      </div>
      <PillSelect
        label="Reason for reaching out"
        name="reason"
        multi
        options={[
          'Recruiting / job opportunity',
          'Collaboration',
          'Business / professional',
          'Academic / school',
          'Other',
        ]}
      />
      <PillSelect
        label="Timeline"
        name="timeline"
        options={['ASAP', 'Within a month', '1–3 months', 'Just exploring']}
      />
      <div>
        <label className="block text-sm text-ink-muted mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you working on, and how can I help?"
          className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 transition-colors"
        />
      </div>

      <input type="hidden" name="_subject" value="New message from kimberlywang.vercel.app" />

      {/* Honeypot — Formspree silently drops any submission where this is filled in.
          Hidden from sighted users via CSS, but bots that auto-fill every field catch it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        data-cursor-hover
        className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/50 px-6 py-2.5 text-sm text-accent hover:bg-accent/25 transition-colors disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
        <Send size={14} />
      </button>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={14} /> Something went wrong. Email me directly at kimberly.d.wang01@gmail.com instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-ink-muted mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg bg-bg-soft border border-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30 transition-colors"
      />
    </div>
  );
}

// Pill-button select — same visual language as the case-study category filter
// (ProjectGrid). Replaces a native <select> dropdown: every option is visible
// at a glance and it's a single tap/click instead of open-scroll-pick.
// `multi` allows picking more than one (e.g. reaching out for more than one
// reason at once); otherwise picking a new option swaps out the old one.
function PillSelect({
  label,
  name,
  options,
  multi = false,
}: {
  label: string;
  name: string;
  options: string[];
  multi?: boolean;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(opt: string) {
    setSelected((prev) => {
      if (multi) {
        return prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt];
      }
      return prev[0] === opt ? [] : [opt];
    });
  }

  return (
    <div>
      <p className="block text-sm text-ink-muted mb-1.5">
        {label}
        {multi && <span className="text-ink-faint"> (pick as many as apply)</span>}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              data-cursor-hover
              onClick={() => toggle(opt)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                active
                  ? 'bg-accent/15 border-accent/50 text-accent'
                  : 'border-border text-ink-muted hover:text-ink hover:border-ink-faint'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <input type="hidden" name={name} value={selected.join(', ')} />
    </div>
  );
}

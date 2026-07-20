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
          Thanks for reaching out — I read every message and usually reply within a few days.
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
        <SelectField
          label="Reason for reaching out"
          name="reason"
          options={[
            'Recruiting / job opportunity',
            'Collaboration',
            'Business / professional',
            'Academic / school',
            'Other',
          ]}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <SelectField
          label="Timeline"
          name="timeline"
          options={['ASAP', 'Within a month', '1–3 months', 'Just exploring']}
        />
        <Field label="Role or project title" name="project_title" placeholder="e.g. Senior PM, Data Eng role" />
      </div>
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
          className="w-full rounded-lg bg-bg-soft border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      <input type="hidden" name="_subject" value="New message from kimberlywang.vercel.app" />

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
          <AlertCircle size={14} /> Something went wrong — email me directly at kimberly.d.wang01@gmail.com instead.
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
        className="w-full rounded-lg bg-bg-soft border border-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent/50 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm text-ink-muted mb-1.5" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-lg bg-bg-soft border border-border px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent/50 transition-colors"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

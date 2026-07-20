# Kimberly Wang — Portfolio (v2)

Rebuilt July 2026 as a Next.js + TypeScript + Tailwind + Framer Motion app. Replaces the old
static HTML5UP site (archived in `_archive_old_site/`, safe to delete once you've confirmed
nothing there is needed).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires Node 18+.

> **Note:** this project was built in an environment where `npm install` couldn't run (no
> registry access), so this will be the first real compile/test. If anything breaks on first
> run, it's almost certainly a small TypeScript or import issue — check the terminal output,
> it'll point at the exact file and line.

## Before this goes live — outstanding items

1. **Formspree** — the contact form (`src/components/ContactForm.tsx`) posts to a placeholder
   endpoint. Sign up free at [formspree.io](https://formspree.io) with
   kimberly.d.wang01@gmail.com, create a form, and replace `YOUR_FORM_ID` in that file with
   your real form ID. Until then, submissions won't go anywhere.
2. **Resume PDF** — no resume file is wired up yet. Drop a `resume.pdf` into `/public`, then
   set `resumeHref` in `src/data/site.ts` to `/resume.pdf` to turn on download buttons.
3. **Deploy** — this repo is set up to deploy cleanly on [Vercel](https://vercel.com) (free
   tier): connect the GitHub repo, it auto-detects Next.js, no config needed. If you want to
   keep a custom domain from GitHub Pages, point the DNS at Vercel instead — GitHub Pages can't
   serve this app (it needs Node, not just static files, for local dev — though `next build`
   does produce a fully static-exportable site if you'd rather stay on GitHub Pages; ask and
   I can wire up `output: 'export'` in `next.config.js`).
4. **`_archive_old_site/`** — everything from the old static site, kept as a safety net. Once
   you've spot-checked the new site has everything you need (I cross-checked every image and
   page reference before moving things), it's safe to delete this folder.

## What changed from v1

- Every project and blog page now renders from a typed content model
  (`src/data/projects.ts`, `src/data/blog.ts`) instead of hand-copied HTML — one template,
  consistent structure, way easier to add a new case study later.
- Dark, gradient-accented visual system aimed at tech recruiters, with cursor-tracking
  effects, scroll-triggered reveals (Framer Motion), and a coding-animation hero.
- Added: skills matrix, live GitHub widget (public API, no auth needed), a
  code-editor-styled social links widget, and a contact form with structured project-brief
  fields instead of one free-text box.
- Nothing was deleted — every page from the old site exists here in some form, content
  tightened for a recruiter audience but facts and technical detail preserved.
- Disney is named explicitly throughout, per your call — this is a deliberate exception to
  the general "don't name Disney publicly" rule, treated like a resume rather than social
  content.

## Project structure

```
src/
  app/            — routes (App Router)
  components/     — shared UI
  data/           — all real content (projects, blog posts, skills, site info)
  types/          — shared TypeScript types
public/
  images/         — every image from the old site
  models/         — 3D model files for the interactive T-Rex viewer
```

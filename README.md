# Kimberly Wang — Portfolio (v2)

Next.js + TypeScript + Tailwind + Framer Motion app. Live at kimberlywang.vercel.app.
Old static HTML5UP site is archived in `_archive_old_site/` — safe to delete once you've
confirmed nothing there is needed.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires Node 18+.

## Before you push the latest round of changes

1. **Ship it**: `git add -A && git commit -m "light/dark mode, profile photo, security hardening" && git push`.
   Vercel auto-deploys from `main`.
2. **Next.js version bump** — `package.json` now pins `next` to `14.2.35` (was `14.2.15`),
   which backports several 2026 security patches (see next.config.js comment for the CSP
   this also adds). Run `npm install` to pick it up — this will update `package-lock.json`.
3. **`_archive_old_site/`** — safe to delete once you've spot-checked the live site has
   everything you need.

## What's new in this round (light/dark mode, photo, security, polish)

- **Light/dark mode.** Defaults to the existing dark theme; a sun/moon toggle in the nav
  (desktop and mobile) switches to a light theme and remembers the choice in `localStorage`.
  Every colour in the site is a CSS variable (`src/app/globals.css`, `:root` vs `html.light`)
  so both themes stay in sync automatically — no per-component light/dark branching needed.
- **Your photo** (`public/images/kim_profile-2026.jpeg`) is now live in three places: the
  About page hero, a small circular badge in the homepage hero next to "hi, I'm", and a tiny
  avatar in the nav logo.
- **Security hardening**: added CSP, HSTS, X-Frame-Options and related headers
  (`next.config.js`), a Formspree honeypot field on the contact form so bots get silently
  dropped, bumped Next.js to a patched version, and set up Dependabot
  (`.github/dependabot.yml`) so you get an automatic weekly PR if a dependency needs a
  security update — no manual auditing required going forward.
- **Grammar/copy review** — went through every case study and blog post looking for typos
  and rough phrasing; the copy was already clean from the round-1 rewrite, nothing needed
  fixing.
- **Structure review** — the `app/ → components/ → data/ → types/` split already matches
  what you'd want (routes, UI, content, and shared types kept separate) — didn't find
  anything worth restructuring.

> **Sandbox note:** I don't have npm registry access in my working environment, so none of
> this was compiled/built on my end — same constraint as the original rebuild. I did a
> careful manual pass (brace-balanced every edited file, checked every new import resolves,
> checked every image path exists) but your first `npm run dev` after pulling these changes
> is the real test, same as last time.

## What changed from v1 (original Next.js rebuild)

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

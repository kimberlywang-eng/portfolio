# Kimberly Wang — Portfolio

My personal site, built with Next.js, TypeScript, Tailwind, and Framer Motion. Live at [kimberlywang.vercel.app](https://kimberlywang.vercel.app).

Case studies and blog posts live in `src/data/projects.ts` and `src/data/blog.ts` and render through one shared page template. Adding a new one just means adding an entry to one of those files, not writing a new page.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Needs Node 18+.

## What's under the hood

Next.js 14 with the App Router, and TypeScript throughout. Tailwind for styling, with the whole colour palette pulled from CSS variables so light and dark mode stay in sync without touching individual components. Framer Motion handles the scroll reveals and page transitions. The contact form posts to Formspree. It's hosted on Vercel and deploys automatically from `main`.

## Folder layout

```
src/app          routes
src/components   shared UI
src/data         the actual content: projects, blog posts, skills, site info
src/types        shared TypeScript types
public/images
public/models    3D model files for the interactive T-Rex viewer
```

## A couple of things worth knowing

Disney shows up by name throughout, in job titles and case studies. That's on purpose. This site is closer to a resume than to social content, so I treat it like one.

Security headers (CSP, HSTS, and the rest) live in `next.config.js`, and Dependabot checks dependencies weekly so I'm not doing that by hand.

The old static HTML site is still sitting in `_archive_old_site/`, kept around for reference.

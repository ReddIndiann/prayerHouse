# Prayer House Church — Düsseldorf

A modern rebuild of [prayerhousechurch.com](https://www.prayerhousechurch.com) using Vite, React, TypeScript and Tailwind CSS v4.

The original WordPress site was analysed and rebuilt as a fast, accessible single-page application — keeping the church's real content and identity while removing the demo content, plugin bloat and broken links.

## Highlights

- **10 routes** — home, about, leadership, ministries, messages, weekly activities, gallery, give, contact, new converts
- **Real content** — service times, leadership, ministries, sermon archive and contact details from the church
- **Working media** — YouTube message modals and a custom podcast player streaming the church's message archive
- **Accessible** — Lighthouse 100 for accessibility, best practices and SEO on audited pages
- **Responsive** — no horizontal overflow from 320px to 1440px
- **Thoughtful details** — dismissible service notice, gallery lightbox, sermon filters, giving calculator, validated forms
- **Performance** — optimised WebP images, lazy loading, no jQuery, no page builder

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router 7 |
| Icons | Lucide React |
| Fonts | Fraunces, Inter, Damion |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Structure

```
src/
  components/   Header, footer, layout, audio player, video modal, UI primitives
  data/         Site details, leaders, ministries, sermons, gallery, testimonials
  lib/          Page metadata hook
  pages/        One component per route
  index.css     Tailwind theme tokens, base styles and component classes
public/images/  Optimised church photography (WebP)
```

Content lives in `src/data/*` so service times, sermons and leaders can be updated without touching layout code.

## Deployment (Vercel)

The project is pre-configured for Vercel:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 (`.nvmrc`) |
| SPA rewrites | `vercel.json` → all unknown paths serve `index.html` |

### Option A — Git import (recommended)

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Vercel reads `vercel.json`, so the build settings are already correct — just press **Deploy**.
4. Add the custom domain (`prayerhousechurch.com`) under **Settings → Domains** and point DNS at Vercel.

### Option B — CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

Every push to `main` triggers a production deployment once the repo is connected.

`public/_redirects` is kept for Netlify-style hosts; Vercel uses `vercel.json`.

## Notes

- The giving flow links to the church's official, secure giving page; no payment details are stored in this project.
- Contact and new-convert forms are front-end demos that show a success state — connect them to a form service or API before going live.
- The app uses client-side routing. Static hosts need an SPA fallback rewrite (see `public/_redirects` for Netlify).
- Photography belongs to Prayer House Church and is used here for the rebuild.

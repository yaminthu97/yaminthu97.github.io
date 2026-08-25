# Portfolio

Personal portfolio site for a Full Stack Developer. Built with Next.js (App Router), TypeScript, and Tailwind CSS, statically exported for SEO-friendly, framework-free hosting. Bilingual (English/Japanese) with real `/en` and `/ja` routes so both language versions are independently crawlable and indexable.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # build the static export into out/
npm run start     # serve a production build (only useful without output: 'export')
npm run lint      # run oxlint
```

`npm run build` produces a fully static site in `out/` (via `output: "export"` in `next.config.ts`) — deploy that folder to any static host (Netlify, GitHub Pages, S3/CloudFront, etc.). No Node server is required at runtime.

## Content and translations

All editable content lives under `src/i18n/` as a single typed content tree per language — the UI components render whatever is there, so you shouldn't need to touch component code to update copy.

| File | Controls |
|---|---|
| `src/i18n/types.ts` | The `Content` shape shared by both languages — add new fields here first |
| `src/i18n/en.ts` | English copy: profile, hero, about, skills, experience, projects, approach, resume, contact, footer |
| `src/i18n/ja.ts` | Japanese translation of the same content tree |

Both files must stay structurally identical (TypeScript will error if a field is missing) — see the `technologies` field on each project for an example of a shared, non-translated array.

## Routing and SEO

- `src/app/[lang]/layout.tsx` — root layout; sets `<html lang>`, loads fonts (`next/font`: Inter, JetBrains Mono, Noto Sans JP), wraps the theme provider, and emits `hreflang` alternates via `generateMetadata`.
- `src/app/[lang]/page.tsx` — the actual page content, with per-locale `<title>`/description/Open Graph tags via `generateMetadata`.
- `src/app/sitemap.ts` / `src/app/robots.ts` — generate `sitemap.xml` / `robots.txt` at build time.
- `public/index.html` — a plain static redirect from `/` to `/en`, since static export has no server-side redirect support.
- `src/lib/site.ts` — set `SITE_URL` to the real deployed domain; it feeds canonical URLs, hreflang tags, and the sitemap.

## Theme

Dark/light mode is handled by `src/context/ThemeContext.tsx` plus a small inline script in the root layout that reads `localStorage`/OS preference before paint to avoid a flash of the wrong theme. Toggle lives in the navbar (`src/components/Navbar/ToggleControls.tsx`), which also renders the EN/JA language switch as real links to `/en` and `/ja`.

## Placeholders to replace before publishing

Search the codebase for square-bracket placeholders (`[YOUR ...]`) — they mark content that must come from you rather than be invented:

- Contact details (email, phone, GitHub) in `src/i18n/en.ts` and `src/i18n/ja.ts`
- `public/resume.pdf` — add your actual resume file
- `src/lib/site.ts` — set the real `SITE_URL`
- `public/favicon.svg` / an Open Graph image, if you want one beyond the default favicon

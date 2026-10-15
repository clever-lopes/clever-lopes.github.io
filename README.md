# cleverlopes.com

Source of my personal site: https://cleverlopes.com

A single page in English and Portuguese, with light and dark themes, listing what I do, selected projects, the stack I work with and how to reach me.

## Stack

- Vue 3 and TypeScript, built with Vite
- Tailwind CSS 4
- Prerendered at build time: `src/entry-server.ts` renders the page with `@vue/server-renderer` and `scripts/prerender.mjs` writes the HTML into `dist/index.html`, so crawlers and readers without JavaScript get the full content
- JSON-LD, Open Graph card, robots and sitemap in `index.html` and `public/`

## Tests

`tests/responsive.spec.ts` is a Playwright suite (19 tests) that runs against the production build: no horizontal overflow from 320px to 1920px, every section visible on a phone, project rows inside the viewport, the portrait capped in size, and the name above the fold.

## Deploy

Every push to `main` runs the type check and the Playwright suite, and only then publishes `dist/` to GitHub Pages. The custom domain is set in the repository's Pages settings.

## Commands

```bash
npm ci
npm run dev        # dev server
npm run build      # type check, build and prerender
npm test           # Playwright suite against the production build
```

# personal-site

Ben Paldy's portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

- **Name, intro, hero photo, resume:** `src/data/site.ts`
- **Project cards (title, image) on the homepage:** `src/data/projects.ts`
- **Project page content:** one file per project in `src/pages/projects/<slug>.astro`
- **Images and the resume PDF:** `public/` (e.g. `public/images/battery-pack.jpg`)
- **Colors, fonts and shared styles:** `src/styles/global.css`

## File structure

```
src/
  pages/                  each file is one page of the site
    index.astro           homepage            → /
    resume.astro          resume viewer       → /resume/
    projects/
      fsae-battery-pack.astro                 → /projects/fsae-battery-pack/
      ...                 (one file per project)
  layouts/
    Base.astro            <html>/<head> wrapper used by every page
    ProjectLayout.astro   back link, title and cover image for project pages
  data/
    site.ts               name, intro, resume file
    projects.ts           project list for the homepage cards
  styles/
    global.css            colors plus styles shared by all pages (taken from the homepage)
```

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to dist/
```

## Deploying

The site is hosted on Cloudflare Workers at https://benpaldy.dev (`wrangler.jsonc`
serves the `dist/` build output).

GitHub Pages no longer hosts the site. On every push to `main`,
`.github/workflows/deploy.yml` publishes only `.github/pages-redirect/index.html`
(as both `index.html` and `404.html`), so any old
https://astro2231.github.io/personal-site/... link forwards to the same page on
benpaldy.dev. In the repo's **Settings → Pages**, **Source** must stay on
**GitHub Actions** and **Custom domain** must stay empty.

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

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to https://benpaldy.dev (the old astro2231.github.io/personal-site/
address redirects there). One-time setup: in the
repo's **Settings → Pages**, set **Source** to **GitHub Actions** and **Custom domain**
to `benpaldy.dev`.

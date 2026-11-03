# personal-site

Ben Paldy's portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

- **Name, intro, hero photo, resume:** `src/data/site.ts`
- **Projects (homepage cards + project pages):** `src/data/projects.ts`
- **Images and the resume PDF:** `public/` (e.g. `public/images/battery-pack.jpg`)
- **Colors and fonts:** `src/styles/global.css`

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321/personal-site/
npm run build    # outputs to dist/
```

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to https://astro2231.github.io/personal-site/. One-time setup: in the
repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages under the custom domain https://benpaldy.dev
// (public/CNAME holds the domain). The old https://astro2231.github.io/personal-site/
// address redirects here automatically once the domain is set in Settings → Pages.
export default defineConfig({
  site: 'https://benpaldy.dev',
});

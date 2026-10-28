import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hit972.github.io',
  base: '/AIHub-il',
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});

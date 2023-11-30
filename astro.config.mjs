import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte()],
  site: 'https://ojas8484.github.io',
  base: '/thinkRedStaticWeb',
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});
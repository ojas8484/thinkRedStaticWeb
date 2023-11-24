import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import svelte from '@astrojs/svelte';
import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
	site: 'https://ojas8484.github.io',
	base: '/thinkRedStaticWeb',
	output: 'server',
	adapter: node({
	  mode: "standalone"
	})
	
});

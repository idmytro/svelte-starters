/* https://unocss.dev/integrations/svelte-scoped */

import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    UnoCSS()
  ]
});

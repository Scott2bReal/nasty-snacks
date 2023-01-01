import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact(), prefetch()],
  adapter: netlify()
});
import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import netlify from "@astrojs/netlify"

// https://astro.build/config
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    solidJs(),
  ],
  adapter: netlify({
    imageCDN: false,
  }),
})

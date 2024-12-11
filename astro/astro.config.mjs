import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import netlify from "@astrojs/netlify"

// https://astro.build/config
import solidJs from "@astrojs/solid-js"

import partytown from "@astrojs/partytown"

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
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: netlify({
    imageCDN: true,
  }),
})

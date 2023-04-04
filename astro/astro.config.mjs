import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import netlify from "@astrojs/netlify/functions"

// https://astro.build/config
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    prefetch(),
    solidJs(),
  ],
  adapter: netlify(),
})

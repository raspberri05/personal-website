// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  site: "https://www.nayasinghania.com",
  image: {
    domains: ["raw.githubusercontent.com"],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});

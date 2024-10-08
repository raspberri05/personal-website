// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

import clerk from "@clerk/astro";

import node from "@astrojs/node";

import { dark } from "@clerk/themes";

// https://astro.build/config
export default defineConfig({
  site: "https://naya.singhania.com",
  integrations: [
    react(),
    clerk({
      appearance: {
        baseTheme: dark,
      },
    }),
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
  adapter: node({ mode: "standalone" }),
  output: "server",
});

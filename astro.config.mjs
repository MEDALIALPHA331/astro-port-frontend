import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: "gcqtounw",
      dataset: "production",
      useCdn: true,
      apiVersion: "2023-05-03",
    }),
  ],
});

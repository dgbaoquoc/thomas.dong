import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import unocss from "@unocss/astro";
import { defineConfig } from 'astro/config';
import vesper from "./src/lib/vesper.json";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    unocss({
      injectReset: true
    }),
    react()],
  markdown: {
    shikiConfig: {
      theme: vesper,
      wrap: true
    }
  }
});
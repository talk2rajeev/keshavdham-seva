import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://keshavdhamseva.org",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});

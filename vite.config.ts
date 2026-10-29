// @lovable.dev/vite-tanstack-config already includes tanstackStart, react, tailwind, nitro etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Static prerender of "/" so Netlify can serve .output/public/index.html
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  nitro: { preset: "cloudflare-module" },
});

// Copies the generated static site (wherever the build placed it) into ./publish for Netlify.
import { cpSync, existsSync, rmSync } from "node:fs";
const candidates = ["dist/client", ".output/public", "dist/public", "dist"];
const src = candidates.find((d) => existsSync(`${d}/index.html`));
if (!src) { console.error("index.html not found in", candidates); process.exit(1); }
rmSync("publish", { recursive: true, force: true });
cpSync(src, "publish", { recursive: true });
console.log(`Static site copied from ${src} to publish/`);

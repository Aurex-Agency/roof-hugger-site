// Build-time static site generation.
// Runs after the client build (dist/) and the SSR build (dist/server/) and
// writes a fully-rendered index.html for every route, so crawlers and social
// scrapers receive real per-page <title>, meta, JSON-LD, and body content
// instead of an empty SPA shell.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render, routes } = await import("./dist/server/entry-server.js");

let count = 0;
for (const route of routes) {
  const { html, helmet } = render(route);

  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  const page = template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);

  const outFile =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route, "index.html");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  count += 1;
  console.log(`prerendered ${route} -> ${path.relative(distDir, outFile)}`);
}

// The SSR bundle is only needed during this step; drop it from the deploy.
fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });
console.log(`\nPrerendered ${count} routes.`);

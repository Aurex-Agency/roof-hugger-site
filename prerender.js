// Build-time static site generation.
// Runs after the client build (dist/) and the SSR build (dist/server/) and
// writes a fully-rendered index.html for every route, so crawlers and social
// scrapers receive real per-page <title>, meta, JSON-LD, and body content
// instead of an empty SPA shell. Also emits a real 404.html (so Vercel can
// return a proper 404 status for unknown URLs) and generates sitemap.xml
// from the route list so the sitemap can never drift out of sync.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");
const SITE_URL = "https://shurdensroofing.com";

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render, routes } = await import("./dist/server/entry-server.js");

function renderRoute(route, outFile) {
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

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
}

let count = 0;
for (const route of routes) {
  const outFile =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route, "index.html");
  renderRoute(route, outFile);
  count += 1;
  console.log(`prerendered ${route} -> ${path.relative(distDir, outFile)}`);
}

// Any path that doesn't match a route renders the NotFound page. Emitting it
// as 404.html lets Vercel serve real 404 status codes instead of soft 404s.
renderRoute("/this-page-does-not-exist", path.join(distDir, "404.html"));
console.log("prerendered NotFound -> 404.html");

// --- sitemap.xml ------------------------------------------------------------
// Utility/referral routes stay out of the sitemap; everything else is
// generated from the same route list that drives prerendering.
const SITEMAP_EXCLUDE = new Set(["/refer", "/referral-join"]);

function priorityFor(route) {
  if (route === "/") return "1.0";
  if (route === "/services" || route.startsWith("/services/")) return "0.9";
  if (route.startsWith("/roofing/")) return "0.8";
  if (route === "/service-areas" || route === "/contact") return "0.8";
  if (route === "/privacy-policy") return "0.3";
  return "0.7";
}

function changefreqFor(route) {
  if (route === "/") return "weekly";
  if (route === "/privacy-policy") return "yearly";
  return "monthly";
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemapEntries = routes
  .filter((r) => !SITEMAP_EXCLUDE.has(r))
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r === "/" ? "/" : r}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreqFor(r)}</changefreq><priority>${priorityFor(r)}</priority></url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`generated sitemap.xml (${routes.length - SITEMAP_EXCLUDE.size} URLs)`);

// The SSR bundle is only needed during this step; drop it from the deploy.
fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });
console.log(`\nPrerendered ${count + 1} routes.`);

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import AppShell from "./AppShell";
import { cities } from "./data/cities";

// Every route that should be emitted as a static HTML file at build time.
export const routes: string[] = [
  "/",
  "/services",
  "/service-areas",
  "/contact",
  "/gallery",
  "/reviews",
  "/guides/roof-dormers",
  "/referral-join",
  "/privacy-policy",
  ...cities.map((c) => `/roofing/${c.slug}`),
];

export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet as HelmetServerState };
}

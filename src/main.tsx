import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Prerendered pages ship with element markup inside #root, so hydrate only
// when real SSR elements exist. In dev, Vite serves the raw <!--app-html-->
// placeholder comment, which must mount fresh instead of hydrating.
if (rootEl.children.length > 0) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}

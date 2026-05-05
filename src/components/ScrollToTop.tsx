import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToHash = (hash: string) => {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return false;
  const headerEl = document.querySelector("header") as HTMLElement | null;
  const navEl = document.querySelector("[data-service-nav]") as HTMLElement | null;
  const offset = (headerEl?.offsetHeight ?? 0) + (navEl?.offsetHeight ?? 0) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Try a few times to allow the target section to mount
      let attempts = 0;
      const tick = () => {
        if (scrollToHash(hash)) return;
        if (attempts++ < 10) setTimeout(tick, 60);
      };
      tick();
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;

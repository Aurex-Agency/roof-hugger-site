import { useEffect, useState } from "react";

const links = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "repair", label: "Storm & Repair" },
  { id: "insurance", label: "Insurance" },
  { id: "maintenance", label: "Maintenance" },
];

const ServiceNav = () => {
  const [active, setActive] = useState<string>("residential");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 160;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) current = l.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navEl = document.querySelector('[data-service-nav]') as HTMLElement | null;
    const headerEl = document.querySelector('header') as HTMLElement | null;
    const offset = (navEl?.offsetHeight ?? 0) + (headerEl?.offsetHeight ?? 0) + 8;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Services on this page"
      data-service-nav
      className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="container flex gap-1 overflow-x-auto py-3 md:gap-2">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className={`shrink-0 rounded-md px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-colors md:text-sm ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default ServiceNav;

import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "Residential Services", href: "#services-residential" },
  { label: "Commercial Repair", href: "#services-commercial" },
  { label: "Roofing Repair", href: "#services-roofing-repair" },
];

const links = [
  { label: "Storm Damage", href: "#storm-damage" },
  { label: "Our Work", href: "#our-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "662-549-9165";
const TEL = "tel:6625499165";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-secondary-foreground border-b border-white/5">
      <nav className="container flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary font-display text-primary-foreground">S</span>
          <span className="font-display text-lg leading-none tracking-wide">
            SHURDEN'S<span className="block text-[10px] font-body font-bold tracking-[0.2em] text-muted-foreground">ROOFING LLC</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/85 transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={TEL}
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm text-accent-foreground transition-transform hover:scale-[1.03] hover:shadow-cta md:inline-flex"
        >
          <Phone className="h-4 w-4" /> Call {PHONE}
        </a>

        <button
          type="button"
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-md text-secondary-foreground md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-dark text-dark-foreground transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-display text-lg">MENU</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center">
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-6 pt-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-5 font-display text-2xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <a
            href={TEL}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 font-display text-lg text-accent-foreground"
          >
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

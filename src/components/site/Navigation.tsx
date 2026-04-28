import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/shurdens-roofing-logo.svg";
import gafBadge from "@/assets/gaf-master-elite.webp";

const services = [
  { label: "Residential Roofing", to: "/services#residential" },
  { label: "Commercial Roofing", to: "/services#commercial" },
  { label: "Roof Repair", to: "/services#repair" },
];

const links = [
  { label: "Home", to: "/" },
  { label: "Project Gallery", to: "/gallery" },
  { label: "Real Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact" },
];

const PHONE = "662-549-9165";
const TEL = "tel:6625499165";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-secondary-foreground border-b border-white/5">
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20" aria-label="Primary">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Shurden's Roofing LLC">
          <img src={logo} alt="Shurden's Roofing LLC" className="h-10 w-auto md:h-11 lg:h-12" />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex lg:gap-7 xl:gap-8">
          <li>
            <Link to="/" className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/85 transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-secondary-foreground/85 transition-colors hover:text-primary"
            >
              Roofing Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            <div
              role="menu"
              className={`absolute left-0 top-full min-w-[16rem] overflow-hidden rounded-md border border-white/10 bg-secondary shadow-lg transition-all ${
                servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  role="menuitem"
                  className="block px-5 py-3 text-sm font-bold uppercase tracking-wider text-secondary-foreground/85 transition-colors hover:bg-white/5 hover:text-primary"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </li>
          {links.slice(1).map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/85 transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.gaf.com/en-us/roofing-contractors/residential/shurden-s-roofing-llc-1106104"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GAF Master Elite Certified, opens in new tab"
            className="hidden xl:inline-flex"
          >
            <img src={gafBadge} alt="GAF Master Elite Certified" className="h-9 w-auto" />
          </a>
          <a
            href={TEL}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-cta xl:px-5"
          >
            <Phone className="h-4 w-4" />
            <span className="xl:hidden">Call Now</span>
            <span className="hidden xl:inline">Call {PHONE}</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-md text-secondary-foreground lg:hidden"
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
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="block border-b border-white/10 py-5 font-display text-2xl">
              Home
            </Link>
          </li>
          <li>
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between border-b border-white/10 py-5 font-display text-2xl"
            >
              Roofing Services
              <ChevronDown className={`h-6 w-6 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <ul className="flex flex-col">
                <li>
                  <Link to="/services" onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 pl-4 font-display text-lg text-dark-foreground/85">
                    All Services
                  </Link>
                </li>
                {services.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-4 pl-4 font-display text-lg text-dark-foreground/85"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {links.slice(1).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-5 font-display text-2xl"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <a
            href={TEL}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 font-display text-lg font-semibold text-primary-foreground"
          >
            <Phone className="h-5 w-5" /> Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

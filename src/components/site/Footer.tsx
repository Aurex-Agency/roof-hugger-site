import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/shurdens-roofing-logo.svg";
import gafBadge from "@/assets/gaf-master-elite.webp";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container py-14 md:py-16">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-8">
          <a href="#top" className="flex items-center" aria-label="Shurden's Roofing LLC">
            <img src={logo} alt="Shurden's Roofing LLC" className="h-10 w-auto md:h-12" />
          </a>
          <div className="flex items-center gap-3">
            <a
              aria-label="Shurden's Roofing on Facebook"
              href="https://www.facebook.com/shurdensroofing"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Shurden's Roofing on Instagram"
              href="https://www.instagram.com/shurdensroofing"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Shurden's Roofing LLC
            </h3>
            <p className="mt-3 font-body text-sm text-dark-foreground/75">
              Serving the Golden Triangle since 2015.
            </p>
            <p className="mt-3 font-body text-sm text-dark-foreground/75">Starkville, MS 39759</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Service Areas
            </h3>
            <ul className="mt-3 space-y-1 font-body text-sm text-dark-foreground/75">
              <li>Starkville, MS</li>
              <li>Columbus, MS</li>
              <li>West Point, MS</li>
              <li>Maben, MS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <a
              href="tel:6625499165"
              className="mt-3 block font-body text-sm text-dark-foreground/75 hover:text-primary"
            >
              662-549-9165
            </a>
            <p className="mt-1 font-body text-sm text-dark-foreground/75">Mon to Sat: 7am to 7pm</p>
            <p className="mt-1 font-body text-sm text-dark-foreground/75">Emergency service available</p>
          </div>

          <div className="flex items-start gap-4">
            <a
              href="https://www.gaf.com/en-us/roofing-contractors/residential/shurden-s-roofing-llc-1106104"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Shurden's Roofing on GAF, opens in new tab"
            >
              <img
                src={gafBadge}
                alt="GAF Master Elite Certified"
                className="h-14 w-auto shrink-0"
                loading="lazy"
              />
            </a>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                GAF Master Elite<sup>®</sup>
              </h3>
              <p className="mt-3 font-body text-sm text-dark-foreground/75">
                Mississippi Licensed and Fully Insured. Roofing the Golden Triangle since 2015.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-left font-body text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Shurden's Roofing LLC. All Rights Reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <li>Mississippi Licensed and Insured</li>
            <li>
              <a href="#privacy" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

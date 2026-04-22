import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container py-14 md:py-16">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary font-display text-primary-foreground">S</span>
            <span className="font-display text-base tracking-wide">SHURDEN'S ROOFING</span>
          </a>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">Shurden's Roofing LLC</h3>
            <p className="mt-3 font-body text-sm text-dark-foreground/75">Starkville, MS 39759</p>
            <a href="tel:6625499165" className="mt-1 block font-body text-sm text-dark-foreground/75 hover:text-primary">662-549-9165</a>
          </div>
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">Service Areas</h3>
            <p className="mt-3 font-body text-sm text-dark-foreground/75">
              Starkville · West Point · Columbus · Maben · Oktibbeha County
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">Fully Licensed & Insured</h3>
            <p className="mt-3 font-body text-sm text-dark-foreground/75">Serving Mississippi Since 2015</p>
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-left font-body text-xs text-muted-foreground">
          © 2026 Shurden's Roofing LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Phone } from "lucide-react";

const MobileCallBar = () => {
  return (
    <a
      href="tel:6624986629"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-primary px-6 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground shadow-[0_-8px_24px_-8px_hsl(207_35%_6%/0.5)] md:hidden"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <Phone className="h-4 w-4" /> Call Now: 662-498-6629
    </a>
  );
};

export default MobileCallBar;

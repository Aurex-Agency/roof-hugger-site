import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  to?: string;
}

const CtaBanner = ({
  eyebrow = "Ready When You Are",
  title,
  body,
  buttonLabel = "Get a Free Estimate",
  to = "/contact",
}: CtaBannerProps) => {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container grid items-center gap-8 py-16 md:grid-cols-[1fr_auto] md:gap-12 md:py-20">
        <div>
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {body && (
            <p className="mt-5 max-w-2xl font-body text-base text-secondary-foreground/95 md:text-lg">{body}</p>
          )}
        </div>
        <Link
          to={to}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-cta"
        >
          {buttonLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;

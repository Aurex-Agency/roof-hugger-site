import { Clock, FileCheck, Sparkles, Handshake } from "lucide-react";

const themes = [
  { icon: Clock, title: "They show up fast.", body: "Customers mention quick scheduling, especially after storm damage and urgent roof issues." },
  { icon: FileCheck, title: "They handle the claim work.", body: "Reviews repeatedly mention help with insurance companies, documentation, and the process from start to finish." },
  { icon: Sparkles, title: "They clean up right.", body: "The crew leaves the property looking like they were never there, except for the new roof." },
  { icon: Handshake, title: "Josh keeps his word.", body: "Local customers value clear communication, reliability, and doing what was promised." },
];

const ReviewThemes = () => {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container">
        <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">
          What People Keep Mentioning
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-foreground md:text-[44px]">
          Four Things North Mississippi Customers Bring Up Again and Again.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((t) => (
            <article
              key={t.title}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <t.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewThemes;

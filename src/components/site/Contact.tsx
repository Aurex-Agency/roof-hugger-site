import { useState, FormEvent } from "react";
import { Phone, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") ?? "");
    const zip = String(data.get("zip") ?? "");

    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      toast({ title: "Invalid phone number", description: "Please enter a 10-digit US phone number.", variant: "destructive" });
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      toast({ title: "Invalid ZIP code", description: "ZIP must be 5 digits.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    // Placeholder: invisible reCAPTCHA v3 + backend submission to be wired up.
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast({ title: "Request received", description: "We'll call you back within the hour during business hours." });
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <img
        src={contactBg}
        alt="Shurden's Roofing work truck parked in front of a Southern brick home"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

      <div className="container relative grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Inspection · No Obligation</p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl">Need Us Out There?</h2>
          <p className="mt-6 max-w-md font-body text-base text-secondary-foreground/75 md:text-lg">
            Send the form or call the number. We will inspect the roof, tell you what we see, and explain the right next step without pushing you into work you do not need.
          </p>

          <a
            href="tel:6625499165"
            className="mt-10 inline-flex items-center gap-3 font-display text-3xl text-primary transition-colors hover:text-accent md:text-4xl"
          >
            <Phone className="h-7 w-7" /> 662-549-9165
          </a>
          <p className="mt-4 flex items-center gap-2 font-body text-sm text-secondary-foreground/70">
            <Clock className="h-4 w-4" /> Mon to Sat: 7am to 7pm · Emergency Roofing Service Available
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-white/5 bg-dark p-6 shadow-[var(--shadow-card)] md:p-8"
          noValidate
        >
          <div className="space-y-5">
            <Field label="Full Name" name="name" type="text" required autoComplete="name" />
            <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" placeholder="(662) 555-1234" />
            <Field label="Zip Code" name="zip" type="text" required inputMode="numeric" maxLength={5} autoComplete="postal-code" placeholder="39759" />
            <div>
              <label htmlFor="message" className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/80">
                What's going on with your roof?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Storm damage, leak, full replacement..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-primary px-6 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-cta disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Request My Free Inspection →"}
            </button>
            <p className="text-center font-body text-[11px] text-dark-foreground/45">
              Protected by reCAPTCHA. We never share your info.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type,
  ...rest
}: {
  label: string;
  name: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label htmlFor={name} className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/80">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      {...rest}
    />
  </div>
);

export default Contact;

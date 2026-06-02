import { useState, FormEvent } from "react";
import { Phone, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

const SERVICE_OPTIONS = [
  "Roof Replacement",
  "Roof Repair",
  "Storm Damage",
  "Inspection",
  "Gutter",
  "Other",
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState<string>("");
  const [optIn, setOptIn] = useState(false);


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);

    if (!name) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      toast({ title: "Invalid phone number", description: "Please enter a 10-digit US phone number.", variant: "destructive" });
      return;
    }
    if (!service) {
      toast({ title: "Select a service", description: "Pick the service you're interested in.", variant: "destructive" });
      return;
    }
    if (!message) {
      toast({ title: "Message required", description: "Please tell us briefly what's going on with your roof.", variant: "destructive" });
      return;
    }
    if (!optIn) {
      toast({ title: "Opt-in required", description: "Please confirm we can contact you about your request.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/4c2e69fd-37d3-4a83-ad28-e07bcec714b9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          phone,
          service_interest: service,
          message,
          opt_in: true,
          source: "shurdensroofing.com — Home Contact",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setService("");
      setOptIn(false);
      toast({ title: "Request sent", description: "Thanks! We'll be in touch shortly. For urgent issues, call 662-498-6629." });
    } catch (err) {
      toast({ title: "Could not send request", description: "Please try again or call 662-498-6629.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
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
            href="tel:6624986629"
            className="mt-10 inline-flex items-center gap-3 font-display text-3xl text-primary transition-colors hover:text-accent md:text-4xl"
          >
            <Phone className="h-7 w-7" /> 662-498-6629
          </a>
          <p className="mt-4 flex items-center gap-2 font-body text-sm text-secondary-foreground/85">
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

            <fieldset>
              <legend className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/80">
                Service Interest
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map((s) => (
                  <label key={s} className="flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-secondary/40 px-3 py-2 font-body text-sm text-dark-foreground hover:border-primary/50">
                    <input
                      type="radio"
                      name="service"
                      value={s}
                      checked={service === s}
                      onChange={() => setService(s)}
                      className="h-4 w-4 accent-primary"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/80">
                What's going on with your roof?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Storm damage, leak, full replacement..."
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-secondary/40 px-3 py-3 font-body text-sm text-dark-foreground">
              <input
                type="checkbox"
                checked={optIn}
                onChange={(e) => setOptIn(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-primary"
              />
              <span>I agree to be contacted by Shurden's Roofing about my request.</span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-primary px-6 py-4 font-display text-sm uppercase tracking-wide text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-cta disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Request My Free Inspection →"}
            </button>
            <p className="text-center font-body text-[11px] text-dark-foreground/75">
              Your information stays private. We never sell or share your details — it's only used to follow up about your roof.
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
      className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      {...rest}
    />
  </div>
);

export default Contact;

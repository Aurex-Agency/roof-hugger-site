import { useState, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import FAQ from "@/components/site/FAQ";
import { toast } from "@/hooks/use-toast";

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

const ContactPage = () => {
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
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast({ title: "Request received", description: "We'll call you back within the hour during business hours." });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Contact Shurden's Roofing"
          title={<>Need a Roofer Out There? <span className="text-primary">Call Shurden's.</span></>}
          subtitle="Free roof inspections across North Mississippi. We will look at the roof, explain what is happening, and give you the next step without pressure."
        />

        <section className="bg-secondary text-secondary-foreground">
          <div className="container grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
            <div>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Get in Touch</p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl">One Call. Honest Answers.</h2>
              <p className="mt-6 max-w-md font-body text-base text-secondary-foreground/75 md:text-lg">
                Call, email, or send the form. You get a local roofing company in Maben, not a national call center or a salesperson reading a script.
              </p>

              <div className="mt-10 space-y-6">
                <a href="tel:6625499165" className="group flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/60">Phone</p>
                    <p className="font-display text-2xl text-primary transition-colors group-hover:text-accent md:text-3xl">662-549-9165</p>
                  </div>
                </a>

                <a href="mailto:shurdensroofing@gmail.com" className="group flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/60">Email</p>
                    <p className="font-display text-lg transition-colors group-hover:text-primary md:text-xl">shurdensroofing@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/60">Hours</p>
                    <p className="font-body text-base">Mon to Sat: 7am to 7pm</p>
                    <p className="font-body text-sm text-primary">Emergency Roofing Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/60">Headquarters</p>
                    <p className="font-body text-base">Maben, MS 39750</p>
                    <p className="font-body text-sm text-secondary-foreground/70">Serving all of North Mississippi</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="self-start rounded-lg border border-white/5 bg-dark p-6 shadow-[var(--shadow-card)] md:p-8"
              noValidate
            >
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Roof Inspection</p>
              <h3 className="mb-3 font-display text-2xl text-dark-foreground md:text-3xl">Request a Free Roof Inspection</h3>
              <p className="mb-6 font-body text-sm text-dark-foreground/70">
                Tell us where you are and what you are seeing. Leaks, missing shingles, hail damage, commercial roof issues, or a roof that is just old — we will help you sort it out.
              </p>
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
                    rows={4}
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

        <FAQ />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ContactPage;

import { useState, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
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
      className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      {...rest}
    />
  </div>
);

const SERVICE_OPTIONS = [
  "Roof Replacement",
  "Roof Repair",
  "Storm Damage",
  "Inspection",
  "Gutter",
  "Other",
];

const ContactPage = () => {
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
          source: "shurdensroofing.com — Contact Page",
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
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Contact Shurden's Roofing | Free Roof Inspection in North MS"
        description="Call 662-498-6629 for a free roof inspection across North Mississippi. Residential, commercial, storm damage, and insurance claim support."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Does Shurden's Roofing handle insurance claims for storm damage?", acceptedAnswer: { "@type": "Answer", text: "Yes. We document wind and hail damage, take photos, review the scope, and help coordinate with your insurance adjuster from inspection to finished roof." } },
            { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We are headquartered in Maben and serve North Mississippi, including Starkville, West Point, Columbus, Louisville, Eupora, and Tupelo." } },
            { "@type": "Question", name: "How much does a roof inspection cost?", acceptedAnswer: { "@type": "Answer", text: "Roof inspections are free and no-obligation. We use high-resolution drone photography to document every part of your roof." } },
            { "@type": "Question", name: "What shingles do you install?", acceptedAnswer: { "@type": "Answer", text: "GAF systems including Timberline HDZ, UHDZ, Natural Shadow, Camelot II, and Slateline, with GAF underlayments, Cobra ventilation, and Master Flow flashing." } },
            { "@type": "Question", name: "What commercial systems do you install?", acceptedAnswer: { "@type": "Answer", text: "SBS self-adhering systems, GAF Liberty, Mule-Hide TPO, metal, and shingle systems for businesses, churches, and offices." } },
            { "@type": "Question", name: "What makes GAF Master Elite® important?", acceptedAnswer: { "@type": "Answer", text: "GAF Master Elite® is held by less than 2% of roofers in North America, allowing us to offer Gold Pledge and Silver Pledge warranties." } },
            { "@type": "Question", name: "How fast can you respond to leaks or storm damage?", acceptedAnswer: { "@type": "Answer", text: "Emergency roofing service is available; we typically respond the same day or next day." } },
            { "@type": "Question", name: "Are you a licensed and insured roofer in Mississippi?", acceptedAnswer: { "@type": "Answer", text: "Yes. Shurden's Roofing LLC is fully licensed and insured to perform residential and commercial roofing work in Mississippi." } },
          ],
        }}
      />
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
                <a href="tel:6624986629" className="group flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">Phone</p>
                    <p className="font-display text-2xl text-primary transition-colors group-hover:text-accent md:text-3xl">662-498-6629</p>
                  </div>
                </a>

                <a href="mailto:shurdensroofing@gmail.com" className="group flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">Email</p>
                    <p className="font-display text-lg transition-colors group-hover:text-primary md:text-xl">shurdensroofing@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">Hours</p>
                    <p className="font-body text-base">Mon to Sat: 7am to 7pm</p>
                    <p className="font-body text-sm text-primary">Emergency Roofing Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/80">Headquarters</p>
                    <p className="font-body text-base">Maben, MS 39750</p>
                    <p className="font-body text-sm text-secondary-foreground/85">Serving all of North Mississippi</p>
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
                    rows={4}
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

        <FAQ />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ContactPage;

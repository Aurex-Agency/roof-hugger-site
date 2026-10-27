import { fetchWithTimeout } from "@/lib/request";
import { roofingFaqs } from "@/data/roofing-faqs";
import { trackAcceptedRequest } from "@/lib/analytics";
import { useRef } from "react";
import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";
import FAQ from "@/components/site/FAQ";
import { toast } from "@/hooks/use-toast";
import { getReferralCode } from "@/lib/referral";

import { useSearchParams } from "react-router-dom";

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
    <label htmlFor={name} className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/95">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/90 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      {...rest}
    />
  </div>
);

const SERVICE_OPTIONS = [
  "Roof Replacement",
  "Roof Repair",
  "Commercial Roofing",
  "Storm Damage",
  "Inspection",
  "Gutter",
  "Other",
];

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const sending = useRef(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [params] = useSearchParams();
  const requestedService = new Map([["replacement", "Roof Replacement"], ["repair", "Roof Repair"], ["commercial", "Commercial Roofing"], ["inspection", "Inspection"]]).get(params.get("service") || "");
  const [service, setService] = useState<string>(requestedService || "");
  useEffect(() => { if (requestedService) setService(requestedService); }, [requestedService]);
  const [optIn, setOptIn] = useState(false);



  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending.current) return;
    const form = e.currentTarget;
    setValidationError(null);
    form.querySelectorAll('[aria-invalid="true"]').forEach(field => {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
    });
    const invalid = (field: string, message: string) => {
      setValidationError(message);
      const input = form.elements.namedItem(field);
      const control = input instanceof RadioNodeList ? input[0] : input;
      if (control instanceof HTMLElement) {
        control.setAttribute('aria-invalid', 'true');
        control.setAttribute('aria-describedby', 'request-error');
        control.focus();
      }
    };
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);

    if (!name) {
      invalid("name", "Please enter your full name.");
      return;
    }
    if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      invalid("phone", "Please enter a 10-digit US phone number.");
      return;
    }
    if (!service) {
      invalid("service", "Pick the service you're interested in.");
      return;
    }
    if (!message) {
      invalid("message", "Please tell us briefly what's going on with your roof.");
      return;
    }
    if (!optIn) {
      invalid("opt-in", "Please confirm we can contact you about your request.");
      return;
    }

    if (window.location.hostname !== 'shurdensroofing.com' && import.meta.env.MODE !== 'test') {
      toast({ title: "Preview only", description: "Requests are disabled on this preview. No information was sent." });
      return;
    }
    sending.current = true;
    setSubmitting(true);
    try {
      const payload = {
        full_name: name,
        phone,
        service_interest: service,
        message,
        opt_in: true,
        source: "shurdensroofing.com — Contact Page",
        submitted_at: new Date().toISOString(),
        referred_by_code: getReferralCode(),
      };
      const results = await Promise.allSettled([
        fetchWithTimeout("https://services.leadconnectorhq.com/hooks/QpLtWVK3YfPZ7e1MRBtO/webhook-trigger/4c2e69fd-37d3-4a83-ad28-e07bcec714b9", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
        fetchWithTimeout("https://hooks.zapier.com/hooks/catch/22704410/43n40yg/", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);
      const primary = results[0];
      if (primary.status === "rejected" || !primary.value.ok) {
        throw new Error("Primary webhook failed");
      }
      trackAcceptedRequest("contact", service);
      form.reset();
      setService("");
      setOptIn(false);
      toast({ title: "Request sent", description: "Thanks! We'll be in touch shortly. For urgent issues, call 662-498-6629." });
    } catch (err) {
      toast({ title: "Could not send request", description: "Please try again or call 662-498-6629.", variant: "destructive" });
    } finally {
      sending.current = false;
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Contact Shurden's Roofing | Free Roof Inspection in North MS"
        description="Call 662-498-6629 for a free roof inspection across North Mississippi. Residential, commercial, storm damage, and insurance claim support."
        path="/contact"
        jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: roofingFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }}
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
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/95">Phone</p>
                    <p className="font-display text-2xl text-primary transition-colors group-hover:text-accent md:text-3xl">662-498-6629</p>
                  </div>
                </a>

                <a href="mailto:shurdensroofing@gmail.com" className="group flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/95">Email</p>
                    <p className="font-display text-lg transition-colors group-hover:text-primary md:text-xl">shurdensroofing@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/95">Hours</p>
                    <p className="font-body text-base">Mon to Sat: 7am to 7pm</p>
                    <p className="font-body text-sm text-primary">Emergency Roofing Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-foreground/95">Headquarters</p>
                    <p className="font-body text-base">Maben, MS 39750</p>
                    <p className="font-body text-sm text-secondary-foreground/85">Serving all of North Mississippi</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="self-start rounded-lg border border-white/5 bg-dark p-6 shadow-[var(--shadow-card)] md:p-8"
              aria-describedby={validationError ? "request-error" : undefined}
          noValidate
            >
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-primary">Free Roof Inspection</p>
              <h3 className="mb-3 font-display text-2xl text-dark-foreground md:text-3xl">Request a Free Roof Inspection</h3>
              <p className="mb-6 font-body text-sm text-dark-foreground/90">
                Tell us where you are and what you are seeing. Leaks, missing shingles, hail damage, commercial roof issues, or a roof that is just old — we will help you sort it out.
              </p>
              <div className="space-y-5">
            {validationError && <p id="request-error" role="alert" className="rounded-md border border-primary p-3 text-dark-foreground">{validationError}</p>}
                <Field label="Full Name" name="name" type="text" required autoComplete="name" />
                <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" placeholder="(662) 555-1234" />
                <fieldset>
                  <legend className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/95">
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
                  <label htmlFor="message" className="mb-2 block font-body text-xs font-bold uppercase tracking-wider text-dark-foreground/95">
                    What's going on with your roof?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-white/10 bg-secondary/40 px-4 py-3 font-body text-sm text-dark-foreground placeholder:text-dark-foreground/90 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Storm damage, leak, full replacement..."
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/10 bg-secondary/40 px-3 py-3 font-body text-sm text-dark-foreground">
                  <input
                    type="checkbox"
                    name="opt-in"
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
                  We use your details to respond to your roofing request. See our privacy policy for information about service providers and data handling.
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

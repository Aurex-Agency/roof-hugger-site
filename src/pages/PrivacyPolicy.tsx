import SEO from "@/components/SEO";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";
import PageHero from "@/components/site/PageHero";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Shurden's Roofing LLC"
        description="How Shurden's Roofing LLC collects, uses, and protects your information when you visit our website or request a roofing quote."
        path="/privacy-policy"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information."
        />

        <section className="bg-background">
          <div className="container max-w-3xl py-14 md:py-20">
            <div className="space-y-8 font-body text-base leading-relaxed text-foreground">
              <p className="text-sm text-muted-foreground">Last updated: June 2, 2026</p>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Introduction</h2>
                <p>
                  Shurden's Roofing LLC ("we," "us," or "our") respects your privacy. This Privacy
                  Policy explains what information we collect when you visit shurdensroofing.com or
                  contact us for roofing services, how we use that information, and the choices you have.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="ml-6 mt-2 list-disc space-y-1">
                  <li>Name, phone number, email address, and service address</li>
                  <li>Details about your roofing project, property, or insurance claim</li>
                  <li>Photos, messages, or other content you submit through our forms</li>
                </ul>
                <p className="mt-3">
                  We also automatically collect limited information when you visit our site,
                  including IP address, browser type, pages visited, and referring URL, through
                  cookies and analytics tools such as Google Analytics and the Meta (Facebook) Pixel.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">How We Use Your Information</h2>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Respond to quote requests, schedule inspections, and provide roofing services</li>
                  <li>Communicate with you about your project, scheduling, and invoicing</li>
                  <li>Send service updates, follow-ups, or promotional offers (you may opt out at any time)</li>
                  <li>Improve our website, marketing, and customer experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">SMS and Text Messaging</h2>
                <p>
                  By providing your phone number and opting in, you consent to receive text messages
                  from Shurden's Roofing LLC related to your project, appointment, or quote. Message
                  and data rates may apply. Reply STOP at any time to opt out.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">How We Share Information</h2>
                <p>We do not sell your personal information. We may share it only with:</p>
                <ul className="ml-6 mt-2 list-disc space-y-1">
                  <li>Service providers who help us operate our business (CRM, scheduling, email, analytics)</li>
                  <li>Insurance carriers or adjusters when assisting with a storm-damage claim, at your request</li>
                  <li>Law enforcement or government authorities when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to understand how visitors use our site and
                  to measure the effectiveness of our advertising. You can disable cookies in your
                  browser settings; some site features may not function correctly if you do.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Your Choices</h2>
                <ul className="ml-6 list-disc space-y-1">
                  <li>You may request access to, correction of, or deletion of your personal information by contacting us.</li>
                  <li>You may opt out of marketing emails by clicking the unsubscribe link in any message.</li>
                  <li>You may opt out of SMS messages by replying STOP.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Data Security</h2>
                <p>
                  We take reasonable administrative and technical measures to protect the information
                  we collect. No method of transmission over the internet is 100% secure, however, and
                  we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Children's Privacy</h2>
                <p>
                  Our website is not directed to children under 13, and we do not knowingly collect
                  personal information from children.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The "Last updated" date at the
                  top reflects the most recent revision.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-2xl font-bold">Contact Us</h2>
                <p>Questions about this Privacy Policy? Contact us at:</p>
                <address className="mt-3 not-italic">
                  Shurden's Roofing LLC<br />
                  4124 US Highway 82 East<br />
                  Maben, MS 39750<br />
                  Phone: <a href="tel:6624986629" className="text-primary hover:underline">662-498-6629</a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
};

export default PrivacyPolicy;

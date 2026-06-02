## Changes

1. **Create `src/pages/PrivacyPolicy.tsx`** — full standard privacy policy page using existing `Navigation`, `PageHero`, `Footer`, `MobileCallBar`, and `SEO` components. Covers: introduction, info collected, how used, SMS/text consent, sharing, cookies/analytics (mentions GA + Meta Pixel for lead-ad compliance), user choices, security, children's privacy, changes, and contact section. Contact info: `4124 US Highway 82 East, Maben MS 39750`, phone `662-498-6629`.

2. **Wire route in `src/App.tsx`** — add `<Route path="/privacy-policy" element={<PrivacyPolicy />} />` above the catch-all. Repoint the existing `/privacy` redirect from `/contact` to `/privacy-policy` (and remove the now-redundant `/privacy-policy` redirect route).

3. **Footer link** — `src/components/site/Footer.tsx` currently links Privacy Policy to `#privacy`. Change to a `<Link to="/privacy-policy">`.

4. **Sitemap** — add `<url><loc>https://shurdensroofing.com/privacy-policy</loc>…</url>` entry to `public/sitemap.xml`.

5. **JSON-LD in `index.html`** — update the `RoofingContractor` block to add:
   - `streetAddress: "4124 US Highway 82 East"`
   - `geo` with lat/long for Maben MS
   - `founder` (Josh Shurden) and `foundingDate: "2015"`
   - `knowsAbout` services array
   - `sameAs` Facebook URL
   - `description` line
   
   Keep the existing `telephone: "+1-662-498-6629"`, opening hours `Mo-Sa 07:00-19:00`, and `aggregateRating` (matches what's shown on site).

## Not changing

- No `vercel.json` (Lovable hosting doesn't process it).
- No SSR migration.
- No edits to existing per-page `<SEO />` usage — already correct.


## Add GAF Master Elite Certification Across the Site

Shurden's is a GAF Master Elite Residential Roofing Contractor — a credential held by less than 2% of roofers nationwide. We'll feature the badge in three high-visibility spots and weave the certification into the trust messaging.

### What you'll see after the change

1. **Hero section** — small "GAF Master Elite Certified" pill chip added next to (or under) the existing "Serving the Golden Triangle" badge so it's visible above the fold.

2. **New dedicated certification strip** — slim band placed between `Stats` and `StormDamage` containing:
   - The GAF Master Elite diamond badge (left, ~140px)
   - Headline: "GAF Master Elite® Certified Contractor"
   - Sub-copy: "We're one of less than 2% of roofers in North America to earn GAF's highest factory certification — meaning longer warranties, factory-trained crews, and proven craftsmanship on every job."
   - Two-tone background using the existing dark navy + a thin orange top accent line so it visually breaks up the page.

3. **Footer** — replace the "Fully Licensed & Insured / Serving Mississippi Since 2015" text column with a small badge + "GAF Master Elite® · Licensed & Insured · Serving MS Since 2015".

### Technical changes

1. **Add the badge asset**
   - Copy `user-uploads://master-elite.webp` → `src/assets/gaf-master-elite.webp`.

2. **New component: `src/components/site/Certifications.tsx`**
   - Section with `bg-dark text-dark-foreground`, top border `border-t-2 border-primary`.
   - Two-column layout (image left, copy right) on desktop; stacked + centered on mobile.
   - Uses existing `font-display` / `font-body` tokens to match the rest of the site.

3. **`src/pages/Index.tsx`**
   - Import and insert `<Certifications />` between `<Stats />` and `<StormDamage />`.

4. **`src/components/site/Hero.tsx`**
   - Add a second small chip next to the existing "Serving the Golden Triangle" badge: `GAF Master Elite® Certified` (same pill style, but with a tiny inline image of the badge at ~20px).

5. **`src/components/site/Footer.tsx`**
   - Replace the third column ("Fully Licensed & Insured") heading/body with a horizontal layout: small GAF badge (~56px) + heading "GAF Master Elite®" + line "Licensed & Insured · Serving MS Since 2015".

6. **`index.html`**
   - Add `"hasCredential": { "@type": "EducationalOccupationalCredential", "name": "GAF Master Elite Certified Residential Roofing Contractor" }` to the existing `RoofingContractor` JSON-LD schema for SEO.

No other files change. No new dependencies.

## Plan: Strengthen LocalBusiness / RoofingContractor structured data

### 1. Add a canonical `@id` to the business entity
In `index.html`, add `"@id": "https://shurdensroofing.com/#business"` to the RoofingContractor JSON-LD block. This gives Google a stable identifier to consolidate the entity across pages and schemas (Knowledge Graph hygiene).

### 2. Upgrade `areaServed` to structured City objects
Replace the flat string array in `index.html` with structured entries:
```json
"areaServed": [
  { "@type": "City", "name": "Brandon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Rankin County, MS" } },
  { "@type": "City", "name": "Flowood", ... },
  ...
]
```
Covers all 15 existing cities/counties. Google parses these more reliably than plain strings.

### 3. Extend `SEO.tsx` to support per-page JSON-LD
Add an optional `jsonLd?: object | object[]` prop to the `SEO` component. When provided, render `<script type="application/ld+json">` tags inside `<Helmet>`. Each per-page schema will reference the business via `"provider": { "@id": "https://shurdensroofing.com/#business" }` so they link back to the main entity rather than duplicating it.

Then wire up page-specific schema on key routes:
- **Services page** — `Service` schema for roof replacement, repair, inspection, etc., with `provider` → business `@id`
- **Reviews page** — `AggregateRating` already on the business; add a few `Review` items here
- **City pages** (e.g. `/brandon-ms-roofing`) — `Service` with `areaServed: { "@type": "City", "name": "Brandon" }` and `provider` → business `@id`
- **DormersGuide / blog articles** — already `article` og:type; add `Article` JSON-LD with `publisher` → business `@id`

### Files touched
- `index.html` — add `@id`, restructure `areaServed`
- `src/components/SEO.tsx` — add `jsonLd` prop, render in Helmet
- `src/pages/Services.tsx`, `src/pages/Reviews.tsx`, city page(s), `src/pages/DormersGuide.tsx` — pass page-specific `jsonLd`

### Notes
- All schema changes are static — no runtime/business-logic impact.
- Google re-crawls on its own schedule; user can request re-indexing in Search Console after publish.
- I'll validate the JSON-LD shape against schema.org before finalizing.

Want me to proceed, or scope down to just steps 1 + 2 (index.html only, no per-page wiring)?
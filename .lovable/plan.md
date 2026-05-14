## Goal

Win the city + service queries Semrush shows you ranking #30–90 for (e.g. `roofing starkville ms`, `roofers columbus ms`, `roof repair eupora`) by giving each priority city its own dedicated landing page instead of routing all local intent to `/`.

## Cities to launch (priority tier)

These are the markets with the most search demand and the best chance of a quick win:

1. Starkville
2. Columbus
3. West Point
4. Tupelo
5. Louisville
6. Eupora
7. Maben (HQ)
8. Ackerman

Eight pages. We can extend the same template to the remaining cities later.

## URL structure

`/roofing/<city-slug>-ms` — for example `/roofing/starkville-ms`, `/roofing/columbus-ms`. This keyword-rich pattern matches how people search and lets each page own its own SEO.

## Page template (one component, data-driven)

A single `CityPage` component reads from a `cities` data file and renders:

1. **Hero** — "Roofing in {City}, MS" headline, distance from Maben HQ, phone CTA, free-inspection CTA.
2. **Local trust strip** — years serving the city, GAF Master Elite badge, license/insurance, Google rating.
3. **Services offered in {City}** — residential replacement, commercial systems, storm/insurance, repairs. Each links to `/services#<anchor>`.
4. **Why {City} homes need a strong roof** — 2–3 short paragraphs grounded in local context (heat, hail, storm season, common housing stock). Hand-written per city, ~120 words, NOT spun copy.
5. **Recent work near {City}** — pulls 3–4 photos from existing gallery filtered/tagged by region. Falls back to general gallery photos if none tagged.
6. **Service area around {City}** — list of nearby smaller towns also served from this city's drive radius.
7. **Local FAQ** — 3–4 questions per city (cost, insurance carriers common locally, permit notes if applicable).
8. **CTA banner** — reuses existing `CtaBanner`.
9. **Per-page SEO** — unique title, description, canonical, og tags, plus `LocalBusiness` JSON-LD with the city in `areaServed` and a `BreadcrumbList` schema.

## Data file

`src/data/cities.ts` exports an array of city records:

```text
{
  slug: "starkville-ms",
  name: "Starkville",
  state: "MS",
  county: "Oktibbeha",
  distanceFromHq: "20 miles east of Maben",
  intro: "<hand-written 2 paragraph block>",
  nearbyTowns: ["Sturgis","Mathiston","Bradley"],
  faqs: [{q,a}, ...],
  galleryTags: ["starkville"],
}
```

Adding a new city later = adding one record. No new components.

## Routing & internal linking

- Add `<Route path="/roofing/:slug" element={<CityPage />} />` to `App.tsx`, above the catch-all.
- Update `ServiceArea.tsx` so the existing city chips link to `/roofing/{slug}-ms` when a page exists. This builds internal-link equity into every page that already mentions the city.
- Add a "Service areas" link in the footer pointing to a simple `/service-areas` index that lists every city page (also helps Google discover them).

## Sitemap & llms.txt

- Add each city URL to `public/sitemap.xml` (priority 0.8).
- Add a `## Service Areas` section to `public/llms.txt` with one bullet per city.

## Structured data per page

Each city page emits two JSON-LD blocks:

- `LocalBusiness` with `name`, `address` (HQ in Maben), `areaServed: { "@type": "City", "name": "<City>, MS" }`, `telephone`, `priceRange`.
- `BreadcrumbList`: Home → Service Areas → {City}.

## Out of scope

- No CMS or database — copy lives in the data file, fully version-controlled.
- No AI-generated city descriptions; you (or I, with your inputs) write each intro and FAQ block. Google penalizes obvious doorway pages with spun content.
- No design system changes — reuses existing `PageHero`, `CtaBanner`, `ServicesFAQ` patterns.
- No backend — pure static React routes.

## Deliverables

1. `src/data/cities.ts` with all 8 city records.
2. `src/pages/CityPage.tsx` rendering the template above.
3. `src/pages/ServiceAreasPage.tsx` index page.
4. New routes in `src/App.tsx` (`/roofing/:slug`, `/service-areas`).
5. Updated `ServiceArea.tsx` linking chips to city pages.
6. Updated `Footer.tsx` with a Service Areas link.
7. Updated `public/sitemap.xml` and `public/llms.txt`.

## What I need from you to write good copy

For each of the 8 cities, a quick line or two on:
- Anything notable about the housing stock or roof types you see most there
- Any specific neighborhoods, schools, or landmarks you'd want named
- Whether you've had a memorable insurance/storm job there worth referencing

If you'd rather I draft generic-but-local copy first and you edit, that's also fine — just say so and I'll proceed.

## Realistic timeline for SEO impact

These are new URLs Google has never seen. Expect:
- Indexed within 1–2 weeks (faster with GSC connected and sitemap submitted).
- First measurable ranking movement at 4–8 weeks.
- Meaningful traffic at 3–6 months, assuming the copy is genuinely useful and you accumulate a few local citations alongside.

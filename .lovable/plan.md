# Make /services Distinct from the Home Page

Right now `/services` reuses several of the same sections that define the home page (`ShingleComparison`, `GafSystem`, `WarrantyBand`, `CrewVideo`, `TrustBar`). The page reads as a near-duplicate of `/`. The fix is to strip the home-page sections out of `/services` and replace them with content that only belongs on a services page: a service navigator, deeper per-service detail, process, materials specifics, pricing/scope expectations, and service-area info.

## What to remove from `/services`

- `TrustBar` (already on home and global feel)
- `ShingleComparison` (keep on home only)
- `GafSystem` (keep on home only)
- `WarrantyBand` (keep on home only)
- `CrewVideo` (keep on home only)

The home page (`Index.tsx`) stays exactly as it is.

## New `/services` structure

```text
PageHero  (existing, refined subtitle)
ServiceNav        (sticky in-page jump nav: Residential | Commercial | Repair | Insurance | Maintenance)
Residential       (expanded — keep current section, add materials + process detail)
Commercial        (expanded — keep current section, add building-type list)
Repair            (expanded — keep cards, add response-time + what-to-do-now block)
Insurance         (expanded — add step-by-step claim timeline)
Maintenance & Inspections   (NEW — annual inspections, gutter/flashing checkups, tune-ups)
RoofingProcess    (NEW — 5-step process: Inspect → Quote → Schedule → Install → Walkthrough)
ServiceArea       (NEW — towns/counties served, with "don't see your town? call us")
ServicesFAQ       (NEW — 5–6 service-specific Q&A: cost ranges, timeline, permits, warranty transfer, etc.)
CtaBanner         (existing)
```

## New components to create

1. `src/components/site/ServiceNav.tsx` — sticky anchor nav with 5 links, highlights active section on scroll.
2. `src/components/site/RoofingProcess.tsx` — numbered 5-step process with icons.
3. `src/components/site/ServiceArea.tsx` — grid of cities/counties (Maben, Starkville, Tupelo, Columbus, West Point, Louisville, Eupora, Ackerman, Houston, Aberdeen, Winona, Grenada) + Oktibbeha/Webster/Clay/Lowndes/Choctaw/Lee counties.
4. `src/components/site/ServicesFAQ.tsx` — accordion using existing `ui/accordion`, scoped to services questions (different from the general `FAQ` on home).
5. `src/components/site/MaintenanceSection.tsx` — annual inspection plans, gutter cleaning, tune-ups, flashing/sealant checkups.

## Edits to existing files

- `src/pages/ServicesPage.tsx`
  - Remove imports + usages of `TrustBar`, `ShingleComparison`, `GafSystem`, `WarrantyBand`, `CrewVideo`.
  - Add the 5 new components in the order above.
  - Expand the residential section copy with: typical timeline (1–2 days), tear-off process detail, color/profile selection, deck repair pricing transparency.
  - Expand the commercial section with a "Buildings we roof" sub-list (churches, schools, retail, warehouses, multi-tenant, ag buildings).
  - Add a small "What to do right now" callout to the Repair section (tarp safely, document, call us).
  - Replace the Insurance section's prose with a numbered claim timeline (1. Free inspection → 2. Documentation → 3. File claim → 4. Adjuster meeting → 5. Scope review → 6. Install → 7. Final invoicing).

- `src/components/site/PageHero.tsx` — no change.

## Result

- Home page = brand story (trust, GAF system, shingle comparison, warranty, crew video, services overview, work, reviews).
- Services page = operational detail (what we do, how we do it, where we do it, how the process works, service-specific FAQs).

No overlap of major sections between the two pages.

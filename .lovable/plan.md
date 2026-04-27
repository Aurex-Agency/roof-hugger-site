## Drop the 60-mile-radius language sitewide

You don't want to cap the service area. I'll strip every "60 miles / 60 mile radius" mention from copy, SEO metadata, and the Stats tile, and replace it with open-ended "North Mississippi" language (still anchored to the Maben HQ, still listing the same cities so local SEO holds up).

### Copy changes

**`src/components/site/About.tsx`**
- Line 5 (value bullet): "We roof North Mississippi out of Maben, up to 60 miles in any direction." → "We roof homes and businesses all across North Mississippi from our Maben headquarters."
- Line 32 (body): "Headquartered in Maben, we travel up to 60 miles to roof for our neighbors..." → "Headquartered in Maben, we travel across North Mississippi to roof for our neighbors..."

**`src/components/site/Services.tsx`**
- Line 14: "We work out of Maben and travel up to 60 miles to roof for our neighbors." → "We work out of Maben and travel across North Mississippi to roof for our neighbors."
- Line 55: unchanged (no radius mention).

**`src/components/site/FAQ.tsx`**
- Line 8 answer: "Shurden's Roofing serves North Mississippi within roughly a 60 mile radius of our Maben, MS office. That includes..." → "Shurden's Roofing serves North Mississippi from our Maben, MS office. That includes Maben, Starkville, West Point, Columbus, Louisville, Ackerman, Eupora, Houston, Tupelo, and the surrounding counties. If you are not sure whether we cover your roof, just call and ask."

**`src/components/site/Footer.tsx`**
- Line 51: "Serving North Mississippi within roughly 60 miles of Maben, including:" → "Serving North Mississippi from our Maben office, including:"

### Stats tile

**`src/components/site/Stats.tsx`**
- Replace the "60 Mile Radius / Out of our Maben, MS office" stat with a non-distance metric so the 4-up grid stays balanced:
  - `{ value: 100, plus: true, unit: "Cities", label: "Served Across North Mississippi" }`
- Rationale: keeps a numeric stat in slot 3, still ties to local reach, no implied cap. (If you'd prefer a different stat here — e.g. "Counties Served", "Storms Responded To", or just dropping it to a 3-up grid — say the word and I'll swap it.)

### SEO / schema

**`index.html`**
- Line 7 `<meta name="description">`: drop "within 60 miles of Maben." → end the sentence at "across North Mississippi."
- Lines 116 & 117 (OG + Twitter description): same change.
- Line 84 (FAQ JSON-LD answer): mirror the new FAQ copy ("serves North Mississippi from our Maben office, including..." with the full city list).
- `areaServed` array, address, and all other schema fields stay as-is — those already list specific North Mississippi cities/counties without a radius cap.

### Not changing
- City lists (Maben, Starkville, West Point, Columbus, Louisville, Ackerman, Eupora, Houston, Tupelo) — they're SEO-valuable and don't imply a cap.
- Maben HQ address in Footer + schema — still their physical office.
- Hero, Reviews, Work, Certifications copy — already free of radius language.

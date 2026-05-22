## Content updates from client feedback

Update copy across the homepage to reflect 17+ years in business and 4,000+ roofs.

### Stats section (`src/components/site/Stats.tsx`)
- "10+ Years Roofing North Mississippi" → "17+ Years Roofing North Mississippi"
- "500+ Roofs Installed & Repaired" → "4000+ Roofs Installed & Repaired"

### About section (`src/components/site/About.tsx`)
- Heading: "A Mississippi Family Business Built on Honest Roofing Work." → "A Mississippi Family Business Built on Honest Roofing Work Since 2010."
- Value card 2 title: "Factory Trained and Background Checked Crews" → "Factory Trained with Real World Experience"
  - Body: replace "Real Shurden's Roofing crews" → "Real Shurden's Roofing crews" (remove "one"-style phrasing if present); update body to reference "local crews" and drop the background-check line.
- Value card 3 title: "Voted Starkville's Best Roofer with 500+ Roofs Installed" → "Voted Starkville's Best Roofer for 9+ Years with 4000+ Roofs Installed"
  - Body: update "Five hundred Mississippi roofs" → "Four thousand Mississippi roofs"
- Intro paragraph: "Since 2015" → "Since 2010" (to stay consistent with new heading)

### Other "since 2015" / "500+" references to align
- `src/components/site/Hero.tsx` floating badge: "Serving North Mississippi Since 2015" → "Serving North Mississippi Since 2010"
- `src/components/site/TrustBar.tsx`: "Serving North Mississippi Since 2015" → "Serving North Mississippi Since 2010"
- `src/components/site/About.tsx` intro: "Since 2015" → "Since 2010"

### Out of scope
- SEO meta descriptions, JSON-LD, `public/llms.txt`, city pages, and other "since 2015" / "500 roofs" mentions across the site — confirm if you'd like those updated too in a follow-up.

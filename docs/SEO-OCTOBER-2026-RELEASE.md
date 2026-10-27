# October 2026 SEO release

Based on production main cb6581a22ed273c3bfc2d91da12d7fa205b90ab8. Four complete new guides cover pipe boots/flashing, attic ventilation, property preparation and commercial leak response. They use the existing prerendered guide system, index, service-page links, schema and sitemap. The commercial guide is identified for building managers. No homeowner roof access, invented pricing or insurance guarantees.

The existing roof-cost URL is preserved. Its title, description, comparison worksheet and early inquiry options now connect to repair or replacement, with known service choices preselected on the contact page. Unknown query values are ignored. Existing accepted-request tracking, duplicate protection, phone-intent separation and preview delivery blocking remain in place and are regression tested.

## Trust and safety corrections

- Removed the conflicting 17+ years numeric strip and its unsourced count/rating figures. Retained the company's existing history narrative, which distinguishes the transition around 2010 from full-service roofing by 2012. GAF lists in business since 2012. Business history wording still warrants owner confirmation before adding a numeric age claim.
- Replaced unsupported project-count/award totals in About, aggregate 5.0 badges, combined-experience/radius figures and the protected 50-mile warranty claim with service information.
- GAF's primary contractor directory confirms Master Elite and President's Club distinctions: https://www.gaf.com/en-us/roofing-contractors/residential/usa/ms/maben/shurden%E2%80%99s-roofing-llc-1148160
- Corrected Golden Pledge naming and qualified warranty eligibility. Removed automatic product-level workmanship periods and unverified hail classifications. Ask for current product documentation and the actual applicable warranty before publication of specific ratings/terms.
- The legacy dormer article also contained repair prices, insurance assurances and homeowner maintenance instructions implying roof access. Replaced those with safe observations, professional assessment and individual coverage confirmation.
- The directory phone differs from the established website conversion number. The existing website number is preserved; office should reconcile directory/GBP records and confirm any tracking-number purpose.

## Validation

Lint (zero errors, seven inherited Fast Refresh warnings), TypeScript, 18 tests covering accepted/rejected requests, duplicate submission, privacy, preview blocking and service selections; production build; 34 sitemap pages plus utility routes and true 404 output. SEO verification covers canonicals, unique titles, H1s, metadata, schema, internal links and IndexNow input validation. Four new full manuscripts have distinct service destinations. Desktop and mobile preview review without real leads.

React Router 7.18.5, Zod 4.6.7, Vitest 4.1.12 and patched typography selector parser. npm audit reports zero vulnerabilities at verification. CI now enforces audit, lint, typecheck, tests, build and SEO checks. No vulnerability bypass.

## After merge and account work

1. Validate one authorized real inquiry in GA4 and reconcile aggregate accepted requests with office records. Do not use page views, generic form interactions or giveaway activity as proof of roofing leads. Existing code already emits generate_lead after primary webhook acceptance; the reported 100% contact key-event rate needs GA4 configuration/spam/duplicate investigation, not another duplicate event.
2. Submit the production sitemap in Google Search Console and Bing Webmaster Tools. Inspect the four new URLs after deployment. IndexNow command is available but has not been run against preview URLs.
3. Inspect the exact 15 crawled exclusions and soft 404 before consolidation or removal. Do not bulk-request indexing or remove intentional canonical/noindex/redirect behavior based on counts alone.
4. Compare declining page/query cohorts, device and country over 28/90 days with enough data. Improved average position alongside fewer clicks does not prove ranking loss across the site. Keep the roof-cost URL's history and annotate this release.
5. Confirm any further claims about awards, installation counts, staffing, service radius and review scores from business records before adding them. No ranking, traffic or conversion outcome is guaranteed by this release.

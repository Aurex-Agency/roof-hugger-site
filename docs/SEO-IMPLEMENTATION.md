# Shurden's Roofing SEO recovery implementation

Branch: `codex/shurdens-seo-recovery`. Base: `dd2c316` (main), repository `Aurex-Agency/roof-hugger-site`.
Prepared October 16, 2026. No push, merge, deployment, webmaster submission, listing edit or outreach was performed.

## Source and diagnosis

The clean base build produced the exact JavaScript and CSS fingerprints served by the live homepage: `index-CeXp22uS.js` and `index-E-APDWr-.css`. This strongly matches the production client source; the hosting project's deployment SHA was not available. The parent preflight verified HTTP and www return 308 to HTTPS non-www. Those redirects were already correct and were not replaced.

The live nonexistent path returned homepage HTML with 200. The repository emitted route-specific HTML, but `vercel.json` rewrote every request to the homepage. This was a confirmed crawlability defect, not proof of the cause of all traffic loss. The implementation removes that catchall and emits flat HTML files compatible with Vercel clean URLs. A real `404.html` remains. Unknown dynamic service/city paths render NotFound during client navigation instead of redirecting to a hub.

Planning baseline: September 17 to October 14, 2026 against August 20 to September 16. Google clicks 109 to 59; impressions 16,638 to 9,049; average position 11.8 to 9.8; organic sessions 145 to 72. Organic key events 34 to 26 are not verified lead counts. Improved average position does not establish recovery when exposure and clicks declined. HTTP URL rows in historical Search Console data did not establish a current redirect fault.

## Plan coverage

| Approved work | Branch delivery | Remaining dependency |
| --- | --- | --- |
| Production source and baseline | Source fingerprint match, fixed baseline, preserved routes | Hosting project/alias settings and deployment metadata at release |
| Recover crawling and indexability | Remove catchall, clean HTML URLs, real404, stable canonical, sitemap without invented build-date lastmod | Verify actual Vercel preview and production status after authorized deploy |
| Homepage and internal links | Clear service/base description; guide discovery from home, services, cities, navigation/footer | Validate legacy proof before release |
| Four service pages | Rewritten assessment/scope guidance for repair, replacement, commercial and storm work; no coverage/timing guarantees | Owner can add verified process specifics and approved project examples |
| Existing cost guide | Preserve URL; replace unsupported local price range with quote factors, allowances and comparison steps | Current owner-verified project prices if a range is later desired |
| Existing hail guide | Preserve URL; remove roofer-first notification advice and assumed claim/payment outcomes | Policy questions remain with insurer/licensed professional |
| Priority cities | Starkville, Columbus, West Point and Tupelo now have distinct practical preparation content; no invented city office or project attribution | Three permission-cleared local project stories were not invented |
| Four new posts | All four complete and routed, normal indexable branch pages, linked from `/guides`, Article and breadcrumbs | Normal editorial review before deployment; no artificial draft gate |
| Schema | Consistent business ID; article and breadcrumb schemas; FAQ schema on contact matches visible FAQ; removed unsupported AggregateRating and credential schema | Independent verification of remaining legacy business facts |
| Conversion measurement | `generate_lead` only after primary webhook HTTP success; one in-flight submission per form; fixed safe fields; `click_to_call` separate | GA4 key-event definition and aggregate CRM reconciliation |
| Preview safety | Both contact forms block requests on nonproduction hosts; analytics/VideoAsk/GHL scripts only run on production host | Other legacy referral/giveaway workflows were not exercised |
| Google and Bing | Release checklist, scorecard and changed URL manifest prepared | Signed-in account checks, Bing baseline, sitemap submission and URL inspection |
| IndexNow | Public host verification file and config; explicit production opt-in sender, sitemap allowlist, dedupe, timeout, status log; dry run only | Authorized deploy, file verified live, then explicit submission |
| Performance/accessibility | Removed unrelated homepage image preload from deep pages; maintained hero preload on home; static readable counter initial values and reduced-motion handling; mobile/desktop checked | Field CWV and independent lab audit still needed; bundle warning remains |
| Quality/release | Build, typecheck, eight tests, 30-route SEO validator, local HTTP checks, screenshots | Repository-wide pre-existing lint debt and actual hosting preview review |

## Four complete new articles

Copy is in `src/data/guides.ts`, rendered by `src/pages/GuidePage.tsx`. Word counts below cover introductory and section paragraphs, excluding navigation, titles and source notes.

| Topic and route | Words | Status |
| --- | ---: | --- |
| `/guides/repair-or-replace-leaking-roof` | 768 | Complete; assessment questions, repair limits, comparison and relevant service links |
| `/guides/what-happens-during-roof-inspection` | 748 | Complete; preparation, access, findings and next steps; no invented crew process |
| `/guides/compare-roof-replacement-estimates` | 702 | Complete; scope, allowances, components, warranty and written comparison checklist |
| `/guides/storm-roof-damage-photo-checklist` | 702 | Complete; safe observations and recordkeeping; distinct from existing insurance guide |

Authorship is the business organization. No named expert review, fabricated experience, publication date or review date is asserted. General educational copy is ready for ordinary editorial review. No original client project, price, credential or warranty entitlement was fabricated.

## Route and intent inventory

- `/`: North Mississippi roofing discovery and service selection.
- `/services/roof-replacement`: replacement assessment and scope.
- `/services/roof-repair`: repair/leak assessment.
- `/services/commercial-roofing`: building-specific commercial roof inquiry.
- `/services/storm-damage-insurance-claims`: storm-related roofing assessment; insurer decides coverage.
- `/guides/roof-replacement-cost-mississippi`: cost factors; preserved search equity.
- `/guides/hail-damage-roof-insurance-claim-mississippi`: insurance conversation; preserved URL.
- `/guides`: discovery for three existing guides and four new posts.
- `/roofing/starkville-ms`, `/roofing/columbus-ms`, `/roofing/west-point-ms`, `/roofing/tupelo-ms`: existing service areas with distinct preparation needs, not newly invented offices.
- Existing `/services/metal-roofing` permanent redirect is preserved.
- Trailing-slash and `.html` variants normalize through Vercel clean URL settings. All canonical links use HTTPS non-www and no trailing slash except home.

## Measurement specification

`generate_lead` means the primary existing LeadConnector webhook accepted the HTTP request. It does not prove CRM record creation, a booked inspection, a qualified opportunity or a completed job. Parameters: fixed `form_id` (`home` or `contact`), fixed `lead_type` (`inspection_request` or `roofing_inquiry`), `delivery_status=webhook_accepted`, and a fixed page location. Names, phone numbers, free text, referral codes and query strings are never included in this custom event. Failed delivery retains the form and emits no lead event. Duplicate simultaneous submits are blocked with a synchronous in-flight guard.

`click_to_call` is phone intent only and must not be labeled as a completed call. No automatic account-side key-event setting was changed. Reconcile accepted forms against aggregate CRM results and inspect existing events before using historic 26 organic key events as leads. The contact page's existing secondary Zapier delivery is retained; it never controls lead success.

Analytics and existing third-party tracking scripts are disabled on local/preview hosts. In test mode the form can run only against the test suite's stubbed fetch. No test requests were sent to production endpoints.

## Source and claim register

Read October16,2026:

- [GAF roof damage education](https://www.gaf.com/en-us/plan-design/homeowner-education/roof-damage): general visible-condition guidance. Does not verify Shurden projects or business credentials.
- [GAF warranty resources](https://www.gaf.com/en-us/resources/warranties): directs readers to actual product and eligibility terms; no particular coverage is promised.
- [National Weather Service after severe weather](https://www.weather.gov/safety/thunderstorm-after): basic storm safety and safe observation.
- [Mississippi Insurance Department](https://www.mid.ms.gov/): consumer assistance destination; no invented policy rule.
- [NAIC replacement-cost versus actual-cash-value guidance](https://content.naic.org/article/rebuilding_after_storm_know_difference_between_replacement_cost_and_actual_cash_value_when_it_comes.htm): confirms policy-dependent settlement distinctions; wording does not promise a payment pattern.
- [Vercel static configuration](https://vercel.com/docs/project-configuration/vercel-json) and [custom404 guidance](https://vercel.com/kb/guide/custom-404-page): clean URLs and static404 behavior.
- [IndexNow documentation](https://www.indexnow.org/documentation): host verification and changed-URL submission.

Legacy proof needing owner evidence remains elsewhere in the existing design: founding/start dates differ (2010/2015), 17 years/4,000 roofs/40 cities/5-star figures, certification/President's Club, licensing, warranty names and ratings. This branch removes unsupported rating/credential structured data and does not add these claims to new articles. Owner must verify or neutralize the remaining legacy claims before a broad proof-signoff. Existing customer reviews and images have not been independently permission-audited. City templates no longer describe rotated gallery photos or generic reviews as verified projects/customers from that specific city.

## Google, Bing and local work after authorized release

1. Confirm correct Google domain property; record90-day and year-over-year trends, branded/nonbranded queries, device and priority page groups. Review security/manual actions and URL Inspection selected canonicals.
2. Establish Bing Webmaster Tools baseline separately; inspect sitemap, Site Explorer, indexed URLs and crawl reports. No Bing results were inferred from Google metrics.
3. Submit the canonical sitemap and inspect the homepage, cost guide, four service pages and four new guides after deployment. Record receipt separately from indexation.
4. Confirm real name, Maben office/service-area settings, phone, hours and categories in GBP and Bing Places. Prepare corrections only from owner-confirmed facts. No new city offices or keyword-stuffed names.
5. Ask owner for permission-cleared project material: city, actual problem and scope, materials, before/after images, outcome limitations. Prepare three project stories only when evidence exists.
6. Verify manufacturer listing, relevant chamber membership and supplier relationships before suggesting citation corrections or partnership references. No paid ranking links or invented affiliations. Outreach requires separate sending authorization.

Weekly scorecard fields: period, Google clicks/impressions/CTR by priority page group, Bing clicks/impressions, nonbranded relevant queries, organic sessions/engaged sessions, accepted inspection requests, qualified opportunities and jobs, indexability issues, changes made, next action. Use complete28-day comparisons for decisions and weekly notes for diagnostics. Recalibrate after first complete28days of verified tracking. No schedule or automation was created.

## IndexNow operation

`indexnow.config.json` identifies the production host and public verification key. Matching text file is in `public/`; this is a public ownership-verification token, not an API credential. The sender first verifies that exact file on the production host. No preview URLs, query strings, fragments, private referral routes or off-host URLs pass validation.

- Build first, then dry run: `npm run indexnow -- docs/indexnow-changed-urls.txt`.
- After separately approved deployment and live verification: `INDEXNOW_PRODUCTION=true npm run indexnow -- docs/indexnow-changed-urls.txt --send`.
- Review the manifest for that deployment. Do not repeatedly send unchanged pages.
- Status-only logs are in ignored `.indexnow/submissions.jsonl`. 200/202 is receipt, not indexing. Errors including429 fail visibly; investigate/back off before a manual retry. No automatic resubmission loop exists.

## Validation evidence

- `npm run build`: pass;32 routable pages plus404 emitted.
- `npm run typecheck`: pass.
- `npm test`:8 pass. Success/failure, concurrent duplicate blocking, preview delivery guard, privacy-safe event shape, phone intent, plus baseline test. Fetch stubbed in all delivery tests.
- `npm run test:seo`:30 sitemap routes pass unique title/H1/canonical, description, schema JSON, indexability and internal-link integrity. Utility referral routes excluded; no fabricated sitemap dates. IndexNow rejects off-host, HTTP, query-bearing and non-sitemap URLs.
- Changed-file ESLint: pass. Full lint retains7 pre-existing errors and7 warnings in UI empty types, Supabase referral handlers and Tailwind require import. Baseline was9 errors/7warnings. Fixed touched Hero any and Stats sparse array; no unrelated referral backend rewrite.
- Local HTTP preview: article200, service200, missing route404, metal redirect308, slash normalization308. This is a local routing harness, not proof of remote Vercel deployment behavior.
- Browser: desktop and mobile article body reviewed. Mobile content width equals scroll width, no horizontal overflow. Correct canonical and RoofingContractor/Article/BreadcrumbList observed after hydration. No external script URLs and no console errors in local article preview. Screenshots in `docs/screenshots/`.
- Build retains existing large-chunk and stale browserslist warnings. Field CWV/INP and lab speed scores were not measured; do not claim this branch fixes all performance issues.

## Release and rollback

Review the diff, legacy proof questions and an actual Vercel preview before merging. Preview contact delivery is intentionally disabled. Confirm Vercel uses `npm run build` and `dist`; settings in this branch pin both. Test direct loads of service/city/article pages, missing404, existing redirect, canonical host aliases, sitemap and the public verification file on the actual hosting preview. Do not send test leads to the client; use stubbed tests for success/failure.

After authorized deployment, verify the same routes and real404, inspect lead delivery using an owner-approved controlled procedure, then submit approved sitemap/changed URLs. Monitor at7,14,28days without promising results. If routing regresses, revert this branch's deployment/commit to the previous known deployment. Do not restore a blanket homepage rewrite as a substitute for diagnosing a route mapping issue. No production state was changed in this task.

## Pre-merge quality pass

Latest `origin/main` fetched during the review remains `dd2c316`; the branch contains the original implementation plus this review. No merge or deployment was performed.

Actionable findings fixed:

- Contact form validation previously relied on a toast without associating the error with the field or moving focus. Both forms now render an inline alert, focus the invalid field and expose `aria-invalid` / `aria-describedby`. Invalid input produces no delivery request.
- A stalled LeadConnector or secondary Zapier request could leave the submit button indefinitely pending. Each request now has a15-second AbortController timeout with timer cleanup, supported without relying on newer `AbortSignal.timeout` browser APIs. Failure retains input and does not count a lead. Server-side idempotency is not available through the existing webhook contract; an ambiguous timeout still needs operator reconciliation before treating a retry as a distinct lead.
- The previous “never share” form copy contradicted the use of external delivery providers. It now accurately describes request handling and refers to the privacy policy.
- Added reduced-motion CSS for inherited hero/utility animations and smooth scrolling.
- Cleared all seven baseline ESLint errors without changing referral business logic: equivalent type aliases, literal terminal hyphens in regex character classes, typed Supabase error access and an ESM Tailwind plugin import.

Validation: repository-wide lint passes with0 errors and7 existing Fast Refresh warnings; typecheck and production build pass;12 tests pass (including focused/associated errors, success/failure, duplicate in-flight prevention, preview delivery block, timeout abort/cleanup, safe event payloads and phone intent). All30 sitemap routes continue to pass static SEO/link checks. Existing Vite large-chunk and outdated browserslist notices remain diagnostics, not build failures.

Verdict: branch code is ready for merge review. Production release still requires actual Vercel preview/alias verification, confirmation or neutralization of the previously documented legacy business-proof claims, and owner-controlled lead-delivery/GA4 checks. No Google/Bing ranking improvement is asserted from these code checks. Google/Bing external work and the90-day measurement period remain post-release tasks.

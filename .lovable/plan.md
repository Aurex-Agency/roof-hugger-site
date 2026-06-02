Keep `/contact`, `/services`, `/gallery`, `/reviews` as real pages. Convert redirect-only routes to true server-side 301s via Vercel.

## Changes

1. **Create `vercel.json`** at project root with permanent 301 redirects (Vercel handles these at the edge before the SPA loads, returning real `301` status codes — proper SEO signal):
   - `/about` and `/about/` → `/#about`
   - `/privacy` and `/privacy/` → `/privacy-policy`
   - `/privacy-policy/` → `/privacy-policy` (trailing-slash normalize)
   - `/contact/` → `/contact`
   - `/services/` → `/services`
   - `/gallery/` → `/gallery`
   - `/reviews/` → `/reviews`
   - `/service-areas/` → `/service-areas`

2. **Trim `src/App.tsx`** — remove the now-redundant `<Route path="/about">` and `<Route path="/privacy">` redirect routes. Vercel will intercept these before React Router ever sees them. Keep the real `/privacy-policy` route.

3. **Delete `src/pages/Redirect.tsx`** — no longer imported anywhere.

4. **Leave `public/sitemap.xml` as is.** Redirect sources (`/about`, `/privacy`) intentionally don't belong in the sitemap. The SEO scanner's warning about "missing entries" is a false positive for redirect routes — safe to ignore.

5. **Verify `BASE_URL` in sitemap is `https://shurdensroofing.com`** — already correct.

## Not changing

- Real pages (`/contact`, `/services`, `/gallery`, `/reviews`, `/service-areas`, city pages) untouched.
- `robots.txt` already correct.
- JSON-LD already correct after previous turn.

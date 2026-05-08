## Goal

Replace the `/reviews` page with an **About** page that mirrors the content from shurdensroofing.com/about, while keeping the existing site's layout/design language (PageHero + section blocks + CTA banner + Footer).

## Routing decision

The user said "replace this page /reviews and take this same page layout but replicate this page". I'll interpret that as:
- Convert `/reviews` route to render the new About page content
- Keep the URL `/reviews` unchanged (no rename requested)
- Update `ReviewsPage.tsx` in place
- Update Navigation/Footer link labels from "Reviews" to "About" so the menu reflects the new content

If you'd prefer to keep "/reviews" labeled as Reviews and add About at `/about` instead, say the word and I'll adjust.

## Asset handling

Copy the 5 uploaded images into `src/assets/team/`:
- `josh-shurden.jpg` (Staff-4)
- `garrett-shurden.jpg` (Staff-3)
- `parker-shurden.jpg` (Staff-2)
- `cameron-shurden.jpg` (Staff-1)
- `office-exterior.jpg` (Hero-Office)

Note: The source page labels Staff-3 as Garrett and Staff-1 as Cameron — I'll match that mapping. Job titles for the sons are listed as "Job Title Here" on the source; I'll use **"Sales & Service"** as a sensible placeholder (and you can correct any name).

## Page structure (replaces ReviewsPage.tsx)

1. **PageHero** — eyebrow "About Shurden's Roofing", title "A Mississippi Family Business Built on Honest Roofing Work", subtitle one-liner.
2. **About the Business** — two-column: long-form copy (Josh's story, GAF Master Elite, family team) on the left, office exterior photo on the right.
3. **Owner statement** — pull-quote style block from Josh ("I personally stand behind our services 100%…") with a "Call Now" CTA button (tel: link).
4. **Why Work With Us** — 6-item bullet/icon grid (30 yrs experience, 100 yrs combined, family owned, GAF Master Elite, 25-yr warranty, 600-mile service radius). Reuse Lucide icons + the same card style used in About.tsx.
5. **Meet Our Team** — 4-card grid (Josh as Owner; Garrett, Parker, Cameron as Sales & Service). Square portrait, name, title. Responsive: 1 col mobile / 2 col md / 4 col lg.
6. **CtaBanner** — reuse existing component: "Want To Be Next In Line For A Brand New Roof?" → /contact.

Keep the existing Navigation, MobileCallBar, and Footer wrappers.

## Files

- **Edit** `src/pages/ReviewsPage.tsx` — full rewrite to About content
- **Edit** `src/components/site/Navigation.tsx` — rename "Reviews" link label to "About"
- **Edit** `src/components/site/Footer.tsx` — rename "Real Reviews" quick link to "About Us"
- **Copy** 5 user-uploaded images into `src/assets/team/`
- Leave the existing `Reviews` homepage section component untouched (still used on `/`)

## Out of scope

- No change to the `Reviews` component on the homepage
- No new route added; URL stays `/reviews`
- No backend changes

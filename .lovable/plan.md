# Fix: Services page nav scroll glitch on mobile

## Problem
On `/services`, tapping a chip in `ServiceNav` (Residential, Commercial, etc.) then scrolling causes a visible jump/lag on mobile. Two root causes:

1. **Scroll listener fights the smooth scroll.** `ServiceNav` runs a non-throttled `scroll` handler that recalculates `active` on every frame during the programmatic `window.scrollTo({ behavior: "smooth" })`. On mobile this rerenders the sticky bar mid-animation, causing the visible jitter.
2. **Sticky offset is measured at click time, then changes.** The sticky `ServiceNav` sits under the sticky `<header>`. When the browser starts smooth-scrolling, address-bar collapse on mobile changes viewport height and the header/nav heights momentarily, so the final scroll position is off by a few px and the page "settles" with a small jump.

`ScrollToTop` is not involved (only fires on pathname/hash change from router, and we use `history.replaceState`), so the fix stays inside `ServiceNav`.

## Changes (frontend only)

**File: `src/components/site/ServiceNav.tsx`**

- Throttle the scroll listener with `requestAnimationFrame` and only `setActive` when the value actually changes (prevents re-render storm during smooth scroll).
- During programmatic navigation, suspend the active-section observer for ~600ms so the chip highlight doesn't flicker between sections while animating past them.
- Compute the scroll target using `scrollIntoView` with a CSS `scroll-margin-top` on each section instead of manual offset math. This makes the browser handle the sticky-header offset natively and avoids the address-bar-collapse miscalculation. Set `scroll-margin-top` inline via a small effect that reads header+nav height once on mount and on resize, or simpler: apply a Tailwind `scroll-mt-[...]` utility on the section anchors.
- Keep `history.replaceState` so the URL hash updates without triggering `ScrollToTop`.

**File: `src/pages/ServicesPage.tsx`** (only if sections need `scroll-mt-*`)

- Add `scroll-mt-32 md:scroll-mt-36` (or equivalent matching header+nav height) to each section with an `id` that `ServiceNav` targets: `residential`, `commercial`, `repair`, `insurance`, `maintenance`. No layout changes.

## Out of scope
- No design changes, no new sections, no routing changes.
- No changes to `ScrollToTop` or `Navigation`.

## Validation
- On mobile viewport (430px), tap each chip in `ServiceNav` and confirm: smooth scroll lands exactly at the section top under the sticky bars, no late "settle" jump, chip highlight updates once at the end rather than flickering through intermediate sections.

Update the mobile VideoAsk override so it targets the actual fixed widget element rendered in the DOM: a fixed `<button>` at `bottom: 24px; right: 24px; z-index: 9999`, not only iframe/div selectors.

Implementation plan:
1. Edit `src/index.css` only.
2. Replace the current mobile selector with a stronger mobile-specific rule that matches the VideoAsk fixed button by accessible text/icon structure and fixed positioning.
3. Set the mobile bottom offset to `96px !important` so the widget sits fully above the Call Now bar with breathing room.
4. Keep desktop unchanged.
5. Re-check the 390x844 mobile preview to confirm the widget no longer overlaps the bottom bar.
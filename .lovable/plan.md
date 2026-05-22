## Add VideoAsk widget to the site

Embed the VideoAsk "Get help now!" widget in the bottom-right corner across every page, with adjustments so it doesn't collide with existing UI on mobile.

### Implementation

1. **Inject the VideoAsk scripts globally** by adding them to `index.html` just before `</body>`:
   - An inline `<script>` that sets `window.VIDEOASK_EMBED_CONFIG` with the config you pasted (widget kind, URL, `VideoThumbnailWindowTall`, "Get help now!", `#FA6B05`, `bottom-right`, dismissible).
   - The `<script src="https://www.videoask.com/embed/embed.js">` loader.
   
   Placing it in `index.html` (not a React component) ensures it loads once for the whole SPA and doesn't get torn down on route changes.

2. **Prevent mobile overlap with the existing "Call Now" bar.** The site already renders `MobileCallBar` fixed to the bottom on screens `<md`. The VideoAsk widget in `bottom-right` would sit on top of it. Add a small CSS rule in `src/index.css` that lifts the VideoAsk iframe above the call bar on mobile:
   ```css
   @media (max-width: 767px) {
     iframe[src*="videoask.com"] { bottom: 72px !important; }
   }
   ```
   This keeps the widget clean on phones while leaving desktop placement untouched.

3. **No other layout changes.** The widget is self-contained (renders its own fixed-position iframe) and works on any viewport without extra responsive code.

### Notes
- Requires the published site to be served over HTTPS so the widget opens inline (Lovable preview + published domain both are).
- No new dependencies; pure HTML/CSS additions.

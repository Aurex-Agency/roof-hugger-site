I’ll apply your provided VideoAsk snippet exactly where the widget is currently loaded.

Implementation plan:
1. Keep the existing `window.VIDEOASK_EMBED_CONFIG` and embed script in `index.html` because they already match your provided widget config.
2. Add your provided mobile `<style>` block directly after the VideoAsk embed script in `index.html`.
3. Remove the broader custom VideoAsk override from `src/index.css` so the site uses the CSS from your provided snippet instead.
4. Re-check the 390x844 mobile preview to confirm the widget clears the bottom Call Now bar.
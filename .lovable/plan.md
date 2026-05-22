Plan to fix the home page before/after slider:

1. Update the home page slider in `src/components/site/Work.tsx` so the visible handle and its touch target actually receive pointer events.
2. Keep `onlyHandleDraggable` enabled to avoid mobile scroll conflicts, but override the custom handle wrapper from the library’s default `pointer-events: none` behavior.
3. Add a larger invisible hit area around the handle with `touch-action: none`, `pointer-events: auto`, and cursor states so it works reliably on mobile and desktop.
4. Leave the existing visual design unchanged: same images, divider line, primary-colored circular handle, and pulse effect.

Technical details:
- The current custom handle is rendered inside the slider’s handle root, which the library styles with `pointer-events: none`.
- With `onlyHandleDraggable`, pointer events are attached to that handle root; the custom child needs an explicit pointer-enabled hit target so touch/drag events can start properly.
- I will only change the home page slider component unless the gallery page is also reported broken.
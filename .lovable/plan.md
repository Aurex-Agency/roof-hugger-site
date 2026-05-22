## Fix before/after slider on mobile

The `ReactCompareSlider` in `src/components/site/Work.tsx` is unresponsive to touch because dragging anywhere on the image competes with vertical page scroll, and the custom handle markup doesn't reserve a clear hit target.

### Changes (`src/components/site/Work.tsx`)
1. Add `onlyHandleDraggable` to `ReactCompareSlider` so the slider only responds to touches on the handle itself. This lets users scroll the page by swiping the image, and ensures the handle reliably drags on touch.
2. Wrap the handle's circular button with `touch-action: none` (via `style={{ touchAction: 'none' }}`) and give the handle wrapper a slightly wider invisible hit area so it's easy to grab with a finger on small screens.
3. Keep the existing visual design (vertical bar + pulsing circular chevron button) unchanged.

No other files need changes.

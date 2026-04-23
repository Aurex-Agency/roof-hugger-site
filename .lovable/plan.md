

## Fix Hero CTA buttons overlapping bottom trust badges

On mobile (390×844), the Hero content is bottom-aligned (`items-end`) with only `pb-24` of bottom padding, so the "Call 662-549-9165" button collides with the floating "Serving the Golden Triangle" / "GAF Master Elite" badges pinned at `bottom-6`.

### Change

**`src/components/site/Hero.tsx`** — increase mobile bottom padding on the content grid so CTAs clear the floating badges:

- Update line 17: change `pb-24` → `pb-44` (keeps `md:pb-32` for desktop, where layout is centered and there's no collision).

Result:
```tsx
<div className="container relative grid min-h-[88vh] items-end pb-44 pt-20 md:min-h-[92vh] md:items-center md:pb-32 md:pt-24">
```

That adds ~80px of breathing room below the call button on mobile, leaving the two pill badges visible underneath without touching the CTAs. Desktop is unchanged.


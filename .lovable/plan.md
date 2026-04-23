

## Loosen heading letter-spacing

The Barlow Condensed ExtraBold headings are running together because of the default `tracking-tight` (-0.025em) applied globally to all `h1`–`h6` elements. We'll switch to a slightly positive tracking so condensed letters breathe without losing their tight, industrial feel.

### Change

**`src/index.css`** — update the global heading rule:

```css
h1, h2, h3, h4, h5, h6 {
  @apply font-display;
  font-weight: 800;
  letter-spacing: 0.01em;
}
```

Replaces `tracking-tight` (which was forcing -0.025em) with a subtle +0.01em spread. This applies site-wide (Hero, About, Stats, Certifications, Reviews, FAQ, Footer, etc.) in one change.

### Optional follow-up

If after the change the very large Hero headline (`text-[64px]`/`[72px]`) feels too loose, we can scope a tighter override (e.g. `0.005em`) on the Hero `h1` only — but starting site-wide keeps it consistent.


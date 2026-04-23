

## Loosen Hero headline letter-spacing

The Hero `h1` ("Mississippi Storms Don't Wait. Neither Do We.") still has `tracking-tight` applied locally on the element, which overrides the global `0.01em` we set on all headings. We'll remove that and add a small positive tracking so the ExtraBold condensed letters breathe.

### Change

**`src/components/site/Hero.tsx`** — update the `<h1>` className:

- Remove `tracking-tight`
- Add `tracking-[0.02em]` (slightly looser than the global 0.01em since the Hero text is the largest on the page at 64–72px)

Result:
```tsx
<h1 className="font-display font-extrabold text-[44px] leading-[1.02] tracking-[0.02em] text-dark-foreground md:text-[64px] lg:text-[72px]">
```

No other files change. The orange accent line ("Neither Do We.") inherits the same tracking automatically.


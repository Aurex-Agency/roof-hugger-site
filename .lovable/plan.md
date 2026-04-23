

## Fix Stats Section Mobile Layout

The Stats section currently works on desktop but needs polish on mobile (375–414px) and small tablets where the 2-column grid can still feel cramped, suffix text may crowd the value, and longer labels ("Starkville · West Point · Columbus") wrap awkwardly.

### What you'll see after the fix

- Clean 2-column grid on phones with comfortable spacing — no edge bleeding.
- Number + orange suffix stay on a single line at every width down to 320px.
- All four labels start at the same vertical baseline on mobile (just like desktop).
- Label text wraps consistently so each card has the same height in a row.

### Technical changes (single file: `src/components/site/Stats.tsx`)

1. **Right-size mobile typography** so "500+ Roofs" and "3+ Counties" never wrap at 320–414px:
   - Value: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (drop one step on the smallest breakpoint).
   - Suffix unit ("Years"/"Roofs"/etc.): `text-xl sm:text-2xl md:text-3xl lg:text-4xl`.
   - Tighten the inline gap on mobile: `gap-1 sm:gap-1.5`.

2. **Lock mobile baseline alignment**:
   - Value row height: `h-12 sm:h-14 lg:h-20` so labels share the same Y on phones.
   - Keep `items-baseline` and `whitespace-nowrap`.

3. **Tighten container + grid for phones**:
   - Grid: `grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10`.
   - Section padding: `py-12 sm:py-16 md:py-20` (less vertical padding on small screens).

4. **Normalize label wrapping**:
   - Add `min-h-[2.5rem] sm:min-h-[3rem]` to the label `<p>` so 1-line and 2-line labels still produce equal-height cards.
   - Slightly smaller mobile label: `text-xs sm:text-sm md:text-[15px]`.
   - Add `break-words` to prevent any overflow on the longest label.

5. **Counter logic untouched** — IntersectionObserver, animation easing, and the `Stat` data shape stay exactly as they are.

No other files change.


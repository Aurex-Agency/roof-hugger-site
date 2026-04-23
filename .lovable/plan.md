

## Fix the Stats Section Below the Hero

The "10+ Years / 500+ Roofs / 3+ Counties / 5 Stars" row is broken: the orange suffix is so large it wraps onto a second line ("+" sits on row 1, "Years" on row 2), the labels below land at different heights, and "5 Stars" is missing the "+" so it visually drifts left.

### What you'll see after the fix

- Four perfectly aligned stat blocks in a single neat row on desktop, two columns on tablet, two columns on mobile.
- Number and suffix sit on the **same line** at every breakpoint — no more "+" floating above "Years".
- All four subtext labels start at the **same vertical baseline**.
- "5 Stars" updated to "5★" so it visually matches the weight of the other stats.

### Visual target

```text
10+      500+      3+         5★
Years    Roofs     Counties   Stars
Roofing  Installed Starkville On Google
the      & Repair  · West Pt  Reviews
Triangle           · Columbus
```

Each column: large white number + smaller orange suffix on the same baseline, then a single short label below.

### Technical changes (single file: `src/components/site/Stats.tsx`)

1. **Make the suffix smaller than the value** so it fits on one line:
   - Value: `text-4xl sm:text-5xl lg:text-6xl` (unchanged)
   - Suffix: roughly half-size — `text-2xl sm:text-3xl lg:text-4xl`
   - Add `whitespace-nowrap` to the value+suffix flex row to guarantee no wrap.

2. **Restructure the suffix data** to merge the unit cleanly:
   - "10" + "+" / "Years" → render as one row: `10+` (large) then `Years` as part of suffix at smaller size, OR keep current shape but shrink suffix so `+ Years` fits inline.
   - Cleaner: split into `value`, `plus` (boolean), and `unit`. Render: `<big>10</big><big-orange>+</big-orange> <medium-orange>Years</medium-orange>`. This gives uniform spacing.

3. **Replace " Stars" with "★ Stars"** and shorten labels for consistent line counts:
   - "Starkville · West Point · Columbus and more!" → "Starkville · West Point · Columbus" (drop "and more!" so it wraps the same as siblings, or constrain all labels to `line-clamp-2`).

4. **Lock label baseline alignment**:
   - Wrap the value row in a fixed-height container (`h-14 lg:h-20`) so every label starts at the exact same Y position regardless of suffix length.
   - Keep `items-baseline` on the value row so number + suffix sit on a shared baseline.

5. **Tighten the grid gaps** so 4 columns breathe on 1280–1440px viewports:
   - `gap-x-6 lg:gap-x-10` and add `lg:px-4` on each cell to prevent crowding.

6. **Mobile (2-column) sanity check**: confirm the smaller suffix size (`text-2xl`) keeps "500+ Roofs" on one line at 375px width; if not, drop value to `text-3xl` on the smallest breakpoint.

No other files change. The Counter animation logic and IntersectionObserver behavior stay exactly as they are.


## Goal
Create a new `/referral-join` page (not linked in navigation) with a referral program signup form that collects name, phone, and SMS opt-in, and explains the gamified tier system.

## Page Structure
- Hero section with headline: "Earn $200 in cash every time you refer someone and they get a roof replacement!"
- Left column: Gamified tier explanation
  - Tier 1–3 progression based on number of successful referrals
  - Each tier unlocks higher cash per referral + entry into extra prize drawings
  - Visual tier cards or list showing "Level Up" progression
- Right column: Signup form
  - Full Name (text input)
  - Phone Number (tel input)
  - Checkbox: "I agree to receive text message updates about the referral program."
  - Submit CTA: "Join the Referral Program"
  - Privacy note below submit

## Form Submission
- Same webhook pattern as ContactPage (`POST` to LeadConnector webhook)
- Payload fields: `full_name`, `phone`, `opt_in_referral_sms: true`, `source: "shurdensroofing.com — Referral Join"`
- Client-side validation: name required, phone valid 10-digit US format, checkbox required
- Toast confirmation on success/error

## Styling
- Follows existing dark-theme ContactPage layout (container grid, dark card form, PageHero component)
- Uses existing semantic design tokens (`bg-dark`, `border-white/5`, `text-primary`, etc.)
- No new colors or custom styles outside the existing token system

## SEO
- `<SEO>` component with title "Join Shurden's Roofing Referral Program | Earn $200 Per Referral"
- Description mentioning $200 cash reward and North Mississippi service area

## Routing
- Add `<Route path="/referral-join" element={<ReferralJoinPage />} />` in `AppShell.tsx`
- Add `/referral-join/` redirect in `vercel.json`
- No Navigation or Footer changes needed (page intentionally hidden from menu)

## Files to Create/Edit
- `src/pages/ReferralJoinPage.tsx` — new page component
- `src/AppShell.tsx` — add route
- `vercel.json` — add trailing-slash redirect

## No Backend or Database Changes
This is a purely frontend page that submits to the existing LeadConnector webhook. No Lovable Cloud, Supabase, or storage is required.
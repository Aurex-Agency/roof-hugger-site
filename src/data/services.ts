export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceCard {
  icon: "home" | "building" | "hail" | "wrench" | "shield" | "file" | "wind" | "layers" | "search" | "clock";
  title: string;
  body: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  introHeading: string;
  intro: string[];
  bulletsHeading: string;
  bullets: string[];
  cardsHeading: string;
  cards: ServiceCard[];
  faqs: ServiceFAQ[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    serviceType: "Roof Replacement",
    metaTitle: "Roof Replacement in North Mississippi | Shurden's Roofing",
    metaDescription:
      "GAF Master Elite® roof replacement across North Mississippi. Full tear-off, deck inspection, and registered warranty — most homes re-roofed in 1–2 days. Call 662-498-6629.",
    heroEyebrow: "Roof Replacement",
    heroTitle: "Roof Replacement Done Right,",
    heroHighlight: "Start to Finish",
    heroSubtitle:
      "Full tear-off, deck inspection, and a complete GAF Master Elite® shingle system — installed by the same local crew from the first knock to the final walkthrough.",
    introHeading: "A New Roof Is a 25-Year Decision. We Treat It That Way.",
    intro: [
      "Most of the roofs we replace in North Mississippi are architectural shingles in the 18 to 25 year range — cooked by long summers, hammered by spring hail, and finally opened up by one wind event too many. When a roof reaches that point, patching it is throwing money at a problem that's only moving in one direction. A full replacement resets the clock and, done properly, is the last roof decision you'll make for decades.",
      "Our process doesn't cut the corners that cause callbacks. We tear off every layer down to the deck — no overlays — and inspect every square foot of decking before a single shingle goes down. Rotted or soft decking gets replaced and itemized on your invoice so you can see exactly what you paid for. Then we install the complete GAF system: underlayment, ice and water protection where it matters, starter strips, ridge ventilation, and the shingle line you chose from the full GAF lineup — HDZ, UHDZ, Camelot II, or Slateline.",
      "Because Shurden's Roofing is a GAF Master Elite® contractor — a certification fewer than 2% of roofing contractors in the country hold — we can register Gold Pledge and Silver Pledge warranties that most roofers simply can't offer. The warranty is registered in your name, and it's transferable if you sell the house.",
    ],
    bulletsHeading: "What Every Replacement Includes",
    bullets: [
      "Most homes torn off, dried-in, and re-roofed in 1–2 days",
      "Full deck inspection — rotted decking replaced and itemized on the invoice",
      "Complete GAF Master Elite® system with Gold Pledge & Silver Pledge warranty options",
      "Color and shingle profile selection from the full GAF lineup (HDZ, UHDZ, Camelot II, Slateline)",
      "Magnet-sweep cleanup of the yard and driveway — no nails left behind",
      "Same local crew from first knock to final walkthrough — no subcontractor handoffs",
    ],
    cardsHeading: "How We're Different From the Fly-By-Night Crews",
    cards: [
      {
        icon: "shield",
        title: "GAF Master Elite® Certified",
        body: "A factory certification held by fewer than 2% of roofing contractors nationwide. It's what lets us register Gold Pledge warranties other roofers can't.",
      },
      {
        icon: "search",
        title: "Deck Inspected, Not Covered Up",
        body: "We never shingle over soft decking. Every sheet is checked after tear-off, and anything replaced is photographed and itemized so you see the proof.",
      },
      {
        icon: "clock",
        title: "1–2 Day Turnaround",
        body: "Most single-family homes in North Mississippi are torn off, dried in, and finished in one to two days — with a realistic timeline told to you up front.",
      },
      {
        icon: "home",
        title: "Local Since 2015",
        body: "We're based in Maben and we roof our neighbors' homes. When the warranty says decades, you want the company that installed it to still be down the road.",
      },
    ],
    faqs: [
      {
        q: "How do I know if I need a full replacement or just a repair?",
        a: "A free inspection answers that honestly. If the roof has isolated damage and years of life left, we'll tell you a repair is the right call. If shingles are brittle, granule loss is heavy, or storm damage is widespread, replacement usually costs less than repeated repairs. We show you photos either way.",
      },
      {
        q: "How much does a roof replacement cost in North Mississippi?",
        a: "It depends on square footage, roof pitch, deck condition, the shingle line you choose, and accessories like ventilation and flashing. We provide a written, itemized quote after a free inspection — no vague per-square guesses over the phone.",
      },
      {
        q: "Will insurance pay for my roof replacement?",
        a: "If the damage came from a storm — wind, hail, or fallen limbs — your homeowner's policy likely covers it. We document the damage with drone photos, meet your adjuster on the roof, and support the claim from first call to final invoice.",
      },
      {
        q: "What warranty comes with the new roof?",
        a: "As a GAF Master Elite® contractor we offer GAF Gold Pledge and Silver Pledge warranty options, registered in your name. Coverage extends to both materials and workmanship, and the warranty is transferable if you sell your home.",
      },
      {
        q: "Do you handle permits and HOA approval paperwork?",
        a: "Yes. We pull permits where required and provide manufacturer samples and documentation for HOA color approval before work starts.",
      },
    ],
    ctaEyebrow: "Free Roof Inspection",
    ctaTitle: "Find Out What Your Roof Actually Needs.",
    ctaBody:
      "A free inspection gives you a straight answer: repair, replacement, or nothing at all. Written itemized quote, no pressure, no obligation.",
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    serviceType: "Roof Repair",
    metaTitle: "Roof Repair in North Mississippi | Shurden's Roofing",
    metaDescription:
      "Roof leak repair, pipe boots, flashing, blown-off shingles, and emergency tarping across North Mississippi. Honest repair-or-replace answers. Call 662-498-6629.",
    heroEyebrow: "Roof Repair & Leak Stops",
    heroTitle: "Small Problems Fixed",
    heroHighlight: "Before They Get Expensive",
    heroSubtitle:
      "Pipe boots, flashing, valleys, blown-off shingles, and emergency tarping — repaired by a crew that tells you the truth about whether a repair is enough.",
    introHeading: "Most Leaks Start Small. The Damage Doesn't Stay That Way.",
    intro: [
      "The majority of leaks we chase down in North Mississippi don't come from the shingles themselves. They start where the roof meets something else — a plumbing pipe, a chimney, a wall, a valley. A cracked pipe boot or a rusted piece of step flashing lets in a little water every rain, and by the time a brown ring shows up on the ceiling, the decking underneath has often been wet for months.",
      "That's why our repairs focus on the failure points that actually cause leaks. We replace worn pipe boots with Master Flow Pivot Pipe Boot Flashing, rebuild chimney and wall flashing with metal instead of caulk, re-seal valleys correctly, and replace wind-lifted or missing shingles with matched material. Every repair comes with photos of what we found and what we fixed.",
      "And we'll tell you the truth about scope. If your roof has years of life left, we say so and fix the problem spot. If we're looking at a roof where repairs would just be a subscription, we'll show you why — with photos, not pressure. Repairs are how we earn the replacement call five years from now.",
    ],
    bulletsHeading: "Repairs We Handle Every Week",
    bullets: [
      "Pipe boot replacement with Master Flow Pivot Pipe Boot Flashing",
      "Chimney flashing and step flashing repair — metal, not caulk",
      "Valley repairs and re-seals",
      "Blown-off and wind-lifted shingle replacement",
      "Leak detection and tracing — finding where water actually enters",
      "Emergency tarping to stop active leaks before the next storm",
    ],
    cardsHeading: "When to Call Us",
    cards: [
      {
        icon: "wrench",
        title: "Ceiling Stain or Drip",
        body: "A brown ring or blistered paint means water has already been getting in for a while. The earlier we trace it, the smaller the fix.",
      },
      {
        icon: "wind",
        title: "Shingles in the Yard",
        body: "Wind-lifted tabs and missing shingles leave exposed nail lines that leak in the next rain. We replace them with matched material fast.",
      },
      {
        icon: "hail",
        title: "After Any Big Storm",
        body: "Storm damage often isn't visible from the ground. A free post-storm inspection catches lifted shingles and hail bruising before they leak.",
      },
      {
        icon: "clock",
        title: "Active Leak Right Now",
        body: "Move belongings out of the drip path, photograph the ceiling, and call us. We tarp, document, and stop the leak — usually same or next day.",
      },
    ],
    faqs: [
      {
        q: "Do you do small repairs, or only full replacements?",
        a: "Both — and we do a lot of repairs. Pipe boots, flashing, valleys, chimney leaks, skylight leaks, and blown-off shingles are everyday work for our crew. If a repair is the right answer, that's what we'll recommend.",
      },
      {
        q: "How fast can you get to an active leak?",
        a: "Usually same day or next morning, depending on where you are in our service area. After major storms we prioritize active leaks and emergency tarping first.",
      },
      {
        q: "How much does a roof repair cost?",
        a: "Most common repairs — a pipe boot, a flashing section, a handful of shingles — are far less than homeowners fear. We quote in writing after looking at the roof, and the inspection is free.",
      },
      {
        q: "Can you match my existing shingles?",
        a: "In most cases, yes. We work with the full GAF lineup and can match or closely blend the profile and color of most architectural shingles common in North Mississippi.",
      },
      {
        q: "Will you tell me if I actually need a new roof instead?",
        a: "Yes — with photos, not pressure. If repairs would only be buying months, we'll show you exactly why and give you an itemized replacement quote so you can decide with real information.",
      },
    ],
    ctaEyebrow: "Free Leak Inspection",
    ctaTitle: "Got a Leak? Let's Find It Before the Next Rain.",
    ctaBody:
      "Free inspection, photos of what we find, and a written quote. If it's a $300 fix, that's what we'll tell you.",
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    serviceType: "Commercial Roofing",
    metaTitle: "Commercial Roofing in North Mississippi | Shurden's Roofing",
    metaDescription:
      "Commercial roofing for churches, schools, offices, retail, and warehouses across North Mississippi. SBS, GAF Liberty, Mule-Hide TPO, metal & shingle systems. 662-498-6629.",
    heroEyebrow: "Commercial Roofing",
    heroTitle: "Commercial Roofs That Keep",
    heroHighlight: "the Doors Open",
    heroSubtitle:
      "SBS self-adhering, GAF Liberty, Mule-Hide TPO, metal, and shingle systems for churches, schools, offices, retail, and multi-tenant buildings across North Mississippi.",
    introHeading: "A Leaking Business Roof Costs More Than the Repair.",
    intro: [
      "When a commercial roof leaks, the bill isn't just the roof. It's stained ceiling tiles in front of customers, wet inventory, interrupted services on Sunday morning, and tenants calling about drips. Commercial roofing in North Mississippi means picking the right system for the building — and installing it with a crew that shows up when scheduled and keeps the site clean while your business keeps running.",
      "Shurden's Roofing installs and repairs the full range of commercial systems. For low-slope roofs we install SBS self-adhering systems and GAF Liberty — durable membranes with clean installation and strong waterproofing. For flat roofs that need energy-conscious, watertight protection, we install Mule-Hide TPO single-ply systems. And for buildings with sloped sections, transitions, or mixed rooflines, we handle metal and shingle systems with the same crew, so nothing falls between two contractors.",
      "We roof churches, schools, retail storefronts, offices, warehouses, multi-tenant buildings, restaurants, and ag buildings throughout the region. Send us the building address and we'll inspect it, walk you through the system options, and quote it in writing.",
    ],
    bulletsHeading: "Commercial Systems We Install",
    bullets: [
      "SBS Self-Adhering Roofing System — durable low-slope waterproofing with a cleaner install",
      "GAF Liberty Roofing System — SBS self-adhering system built for low-slope roof areas",
      "Mule-Hide TPO — single-ply membrane for flat and low-slope buildings",
      "Metal roofing systems for commercial and ag buildings",
      "Architectural shingle systems for sloped commercial sections",
      "Commercial repair, maintenance, and storm damage documentation",
    ],
    cardsHeading: "Buildings We Roof Across North Mississippi",
    cards: [
      {
        icon: "building",
        title: "Churches & Schools",
        body: "Steep sanctuary roofs, flat classroom wings, and everything between — scheduled around services and school calendars.",
      },
      {
        icon: "layers",
        title: "Retail, Offices & Restaurants",
        body: "Low-slope TPO and SBS systems installed with minimal disruption to customers, tenants, and daily operations.",
      },
      {
        icon: "home",
        title: "Warehouses & Multi-Tenant",
        body: "Large-footprint flat roofs where a small membrane failure becomes a big interior problem. We inspect, repair, or re-roof.",
      },
      {
        icon: "wind",
        title: "Ag & Farm Buildings",
        body: "Metal roofs on barns, shops, and outbuildings — common across Clay, Webster, and Choctaw Counties, and right in our wheelhouse.",
      },
    ],
    faqs: [
      {
        q: "Do you only do shingle roofs on commercial buildings?",
        a: "No. We install SBS self-adhering systems, GAF Liberty, Mule-Hide TPO single-ply, metal, and shingle roofing. The building's slope, use, and budget determine the right system, and we'll walk you through the options.",
      },
      {
        q: "Can you work around our business hours?",
        a: "Yes. We schedule commercial work to minimize disruption — around services for churches, around class schedules for schools, and around customer hours for retail and restaurants.",
      },
      {
        q: "Do you handle storm damage claims on commercial buildings?",
        a: "Yes. We document wind and hail damage with drone photography, meet the adjuster on the roof, and review the carrier's scope line by line before approval — same process we use on residential claims.",
      },
      {
        q: "How do I get a commercial quote?",
        a: "Send us the building address. We inspect the roof, document its condition with photos, and deliver a written quote with system options — free and without obligation.",
      },
      {
        q: "Do you do commercial roof maintenance?",
        a: "Yes. Regular inspections and small membrane or flashing repairs extend the life of a commercial roof significantly and catch problems while they're still cheap.",
      },
    ],
    ctaEyebrow: "Free Commercial Inspection",
    ctaTitle: "Need a Quote on a Commercial Roof?",
    ctaBody:
      "Send us the building address and we'll inspect it, document the condition, and quote it in writing — system options included.",
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    serviceType: "Metal Roofing",
    metaTitle: "Metal Roofing in North Mississippi | Shurden's Roofing",
    metaDescription:
      "Metal roofing for barns, shops, ag buildings, and commercial properties across North Mississippi — plus honest metal vs. shingle advice for your home. Call 662-498-6629.",
    heroEyebrow: "Metal Roofing",
    heroTitle: "Metal Roofs Built for",
    heroHighlight: "Mississippi Weather",
    heroSubtitle:
      "Metal roofing for barns, shops, ag buildings, and commercial properties across North Mississippi — installed by the same local crew that handles our shingle work.",
    introHeading: "Where Metal Makes Sense — and Where It Doesn't.",
    intro: [
      "Drive through Clay, Webster, or Choctaw County and you'll see why metal roofing is everywhere out here: barns, shops, equipment sheds, and ag buildings that need a roof to last decades with almost no maintenance. Metal sheds rain fast, stands up to wind, doesn't care about the summer heat that ages asphalt shingles, and handles the wide temperature swings North Mississippi throws at it.",
      "We install metal roofing on outbuildings, shops, and ag structures throughout our service area, and metal systems on commercial buildings that need slope-specific sections and transitions handled by one crew. Because we install both metal and shingle systems, you get a straight answer about which one your building actually needs — not a pitch for whichever product a crew happens to sell.",
      "Thinking about metal for your house? We'll give you the honest comparison: what metal costs versus an architectural shingle system, how each performs in hail, what your neighborhood and resale market look like, and what the warranty picture is for each. Sometimes metal is the right call. Sometimes a GAF shingle system delivers more roof for the money. We'll show you the math either way.",
    ],
    bulletsHeading: "Where We Install Metal",
    bullets: [
      "Barns, shops, and equipment sheds on rural properties",
      "Ag and farm buildings across Clay, Webster, Choctaw, and surrounding counties",
      "Commercial buildings needing metal sections, transitions, and repairs",
      "Outbuildings and detached garages",
      "Metal roof repair — fastener back-out, panel damage, ridge and trim issues",
      "Honest metal vs. shingle comparisons for homeowners weighing both",
    ],
    cardsHeading: "Why Property Owners Choose Metal",
    cards: [
      {
        icon: "shield",
        title: "Decades of Service Life",
        body: "A properly installed metal roof outlasts multiple shingle cycles on structures where longevity beats everything else.",
      },
      {
        icon: "wind",
        title: "Wind & Weather Resistance",
        body: "Metal panels handle the straight-line winds and storms that roll across North Mississippi better than most roofing materials.",
      },
      {
        icon: "wrench",
        title: "Low Maintenance",
        body: "No granule loss, no brittle tabs. Periodic fastener and trim checks are most of what a metal roof ever asks for.",
      },
      {
        icon: "layers",
        title: "One Crew, Both Systems",
        body: "We install metal and shingle. That means the recommendation you get is based on your building — not on what we happen to sell.",
      },
    ],
    faqs: [
      {
        q: "Do you install metal roofs on houses?",
        a: "Our metal work centers on barns, shops, ag buildings, and commercial properties. If you're weighing metal for your home, we'll walk the roof, give you an honest metal vs. shingle comparison with real numbers, and point you to the right system for your situation.",
      },
      {
        q: "Is metal or shingle better for North Mississippi?",
        a: "It depends on the building. For barns, shops, and ag structures, metal usually wins on lifespan and maintenance. For most homes, a GAF architectural shingle system often delivers more value with strong warranty coverage. We install both, so you get a straight answer.",
      },
      {
        q: "Can you repair an existing metal roof?",
        a: "Yes. Backed-out fasteners, damaged panels, rusted trim, and ridge issues are common on older metal roofs, and most are repairable without replacing the whole roof.",
      },
      {
        q: "Does hail damage metal roofs?",
        a: "Large hail can dent metal panels — usually a cosmetic issue rather than a leak, though severe strikes can damage seams and fasteners. We document hail damage on metal roofs the same way we do on shingle: drone photos and a walk with your adjuster.",
      },
      {
        q: "How long does a metal roof install take?",
        a: "Most outbuildings and shops are completed in a few days depending on size and complexity. We give you a realistic timeline in the written quote before work starts.",
      },
    ],
    ctaEyebrow: "Free Metal Roof Quote",
    ctaTitle: "Metal Roof for the Barn, Shop, or Building?",
    ctaBody:
      "Free inspection and a written quote — plus a straight answer on whether metal or shingle is the right system for the structure.",
  },
  {
    slug: "storm-damage-insurance-claims",
    name: "Storm Damage & Insurance Claims",
    serviceType: "Storm Damage Roof Repair & Insurance Claim Support",
    metaTitle: "Storm Damage Roof Repair & Insurance Claims | Shurden's Roofing",
    metaDescription:
      "Hail and wind damage roof repair with full insurance claim support in North Mississippi. Drone documentation, adjuster meetings, emergency tarping. Call 662-498-6629.",
    heroEyebrow: "Storm Damage & Insurance Claims",
    heroTitle: "When the Storm Opens It Up,",
    heroHighlight: "Call Us Fast",
    heroSubtitle:
      "Emergency tarping, drone-documented hail and wind damage, and insurance claim support from the first phone call to the final invoice.",
    introHeading: "Storm Damage Is a Race Against the Next Rain.",
    intro: [
      "North Mississippi gets it all — straight-line winds, tornado outflows, golf-ball hail, and hurricane remnants pushing inland. When a storm opens up your roof, two clocks start ticking: the next rain system that will pour water through the damage, and your insurance carrier's expectations for prompt documentation. We handle both.",
      "First, we stop the water. Emergency tarping and leak stops come before paperwork — after major storms we prioritize active leaks across our service area, usually same day or next morning. Then we document everything with high-resolution drone photography: every hail strike, every lifted shingle, every piece of damaged flashing, marked and photographed for the claim file before evidence weathers away.",
      "Then we support the claim from start to finish. You file it — you stay in control — but we hand you everything needed to file a clean one. We meet your adjuster on the roof and walk every hit with them so nothing gets missed, review the carrier's scope line by line and flag anything missing before approval, and install the new GAF system with the same local crew. We regularly work claims with State Farm, Allstate, USAA, Farm Bureau, and Liberty Mutual adjusters across North Mississippi.",
    ],
    bulletsHeading: "The Claim, Step by Step",
    bullets: [
      "Free inspection — we climb the roof and document what we find before you call your carrier",
      "Damage documentation — wind, hail, and impact damage marked, measured, and drone-photographed",
      "You file the claim — you stay in control; we hand you everything needed to file a clean one",
      "Adjuster meeting — we walk every hit on the roof with your adjuster so nothing gets missed",
      "Scope review — we check the carrier's scope line by line and flag anything missing",
      "Install and final invoicing — new GAF system installed, approved scope invoiced, warranty registered",
    ],
    cardsHeading: "What Storm Damage Looks Like",
    cards: [
      {
        icon: "hail",
        title: "Hail Bruising",
        body: "Soft, dark circles where granules are knocked away. Often invisible from the ground, but every strike shortens shingle life and voids water resistance.",
      },
      {
        icon: "wind",
        title: "Wind Lifting & Missing Tabs",
        body: "Lifted shingles break their seal even when they lay back down. Missing tabs and torn ridge cap leak in the very next rain.",
      },
      {
        icon: "home",
        title: "Impact & Limb Damage",
        body: "Falling limbs puncture decking and crush shingles. We tarp the breach immediately and document it for the claim.",
      },
      {
        icon: "file",
        title: "Damage You Can't See Yet",
        body: "Flashing shifts, cracked pipe boots, and fastener pops after a storm show up as leaks months later. A free inspection catches them inside your claim window.",
      },
    ],
    faqs: [
      {
        q: "How fast can you tarp a storm-damaged roof?",
        a: "Usually same day or next morning. After major storms we triage active leaks first across our whole service area — call 662-498-6629 and we'll get you on the emergency list.",
      },
      {
        q: "Should I call my insurance company or a roofer first?",
        a: "Get the roof inspected and documented first. That way you know whether the damage justifies a claim, and you file with evidence in hand. We inspect for free and give you a straight answer either way.",
      },
      {
        q: "Will filing a claim raise my insurance rates?",
        a: "Storm damage is typically an 'act of God' claim, treated differently than negligence claims. Every policy and carrier differs, so confirm with your agent — but don't let fear of asking keep you from documenting real damage inside your claim window.",
      },
      {
        q: "What if the adjuster's scope misses damage?",
        a: "That's exactly why we meet the adjuster on the roof and review the scope line by line before approval. If something's missing, we flag it with photo documentation and work through the carrier's supplement process.",
      },
      {
        q: "Do you work with my insurance carrier?",
        a: "We regularly meet adjusters from State Farm, Allstate, USAA, Farm Bureau, Liberty Mutual, and others on North Mississippi roofs. Whoever your carrier is, the documentation process is the same.",
      },
    ],
    ctaEyebrow: "Free Storm Damage Inspection",
    ctaTitle: "Think the Storm Got Your Roof?",
    ctaBody:
      "Free drone-documented inspection, straight answers about whether a claim makes sense, and emergency tarping when it can't wait.",
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  serviceDetails.find((s) => s.slug === slug);

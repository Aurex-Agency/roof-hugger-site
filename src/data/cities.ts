export interface CityFAQ {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  county: string;
  distanceFromHq: string;
  lat: number;
  lng: number;
  intro: string[];
  nearbyTowns: string[];
  faqs: CityFAQ[];
}

export const cities: City[] = [
  {
    slug: "starkville-ms",
    name: "Starkville",
    state: "MS",
    county: "Oktibbeha",
    distanceFromHq: "About 25 miles east of our Maben office",
    lat: 33.4504,
    lng: -88.8184,
    intro: [
      "Starkville roofs take a beating. Long Mississippi summers cook asphalt shingles, spring storms drive hail across Oktibbeha County, and the wind gusts that roll through campus and the Cotton District don't politely stop at neighborhood lines. We've been roofing Starkville homes and businesses since 2015 — from older brick ranches off Louisville Street to newer subdivisions out toward the Highway 25 corridor.",
      "Most Starkville roofs we replace are architectural asphalt shingles in the 18 to 25 year range that finally gave up after a hail event. We tear off, inspect every square foot of decking, install the full GAF Master Elite system, and register the warranty in your name. Same crew, start to finish.",
    ],
    nearbyTowns: ["Sturgis", "Mathiston", "Bradley", "Longview", "Adaton"],
    faqs: [
      {
        q: "How fast can you get out to look at a roof in Starkville?",
        a: "Most Starkville inspections happen within 24 to 48 hours. After major storms we prioritize active leaks and tarping first.",
      },
      {
        q: "Do you work with insurance carriers common in Starkville?",
        a: "Yes. We regularly meet adjusters from State Farm, Allstate, USAA, Farm Bureau, and Liberty Mutual on Starkville roofs and walk every hit with them.",
      },
      {
        q: "Do you do commercial roofs around Mississippi State?",
        a: "Yes. We install commercial systems on offices, retail buildings, and Greek houses in the Starkville area, including SBS self-adhering, GAF Liberty, and Mule-Hide TPO.",
      },
    ],
  },
  {
    slug: "columbus-ms",
    name: "Columbus",
    state: "MS",
    county: "Lowndes",
    distanceFromHq: "About 50 miles east of our Maben office",
    lat: 33.4957,
    lng: -88.4273,
    intro: [
      "Columbus has a roofing mix you don't see everywhere — historic homes downtown with steep, complicated rooflines, midcentury ranches in the older neighborhoods, and newer construction stretching out toward the Air Force Base. Each one needs a different approach, and a roofer who has actually been on those kinds of roofs before.",
      "We work in Columbus year-round on both residential replacements and commercial systems. After a storm rolls through Lowndes County we're typically on Columbus roofs within a day, documenting wind and hail damage with drone photos so the insurance claim starts on the right foot.",
    ],
    nearbyTowns: ["Caledonia", "Steens", "Crawford", "Artesia", "New Hope"],
    faqs: [
      {
        q: "Do you handle steep, complex roofs on older Columbus homes?",
        a: "Yes. Our crew is set up for steep slope and multi-facet roofs, including the kind of dormers and valleys you see on older Columbus homes downtown and in the historic district.",
      },
      {
        q: "Can you help with commercial roofs in Columbus?",
        a: "Yes. We install SBS, GAF Liberty, Mule-Hide TPO, metal, and shingle systems for offices, churches, retail, and multi-tenant buildings throughout Columbus and Lowndes County.",
      },
      {
        q: "How long does a Columbus roof replacement take?",
        a: "Most single-family homes are torn off, dried in, and re-roofed in 1 to 2 days. Larger or more complex roofs take longer, and we tell you the realistic timeline before we start.",
      },
    ],
  },
  {
    slug: "west-point-ms",
    name: "West Point",
    state: "MS",
    county: "Clay",
    distanceFromHq: "About 35 miles east of our Maben office",
    lat: 33.6076,
    lng: -88.6503,
    intro: [
      "West Point sits right in our backyard. We've roofed homes in older neighborhoods near downtown, on properties along the Highway 45 corridor, and out into the rural parts of Clay County where pole barns, shops, and ag buildings are just as common as houses.",
      "Whether it's a residential shingle replacement, a metal roof on an outbuilding, or storm damage on a commercial property, we're a short drive away. That means faster inspections, faster tarping when it matters, and a crew that actually knows the area.",
    ],
    nearbyTowns: ["Cedar Bluff", "Pheba", "Tibbee", "Montpelier"],
    faqs: [
      {
        q: "Do you do metal roofs on barns and shops around West Point?",
        a: "Yes. We install metal roofs on outbuildings, shops, and ag structures throughout Clay County, alongside our residential and commercial shingle work.",
      },
      {
        q: "How quickly can you tarp a leaking roof in West Point?",
        a: "Usually same day or next morning. Maben is close enough that emergency response in West Point is one of our faster service areas.",
      },
      {
        q: "Do you offer free roof inspections in West Point?",
        a: "Yes. Every inspection is free. We climb the roof, take drone photos, and tell you whether you need a repair, a replacement, or no work at all.",
      },
    ],
  },
  {
    slug: "tupelo-ms",
    name: "Tupelo",
    state: "MS",
    county: "Lee",
    distanceFromHq: "About 50 miles north of our Maben office",
    lat: 34.2576,
    lng: -88.7034,
    intro: [
      "Tupelo is a major service area for us. Lee County sees its share of severe weather every year, and Tupelo specifically has a long history with tornadoes and hail — including the storms that have caused widespread roof damage across the city in recent years. When that happens, homeowners need a roofer who can document the damage properly and stand with them through the insurance claim, not just put up a yard sign and disappear.",
      "We install full GAF Master Elite systems on Tupelo homes, handle commercial roofing for offices and retail, and walk every storm claim from first inspection to final invoice.",
    ],
    nearbyTowns: ["Saltillo", "Plantersville", "Verona", "Belden", "Mooreville"],
    faqs: [
      {
        q: "Do you handle storm and hail damage claims in Tupelo?",
        a: "Yes. We document every hit with high-resolution drone photography, meet your insurance adjuster on the roof, and walk through the scope line by line so nothing gets missed.",
      },
      {
        q: "What shingles do you install on Tupelo homes?",
        a: "We install the full GAF lineup — Timberline HDZ, Timberline UHDZ, Natural Shadow, Camelot II, and Slateline — with GAF underlayment, Cobra ventilation, and Master Flow flashing.",
      },
      {
        q: "Are you GAF Master Elite® in Tupelo?",
        a: "Yes. We're a GAF Master Elite® and President's Club contractor, which lets us offer Gold Pledge and Silver Pledge warranty options most local roofers can't.",
      },
    ],
  },
  {
    slug: "louisville-ms",
    name: "Louisville",
    state: "MS",
    county: "Winston",
    distanceFromHq: "About 35 miles south of our Maben office",
    lat: 33.1234,
    lng: -89.0553,
    intro: [
      "Louisville and Winston County have seen some of the most destructive storms in North Mississippi history — the 2014 tornado is something every roofer in this region remembers. We've worked Louisville roofs through routine replacements and through major storm recovery, and we treat both the same way: full deck inspection, GAF Master Elite install, and the warranty registered in your name.",
      "Most of the work we do in Louisville is residential shingle replacement, but we also install commercial systems on churches, storefronts, and ag buildings throughout the area.",
    ],
    nearbyTowns: ["Noxapater", "Plattsburg", "Hopewell", "Betheden"],
    faqs: [
      {
        q: "Do you respond to storm damage in Louisville?",
        a: "Yes. After severe weather we prioritize tarping, leak stops, and damage documentation across Winston County, including Louisville.",
      },
      {
        q: "Do you roof churches and commercial buildings in Louisville?",
        a: "Yes. We install SBS, GAF Liberty, Mule-Hide TPO, metal, and shingle systems for churches, offices, and retail buildings throughout the Louisville area.",
      },
      {
        q: "Is your warranty transferable if I sell my Louisville home?",
        a: "Yes. GAF warranties are transferable, which often helps at closing. We register your warranty in your name and give you the documentation you'll need at sale.",
      },
    ],
  },
  {
    slug: "eupora-ms",
    name: "Eupora",
    state: "MS",
    county: "Webster",
    distanceFromHq: "About 10 miles west of our Maben office",
    lat: 33.5432,
    lng: -89.267,
    intro: [
      "Eupora is right next door. Webster County is home for us, and most of our crew has roofed Eupora homes for years. That proximity matters: faster inspections, faster emergency response, and a roofer your neighbors can actually point to when you ask around.",
      "Most Eupora work is residential — full shingle replacements, repairs after wind events, and pipe boot and flashing fixes that stop slow leaks before they damage interior ceilings. We also handle commercial roofs for businesses along Highway 82 and throughout Webster County.",
    ],
    nearbyTowns: ["Mathiston", "Walthall", "Bellefontaine", "Maben"],
    faqs: [
      {
        q: "Are you really based near Eupora?",
        a: "Yes. Our office is in Maben, about 10 minutes from Eupora. Hard to find a closer GAF Master Elite® roofer.",
      },
      {
        q: "Do you do small repairs in Eupora, or just full roofs?",
        a: "Both. We replace pipe boots, repair flashing, fix leaks around chimneys and skylights, and replace blown-off shingles. If a repair is the right call, we'll tell you.",
      },
      {
        q: "How fast can you respond to a leak in Eupora?",
        a: "Usually the same day. Eupora is one of the closest service areas to our Maben office.",
      },
    ],
  },
  {
    slug: "maben-ms",
    name: "Maben",
    state: "MS",
    county: "Oktibbeha",
    distanceFromHq: "Our home — Shurden's Roofing is headquartered in Maben",
    lat: 33.5573,
    lng: -89.0853,
    intro: [
      "Maben is where Shurden's Roofing started and where we still work out of every day. We've roofed homes throughout town and across the rural parts of Oktibbeha and Webster Counties — long-time family homes, newer construction, ag buildings, and shops. When you call, you're calling someone in your own town.",
      "Most of our Maben work is residential GAF shingle replacement and storm damage repair, but we also handle commercial systems for churches and small businesses around the community.",
    ],
    nearbyTowns: ["Sturgis", "Mathiston", "Eupora", "Bradley"],
    faqs: [
      {
        q: "Are you really local to Maben?",
        a: "Yes. We're not just serving Maben — we're based here. Family-owned and operated since 2015.",
      },
      {
        q: "How fast can you get to my house in Maben?",
        a: "Same day in most cases. Our office is in town.",
      },
      {
        q: "Do you offer warranties on Maben roofs?",
        a: "Yes. As a GAF Master Elite® and President's Club contractor, we offer Gold Pledge and Silver Pledge warranty options that protect your investment for decades.",
      },
    ],
  },
  {
    slug: "ackerman-ms",
    name: "Ackerman",
    state: "MS",
    county: "Choctaw",
    distanceFromHq: "About 20 miles southwest of our Maben office",
    lat: 33.3118,
    lng: -89.1734,
    intro: [
      "Ackerman and Choctaw County are part of our regular service area. We roof homes throughout town and out into the rural parts of the county where shingle roofs, metal roofs, and ag buildings all live on the same property.",
      "Whether it's a full GAF residential replacement, a metal roof on an outbuilding, or a commercial system on a small business or church, we're close enough to respond quickly and stand behind the work.",
    ],
    nearbyTowns: ["Weir", "French Camp", "Reform", "Sturgis"],
    faqs: [
      {
        q: "Do you serve Ackerman regularly?",
        a: "Yes. Choctaw County is one of our core service areas. Our crew is on Ackerman roofs throughout the year.",
      },
      {
        q: "Do you do metal roofs in Choctaw County?",
        a: "Yes. We install metal roofs on shops, barns, and outbuildings throughout the Ackerman area, alongside our residential and commercial shingle work.",
      },
      {
        q: "Is the inspection really free?",
        a: "Yes. Every inspection is free. No pressure, no obligation. We tell you whether the roof needs work or not.",
      },
    ],
  },
  {
    slug: "houston-ms",
    name: "Houston",
    state: "MS",
    county: "Chickasaw",
    distanceFromHq: "About 30 miles northeast of our Maben office",
    lat: 33.8987,
    lng: -88.9987,
    intro: [
      "Houston and Chickasaw County sit right in our regular route. We roof homes in town, out along the Highway 8 and Highway 15 corridors, and on the rural properties where a house, a shop, and a barn all need a roof that can take North Mississippi weather. The same storm systems that hammer Webster and Clay Counties roll straight through Chickasaw County, and Houston homeowners see their share of wind-lifted shingles and hail bruising every spring.",
      "Most of our Houston work is residential GAF shingle replacement and storm damage repair with insurance claim support, but we also install metal roofs on ag buildings and commercial systems for businesses and churches around the square and throughout the county.",
    ],
    nearbyTowns: ["Okolona", "Vardaman", "Calhoun City", "Woodland", "Houlka"],
    faqs: [
      {
        q: "Do you serve Houston and Chickasaw County regularly?",
        a: "Yes. Houston is about 30 miles from our Maben office and part of our core service area. Our crew is on Chickasaw County roofs throughout the year.",
      },
      {
        q: "Do you handle storm damage claims in Houston?",
        a: "Yes. We document wind and hail damage with drone photos, meet your adjuster on the roof, and support the claim from first call to final invoice — the same process we use across North Mississippi.",
      },
      {
        q: "Do you do metal roofs on barns and shops around Houston?",
        a: "Yes. We install metal roofing on outbuildings, shops, and ag structures throughout Chickasaw County, alongside our residential and commercial shingle work.",
      },
    ],
  },
  {
    slug: "oxford-ms",
    name: "Oxford",
    state: "MS",
    county: "Lafayette",
    distanceFromHq: "About 75 miles northwest of our Maben office",
    lat: 34.3665,
    lng: -89.5192,
    intro: [
      "Oxford is a regular service area for us. From historic homes around the Square to newer construction out toward the Highway 7 corridor and the neighborhoods serving Ole Miss families, we've roofed a wide mix of Oxford properties. Lafayette County weather brings the same hail and wind events that hit the rest of North Mississippi, and Oxford homeowners deserve a roofer who shows up, documents the damage properly, and stands behind the work.",
      "Most of our Oxford work is residential GAF shingle replacement and storm damage repair, but we also install commercial systems on offices, retail, and multi-tenant buildings throughout the area.",
    ],
    nearbyTowns: ["Taylor", "Abbeville", "Harmontown", "Paris", "Tula"],
    faqs: [
      {
        q: "Do you travel to Oxford for roofing work?",
        a: "Yes. Oxford and Lafayette County are part of our regular service area. We're on Oxford roofs throughout the year for both routine replacements and storm response.",
      },
      {
        q: "Can you handle steep, complex roofs on older Oxford homes?",
        a: "Yes. Our crew is set up for steep slope and multi-facet roofs, including the dormers, valleys, and complex rooflines common on older homes near the Square and in the historic neighborhoods.",
      },
      {
        q: "Do you work with insurance carriers on Oxford storm claims?",
        a: "Yes. We regularly meet adjusters from State Farm, Allstate, USAA, Farm Bureau, and Liberty Mutual and walk every hit on the roof so nothing gets missed in the scope.",
      },
    ],
  },
];

export const getCityBySlug = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

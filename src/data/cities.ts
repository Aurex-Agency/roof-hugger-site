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
    intro: ["Shurden’s Roofing lists Starkville in its North Mississippi service area, with the business based in Maben. If a Starkville roof is leaking, describe the room affected, when the water appears and any previous repair. Confirm the inspection appointment and access arrangements directly with the team.", "For a rental or occupied property, identify who can authorize work and arrange tenant access before the visit. A roof assessment should explain the observed condition and whether a repair or replacement is proposed. Ask for the scope, limitations and next steps in writing."],
    nearbyTowns: ["Sturgis", "Mathiston", "Bradley", "Longview", "Adaton"],
    faqs: [{"q": "Can you inspect a rental property in Starkville?", "a": "Contact the team about the property and arrange access with the owner or authorized manager. Confirm scheduling and any interior access requirements."}, {"q": "Does Shurden’s have a separate Starkville office?", "a": "The business information on this site identifies the office in Maben. This page describes service in Starkville, not a separate city office."}, {"q": "What should I prepare before requesting a repair?", "a": "Have the leak history and any safe photos available. Do not climb onto the roof. See the repair and inspection guides for questions to ask."}],
  },
  {
    slug: "columbus-ms",
    name: "Columbus",
    state: "MS",
    county: "Lowndes",
    distanceFromHq: "About 50 miles east of our Maben office",
    lat: 33.4957,
    lng: -88.4273,
    intro: ["For a Columbus property, start a roof assessment request with the building type, the concern and any access restrictions. Shurden’s Roofing lists Columbus in its North Mississippi service area and is based in Maben. Confirm availability directly rather than assuming a particular travel or response time.", "If the property has additions, multiple roof sections or an occupied commercial space, ask the proposal to identify exactly which areas are included. Keep separate roof materials and operating constraints visible in the scope so competing estimates describe the same work."],
    nearbyTowns: ["Caledonia", "Steens", "Crawford", "Artesia", "New Hope"],
    faqs: [{"q": "What if my Columbus building has several roof sections?", "a": "Describe the sections and any known repair history. Ask the contractor to identify which areas are included and whether separate materials or assessments are needed."}, {"q": "Can I request a commercial assessment?", "a": "Contact the team with the building type, roof concerns and access contact. Confirm suitability, availability and the scope before authorizing work."}, {"q": "How long will replacement take?", "a": "Request a property-specific schedule after the work is defined. Access, roof complexity, weather and materials can affect timing."}],
  },
  {
    slug: "west-point-ms",
    name: "West Point",
    state: "MS",
    county: "Clay",
    distanceFromHq: "About 35 miles east of our Maben office",
    lat: 33.6076,
    lng: -88.6503,
    intro: ["West Point is part of the North Mississippi service area listed by Shurden’s Roofing. The company is based in Maben. When requesting an assessment for a Clay County property, give the location and describe whether the concern affects a house, an attached structure or another building.", "For a property with several buildings, keep the requested work clear: identify the roof with the concern and any access limits. A separate structure should not be assumed to be included in a house-roof estimate. Confirm the proposed scope and any additional assessment with the team."],
    nearbyTowns: ["Cedar Bluff", "Pheba", "Tibbee", "Montpelier"],
    faqs: [{"q": "Can an estimate include more than one building?", "a": "Ask the team about each structure. The written scope should identify the buildings and roof sections included rather than leave that to assumption."}, {"q": "How quickly can you respond in West Point?", "a": "Call with the location and immediate concern to confirm current availability. This page does not promise a response time."}, {"q": "What if damage followed a storm?", "a": "Follow safety guidance, keep safe observations and contact your insurer about its requirements. A roofing assessment does not guarantee coverage."}],
  },
  {
    slug: "tupelo-ms",
    name: "Tupelo",
    state: "MS",
    county: "Lee",
    distanceFromHq: "About 50 miles north of our Maben office",
    lat: 34.2576,
    lng: -88.7034,
    intro: ["Shurden’s Roofing lists Tupelo in its North Mississippi service area, with its office based in Maben. Contact the team to confirm the property location, scheduling and the roof concern before planning a visit. This service-area page does not represent a separate Tupelo office.", "When comparing a repair with replacement, ask each estimate to address the same roof sections and known concerns. Save earlier repair records and explain whether a leak is recurring. The proposed work should follow the condition of the roof rather than an online age rule or a generic regional price."],
    nearbyTowns: ["Saltillo", "Plantersville", "Verona", "Belden", "Mooreville"],
    faqs: [{"q": "How do I arrange an assessment in Tupelo?", "a": "Share the location, concern and access requirements through the contact page or by phone. Confirm scheduling directly."}, {"q": "Should I request repair or replacement?", "a": "Describe the problem and ask for an assessment. Request the evidence and reasoning behind the recommendation."}, {"q": "Do I need to climb up for photos?", "a": "No. Only provide observations from safe locations. Leave roof access and assessment to professionals."}],
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
        a: "Yes. We install SBS, GAF Liberty, Mule-Hide TPO, and shingle systems for churches, offices, and retail buildings throughout the Louisville area.",
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
      "Ackerman and Choctaw County are part of our regular service area. We roof homes throughout town and out into the rural parts of the county where houses, shops, and ag buildings all sit on the same property.",
      "Whether it's a full GAF residential replacement, a repair on an outbuilding, or a commercial system on a small business or church, we're close enough to respond quickly and stand behind the work.",
    ],
    nearbyTowns: ["Weir", "French Camp", "Reform", "Sturgis"],
    faqs: [
      {
        q: "Do you serve Ackerman regularly?",
        a: "Yes. Choctaw County is one of our core service areas. Our crew is on Ackerman roofs throughout the year.",
      },
      {
        q: "Do you roof shops and outbuildings around Ackerman?",
        a: "Yes. Along with residential replacements, we handle shingle roofs on shops, outbuildings, and small commercial buildings throughout the Ackerman and Choctaw County area.",
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
      "Most of our Houston work is residential GAF shingle replacement and storm damage repair with insurance claim support, but we also install commercial systems for businesses and churches around the square and throughout the county.",
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
        q: "Do you roof shops and outbuildings around Houston?",
        a: "Yes. Along with residential replacements, we handle shingle roofs on shops, outbuildings, and small commercial buildings throughout Houston and Chickasaw County.",
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

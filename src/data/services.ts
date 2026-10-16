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
    "slug": "roof-replacement",
    "name": "Roof Replacement",
    "serviceType": "Roof Replacement",
    "metaTitle": "Roof Replacement in North Mississippi | Shurden's Roofing",
    "metaDescription": "Discuss roof replacement in North Mississippi: roof condition, removal, decking, materials and a written scope. Contact Shurden’s Roofing.",
    "heroEyebrow": "Roof Replacement",
    "heroTitle": "Planning a Roof Replacement?",
    "heroHighlight": "Start With an Assessment",
    "heroSubtitle": "Discuss roof replacement in North Mississippi: roof condition, removal, decking, materials and a written scope. Contact Shurden’s Roofing.",
    "introHeading": "Understand the Condition and the Work Proposed",
    "intro": [
      "Roof replacement is a decision about the whole roof system. Start with an assessment of the existing condition, the problems you want to solve and the areas that need work. A written recommendation should explain why replacement is proposed and whether a repair is a reasonable option.",
      "Shurden’s Roofing serves North Mississippi from Maben. For a home in Starkville, Columbus, West Point or the surrounding service area, describe the concern and any prior repairs when requesting an inspection. Scheduling and access should be confirmed directly with the team.",
      "Before approving a replacement, compare removal and disposal, decking assessment, the selected roofing product, flashing and ventilation details, cleanup and written warranty terms. Ask what is excluded and how hidden conditions will be documented and authorized. The final scope and price depend on the property."
    ],
    "bulletsHeading": "What to Discuss Before Work Begins",
    "bullets": [
      "Which roof sections are included and why replacement is recommended",
      "Removal, disposal and assessment of accessible decking",
      "Material selection and connections at edges and penetrations",
      "How additional work is priced and approved",
      "Property protection, access, cleanup and completion review",
      "The actual manufacturer and workmanship warranty documents"
    ],
    "cardsHeading": "A Clear Scope for Your Property",
    "cards": [
      {
        "icon": "search",
        "title": "Assessment before commitment",
        "body": "Describe leaks, earlier repairs and any areas you are concerned about. Ask for the findings and limitations of the assessment."
      },
      {
        "icon": "layers",
        "title": "A defined system",
        "body": "Confirm the selected materials and components in writing. Ask what remains in place and what will be replaced."
      },
      {
        "icon": "file",
        "title": "Clear change orders",
        "body": "Hidden conditions may change the scope. Agree how evidence, pricing and authorization will be handled before extra work begins."
      },
      {
        "icon": "shield",
        "title": "Written warranty terms",
        "body": "Coverage depends on the product, installation and applicable terms. Confirm eligibility, registration and exclusions for your project."
      }
    ],
    "faqs": [
      {
        "q": "How much will replacement cost?",
        "a": "A reliable estimate requires the property-specific scope. See the roof-cost guide for the factors to compare; this page does not offer an unverified regional price range."
      },
      {
        "q": "How long will the work take?",
        "a": "Ask for the expected schedule after the scope is established. Roof complexity, weather, access and material availability can affect timing."
      },
      {
        "q": "Can a repair be enough?",
        "a": "Sometimes a defined repair is appropriate. Ask the inspector to explain the observed condition and why repair or replacement is recommended."
      },
      {
        "q": "Will insurance pay?",
        "a": "Your insurer determines coverage under your policy. A roofing estimate or inspection does not guarantee approval or full replacement."
      }
    ],
    "ctaEyebrow": "North Mississippi Roofing",
    "ctaTitle": "Tell Us About Your Roof",
    "ctaBody": "Share your location and concerns. Contact the team to confirm inspection availability, access arrangements and the next step."
  },
  {
    "slug": "roof-repair",
    "name": "Roof Repair",
    "serviceType": "Roof Repair",
    "metaTitle": "Roof Repair in North Mississippi | Shurden's Roofing",
    "metaDescription": "Roof leak and repair assessments in North Mississippi. Understand the source, proposed scope and when replacement needs consideration.",
    "heroEyebrow": "Roof Repair",
    "heroTitle": "A Roof Leak Needs a Clear Answer.",
    "heroHighlight": "Start With an Assessment",
    "heroSubtitle": "Roof leak and repair assessments in North Mississippi. Understand the source, proposed scope and when replacement needs consideration.",
    "introHeading": "Understand the Condition and the Work Proposed",
    "intro": [
      "A stain inside the house does not always identify the point where water enters. Tell the team when the leak appears, what weather seems to trigger it and whether earlier work changed the problem. Those details help frame an assessment without guessing from a single photograph.",
      "Roof repair should address a defined problem and explain how the work connects to the remaining roof. Ask about the affected area, materials, access, limitations and any conditions that could require additional work. If replacement is proposed, ask why a smaller repair would be unsuitable.",
      "Shurden’s Roofing lists repair services for North Mississippi homes and buildings. Share the city and whether water is actively entering when you call. Confirm availability directly. If electrical or structural hazards are present, seek the appropriate emergency assistance instead of entering an unsafe area."
    ],
    "bulletsHeading": "What to Discuss Before Work Begins",
    "bullets": [
      "Observed leak location and history of previous repairs",
      "Findings that support the proposed repair",
      "Roof areas and materials included in the scope",
      "Temporary protection versus permanent repair",
      "What additional investigation may be needed",
      "Written completion and workmanship terms"
    ],
    "cardsHeading": "A Clear Scope for Your Property",
    "cards": [
      {
        "icon": "search",
        "title": "Find the concern",
        "body": "Describe the pattern of leaking and provide safe interior observations. The inspection should identify what can and cannot be concluded."
      },
      {
        "icon": "wrench",
        "title": "Define the repair",
        "body": "Ask which component or roof area will be repaired and how the scope addresses the problem."
      },
      {
        "icon": "layers",
        "title": "Consider the remaining roof",
        "body": "The surrounding condition matters to a repair decision. Ask what is outside the scope and whether it needs separate attention."
      },
      {
        "icon": "file",
        "title": "Keep a record",
        "body": "Save the estimate, findings and completion documents so future roof decisions have context."
      }
    ],
    "faqs": [
      {
        "q": "Does a leak mean I need a new roof?",
        "a": "Not necessarily. The condition and extent of the problem determine the options. Request an explanation of repair and replacement where appropriate."
      },
      {
        "q": "Can you promise same-day service?",
        "a": "Availability depends on scheduling and conditions. Call the team to discuss an active leak; this page does not guarantee a response time."
      },
      {
        "q": "Should I go onto the roof to take photos?",
        "a": "No. Provide observations from safe ground or safe interior locations. Leave roof access and assessment to professionals."
      },
      {
        "q": "What should a repair estimate include?",
        "a": "Look for the work area, materials, exclusions, change process and applicable written workmanship terms."
      }
    ],
    "ctaEyebrow": "North Mississippi Roofing",
    "ctaTitle": "Tell Us About Your Roof",
    "ctaBody": "Share your location and concerns. Contact the team to confirm inspection availability, access arrangements and the next step."
  },
  {
    "slug": "commercial-roofing",
    "name": "Commercial Roofing",
    "serviceType": "Commercial Roofing",
    "metaTitle": "Commercial Roofing in North Mississippi | Shurden's Roofing",
    "metaDescription": "Plan commercial roof work in North Mississippi with clear assessment, access, drainage and repair or replacement scope for your building.",
    "heroEyebrow": "Commercial Roofing",
    "heroTitle": "Keep the Building’s Needs in View.",
    "heroHighlight": "Start With an Assessment",
    "heroSubtitle": "Plan commercial roof work in North Mississippi with clear assessment, access, drainage and repair or replacement scope for your building.",
    "introHeading": "Understand the Condition and the Work Proposed",
    "intro": [
      "A commercial roofing decision involves the roof, the occupants and the way the building operates. Before an assessment, collect available roof records, prior repair history and information about leaks or drainage concerns. Identify who can authorize access and work.",
      "Shurden’s Roofing’s existing service offering includes commercial roofing in North Mississippi. Ask the team to confirm suitability for the roof type and project. Do not choose a repair or replacement assembly solely from a product list; the building and existing conditions need to guide the scope.",
      "For an occupied business, discuss access, material staging, tenant communication and any operating constraints. Ask the proposal to distinguish the work included from items handled by other trades. A practical schedule should describe contingencies without promising that weather or hidden conditions cannot interrupt it."
    ],
    "bulletsHeading": "What to Discuss Before Work Begins",
    "bullets": [
      "Existing roof type, records and available warranty documents",
      "Leak history and areas requiring assessment",
      "Safe access and authorized building contacts",
      "Repair, replacement and any further investigation needed",
      "Staging, tenant coordination and operating constraints",
      "Written scope, exclusions and completion documentation"
    ],
    "cardsHeading": "A Clear Scope for Your Property",
    "cards": [
      {
        "icon": "building",
        "title": "Building-specific planning",
        "body": "Describe the use of the building and the constraints that matter to occupants before agreeing on the work."
      },
      {
        "icon": "search",
        "title": "Condition assessment",
        "body": "Ask which areas were evaluated and whether concealed conditions need further investigation."
      },
      {
        "icon": "layers",
        "title": "Appropriate roof scope",
        "body": "Confirm the proposed system and why it fits the project. Ask about connections, penetrations and relevant drainage details."
      },
      {
        "icon": "file",
        "title": "Documented handoff",
        "body": "Agree what records, warranty documents and maintenance information will be provided at completion."
      }
    ],
    "faqs": [
      {
        "q": "Can you assess a repair before full replacement?",
        "a": "Ask for an assessment of the condition and available options. The appropriate scope depends on the roof and its limitations."
      },
      {
        "q": "Which commercial system should we choose?",
        "a": "Confirm the existing roof and project requirements with the team. Product availability and suitability need project-specific confirmation."
      },
      {
        "q": "Can work happen around business hours?",
        "a": "Discuss operating and access constraints during planning. Any agreed arrangements should be included in the scope."
      },
      {
        "q": "Do you have a project exactly like ours?",
        "a": "Ask for relevant project evidence and permission-cleared references. No project on this page is presented as proof of a specific building type or city."
      }
    ],
    "ctaEyebrow": "North Mississippi Roofing",
    "ctaTitle": "Tell Us About Your Roof",
    "ctaBody": "Share your location and concerns. Contact the team to confirm inspection availability, access arrangements and the next step."
  },
  {
    "slug": "storm-damage-insurance-claims",
    "name": "Storm Damage Roofing",
    "serviceType": "Storm Damage Roofing",
    "metaTitle": "Storm Damage Roofing in North Mississippi | Shurden's Roofing",
    "metaDescription": "Roof assessments after wind or hail in North Mississippi. Document conditions, discuss repairs and keep insurance coverage questions with your insurer.",
    "heroEyebrow": "Storm Damage Roofing",
    "heroTitle": "After the Storm, Understand the Damage.",
    "heroHighlight": "Start With an Assessment",
    "heroSubtitle": "Roof assessments after wind or hail in North Mississippi. Document conditions, discuss repairs and keep insurance coverage questions with your insurer.",
    "introHeading": "Understand the Condition and the Work Proposed",
    "intro": [
      "First make sure it is safe to approach the property. Follow weather alerts and avoid downed lines, unstable structures and unsafe roof access. Record what you can observe from safe locations and contact appropriate emergency services if there is an immediate danger.",
      "Shurden’s Roofing can be contacted about storm-related roof concerns in North Mississippi. Describe the city, observed damage and any active water entry. Confirm scheduling and temporary-protection availability directly; regional storms can affect demand and access.",
      "An assessment should describe observed conditions, limits of access and the work proposed. Insurance coverage is a separate decision made by your insurer under your policy. Contact your insurer about notification and documentation requirements without waiting for a roofing appointment. Neither an inspection nor a contractor estimate guarantees payment."
    ],
    "bulletsHeading": "What to Discuss Before Work Begins",
    "bullets": [
      "Safe observations and when the concern was first noticed",
      "Active leaking or hazards requiring attention",
      "Inspection findings and areas that could not be assessed",
      "Temporary protection versus permanent repair scope",
      "Written estimates, change orders and receipts",
      "Insurer instructions and your own payment responsibilities"
    ],
    "cardsHeading": "A Clear Scope for Your Property",
    "cards": [
      {
        "icon": "hail",
        "title": "Observed storm concerns",
        "body": "Keep photos and notes of what you observed. Do not assume all wear or damage was caused by one weather event."
      },
      {
        "icon": "search",
        "title": "A documented assessment",
        "body": "Ask for findings that explain the recommendation and the limits of the inspection."
      },
      {
        "icon": "wrench",
        "title": "Repair planning",
        "body": "Clarify any immediate protection needs and the proposed permanent work. Confirm availability and authorization."
      },
      {
        "icon": "file",
        "title": "Separate coverage questions",
        "body": "Your insurer determines claim coverage and settlement. Ask it about policy terms, deadlines and required records."
      }
    ],
    "faqs": [
      {
        "q": "Should I call the insurer or roofer first?",
        "a": "Contact your insurer promptly about its process and arrange a roof assessment as needed. Do not delay notification while waiting for a contractor."
      },
      {
        "q": "Will hail damage qualify for a new roof?",
        "a": "That cannot be promised. The observed condition informs the repair scope; the policy and insurer determine covered work."
      },
      {
        "q": "How soon can you get here?",
        "a": "Call to discuss current availability and urgency. No same-day or next-day response is guaranteed on this page."
      },
      {
        "q": "What if the insurer’s scope differs?",
        "a": "Identify the specific differences and request explanations from the insurer and contractor. Additional documentation does not guarantee a changed decision."
      }
    ],
    "ctaEyebrow": "North Mississippi Roofing",
    "ctaTitle": "Tell Us About Your Roof",
    "ctaBody": "Share your location and concerns. Contact the team to confirm inspection availability, access arrangements and the next step."
  }
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => serviceDetails.find(s => s.slug === slug);

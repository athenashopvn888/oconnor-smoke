export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const commonFaqs = [
  { q: "Where is O’Connor Smoke Cannabis?", a: "132 O’Connor Dr Unit B, East York, ON M4J 2S4." },
  { q: "What are the store hours?", a: "The Google Business Profile currently lists daily hours of 10:00 AM to 2:30 AM." },
  { q: "Who can visit?", a: "The store serves adults 19+ with valid government photo ID." },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "york-weed-dispensary",
    title: "East York Weed Dispensary | O’Connor Smoke Cannabis",
    metaDescription: "Visit O’Connor Smoke Cannabis at 132 O’Connor Dr Unit B in East York. Review the current menu and hours before visiting. Adults 19+.",
    h1: "East York Weed Dispensary on O’Connor Drive",
    icon: "📍",
    heroTagline: "132 O’Connor Dr Unit B · East York · Adults 19+",
    sections: [
      { heading: "One East York Store", body: "O’Connor Smoke Cannabis is the walk-in store at 132 O’Connor Dr Unit B in East York. The location serves the O’Connor Drive, Danforth, Woodbine, Pape-to-Coxwell, and Don Mills side of the city. It is not a West End or Mississauga storefront." },
      { heading: "Check the Current Menu", body: "Flower tiers and format categories are presented on separate menu pages. Review the live menu before travelling, especially if a specific item or package size determines the trip. Posted products and prices can change." },
      { heading: "Plan the Visit", body: "The Google Business Profile currently lists daily hours of 10:00 AM to 2:30 AM. Call (647) 924-1664 for one-item confirmation. Adults 19+ must bring valid government photo ID." },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "cheap-weed-york",
    title: "Budget Weed in East York | O’Connor Smoke Cannabis",
    metaDescription: "Compare current Budget and AA flower listings at O’Connor Smoke Cannabis on O’Connor Drive in East York. Adults 19+.",
    h1: "Budget Weed and Flower Tiers in East York",
    icon: "🌿",
    heroTagline: "Compare posted flower tiers before visiting O’Connor Drive",
    sections: [
      { heading: "Start With the Posted Tiers", body: "The menu separates Budget, AA, AAA+, Premium, and Exotic flower so adults can compare the currently posted choices without treating an older search result as live inventory." },
      { heading: "East York Walk-In Counter", body: "The physical store is at 132 O’Connor Dr Unit B, East York, ON M4J 2S4. Check the current category page and call (647) 924-1664 when one product or size matters." },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "native-cigarettes-york",
    title: "Cigarettes in East York | O’Connor Smoke Cannabis",
    metaDescription: "Review the current cigarette category before visiting O’Connor Smoke Cannabis at 132 O’Connor Dr Unit B in East York. Adults 19+.",
    h1: "Cigarette Menu at O’Connor Smoke in East York",
    icon: "🚬",
    heroTagline: "Current cigarette listings for the O’Connor Drive counter",
    sections: [
      { heading: "Use the Current Category", body: "Brand mix, varieties, package details, and posted prices can change. Review the cigarette category and call the store before travelling when a specific listing is important." },
      { heading: "One O’Connor Drive Location", body: "O’Connor Smoke Cannabis is at 132 O’Connor Dr Unit B in East York. This page does not claim another tobacco or cannabis storefront elsewhere in Toronto." },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "weed-store-near-toronto",
    title: "East York Cannabis Store | O’Connor Drive Visit Guide",
    metaDescription: "Plan a visit to O’Connor Smoke Cannabis at 132 O’Connor Dr Unit B in East York. Check live navigation and the current menu. Adults 19+.",
    h1: "Visit O’Connor Smoke Cannabis in East York",
    icon: "🧭",
    heroTagline: "A practical O’Connor Drive visit guide",
    sections: [
      { heading: "Use the Exact Address", body: "The destination is 132 O’Connor Dr Unit B, East York, ON M4J 2S4. Use a live navigation service for current traffic and transit conditions." },
      { heading: "Review Before You Travel", body: "Menu categories can rotate. Check the current page for the format you want and call (647) 924-1664 when a particular item is the reason for the trip." },
    ],
    faqs: commonFaqs,
  },
  {
    slug: "dispensary-near-me-york",
    title: "Dispensary on O’Connor Drive | East York",
    metaDescription: "Find O’Connor Smoke Cannabis at 132 O’Connor Dr Unit B in East York. Current menu, directions, phone, and adult 19+ visit information.",
    h1: "Cannabis Dispensary on O’Connor Drive in East York",
    icon: "📌",
    heroTagline: "East York store information for adults 19+",
    sections: [
      { heading: "O’Connor Drive Store", body: "O’Connor Smoke Cannabis has one public walk-in address: 132 O’Connor Dr Unit B in East York. The store is positioned for East York, Danforth, Woodbine, and Don Mills area visits." },
      { heading: "Current Information", body: "Use the current menu for posted categories and call (647) 924-1664 for one-item confirmation. Product listings and prices can change." },
    ],
    faqs: commonFaqs,
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}

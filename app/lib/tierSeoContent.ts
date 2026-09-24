export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const visitNote = "O’Connor Smoke Cannabis is at 132 O’Connor Dr Unit B in East York. The Google Business Profile currently lists daily hours of 10:00 AM to 2:30 AM. Adults 19+ must bring valid government photo ID.";

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed in East York | O’Connor Smoke Cannabis",
    seoIntro: "The Exotic Weed page is the top flower tier in the O’Connor Smoke menu structure. It gives East York shoppers one stable place to review current strain names, listed sizes, and posted prices without turning a rotating batch into a permanent availability claim.",
    sections: [
      { heading: "How to Read the Exotic Tier", body: "Exotic is used here as a menu grade, not as a medical or guaranteed-potency statement. Compare each current listing by its strain name, labelled type, package details, and any terpene or product notes shown on the page. Rare genetics and distinctive aroma profiles may help describe an individual listing when those details are actually supplied." },
      { heading: "Current Listings Change", body: "Flower batches rotate. A strain that appears today may be replaced later, while the Exotic Weed category remains the stable browsing URL. Use the live grid for the current selection and call +1 (437) 780-8378 when one strain or size determines your trip." },
      { heading: "Compare Other Flower Tiers", body: "Premium and AAA+ provide nearby comparison points, while AA and Budget are separate menu grades. Keeping those choices on their own pages makes it easier to compare the current shelf without presenting every flower item as equivalent." },
      { heading: "East York Store Information", body: visitNote },
    ],
    faqs: [
      { q: "What does Exotic mean on this menu?", a: "Exotic is the store’s top flower menu tier. Review the current listing for product-specific details." },
      { q: "Is every Exotic strain always available?", a: "No. Flower batches rotate. Check the current grid and call the store when one item matters." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed in East York | O’Connor Smoke Cannabis",
    seoIntro: "Premium Weed is a distinct flower tier for the O’Connor Drive store in East York. The page combines a stable category explanation with the rotating live grid, allowing adults to compare current names, listed weights, and posted prices in one place.",
    sections: [
      { heading: "What the Premium Page Shows", body: "Use the live cards for the details attached to each current flower listing. Aroma, terpene, cultivation, or genetics language belongs to an individual product only when the source data supports it. The tier name itself is not a medical, effect, or potency guarantee." },
      { heading: "Plan Around the Current Menu", body: "Products can move in and out of the Premium tier as batches change. The category URL stays useful even when the grid changes. Call +1 (437) 780-8378 before travelling if a particular strain or package size is important." },
      { heading: "Compare Up or Down the Menu", body: "Exotic is the neighbouring top tier. AAA+, AA, and Budget offer other posted menu grades. Open those pages side by side to compare the current shelf rather than relying on an old search snippet or saved screenshot." },
      { heading: "East York Store Information", body: visitNote },
    ],
    faqs: [
      { q: "What is Premium Weed at O’Connor Smoke?", a: "It is one of the store’s five flower menu tiers. Current product details appear in the live grid." },
      { q: "How do I confirm a Premium listing?", a: "Check the current page and call +1 (437) 780-8378 when one item determines the visit." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed in East York | O’Connor Smoke Cannabis",
    seoIntro: "AAA+ Weed sits in the middle of the five-tier flower menu at O’Connor Smoke Cannabis. This East York page keeps a clear category identity while the strain grid supplies the current product names, listed formats, and posted prices.",
    sections: [
      { heading: "A Menu Grade, Not a Universal Standard", body: "AAA+ is the store’s menu label for this group of flower. Because grading language can vary between sellers and batches, use the individual listing rather than the tier name alone when comparing product details. The page does not promise a particular effect or medical outcome." },
      { heading: "Use the Live Grid", body: "Current strains and package sizes can rotate. The grid shows what is presently published for this category, while the surrounding copy explains the page without making stock permanent. Call +1 (437) 780-8378 to confirm one specific item before a special trip." },
      { heading: "Compare the Full Flower Menu", body: "Premium and Exotic appear above AAA+ in the menu structure. AA and Budget are separate lower-price menu lanes. Each tier has its own page so shoppers can compare the collections without mixing the categories." },
      { heading: "East York Store Information", body: visitNote },
    ],
    faqs: [
      { q: "What does AAA+ mean here?", a: "AAA+ is a flower menu tier used by O’Connor Smoke Cannabis. Check each current listing for its own details." },
      { q: "Are listed strains permanent?", a: "No. Flower batches rotate and current listings can change." },
    ],
  },
  AA: {
    seoTitle: "AA Weed in East York | O’Connor Smoke Cannabis",
    seoIntro: "The AA Weed page groups the current AA flower listings for O’Connor Smoke Cannabis in East York. It is built for straightforward comparison: read the strain name, labelled type, available sizes, and posted price on the current card before deciding whether to visit.",
    sections: [
      { heading: "How to Compare AA Flower", body: "AA is a store menu grade. It does not, by itself, verify a universal quality, potency, or effect level. Product-specific statements should come from the listing or package, so the stable page copy avoids claims that could become inaccurate when the batch changes." },
      { heading: "Check Today’s Menu", body: "The page can remain indexed while the flower grid rotates. That separates the lasting East York category from temporary stock. If a particular strain or weight is the reason for the trip, call +1 (437) 780-8378 before leaving." },
      { heading: "Other Flower Options", body: "Budget is a separate value tier, while AAA+, Premium, and Exotic provide additional menu grades. Use the five collection pages to compare the current shelf instead of assuming that an older listing or search result still applies." },
      { heading: "East York Store Information", body: visitNote },
    ],
    faqs: [
      { q: "Is AA a guaranteed potency level?", a: "No. It is a store menu tier. Read the current item and package details for product-specific information." },
      { q: "Where is the store?", a: "132 O’Connor Dr Unit B, East York, ON M4J 2S4." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed in East York | O’Connor Smoke Cannabis",
    seoIntro: "Budget Weed is the value-focused flower tier for O’Connor Smoke Cannabis on O’Connor Drive. The page gives East York shoppers a stable place to review current Budget strain names, listed weights, and posted prices without presenting a rotating menu as permanent stock.",
    sections: [
      { heading: "Start With the Current Cards", body: "Budget is a price-oriented menu lane, not a medical or effect claim. Read each current card for its strain name, labelled type, size choices, and posted price. Those details can change with a new batch, while the category page continues to explain how the tier works." },
      { heading: "Confirm Before a Special Trip", body: "Use the live grid for current listings and call +1 (437) 780-8378 when one strain, weight, or price determines your visit. Search snippets and saved screenshots may lag behind the published menu." },
      { heading: "Compare the Five Tiers", body: "AA is the next menu grade, followed by AAA+, Premium, and Exotic. Keeping each tier separate makes the menu easier to scan and avoids mixing temporary product information into permanent local store copy." },
      { heading: "East York Store Information", body: visitNote },
    ],
    faqs: [
      { q: "What is the Budget Weed page?", a: "It is the value-focused flower collection for O’Connor Smoke Cannabis. Current items appear in the grid." },
      { q: "Can the listings change?", a: "Yes. Flower batches, sizes, and posted prices can rotate." },
    ],
  },
};

"use client";

import { SHOW_CIGARETTES } from "../lib/siteConfig";


import Link from "next/link";
import FlowerBogoStrip from "./FlowerBogoStrip";
import { TIER_CONFIG } from "../lib/products";

export default function FleetAnnouncementBanner() {
  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store announcements">
      <FlowerBogoStrip hero />
      <Link href={`/${TIER_CONFIG.EXOTIC.slug}`} data-exotic-tier-banner="" aria-label="Shop Exotic, Premium and AAA+ flower tiers">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/top-weed-tier-osc01.webp" alt="TOP WEED TIER — Exotic, Premium and AAA+ flower at OCONNOR SMOKE — Buy 2g Get 1g FREE and Buy 3g Get 3g FREE." />
      </Link>
      {SHOW_CIGARETTES ? (<p data-cigarette-deal="">CIGARETTE DEAL ! 2 PACK $5 MIX AND MATCH</p>) : null}
      {SHOW_CIGARETTES ? (<p data-bb-light-deal="">EXCLUSIVE SPECIAL PREMIUM GRADE BB FULL, BB LIGHT &amp; BELMONT KING SIZE!</p>) : null}
      {SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix and match offers">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/2pack5cig.webp" alt="Cigarette deal at OCONNOR SMOKE — 2 packs for $5 mix and match, cartons $25." />
      </Link>) : null}
      {SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-belmont-premium-banner="" aria-label="Shop BB and Belmont Premium Grade cigarettes">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banners/BB_Belmont_Premium_Grade.webp" alt="Exclusive Premium Grade BB Full Flavor, BB Lights, and Belmont King Size cigarettes at OCONNOR SMOKE." />
      </Link>) : null}
      {SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-belmont-mix-match-banner="" aria-label="BELMONT KING SIZE $10 - 2PACK BB $5 MIX & MATCH">
        <span data-belmont-offer-lead="">BELMONT KING SIZE $10 -</span>
        <span data-belmont-offer-tail=""> 2PACK BB $5 MIX &amp; MATCH</span>
      </Link>) : null}
    </aside>
  );
}

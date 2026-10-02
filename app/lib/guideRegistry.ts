import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";

export type GuideLane = "strain" | "native_cig" | "nic_vape" | "thc_vape";

export type GuideEntry = {
  slug: string;
  lane: GuideLane;
  name: string;
  title: string;
  preferredCategoryPath: string;
  preferredProductSlug?: string;
  relatedSlugs: string[];
  stockSource: "flowers.json" | "items.json";
};

type GuideSeed = Omit<GuideEntry, "relatedSlugs">;

const seeds: GuideSeed[] = [
  { slug: "pink-kush", lane: "strain", name: "Pink Kush", title: "Pink Kush at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "super-pink-kush", stockSource: "flowers.json" },
  { slug: "death-bubba", lane: "strain", name: "Death Bubba", title: "Death Bubba at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "death-bubba", stockSource: "flowers.json" },
  { slug: "og-kush", lane: "strain", name: "OG Kush", title: "OG Kush at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "og-kush-aaa", stockSource: "flowers.json" },
  { slug: "gorilla-glue", lane: "strain", name: "Gorilla Glue", title: "Gorilla Glue at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aa-weed", preferredProductSlug: "gorilla-glue-4", stockSource: "flowers.json" },
  { slug: "northern-lights", lane: "strain", name: "Northern Lights", title: "Northern Lights at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/budget-weed", preferredProductSlug: "northern-lights-shreds", stockSource: "flowers.json" },
  { slug: "purple-punch", lane: "strain", name: "Purple Punch", title: "Purple Punch at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "purple-punch", stockSource: "flowers.json" },
  { slug: "super-lemon-haze", lane: "strain", name: "Super Lemon Haze", title: "Super Lemon Haze at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aa-weed", preferredProductSlug: "super-lemon-haze", stockSource: "flowers.json" },
  { slug: "gelato", lane: "strain", name: "Gelato", title: "Gelato at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/budget-weed", preferredProductSlug: "pink-gelato-shreds", stockSource: "flowers.json" },
  { slug: "master-kush", lane: "strain", name: "Master Kush", title: "Master Kush at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "master-kush-aaa", stockSource: "flowers.json" },
  { slug: "pineapple-haze", lane: "strain", name: "Pineapple Haze", title: "Pineapple Haze at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/premium-weed", preferredProductSlug: "pineapple-haze", stockSource: "flowers.json" },
  { slug: "granddaddy-purple", lane: "strain", name: "Granddaddy Purple", title: "Granddaddy Purple at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/budget-weed", preferredProductSlug: "grandaddy-purple-shreds", stockSource: "flowers.json" },
  { slug: "slurricane", lane: "strain", name: "Slurricane", title: "Slurricane at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aa-weed", preferredProductSlug: "slurricane", stockSource: "flowers.json" },
  { slug: "mku", lane: "strain", name: "MKU", title: "MKU at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "mku", stockSource: "flowers.json" },
  { slug: "bb-cigarettes", lane: "native_cig", name: "BB", title: "BB Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "bb-full-carton", stockSource: "items.json" },
  { slug: "canadian-classics", lane: "native_cig", name: "Canadian Classics", title: "Canadian Classics Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "canadian-classics-original", stockSource: "items.json" },
  { slug: "nexus-cigarettes", lane: "native_cig", name: "Nexus", title: "Nexus Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "nexus-full", stockSource: "items.json" },
  { slug: "canadian-goose", lane: "native_cig", name: "Canadian Goose", title: "Canadian Goose Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "canadian-goose-full", stockSource: "items.json" },
  { slug: "putters", lane: "native_cig", name: "Putters", title: "Putters Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "putters", stockSource: "items.json" },
  { slug: "time-cigarettes", lane: "native_cig", name: "Time", title: "Time Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "time-full", stockSource: "items.json" },
  { slug: "rolled-gold", lane: "native_cig", name: "Rolled Gold", title: "Rolled Gold Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "rolled-gold-lights", stockSource: "items.json" },
  { slug: "canadian-cigarettes", lane: "native_cig", name: "Canadian", title: "Canadian Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "canadian-full", stockSource: "items.json" },
  { slug: "belmont", lane: "native_cig", name: "Belmont", title: "Belmont Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "belmont-king-pack-only-new-price", stockSource: "items.json" },
  { slug: "backwoods", lane: "native_cig", name: "Backwoods", title: "Backwoods Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "backwoods-assorted-flavors-20-25", stockSource: "items.json" },
  { slug: "grabba", lane: "native_cig", name: "Grabba", title: "Grabba Native Cigarettes at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "grabba", stockSource: "items.json" },
  { slug: "ovns-vape", lane: "nic_vape", name: "OVNS", title: "OVNS Nicotine Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vapes", preferredProductSlug: "ovns-disposable-5-8ml-many-flavors-nvape", stockSource: "items.json" },
  { slug: "geek-bar-vape", lane: "nic_vape", name: "Geek Bar", title: "Geek Bar Nicotine Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vapes", preferredProductSlug: "geek-max-5-20k30k-puffs-many-flavors-nvape", stockSource: "items.json" },
  { slug: "zpods-vape", lane: "nic_vape", name: "Zpods", title: "Zpods Nicotine Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vapes", preferredProductSlug: "zpods-zpods-mango-pineapple-32-ml-pods-5-synthetic-nic", stockSource: "items.json" },
  { slug: "cocobar-vape", lane: "nic_vape", name: "Cocobar", title: "Cocobar Nicotine Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vapes", preferredProductSlug: "cocobar-5-12k-puffs-nvape", stockSource: "items.json" },
  { slug: "gas-gang-thc-vape", lane: "thc_vape", name: "Gas Gang", title: "Gas Gang THC Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vape-disposables", preferredProductSlug: "2g-gas-gang-vol3-hybrid-thcvape", stockSource: "items.json" },
  { slug: "drizzle-thc-vape", lane: "thc_vape", name: "Drizzle", title: "Drizzle THC Vape at O'Connor Smoke Cannabis | O'Connor", preferredCategoryPath: "/items/vape-disposables", preferredProductSlug: "drizzle-switch-3in1-2g-thcvape", stockSource: "items.json" },
];

const clusterFor = (seed: GuideSeed) =>
  seeds
    .filter((candidate) => candidate.lane === seed.lane && candidate.slug !== seed.slug)
    .slice(0, seed.lane === "strain" ? 4 : 3)
    .map((candidate) => candidate.slug);

export const GUIDE_REGISTRY: GuideEntry[] = seeds.map((seed) => ({
  ...seed,
  relatedSlugs: clusterFor(seed),
}));

export function getGuide(slug: string) {
  return GUIDE_REGISTRY.find((guide) => guide.slug === slug);
}

export function resolveGuideProduct(guide: GuideEntry): FlowerProduct | ItemProduct | undefined {
  if (!guide.preferredProductSlug) return undefined;
  const products = guide.lane === "strain" ? allFlowers : allItems;
  return products.find((product) => product.slug === guide.preferredProductSlug);
}

export function getTierGuideLinks(categoryPath: string, limit = 6) {
  return GUIDE_REGISTRY
    .filter((guide) => guide.lane === "strain" && guide.preferredCategoryPath === categoryPath)
    .slice(0, limit);
}

export function getCategoryGuideGroups(categoryPath: string) {
  if (categoryPath === "/items/cigarettes") {
    return [{ label: "Native Cigarettes guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "native_cig").slice(0, 11) }];
  }
  if (categoryPath === "/items/vapes") {
    return [
      { label: "Nicotine Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "nic_vape").slice(0, 8) },
      { label: "Separate THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 2) },
    ];
  }
  if (categoryPath === "/items/vape-disposables") {
    return [{ label: "THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 8) }];
  }
  return [];
}




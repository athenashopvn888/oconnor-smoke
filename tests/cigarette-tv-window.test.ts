import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";
import {
  buildCigaretteSnapshot,
  CIG_WORDING_FALLBACK,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveCigWording,
  resolveSurfaceFlag,
  tvCardsForFlag,
} from "../app/lib/cigDecision.ts";
import { SHOW_CIGARETTES, cigaretteEnvHardOff } from "../app/lib/siteConfig.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const cigarillo = { category: "CIGARETTES", name: "SWISHER CIGARILLO", slug: "swisher-cigarillo" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };

const wording = {
  bannerText: "FEED BANNER",
  promoBrands: "FEED BRANDS",
  tv2BoardTitle: "FEED BOARD",
  wrapsTitle: "🍂 WRAPS & POUCHES",
  tickerLine1: "FEED TICKER",
  priceTwoPack: "$5",
  priceCarton: "$25",
  priceBelmont: "$10",
  priceBB2Pack: "$5",
};

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, wording, ...extra };
}

const CARDS = [
  { id: "PREROLLS_ADDONS" },
  { id: "VAPES" },
  { id: "EDIBLES" },
  { id: "CONCENTRATES" },
  { id: "CIGARETTES" },
  { id: "MAGIC" },
];

const shelf = [vape, carton, grabba, backwoods, pouch, paper, wrap, cigarillo, zyn];

describe("OSC01 cigarette TV window", { concurrency: false }, () => {
  test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
    const items = [carton, backwoods];
    assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
    assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
    assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
    assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
    assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
    assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
    assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
    assert.equal(resolveSurfaceFlag(cig({ on: false, tvOn: true, webFollowsTv: true }), "tv"), true);
    assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false, webFollowsTv: true }), "web"), false);
  });

  test("tv on shows the cigarettes card and items while web stays hidden", () => {
    const snap = buildCigaretteSnapshot(cig({ on: true, webOn: false, tvOn: true, master: true }), shelf, true, false);
    assert.equal(snap.web.show, false);
    assert.equal(snap.web.reason, "off");
    assert.equal(snap.tv.show, true);
    assert.equal(snap.tv.reason, "on");
    assert.equal(snap.guides.show, true);
    assert.deepEqual(tvCardsForFlag(CARDS, snap.tv.show).map((card) => card.id), CARDS.map((card) => card.id));
    const shown = reconcileSurfaceItems(shelf, shelf, snap.tv.show);
    for (const item of [carton, grabba, backwoods, pouch, paper, wrap, cigarillo, zyn, vape]) {
      assert.ok(shown.some((entry) => entry.slug === item.slug), item.slug);
    }
  });

  test("tv off hides the cigarettes card and real packs, and keeps wraps and pouches", () => {
    const snap = buildCigaretteSnapshot(cig({ on: true, webOn: false, tvOn: false }), shelf, true, false);
    assert.equal(snap.tv.show, false);
    assert.equal(snap.web.show, false);
    assert.deepEqual(
      tvCardsForFlag(CARDS, snap.tv.show).map((card) => card.id),
      ["PREROLLS_ADDONS", "VAPES", "EDIBLES", "CONCENTRATES", "MAGIC"],
    );
    const hidden = reconcileSurfaceItems(shelf, shelf, false);
    assert.deepEqual(hidden.map((item) => item.slug), [
      vape.slug,
      backwoods.slug,
      pouch.slug,
      paper.slug,
      wrap.slug,
      cigarillo.slug,
      zyn.slug,
    ]);
  });

  test("a website env hard-off hides web and still lets the TV flag through", () => {
    const previous = process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
    process.env.NEXT_PUBLIC_SHOW_CIGARETTES = "false";
    try {
      const snap = buildCigaretteSnapshot(cig({ on: true, webOn: true, tvOn: true, master: true }), [carton, backwoods], true, false);
      assert.equal(snap.web.show, false);
      assert.equal(snap.web.reason, "env");
      assert.equal(snap.tv.show, true);
      assert.equal(snap.tv.reason, "on");
      assert.equal(cigaretteEnvHardOff("false"), true);
      assert.equal(cigaretteEnvHardOff(""), false);
      assert.equal(cigaretteEnvHardOff("true"), false);
    } finally {
      if (previous === undefined) delete process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
      else process.env.NEXT_PUBLIC_SHOW_CIGARETTES = previous;
    }
  });

  test("TV hides on a feed error or a missing block, and follows tvOn only after a successful feed", () => {
    const items = [carton, grabba, backwoods, pouch, paper, wrap, cigarillo, zyn];
    const missing = decideCigaretteSurface({ cig: null, items, surface: "tv" });
    assert.equal(missing.reason, "missing");
    assert.equal(missing.show, false);
    const liveMissing = decideCigaretteSurface({ cig: null, items, surface: "tv", errored: false });
    assert.equal(liveMissing.reason, "missing");
    assert.equal(liveMissing.show, false);
    assert.equal(decideCigaretteSurface({ cig: cig({ on: false, webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
    assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
    assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).show, false);
    assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "tv" }).reason, "no-items");
    const errored = decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", errored: true });
    assert.equal(errored.reason, "error");
    assert.equal(errored.show, false);
    const hidden = reconcileSurfaceItems([vape, ...items], [vape, ...items], errored.show);
    assert.deepEqual(hidden.map((item) => item.slug), [
      vape.slug,
      backwoods.slug,
      pouch.slug,
      paper.slug,
      wrap.slug,
      cigarillo.slug,
      zyn.slug,
    ]);
    assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
    assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "" }).show, true);
    assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: false, tvOn: true }), items, surface: "web" }).show, false);
    const savedOn = buildCigaretteSnapshot(cig({ on: false, webOn: false, tvOn: true }), items, false, false);
    assert.equal(savedOn.tv.show, true);
    assert.equal(savedOn.tv.reason, "on");
    const savedOff = buildCigaretteSnapshot(cig({ on: true, webOn: true, tvOn: false }), items, false, false);
    assert.equal(savedOff.tv.show, false);
    assert.equal(savedOff.tv.reason, "off");
    const miss = buildCigaretteSnapshot(null, items, false, true);
    assert.equal(miss.tv.show, false);
    assert.equal(miss.tv.reason, "error");
    const missingBlock = buildCigaretteSnapshot(null, items, true, false);
    assert.equal(missingBlock.tv.show, false);
    assert.equal(missingBlock.tv.reason, "missing");
  });

  test("the website flag stays off whenever the static gate is off, including a feed error or a missing block", () => {
    const items = [carton, backwoods];
    const explicitOn = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web" });
    const explicitOff = decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" });
    const errored = decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: true }), items, surface: "web", errored: true });
    const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
    assert.equal(explicitOn.show, true);
    assert.equal(explicitOff.show, false);
    assert.equal(errored.show, true);
    assert.equal(errored.reason, "error");
    assert.equal(missing.show, true);
    assert.equal(missing.reason, "missing");
    assert.equal(publicWebsiteCigaretteFlag(explicitOn, false), false);
    assert.equal(publicWebsiteCigaretteFlag(explicitOff, false), false);
    assert.equal(publicWebsiteCigaretteFlag(errored, false), false);
    assert.equal(publicWebsiteCigaretteFlag(missing, false), false);
    assert.equal(publicWebsiteCigaretteFlag(errored, true), false);
    assert.equal(publicWebsiteCigaretteFlag(missing, true), false);
    assert.equal(publicWebsiteCigaretteFlag(explicitOff, true), false);
    assert.equal(publicWebsiteCigaretteFlag(explicitOn, true), true);
    assert.equal(SHOW_CIGARETTES, false);
    assert.equal(SHOW_CIGARETTES ? explicitOn.show : false, false);
    assert.equal(publicWebsiteCigaretteFlag(explicitOn, SHOW_CIGARETTES), false);
    assert.equal(publicWebsiteCigaretteFlag(errored, SHOW_CIGARETTES), false);
    assert.equal(publicWebsiteCigaretteFlag(missing, SHOW_CIGARETTES), false);
  });

  test("wording uses the feed and falls back to the current O'Connor copy", () => {
    assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  ", wrapsTitle: "" }).bannerText, "FEED BANNER");
    assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  " }).wrapsTitle, CIG_WORDING_FALLBACK.wrapsTitle);
    assert.equal(CIG_WORDING_FALLBACK.tv2BoardTitle, "🚬 CIGARETTES");
    assert.equal(CIG_WORDING_FALLBACK.tickerLine1, "CIGARETTES 2 PACK $5 MIX MATCH !");
    assert.equal(CIG_WORDING_FALLBACK.bannerText, "2 PACKS $5 / $25 CARTON");
    assert.equal(decideCigaretteSurface({ cig: null, items: [], surface: "tv" }).wording.bannerText, CIG_WORDING_FALLBACK.bannerText);
  });

  test("guide pages follow the master switch and a feed error stays open", () => {
    const items = [carton];
    assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: false, webOn: true }), items }).show, false);
    assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true, webOn: false }), items }).show, true);
    assert.equal(decideCigaretteGuide({ cig: null, items, errored: true }).show, true);
    assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true }), items, envRaw: "off" }).reason, "env");
  });

  test("the TV header is the live flag and the website static gate stays off", () => {
    const headers = new Headers({
      "x-tv-data-cig-tv": "1",
      "x-tv-data-cig-web": "0",
    });
    assert.equal(readCigaretteTvHeader(headers).show, true);
    assert.equal(readCigaretteTvHeader(new Headers({ "x-tv-data-cig-tv": "0" })).show, false);
    assert.equal(readCigaretteTvHeader(headers).wording.tv2BoardTitle, CIG_WORDING_FALLBACK.tv2BoardTitle);
    assert.equal(SHOW_CIGARETTES, false);

    const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
    const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
    const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
    const footer = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
    const products = readFileSync(new URL("../app/lib/products.ts", import.meta.url), "utf8");
    assert.match(tv2, /readCigaretteTvHeader/);
    assert.match(tv2, /tvCardsForFlag/);
    assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
    assert.match(tv, /readCigaretteTvHeader/);
    assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
    assert.match(route, /snapshotHeaders/);
    assert.match(route, /reconcileSurfaceItems/);
    assert.doesNotMatch(route, /SHOW_CIGARETTES/);
    assert.match(layout, /web: SHOW_CIGARETTES \? published\.web : false/);
    assert.match(layout, /tv: published\.tv/);
    assert.match(readFileSync(new URL("../app/api/content-status/route.ts", import.meta.url), "utf8"), /web: SHOW_CIGARETTES \? cigarettes\.web : false/);
    assert.match(readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8"), /publicWebsiteCigaretteFlag/);
    assert.match(readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8"), /!live && !cig/);
    assert.match(footer, /SHOW_CIGARETTES/);
    assert.match(products, /SHOW_CIGARETTES/);
    assert.match(readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8"), /SHOW_CIGARETTES/);
  });
});

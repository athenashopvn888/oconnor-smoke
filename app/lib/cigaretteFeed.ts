import { cache } from "react";
import {
  buildCigaretteSnapshot,
  cigarettePublicHeaders,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision.ts";
import { allFlowers, allItems, type ItemProduct } from "./products.ts";
import { getCigaretteDataset } from "./tvStock.js";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision;
  tv: CigaretteSurfaceDecision;
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

type ShelfItem = { category?: string; name?: string; slug?: string; sku?: string };

type CigaretteDataset = {
  source?: string;
  items?: ShelfItem[];
  cig?: unknown;
};

export function snapshotFrom(cig: unknown, items: ShelfItem[], live: boolean, errored: boolean): CigaretteSnapshot {
  const snap = buildCigaretteSnapshot(cig, items, live, errored);
  return { ...snap, items: snap.items as ItemProduct[] };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    }) as CigaretteDataset | null;
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    // Last-good cig is kept on the dataset. A miss with no saved cig fails open on TV.
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };

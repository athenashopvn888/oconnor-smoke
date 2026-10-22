import { cache } from "react";
import { SHOW_CIGARETTES } from "./siteConfig";

export type CigaretteSnapshot = {
  web: { show: boolean };
  tv: { show: boolean };
  guides: { show: boolean };
};

/** Diagnostic flags follow the coded env gate. Route redirects stay in next.config. */
export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  const show = SHOW_CIGARETTES;
  return { web: { show }, tv: { show }, guides: { show } };
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

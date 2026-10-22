"use client";

import { createContext, useContext } from "react";

export type CigaretteWording = {
  bannerText: string;
  promoBrands: string;
};

export const CIG_WORDING: CigaretteWording = {
  bannerText: "2 PACKS $5 / $25 CARTON",
  promoBrands: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

const OFF: PublicCigaretteState = {
  web: false,
  tv: false,
  wording: CIG_WORDING,
};

const CigaretteStateContext = createContext<PublicCigaretteState>(OFF);

export default function CigaretteStateProvider({
  value,
  children,
}: {
  value: PublicCigaretteState;
  children: React.ReactNode;
}) {
  return <CigaretteStateContext.Provider value={value}>{children}</CigaretteStateContext.Provider>;
}

export function useCigaretteState(): PublicCigaretteState {
  return useContext(CigaretteStateContext);
}

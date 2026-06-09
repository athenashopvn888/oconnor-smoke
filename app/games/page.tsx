import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — OCONNOR SMOKE | GTA",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at OCONNOR SMOKE.",
  alternates: {
    canonical: "https://oconnorsmokecannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}

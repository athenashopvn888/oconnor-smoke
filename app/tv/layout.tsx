import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O'Connor Smoke In-Store Flower Display",
  description: "Operational in-store flower menu display for O'Connor Smoke.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

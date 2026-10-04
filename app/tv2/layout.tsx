import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "O'Connor Smoke In-Store Accessories Display",
  description: "Operational in-store accessories menu display for O'Connor Smoke.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="O'Connor Smoke Cannabis" />
    </>
  );
}

import type { Metadata } from "next";
import { GBPLandingPage } from "../components/GBPLandingPage";
import { gbpLocation } from "../lib/gbp-location";

export const metadata: Metadata = { title: "East York Dispensary near me on O’Connor Dr | O’Connor Smoke Cannabis", description: gbpLocation.metaDescription, alternates: { canonical: "/weed-dispensary-east-york" } };

export default function Page() { return <GBPLandingPage />; }

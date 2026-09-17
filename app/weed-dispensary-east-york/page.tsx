import type { Metadata } from "next";
import { GBPLandingPage } from "../components/GBPLandingPage";
import { gbpLocation } from "../lib/gbp-location";

export const metadata: Metadata = { title: gbpLocation.seoTitle, description: gbpLocation.metaDescription, alternates: { canonical: "/weed-dispensary-east-york" } };

export default function Page() { return <GBPLandingPage />; }

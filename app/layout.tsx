import { cigaretteSafeContent, SHOW_CIGARETTES } from "./lib/siteConfig";
import type { Metadata } from "next";
import "./globals.css";
import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/fleet/FleetContentProvider";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import type { FleetState } from "./lib/fleet/types";

const ROOT_METADATA: Metadata = cigaretteSafeContent({
  metadataBase: new URL("https://www.oconnorsmokecannabis.com"),
  title: {
    default: "OCONNOR SMOKE | O'Connor Dr Dispensary",
    template: "%s | OCONNOR SMOKE",
  },
  description:
    "OCONNOR SMOKE is a cannabis dispensary on O'Connor Dr with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open 24 hours daily.",
  keywords: [
    "cannabis dispensary East York",
    "weed store East York",
    "exotic flower East York",
    "premium cannabis",
    "OCONNOR SMOKE",
    "cheap weed East York",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles East York",
    "vapes",
    "pre-rolls",
    "native cigarettes East York",
    "O'Connor Drive cannabis",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.oconnorsmokecannabis.com",
    siteName: "OCONNOR SMOKE",
    title: "East York Dispensary on O’Connor Dr | O’Connor Smoke Cannabis",
    description:
      "Walk-in East York cannabis store at 132 O'Connor Dr Unit B. Serving Danforth, Woodbine, and Don Mills. Adults 19+.",
    images: [
      {
        url: "https://oconnorsmokecannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "OCONNOR SMOKE — Premium Cannabis Dispensary East York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O’Connor Smoke Cannabis — East York",
    description: "Walk-in East York cannabis store at 132 O'Connor Dr Unit B. Open 24 hours daily. Adults 19+.",
    images: ["https://oconnorsmokecannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.oconnorsmokecannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
});

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CannabisStore",
  "@id": "https://www.oconnorsmokecannabis.com/#store",
  name: "O'Connor Smoke Cannabis",
  description: "Cannabis dispensary at 132 O'Connor Dr Unit B in East York, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 hours daily.",
  url: "https://www.oconnorsmokecannabis.com",
  telephone: "+14377808378",
  image: "https://oconnorsmokecannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 O'Connor Dr Unit B",
    addressLocality: "East York",
    addressRegion: "ON",
    postalCode: "M4J 2S4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
],
  areaServed: ["East York", "Danforth", "Woodbine", "Don Mills"],
};

function fleetJsonLd(base: typeof jsonLd, fleet: FleetState) {
  if (!fleet.active) return base;
  const nap = fleet.nap;
  const same = nap.schemaName === base.name
    && nap.phoneTel === base.telephone
    && nap.street === base.address.streetAddress
    && nap.city === base.address.addressLocality
    && nap.province === base.address.addressRegion
    && nap.postalCode === base.address.postalCode
    && nap.website === base.url;
  if (same) return base;
  return {
    ...base,
    name: nap.schemaName,
    telephone: nap.phoneTel,
    url: nap.website,
    address: {
      ...base.address,
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.province,
      postalCode: nap.postalCode,
    },
  };
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.oconnorsmokecannabis.com/#website",
  name: "O'Connor Smoke Cannabis",
  url: "https://www.oconnorsmokecannabis.com",
  publisher: { "@id": "https://www.oconnorsmokecannabis.com/#store" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const published = toPublicCigaretteState(cigaretteSnapshot);
  // Website copy stays on the static switch and webOn. TV follows the feed flag only.
  const cigarettes = { web: SHOW_CIGARETTES && published.web, tv: published.tv, wording: published.wording };
  const storeJsonLd = fleetJsonLd(jsonLd, fleet);
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="East York" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cigaretteSafeContent(storeJsonLd)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cigaretteSafeContent(websiteJsonLd)) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JYMC137Q0V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JYMC137Q0V');
            `
          }}
        />
      </head>
      <body>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={cigarettes}>
            {children}
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}

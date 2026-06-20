import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://oconnorsmokecannabis.com"),
  title: {
    default: "OCONNOR SMOKE — Premium Cannabis Dispensary, GTA",
    template: "%s | OCONNOR SMOKE",
  },
  description:
    "Shop 200+ premium cannabis strains at OCONNOR SMOKE. Exotic, Premium, AAA+, AA & Budget flower from $3/g. GTA's uplifting dispensary at 132 O'Connor Dr Unit B. Open Daily: 10:00 AM - 12:00 AM.",
  keywords: [
    "cannabis dispensary GTA",
    "weed store GTA",
    "exotic flower GTA",
    "premium cannabis",
    "OCONNOR SMOKE",
    "cheap weed GTA",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles GTA",
    "vapes",
    "pre-rolls",
    "native cigarettes GTA",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://oconnorsmokecannabis.com",
    siteName: "OCONNOR SMOKE",
    title: "OCONNOR SMOKE — Premium GTA Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. GTA's uplifting dispensary at 132 O'Connor Dr Unit B. Open Daily: 10:00 AM - 12:00 AM.",
    images: [
      {
        url: "https://oconnorsmokecannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "OCONNOR SMOKE — Premium Cannabis Dispensary GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCONNOR SMOKE — GTA's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open Daily: 10:00 AM - 12:00 AM at 132 O'Connor Dr Unit B, GTA.",
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
    canonical: "https://oconnorsmokecannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://oconnorsmokecannabis.com",
  name: "OCONNOR SMOKE",
  description: "Cannabis dispensary at 132 O'Connor Dr Unit B in GTA, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 12:00 AM.",
  url: "https://oconnorsmokecannabis.com",
  telephone: "+16479241664",
  image: "https://oconnorsmokecannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 O'Connor Dr Unit B",
    addressLocality: "GTA",
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
    "opens": "10:00",
    "closes": "00:00"
  }
],
  sameAs: [
    "https://oconnorsmokecannabis.com/",
    "https://oconnorsmokecannabis.com/",
  ],
  hasMap: "https://oconnorsmokecannabis.com/",
  areaServed: {
    "@type": "City",
    name: "GTA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="GTA" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}

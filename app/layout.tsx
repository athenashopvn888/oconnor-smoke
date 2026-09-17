import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oconnorsmokecannabis.com"),
  title: {
    default: "OCONNOR SMOKE | O'Connor Dr Dispensary",
    template: "%s | OCONNOR SMOKE",
  },
  description:
    "OCONNOR SMOKE is a cannabis dispensary on O'Connor Dr with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open Daily: 10:00 AM - 2:30 AM.",
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
    description: "Walk-in East York cannabis store at 132 O'Connor Dr Unit B. Open daily 10:00 AM to 2:30 AM. Adults 19+.",
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
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CannabisStore",
  "@id": "https://www.oconnorsmokecannabis.com/#store",
  name: "O'Connor Smoke Cannabis",
  description: "Cannabis dispensary at 132 O'Connor Dr Unit B in East York, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open Daily: 10:00 AM - 2:30 AM.",
  url: "https://www.oconnorsmokecannabis.com",
  telephone: "+16479241664",
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
    "opens": "10:00",
    "closes": "02:30"
  }
],
  areaServed: ["East York", "Danforth", "Woodbine", "Don Mills"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.oconnorsmokecannabis.com/#website",
  name: "O'Connor Smoke Cannabis",
  url: "https://www.oconnorsmokecannabis.com",
  publisher: { "@id": "https://www.oconnorsmokecannabis.com/#store" },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../hours/seo.module.css";

const ORIGIN = "https://www.oconnorsmokecannabis.com";
const PAGE_URL = `${ORIGIN}/visit`;
const TITLE = "Visit O'Connor Smoke Cannabis | 132 O'Connor Dr Unit B, East York";
const DESCRIPTION = "Directions to O'Connor Smoke Cannabis at 132 O'Connor Dr Unit B, East York, ON M4J 2S4. Map link, phone +1 (437) 780-8378, hours and arrival notes. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, type: "website" },
};

const FAQS = [
  { q: "What is the address of O'Connor Smoke Cannabis?", a: "132 O'Connor Dr Unit B, East York, ON M4J 2S4." },
  { q: "What are the hours?", a: "Open 24 Hours. See the hours page for day-by-day times." },
  { q: "Who can shop here?", a: "Adults 19+ with valid government-issued photo ID." },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": "https://www.oconnorsmokecannabis.com/#store",
      name: "O'Connor Smoke Cannabis",
      url: ORIGIN,
      telephone: "+14377808378",
      address: { "@type": "PostalAddress", streetAddress: "132 O'Connor Dr Unit B", addressLocality: "East York", addressRegion: "ON", postalCode: "M4J 2S4", addressCountry: "CA" },
      openingHoursSpecification: [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}],
    },
    { "@type": "WebPage", "@id": `${PAGE_URL}#webpage`, url: PAGE_URL, name: TITLE, description: DESCRIPTION, about: { "@id": "https://www.oconnorsmokecannabis.com/#store" } },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
        { "@type": "ListItem", position: 2, name: "Visit & Directions", item: PAGE_URL },
      ],
    },
    { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className={styles.content}>
        <nav className={styles.crumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Visit &amp; Directions</span></nav>
        <p className={styles.kicker}>Directions · Adults 19+</p>
        <h1 className={styles.title}>Visit O&apos;Connor Smoke Cannabis</h1>
        <p className={styles.lead}>O&apos;Connor Smoke Cannabis is at 132 O&apos;Connor Dr Unit B, East York, ON M4J 2S4. Use the map link below for turn-by-turn directions, or call +1 (437) 780-8378 before you head over. Adults 19+ with government-issued photo ID.</p>
        <div className={styles.card}>
          <p><strong>O&apos;Connor Smoke Cannabis</strong></p>
          <p>132 O&apos;Connor Dr Unit B, East York, ON M4J 2S4</p>
          <p>Phone: <a href="tel:+14377808378">+1 (437) 780-8378</a></p>
          <p>Open 24 Hours</p>
          <p><a href="https://www.google.com/maps/search/?api=1&query=132+O%27Connor+Dr+Unit+B%2C+East+York%2C+ON+M4J+2S4" target="_blank" rel="noreferrer">Open in Google Maps</a></p>
        </div>
        <section className={styles.section}>
          <h2>Weekly hours</h2>
          <div className={styles.weekRow}><span>Monday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Tuesday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Wednesday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Thursday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Friday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Saturday</span><strong>Open 24 hours</strong></div>
          <div className={styles.weekRow}><span>Sunday</span><strong>Open 24 hours</strong></div>
        </section>
        <section className={styles.section}>
          <h2>Getting here</h2>
          <ul className={styles.list}>
            <li>Accessible by local TTC bus routes serving the surrounding East York area.</li>
            <li>Parking spaces are available in the plaza parking lot.</li>
            <li>Nearby: O’Connor Drive, East York, Woodbine, St. Clair East, Victoria Park, Parkview Hills, Topham Park.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Plan your visit</h2>
          <div className={styles.ctaRow}>
            <a href="tel:+14377808378" className={`${styles.cta} ${styles.ctaPrimary}`}>Call +1 (437) 780-8378</a>
            <Link href="/" className={styles.cta}>Store menu</Link>
            <Link href="/hours" className={styles.cta}>Store hours</Link>
          </div>
          <p className={styles.note}>Adults 19+. Government-issued photo ID required.</p>
        </section>
        <section className={styles.section}>
          <h2>Visit FAQs</h2>
          {FAQS.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}

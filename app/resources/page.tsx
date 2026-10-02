import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../guides/guides-index.module.css";

export const metadata: Metadata = {
  title: { absolute: "Resources | O'Connor Smoke Cannabis" },
  description: "O'Connor Smoke Cannabis resources and name guides for adult East York shoppers.",
  alternates: { canonical: "https://www.oconnorsmokecannabis.com/resources" },
  robots: { index: true, follow: true },
};

export default function ResourcesPage() {
  return <main className={styles.main}><Navbar /><article>
    <header className={styles.hero}><div className={styles.shell}><span className={styles.eyebrow}>Store resources</span><h1>O&apos;Connor Smoke Cannabis Resources</h1><p>Use the Name Guides directory to identify the right shelf before checking today&apos;s menu. Selection rotates and adults must be 19+.</p></div></header>
    <section className={`${styles.shell} ${styles.intro}`}><h2>Browse O&apos;Connor Smoke resources</h2><div className={styles.grid}><Link href="/guides" className={styles.card}><strong>Name Guides</strong><span>Browse all strain, Native Cigarettes, Nicotine Vape, and THC Vape name guides in one directory.</span></Link></div></section>
  </article><Footer /></main>;
}

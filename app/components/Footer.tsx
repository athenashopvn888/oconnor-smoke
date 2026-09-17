import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              OCONNOR SMOKE
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 132 O'Connor Dr Unit B, East York. Visit
              OCONNOR SMOKE For Premium Flower, Edibles, Vapes &amp; More.
              Open: Open Daily: 10:00 AM - 2:30 AM.
            </p>
            <div className={styles.buttons}>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>132 O'Connor Dr Unit B</span>
              <span>East York, ON M4J 2S4</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+16479241664" style={{color: "inherit"}}>(647) 924-1664</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open Daily: 10:00 AM - 2:30 AM</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/york-weed-dispensary">East York Dispensary</Link>
              <Link href="/info/cheap-weed-york">Cheap Weed East York</Link>
              <Link href="/info/native-cigarettes-york">Native Cigarettes</Link>
              <Link href="/weed-delivery-east-york">East York Delivery</Link>
              <Link href="/weed-delivery-scarborough">Scarborough Delivery</Link>
              <Link href="/weed-dispensary-east-york">East York Walk-In Store</Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://oconnorsmokecannabis.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} OCONNOR SMOKE. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}

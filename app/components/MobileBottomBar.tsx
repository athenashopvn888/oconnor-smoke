"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DELIVERY_HREF, HOURS_HREF, MENU_HREF } from "../lib/mobileBarRoutes";
import { storeDirectionsUrl } from "../lib/storeDirections";
import { hideMobileBottomBar, storeHoursStatus } from "../lib/storeHoursStatus";
import styles from "./MobileBottomBar.module.css";

/**
 * Mobile-only sticky actions. Directions uses the store Google Maps link.
 * Hours copy is computed in America/Toronto from the site's opening hours.
 * Hidden on the in-store /tv and /tv2 boards.
 */
export default function MobileBottomBar() {
  const pathname = usePathname();
  const [status, setStatus] = useState(() => storeHoursStatus(new Date()));

  useEffect(() => {
    const update = () => setStatus(storeHoursStatus(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (hideMobileBottomBar(pathname)) return null;

  return (
    <nav
      className={styles.bar}
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={storeDirectionsUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href={HOURS_HREF}>
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={MENU_HREF}>
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href={DELIVERY_HREF}>
        Delivery
      </Link>
    </nav>
  );
}

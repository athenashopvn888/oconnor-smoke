import { CODED_NAP } from "./fleet/config.ts";
import { gbpLocation } from "./gbp-location.ts";

const SHORT_PIN = /maps\.app\.goo\.gl|goo\.gl\/maps/i;
const EXPLICIT_DIRECTIONS = /google\.com\/maps\/(?:dir|place)\b|maps\.google\.com\/maps\/(?:dir|place)\b/i;

function configuredPin(urls: readonly string[]): string | null {
  for (const candidate of urls) {
    const url = candidate.trim();
    if (!url) continue;
    if (SHORT_PIN.test(url) || EXPLICIT_DIRECTIONS.test(url)) return url;
  }
  return null;
}

/**
 * Prefer a maps.app.goo.gl / explicit Maps pin already in config.
 * This store's `directionsUrl` is empty and the saved Maps link is a search
 * query, so Directions falls through to a directions URL for the store address.
 */
export function storeDirectionsUrl(): string {
  const pin = configuredPin([
    gbpLocation.directionsUrl,
    gbpLocation.mapEmbedUrl,
    CODED_NAP.mapsSearchUrl,
    CODED_NAP.mapsEmbedUrl,
  ]);
  if (pin) return pin;
  const address =
    gbpLocation.address.trim() ||
    `${CODED_NAP.street}, ${CODED_NAP.city}, ${CODED_NAP.province} ${CODED_NAP.postalCode}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

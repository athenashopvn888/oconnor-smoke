import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WebChat from "./WebChat";
import DeliveryCatalog, { type Product, type StoreInfo } from "./DeliveryCatalog";
import styles from "./delivery.module.css";

const API = "https://milestone-1-demo.vercel.app";
const SITE = "https://www.oconnorsmokecannabis.com";
const STORE: StoreInfo = {"name": "O'Connor Smoke", "shortName": "O'Connor", "eyebrow": "O'CONNOR SMOKE \u00b7 EAST YORK", "area": "East York, Toronto", "address": "132 O'Connor Dr Unit B, East York", "phone": "(437) 780-8378", "phoneHref": "tel:+14377808378", "storeHours": "24 hours a day", "sodCode": "OSC01"};
const FAQS = [
  { id: "delivery-minimum", q: "What is the delivery minimum and fee?", a: "Delivery has a $60 product minimum before the $10 delivery fee. Delivery starts at 7g." },
  { id: "delivery-how", q: "How do I order?", a: "Browse the delivery menu, open LIVE ORDER and send the dispatcher your choices. New customers complete a private ID check in chat, then the dispatcher confirms stock, your address and the total." },
  { id: "delivery-id", q: "Do I need ID?", a: "Yes. Photo ID showing you are 19+ is checked at the door." },
  { id: "delivery-price-rule", q: "Why are delivery prices different from in-store prices?", a: "Store and delivery are two separate menus. Delivery uses bulk pricing: larger packages, starting at 7 grams, with a minimum order, so the price per gram is set for bigger orders brought to your door. In-store prices and deals, like Buy 2g Get 1g FREE, are for smaller amounts you pick up in person, and they don't apply to delivery. If you only want a small amount or want it right now, our store on O'Connor Drive is the fastest way to get it." },
  { id: "store-price-on-delivery", q: "Can I get the store price on a delivery order?", a: "No. Delivery orders always use delivery prices, and store prices only apply to in-store purchases. See the answer above for why." },
];

async function getCatalog(): Promise<Product[]> {
  try {
    const response = await fetch(`${API}/api/catalog?store=OSC01`, { cache: "no-store", signal: AbortSignal.timeout(20000) });
    if (!response.ok) return [];
    const payload = await response.json();
    return Array.isArray(payload.products) ? payload.products.filter((item: Product) => item.publicProductId && item.tier && Array.isArray(item.images) && Array.isArray(item.priceOptions)) : [];
  } catch {
    return [];
  }
}

export default async function DeliveryContent() {
  const products = await getCatalog();
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "O'Connor Smoke weed delivery", serviceType: "Cannabis delivery", provider: { "@type": "Store", name: "OCONNOR SMOKE", telephone: "+14377808378", url: SITE }, areaServed: "East York, Toronto" },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) },
  ];
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Navbar />
      <DeliveryCatalog products={products} store={STORE} faqs={FAQS} />
      <WebChat />
      <Footer />
    </main>
  );
}

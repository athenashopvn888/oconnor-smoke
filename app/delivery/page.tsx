import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Weed Delivery | OCONNOR SMOKE | East York", description: "Browse OCONNOR SMOKE delivery prices and the current flower menu, then contact the dispatcher through LIVE ORDER.", alternates: { canonical: "https://www.oconnorsmokecannabis.com/delivery" } };
export default function DeliveryPage() { return <DeliveryContent />; }

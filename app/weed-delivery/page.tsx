import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Weed Delivery | OCONNOR SMOKE | East York", description: "Browse OCONNOR SMOKE delivery prices and the current flower menu, then contact the dispatcher through LIVE ORDER.", alternates: { canonical: "https://www.oconnorsmokecannabis.com/weed-delivery" } };
export default function WeedDeliveryPage() { return <DeliveryContent />; }

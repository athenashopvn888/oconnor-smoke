import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — OCONNOR SMOKE | GTA",
  description: "Get notified when OCONNOR SMOKE launches same-day weed delivery across GTA and surrounding areas.",
  alternates: {
    canonical: "https://oconnorsmokecannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}

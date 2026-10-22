import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";

export const dynamic = "force-dynamic";

export default async function Page() {
  const fleet = await getFleetContent();
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index])
    ? fleet.banners
    : undefined;
  return <HomePageClient contentBanners={contentBanners} />;
}

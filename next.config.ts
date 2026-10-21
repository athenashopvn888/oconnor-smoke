const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES?.trim().toLowerCase() === "true";
const cigaretteRedirects = SHOW_CIGARETTES ? [] : [
  { source: "/items/cigarettes/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/cigarettes/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/cigarette/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/items/tobacco/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/tobacco/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/native-cigarettes-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/native-cigarette-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/info/native-cigarettes-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/info/native-cigarette-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/resources/native-smokes/native-cigarettes-guide", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/resources/native-smokes/backwoods-grabba-guide", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/bb-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/belmont-king-size", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-classics", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-goose", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/dks-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/nexus-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/playfares", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/putters", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/rolled-gold", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/time-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/grabba", destination: "/items/vapes", statusCode: 302 as const },
];

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "oconnorsmokecannabis.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
    ],
  },
  async redirects() {
    return [
      ...cigaretteRedirects,
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
    ];
  },
};

export default nextConfig;

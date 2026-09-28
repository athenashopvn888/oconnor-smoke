import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

const canonicalSources = [
  "app/contact/page.tsx",
  "app/faq/page.tsx",
  "app/delivery/page.tsx",
  "app/games/page.tsx",
  "app/flower/[slug]/page.tsx",
  "app/item/[slug]/page.tsx",
  "app/info/[seoPage]/page.tsx",
];

test("all OSC01 explicit canonical emitters use the serving www origin", () => {
  for (const path of canonicalSources) {
    const source = read(path);
    assert.doesNotMatch(
      source,
      /canonical:\s*[`"]https:\/\/oconnorsmokecannabis\.com(?:\/|[`"])/,
      `${path} still emits the redirecting apex canonical`,
    );
    assert.match(
      source,
      /canonical:\s*[`"]https:\/\/www\.oconnorsmokecannabis\.com(?:\/|[`"])/,
      `${path} must emit the www canonical origin`,
    );
  }
});

test("homepage metadata and sitemap remain on the established www origin", () => {
  assert.match(read("app/layout.tsx"), /canonical: "https:\/\/www\.oconnorsmokecannabis\.com"/);
  assert.match(read("app/sitemap.ts"), /const BASE = "https:\/\/www\.oconnorsmokecannabis\.com"/);
});

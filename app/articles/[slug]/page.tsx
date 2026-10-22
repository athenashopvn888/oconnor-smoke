import type { Metadata } from "next";
import { notFound, unstable_rethrow } from "next/navigation";
import Footer from "../../components/Footer";
import FleetArticleView from "../../components/fleet/FleetArticleView";
import Navbar from "../../components/Navbar";
import { loadFleetArticles, type FleetArticle } from "../../lib/fleet/articles";
import { FLEET_ARTICLES_PATH, FLEET_ORIGIN } from "../../lib/fleet/config";
import { GUIDE_REGISTRY } from "../../lib/guideRegistry";

export const dynamic = "force-dynamic";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CODED_SLUGS = new Set(["resources", "guides", ...GUIDE_REGISTRY.map((guide) => guide.slug)]);

async function findArticle(slug: string): Promise<FleetArticle | null> {
  try {
    if (!SLUG.test(slug) || CODED_SLUGS.has(slug)) return null;
    const loaded = await loadFleetArticles();
    if (!loaded.ok) return null;
    return loaded.articles.find((article) => article.slug === slug) ?? null;
  } catch (error) {
    unstable_rethrow(error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}/${article.slug}` },
  };
}

export default async function FleetArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) notFound();
  return (
    <>
      <Navbar />
      <main>
        <FleetArticleView article={article} />
      </main>
      <Footer />
    </>
  );
}

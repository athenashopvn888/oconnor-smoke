import type { Metadata } from "next";
import Link from "next/link";
import { notFound, unstable_rethrow } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { loadFleetArticles, mergeArticleLinks } from "../lib/fleet/articles";
import { FLEET_ARTICLES_PATH, FLEET_ORIGIN, FLEET_STORE_NAME } from "../lib/fleet/config";
import { GUIDE_REGISTRY } from "../lib/guideRegistry";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Articles",
  description: `Guides and articles from ${FLEET_STORE_NAME}.`,
  alternates: { canonical: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}` },
};

function codedLinks() {
  return [
    { slug: "resources", title: "Resources", href: "/resources" },
    { slug: "guides", title: "Name Guides", href: "/guides" },
    ...GUIDE_REGISTRY.map((guide) => ({
      slug: guide.slug,
      title: guide.title,
      href: `/guides/${guide.slug}`,
    })),
  ];
}

async function readArticles() {
  try {
    return await loadFleetArticles();
  } catch (error) {
    unstable_rethrow(error);
    return null;
  }
}

export default async function ArticlesPage() {
  const loaded = await readArticles();
  if (!loaded?.ok) notFound();
  const links = mergeArticleLinks(codedLinks(), loaded.articles);
  return (
    <>
      <Navbar />
      <main>
        <h1>Articles</h1>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

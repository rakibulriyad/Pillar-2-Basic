import type { Metadata } from "next";
import PrevNext from "../components/PrevNext";
import OnThisPage from "../components/OnThisPage";
import ChapterBody from "../components/ChapterBody";
import ChapterBadges from "../components/ChapterBadges";
import { getAllSlugs, getChapterBySlug, getPrevNext } from "@/lib/content";
import { dictionary } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getChapterBySlug(slug);
  return {
    title: `${frontmatter.title.en} — ${dictionary.siteTitleSuffix.en}`,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, contentEn, contentBn } = getChapterBySlug(slug);
  const { prev, next } = getPrevNext(slug);

  return (
    <div className="mx-auto flex max-w-6xl gap-10">
      <article className="min-w-0 flex-1">
        <ChapterBadges frontmatter={frontmatter} />

        <ChapterBody contentEn={contentEn} contentBn={contentBn} />

        <PrevNext prev={prev} next={next} />
      </article>

      <aside className="hidden w-56 shrink-0 xl:block">
        <OnThisPage containerId="chapter-content" />
      </aside>
    </div>
  );
}

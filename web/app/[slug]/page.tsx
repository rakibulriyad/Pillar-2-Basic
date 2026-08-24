import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import PrevNext from "../components/PrevNext";
import OnThisPage from "../components/OnThisPage";
import { getAllSlugs, getChapterBySlug, getPrevNext } from "@/lib/content";

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
    title: `${frontmatter.title} — বৈশ্বিক ন্যূনতম কর হ্যান্ডবুক`,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getChapterBySlug(slug);
  const { prev, next } = getPrevNext(slug);

  const isAppendix = Boolean(frontmatter.appendix);

  return (
    <div className="mx-auto flex max-w-6xl gap-10">
      <article className="min-w-0 flex-1">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--fg-muted)" }}>
          {isAppendix ? (
            <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
              পরিশিষ্ট {frontmatter.appendix}
            </span>
          ) : (
            <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
              পর্ব {frontmatter.part} · অধ্যায় {frontmatter.chapter}
            </span>
          )}
          {frontmatter.articles && (
            <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
              Article {frontmatter.articles}
            </span>
          )}
        </div>

        <div id="chapter-content" className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              table: ({ children }) => (
                <div className="table-scroll">
                  <table>{children}</table>
                </div>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <PrevNext prev={prev} next={next} />
      </article>

      <aside className="hidden w-56 shrink-0 xl:block">
        <OnThisPage containerId="chapter-content" />
      </aside>
    </div>
  );
}

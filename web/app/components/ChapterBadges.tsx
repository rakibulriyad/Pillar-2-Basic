"use client";

import type { ChapterFrontmatter } from "@/lib/content-shared";
import { t } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function ChapterBadges({ frontmatter }: { frontmatter: ChapterFrontmatter }) {
  const { language } = useLanguage();
  const isAppendix = Boolean(frontmatter.appendix);

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs" style={{ color: "var(--fg-muted)" }}>
      {isAppendix ? (
        <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
          {t("chapterPage", "appendix", language)} {frontmatter.appendix}
        </span>
      ) : (
        <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
          {t("chapterPage", "part", language)} {frontmatter.part} · {t("chapterPage", "chapter", language)}{" "}
          {frontmatter.chapter}
        </span>
      )}
      {frontmatter.articles && (
        <span className="rounded-full border px-2.5 py-1" style={{ borderColor: "var(--border)" }}>
          Article {frontmatter.articles}
        </span>
      )}
    </div>
  );
}

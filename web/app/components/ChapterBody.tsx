"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useLanguage } from "./LanguageProvider";

export default function ChapterBody({
  contentEn,
  contentBn,
}: {
  contentEn: string;
  contentBn: string;
}) {
  const { language } = useLanguage();
  const content = language === "en" ? contentEn : contentBn;

  return (
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
  );
}

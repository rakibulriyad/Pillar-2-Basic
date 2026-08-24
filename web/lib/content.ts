import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "..", "content");

export type Locale = "en" | "bn";

export type LocalizedText = {
  en: string;
  bn: string;
};

export function pick(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export type ManifestChapter = {
  chapter: number;
  slug: string;
  title: LocalizedText;
};

export type ManifestPart = {
  part: number;
  title: LocalizedText;
  chapters: ManifestChapter[];
};

export type ManifestAppendix = {
  id: string;
  slug: string;
  title: LocalizedText;
};

export type Manifest = {
  title: LocalizedText;
  parts: ManifestPart[];
  appendices: ManifestAppendix[];
};

export type ChapterFrontmatter = {
  title: LocalizedText;
  chapter?: number;
  part?: number;
  partTitle?: LocalizedText;
  articles?: string;
  appendix?: string;
  slug: string;
};

export type ChapterData = {
  slug: string;
  frontmatter: ChapterFrontmatter;
  contentEn: string;
  contentBn: string;
};

export type FlatEntry = {
  slug: string;
  title: LocalizedText;
  kind: "chapter" | "appendix";
};

let manifestCache: Manifest | null = null;

export function getManifest(): Manifest {
  if (manifestCache) return manifestCache;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "manifest.json"), "utf8");
  manifestCache = JSON.parse(raw) as Manifest;
  return manifestCache;
}

export function getFlatOrder(): FlatEntry[] {
  const manifest = getManifest();
  const entries: FlatEntry[] = [];
  for (const part of manifest.parts) {
    for (const chapter of part.chapters) {
      entries.push({ slug: chapter.slug, title: chapter.title, kind: "chapter" });
    }
  }
  for (const appendix of manifest.appendices) {
    entries.push({ slug: appendix.slug, title: appendix.title, kind: "appendix" });
  }
  return entries;
}

export function getAllSlugs(): string[] {
  return getFlatOrder().map((entry) => entry.slug);
}

const LANG_EN_MARKER = "<!-- lang:en -->";
const LANG_BN_MARKER = "<!-- lang:bn -->";

function splitByLanguage(content: string): { contentEn: string; contentBn: string } {
  const enIndex = content.indexOf(LANG_EN_MARKER);
  const bnIndex = content.indexOf(LANG_BN_MARKER);
  if (enIndex === -1 || bnIndex === -1) {
    throw new Error("Chapter content is missing lang:en / lang:bn markers");
  }
  const contentEn = content.slice(enIndex + LANG_EN_MARKER.length, bnIndex).trim();
  const contentBn = content.slice(bnIndex + LANG_BN_MARKER.length).trim();
  return { contentEn, contentBn };
}

export function getChapterBySlug(slug: string): ChapterData {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { contentEn, contentBn } = splitByLanguage(content);
  return {
    slug,
    frontmatter: data as ChapterFrontmatter,
    contentEn,
    contentBn,
  };
}

export function getPrevNext(slug: string): {
  prev: FlatEntry | null;
  next: FlatEntry | null;
} {
  const order = getFlatOrder();
  const index = order.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? order[index - 1] : null,
    next: index < order.length - 1 ? order[index + 1] : null,
  };
}

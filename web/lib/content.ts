import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "..", "content");

export type ManifestChapter = {
  chapter: number;
  slug: string;
  title: string;
};

export type ManifestPart = {
  part: number;
  title: string;
  chapters: ManifestChapter[];
};

export type ManifestAppendix = {
  id: string;
  slug: string;
  title: string;
};

export type Manifest = {
  title: string;
  parts: ManifestPart[];
  appendices: ManifestAppendix[];
};

export type ChapterFrontmatter = {
  title: string;
  chapter?: number;
  part?: number;
  partTitle?: string;
  articles?: string;
  appendix?: string;
  slug: string;
};

export type ChapterData = {
  slug: string;
  frontmatter: ChapterFrontmatter;
  content: string;
};

export type FlatEntry = {
  slug: string;
  title: string;
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

export function getChapterBySlug(slug: string): ChapterData {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ChapterFrontmatter,
    content,
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

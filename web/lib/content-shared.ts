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

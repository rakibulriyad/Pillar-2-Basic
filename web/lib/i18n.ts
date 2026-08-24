import type { Locale } from "./content";

export const dictionary = {
  siteTitleSuffix: {
    en: "Global Minimum Tax Handbook",
    bn: "বৈশ্বিক ন্যূনতম কর হ্যান্ডবুক",
  },
  metadata: {
    title: {
      en: "Global Minimum Tax — OECD Pillar Two Handbook",
      bn: "বৈশ্বিক ন্যূনতম কর — OECD Pillar Two হ্যান্ডবুক",
    },
    description: {
      en: "A complete handbook on OECD Pillar Two and the Global Minimum Tax — covering QDMTT, IIR, UTPR, GIR, and self-assessment.",
      bn: "OECD Pillar Two ও Global Minimum Tax-এর উপর একটি পূর্ণাঙ্গ বাংলা হ্যান্ডবুক — QDMTT, IIR, UTPR, GIR ও Self-Assessment সহ।",
    },
  },
  appShell: {
    openToc: { en: "Open table of contents", bn: "সূচিপত্র খুলুন" },
    tocButton: { en: "☰ Contents", bn: "☰ সূচি" },
    drawerTitle: { en: "Table of Contents", bn: "সূচিপত্র" },
    close: { en: "Close", bn: "বন্ধ করুন" },
  },
  sidebar: {
    navAriaLabel: { en: "Book contents", bn: "বইয়ের বিষয়সূচি" },
    coverLink: { en: "Book Cover & Contents", bn: "বইয়ের প্রচ্ছদ ও সূচিপত্র" },
    part: { en: "Part", bn: "পর্ব" },
    appendix: { en: "Appendix", bn: "পরিশিষ্ট" },
  },
  chapterPage: {
    appendix: { en: "Appendix", bn: "পরিশিষ্ট" },
    part: { en: "Part", bn: "পর্ব" },
    chapter: { en: "Chapter", bn: "অধ্যায়" },
  },
  prevNext: {
    ariaLabel: { en: "Previous and next chapter", bn: "পূর্ববর্তী ও পরবর্তী অধ্যায়" },
    prev: { en: "← Previous", bn: "← পূর্ববর্তী" },
    next: { en: "Next →", bn: "পরবর্তী →" },
  },
  onThisPage: {
    label: { en: "On this page", bn: "এই পাতায়" },
  },
  home: {
    navAriaLabel: { en: "Table of contents", bn: "বিষয়সূচি" },
    part: { en: "Part", bn: "পর্ব" },
    chapter: { en: "Chapter", bn: "অধ্যায়" },
    appendix: { en: "Appendix", bn: "পরিশিষ্ট" },
    intro: {
      en: "This book is a generic practitioner handbook built on the structure of the OECD's published GloBE Model Rules, Commentary, Safe Harbours, and Administrative Guidance. Explanations are in English, and Bangla is available as an alternate language throughout.",
      bn: "এই বইটি OECD-র প্রকাশিত GloBE Model Rules, Commentary, Safe Harbours ও Administrative Guidance-এর কাঠামোর উপর ভিত্তি করে লেখা একটি জেনেরিক practitioner হ্যান্ডবুক। এখানে ব্যাখ্যা বাংলায়, এবং সব technical term (GloBE Income, Covered Taxes, QDMTT, IIR, UTPR ইত্যাদি) হুবহু ইংরেজিতে রাখা হয়েছে।",
    },
    disclaimerLabel: { en: "Disclaimer:", bn: "দাবিত্যাগ:" },
    disclaimer: {
      en: "Specific details such as article numbers and thresholds should be cross-checked against the original OECD documents before professional use. Where OECD guidance is still incomplete or interpretation varies by country, each chapter of the book notes this explicitly.",
      bn: "Article নম্বর ও থ্রেশহোল্ডের মতো নির্দিষ্ট তথ্য পেশাগত কাজে ব্যবহারের আগে মূল OECD নথির সাথে মিলিয়ে নিতে হবে। যেখানে OECD নির্দেশনা এখনো অসম্পূর্ণ বা দেশভেদে ব্যাখ্যা ভিন্ন, বইয়ের প্রতিটি অধ্যায়ে তা স্পষ্টভাবে উল্লেখ করা আছে।",
    },
  },
  language: {
    en: { en: "EN", bn: "EN" },
    bn: { en: "BN", bn: "BN" },
  },
} as const;

export function t<K1 extends keyof typeof dictionary, K2 extends keyof (typeof dictionary)[K1]>(
  section: K1,
  key: K2,
  locale: Locale
): string {
  const entry = dictionary[section][key] as { en: string; bn: string };
  return entry[locale];
}

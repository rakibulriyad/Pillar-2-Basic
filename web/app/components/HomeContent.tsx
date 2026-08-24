"use client";

import Link from "next/link";
import { pick, type Manifest } from "@/lib/content-shared";
import { t } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function HomeContent({ manifest }: { manifest: Manifest }) {
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{pick(manifest.title, language)}</h1>

      <div
        className="mt-4 rounded-lg border p-4 text-sm leading-relaxed"
        style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
      >
        <p>{t("home", "intro", language)}</p>
        <p className="mt-3">
          <strong>{t("home", "disclaimerLabel", language)}</strong> {t("home", "disclaimer", language)}
        </p>
      </div>

      <nav aria-label={t("home", "navAriaLabel", language)} className="mt-10 space-y-8">
        {manifest.parts.map((part) => (
          <section key={part.part}>
            <h2 className="text-base font-bold" style={{ color: "var(--fg)" }}>
              {t("home", "part", language)} {part.part} — {pick(part.title, language)}
            </h2>
            <ul className="mt-2 space-y-1">
              {part.chapters.map((chapter) => (
                <li key={chapter.slug}>
                  <Link
                    href={`/${chapter.slug}`}
                    className="text-[0.95rem] hover:underline"
                    style={{ color: "var(--link)" }}
                  >
                    {t("home", "chapter", language)} {chapter.chapter} — {pick(chapter.title, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="text-base font-bold" style={{ color: "var(--fg)" }}>
            {t("home", "appendix", language)}
          </h2>
          <ul className="mt-2 space-y-1">
            {manifest.appendices.map((appendix) => (
              <li key={appendix.slug}>
                <Link
                  href={`/${appendix.slug}`}
                  className="text-[0.95rem] hover:underline"
                  style={{ color: "var(--link)" }}
                >
                  {t("home", "appendix", language)} {appendix.id} — {pick(appendix.title, language)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
}

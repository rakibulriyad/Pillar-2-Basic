"use client";

import Link from "next/link";
import { pick, type FlatEntry } from "@/lib/content-shared";
import { t } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function PrevNext({
  prev,
  next,
}: {
  prev: FlatEntry | null;
  next: FlatEntry | null;
}) {
  const { language } = useLanguage();

  if (!prev && !next) return null;

  return (
    <nav
      aria-label={t("prevNext", "ariaLabel", language)}
      className="mt-12 grid grid-cols-1 gap-3 border-t pt-6 sm:grid-cols-2"
      style={{ borderColor: "var(--border)" }}
    >
      <div>
        {prev && (
          <Link
            href={`/${prev.slug}`}
            className="block rounded-lg border p-3 transition-colors hover:opacity-80"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
              {t("prevNext", "prev", language)}
            </span>
            <div className="mt-1 text-sm font-medium">{pick(prev.title, language)}</div>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            href={`/${next.slug}`}
            className="block rounded-lg border p-3 text-right transition-colors hover:opacity-80"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
              {t("prevNext", "next", language)}
            </span>
            <div className="mt-1 text-sm font-medium">{pick(next.title, language)}</div>
          </Link>
        )}
      </div>
    </nav>
  );
}

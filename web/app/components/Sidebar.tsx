"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pick, type Manifest } from "@/lib/content";
import { t } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export default function Sidebar({
  manifest,
  onNavigate,
}: {
  manifest: Manifest;
  onNavigate?: () => void;
}) {
  const { language } = useLanguage();
  const pathname = usePathname();
  const activeSlug = pathname === "/" ? "" : pathname.replace(/^\//, "");

  const activePart = manifest.parts.find((part) =>
    part.chapters.some((chapter) => chapter.slug === activeSlug)
  );

  const [openParts, setOpenParts] = useState<Set<number>>(
    () => new Set(activePart ? [activePart.part] : [])
  );
  const [appendicesOpen, setAppendicesOpen] = useState(
    () => manifest.appendices.some((a) => a.slug === activeSlug)
  );

  useEffect(() => {
    if (activePart) {
      setOpenParts((prev) => {
        if (prev.has(activePart.part)) return prev;
        const next = new Set(prev);
        next.add(activePart.part);
        return next;
      });
    }
    if (manifest.appendices.some((a) => a.slug === activeSlug)) {
      setAppendicesOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlug]);

  function togglePart(part: number) {
    setOpenParts((prev) => {
      const next = new Set(prev);
      if (next.has(part)) next.delete(part);
      else next.add(part);
      return next;
    });
  }

  const linkBase = "block rounded-md px-2 py-1.5 text-[0.9rem] leading-snug transition-colors";

  return (
    <nav aria-label={t("sidebar", "navAriaLabel", language)} className="text-sm">
      <Link
        href="/"
        onClick={onNavigate}
        className={linkBase}
        style={
          activeSlug === ""
            ? { background: "var(--accent)", color: "var(--accent-fg)", fontWeight: 600 }
            : { color: "var(--fg)" }
        }
      >
        {t("sidebar", "coverLink", language)}
      </Link>

      <ul className="mt-2 space-y-0.5">
        {manifest.parts.map((part) => {
          const open = openParts.has(part.part);
          return (
            <li key={part.part}>
              <button
                type="button"
                onClick={() => togglePart(part.part)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[0.85rem] font-semibold"
                style={{ color: "var(--fg-muted)" }}
              >
                <span>
                  {t("sidebar", "part", language)} {part.part} — {pick(part.title, language)}
                </span>
                <span aria-hidden style={{ transform: open ? "rotate(90deg)" : "none" }}>
                  ›
                </span>
              </button>
              {open && (
                <ul className="ml-2 space-y-0.5 border-l pl-2" style={{ borderColor: "var(--border)" }}>
                  {part.chapters.map((chapter) => {
                    const active = chapter.slug === activeSlug;
                    return (
                      <li key={chapter.slug}>
                        <Link
                          href={`/${chapter.slug}`}
                          onClick={onNavigate}
                          className={linkBase}
                          style={
                            active
                              ? { background: "var(--accent)", color: "var(--accent-fg)", fontWeight: 600 }
                              : { color: "var(--fg)" }
                          }
                        >
                          {chapter.chapter}. {pick(chapter.title, language)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}

        <li>
          <button
            type="button"
            onClick={() => setAppendicesOpen((prev) => !prev)}
            aria-expanded={appendicesOpen}
            className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[0.85rem] font-semibold"
            style={{ color: "var(--fg-muted)" }}
          >
            <span>{t("sidebar", "appendix", language)}</span>
            <span aria-hidden style={{ transform: appendicesOpen ? "rotate(90deg)" : "none" }}>
              ›
            </span>
          </button>
          {appendicesOpen && (
            <ul className="ml-2 space-y-0.5 border-l pl-2" style={{ borderColor: "var(--border)" }}>
              {manifest.appendices.map((appendix) => {
                const active = appendix.slug === activeSlug;
                return (
                  <li key={appendix.slug}>
                    <Link
                      href={`/${appendix.slug}`}
                      onClick={onNavigate}
                      className={linkBase}
                      style={
                        active
                          ? { background: "var(--accent)", color: "var(--accent-fg)", fontWeight: 600 }
                          : { color: "var(--fg)" }
                      }
                    >
                      {t("sidebar", "appendix", language)} {appendix.id} — {pick(appendix.title, language)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

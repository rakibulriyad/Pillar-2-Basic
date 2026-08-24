"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Manifest } from "@/lib/content";

export default function Sidebar({
  manifest,
  onNavigate,
}: {
  manifest: Manifest;
  onNavigate?: () => void;
}) {
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
    <nav aria-label="বইয়ের বিষয়সূচি" className="text-sm">
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
        বইয়ের প্রচ্ছদ ও সূচিপত্র
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
                  পর্ব {part.part} — {part.title}
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
                          {chapter.chapter}. {chapter.title}
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
            <span>পরিশিষ্ট</span>
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
                      পরিশিষ্ট {appendix.id} — {appendix.title}
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

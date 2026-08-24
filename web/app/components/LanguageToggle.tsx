"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

const OPTIONS = ["en", "bn"] as const;

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="inline-flex rounded-lg border p-0.5 text-xs"
      style={{ borderColor: "var(--border)" }}
    >
      {OPTIONS.map((option) => {
        const active = mounted && language === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            aria-pressed={active}
            className="rounded-md px-2.5 py-1 transition-colors"
            style={
              active
                ? { background: "var(--accent)", color: "var(--accent-fg)" }
                : { color: "var(--fg-muted)" }
            }
          >
            {t("language", option, language)}
          </button>
        );
      })}
    </div>
  );
}

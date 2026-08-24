"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const OPTIONS = [
  { value: "light", label: "লাইট" },
  { value: "dark", label: "ডার্ক" },
  { value: "system", label: "সিস্টেম" },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="inline-flex rounded-lg border p-0.5 text-xs"
      style={{ borderColor: "var(--border)" }}
    >
      {OPTIONS.map((option) => {
        const active = mounted && theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-pressed={active}
            className="rounded-md px-2.5 py-1 transition-colors"
            style={
              active
                ? { background: "var(--accent)", color: "var(--accent-fg)" }
                : { color: "var(--fg-muted)" }
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

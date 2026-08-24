"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

export default function OnThisPage({ containerId }: { containerId: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll("h2[id]"));
    setHeadings(nodes.map((node) => ({ id: node.id, text: node.textContent || "" })));
  }, [containerId]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="এই পাতায়" className="sticky top-8 text-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
        এই পাতায়
      </p>
      <ul className="space-y-1.5 border-l pl-3" style={{ borderColor: "var(--border)" }}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="block leading-snug transition-colors hover:underline"
              style={{ color: "var(--fg-muted)" }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import type { FlatEntry } from "@/lib/content";

export default function PrevNext({
  prev,
  next,
}: {
  prev: FlatEntry | null;
  next: FlatEntry | null;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="পূর্ববর্তী ও পরবর্তী অধ্যায়"
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
              ← পূর্ববর্তী
            </span>
            <div className="mt-1 text-sm font-medium">{prev.title}</div>
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
              পরবর্তী →
            </span>
            <div className="mt-1 text-sm font-medium">{next.title}</div>
          </Link>
        )}
      </div>
    </nav>
  );
}

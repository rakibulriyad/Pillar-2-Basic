"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";
import type { Manifest } from "@/lib/content";

export default function AppShell({
  manifest,
  children,
}: {
  manifest: Manifest;
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <header
        className="flex items-center justify-between gap-3 border-b px-4 py-3 lg:hidden"
        style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
      >
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="সূচিপত্র খুলুন"
          className="rounded-md border px-3 py-1.5 text-sm"
          style={{ borderColor: "var(--border)" }}
        >
          ☰ সূচি
        </button>
        <Link href="/" className="truncate text-sm font-semibold">
          {manifest.title}
        </Link>
        <ThemeToggle />
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <div
            className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto p-4"
            style={{ background: "var(--bg)", borderRight: "1px solid var(--border)" }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold">সূচিপত্র</span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="বন্ধ করুন"
                className="rounded-md border px-2 py-1 text-sm"
                style={{ borderColor: "var(--border)" }}
              >
                ✕
              </button>
            </div>
            <Sidebar manifest={manifest} onNavigate={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <aside
        className="hidden w-80 shrink-0 overflow-y-auto border-r px-4 py-6 lg:sticky lg:top-0 lg:block lg:h-screen"
        style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
      >
        <Link href="/" className="mb-4 block text-base font-bold leading-snug">
          {manifest.title}
        </Link>
        <div className="mb-4 hidden lg:block">
          <ThemeToggle />
        </div>
        <Sidebar manifest={manifest} />
      </aside>

      <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-12">{children}</main>
    </div>
  );
}

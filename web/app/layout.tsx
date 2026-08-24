import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import { ThemeProvider } from "next-themes";
import AppShell from "./components/AppShell";
import { getManifest } from "@/lib/content";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বৈশ্বিক ন্যূনতম কর — OECD Pillar Two হ্যান্ডবুক",
  description:
    "OECD Pillar Two ও Global Minimum Tax-এর উপর একটি পূর্ণাঙ্গ বাংলা হ্যান্ডবুক — QDMTT, IIR, UTPR, GIR ও Self-Assessment সহ।",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const manifest = getManifest();

  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${notoSansBengali.variable} h-full`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell manifest={manifest}>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import { ThemeProvider } from "next-themes";
import AppShell from "./components/AppShell";
import { LanguageProvider } from "./components/LanguageProvider";
import { getManifest } from "@/lib/content";
import { dictionary } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: dictionary.metadata.title.en,
  description: dictionary.metadata.description.en,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const manifest = getManifest();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansBengali.variable} h-full`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <AppShell manifest={manifest}>{children}</AppShell>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

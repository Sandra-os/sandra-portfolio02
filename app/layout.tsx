import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteInfo } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} | ${siteInfo.role}`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.summary,
  openGraph: {
    title: `${siteInfo.name} | ${siteInfo.role}`,
    description: siteInfo.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-teal px-4 py-2 font-semibold text-navy transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteInfo } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: `${siteInfo.name} | ${siteInfo.role}`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.projectSummary,
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | ${siteInfo.role}`,
    description: siteInfo.projectSummary,
  },
  openGraph: {
    title: `${siteInfo.name} | ${siteInfo.role}`,
    description: siteInfo.projectSummary,
    url: siteInfo.url,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteInfo.name,
              url: siteInfo.url,
              sameAs: [siteInfo.github, siteInfo.linkedin],
            }).replaceAll("<", "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-teal px-4 py-2 font-semibold text-navy shadow-lg transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

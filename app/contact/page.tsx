import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { siteInfo } from "@/data/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sandra Ogbudinkpa about software engineering opportunities and projects.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about the work ahead."
        description="Have a role, project or engineering problem in mind? Send a note with a little context."
      />
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl">Email Sandra</h2>
          <a
            className="text-link mt-5 inline-block break-all text-xl sm:text-3xl"
            href={`mailto:${siteInfo.email}`}
          >
            {siteInfo.email}
          </a>
          <p className="mt-5 max-w-xl leading-7 text-muted">
            This link opens your email app. If you use webmail, copy the address
            above into a new message. Nothing is submitted or stored on this
            website.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 border-t border-line pt-7">
            <a className="text-link" href={siteInfo.github}>
              GitHub ↗
            </a>
            <a className="text-link" href={siteInfo.linkedin}>
              LinkedIn ↗
            </a>
            <a
              className="text-link"
              href={`tel:${siteInfo.phone.replaceAll("-", "")}`}
            >
              {siteInfo.phone}
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

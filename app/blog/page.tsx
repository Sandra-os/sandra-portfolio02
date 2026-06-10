import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, product thinking, and learning.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the workbench."
        description="A future home for practical writing about software engineering, building products, and lessons learned along the way."
      />

      <Container className="py-16 sm:py-20">
        <section className="surface blossom-wash mx-auto max-w-3xl rounded-[1.75rem] p-8 text-center sm:p-12">
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-teal/10 bg-teal/9 font-mono text-xl font-bold text-teal shadow-sm">
            {"</>"}
          </span>
          <h2 className="mt-6 text-2xl font-semibold text-copy">
            First posts are in progress.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
            I&apos;ll be sharing clear, useful notes on frontend architecture,
            accessibility, engineering habits, and the process behind my
            projects.
          </p>
          <ButtonLink href="/contact" variant="secondary" className="mt-7">
            Connect in the meantime
          </ButtonLink>
        </section>
      </Container>
    </>
  );
}

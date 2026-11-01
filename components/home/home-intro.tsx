import Link from "next/link";
import { Container } from "@/components/ui/container";
export function HomeIntro() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid gap-7 md:grid-cols-[1fr_2fr] md:gap-14">
        <h2 className="text-3xl">Engineering foundations</h2>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Earlier frontend projects and computer engineering coursework
            explore local persistence, data visualization, digital logic and
            hardware control. They remain part of the work, with their original
            project pages.
          </p>
          <Link
            href="/projects#foundations"
            className="text-link mt-5 inline-block"
          >
            Explore earlier work →
          </Link>
          <p className="mt-8 border-t border-line pt-6 text-sm leading-7 text-muted">
            <strong className="font-semibold text-copy">
              Next build: Operations Data Workbench.
            </strong>{" "}
            Planned work, with no shipped demo or results yet.
          </p>
        </div>
      </Container>
    </section>
  );
}

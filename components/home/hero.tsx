import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { siteInfo } from "@/data/site";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <Container>
        <h1 className="max-w-5xl text-4xl leading-[1.12] tracking-[-0.035em] text-copy sm:text-5xl lg:text-[4.25rem]">
          Software engineer building{" "}
          <span className="text-teal">reliable full-stack products</span> and
          thoughtful interactive experiences.
        </h1>
        <div className="mt-8 flex max-w-5xl flex-col justify-between gap-7 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-8 text-muted">
            I’m Sandra. I care about the rules behind an interface, the
            boundaries around its data, and what happens when something goes
            wrong.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <ButtonLink href="#selected-work">
              View selected work <ArrowRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              Resume
            </ButtonLink>
          </div>
        </div>
        <p className="mt-7 text-sm text-muted">
          {siteInfo.availability} ·{" "}
          <a className="underline underline-offset-4" href="/contact">
            Contact Sandra
          </a>
        </p>
      </Container>
    </section>
  );
}

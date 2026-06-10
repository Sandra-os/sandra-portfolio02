import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { HomeIntro } from "@/components/home/home-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <FeaturedProjects />

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-teal/25 bg-gradient-to-br from-teal/12 via-surface to-sky/8 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Let&apos;s build something useful
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-copy sm:text-4xl">
                  Have a product challenge or engineering opportunity in mind?
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted">
                  I&apos;m always interested in thoughtful teams, meaningful
                  problems, and software that improves how people work.
                </p>
              </div>
              <ButtonLink href="/contact" className="shrink-0">
                Get in touch
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

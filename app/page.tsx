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
          <div className="blossom-wash relative overflow-hidden rounded-[1.75rem] border border-teal/20 bg-gradient-to-br from-[#fff0f6] via-surface to-[#edf7fc] p-8 shadow-[0_20px_60px_rgba(119,73,98,0.09)] sm:p-12">
            <span className="petal right-[12%] top-[18%] hidden sm:block" />
            <span className="petal right-[7%] top-[42%] hidden scale-75 sm:block [animation-delay:2s]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Let&apos;s build something useful
            </p>
            <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-copy sm:text-4xl">
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

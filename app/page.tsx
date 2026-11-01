import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { HomeIntro } from "@/components/home/home-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <HomeIntro />
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl">Let’s build something useful.</h2>
              <p className="mt-3 leading-7 text-muted">
                Have an engineering opportunity or a product problem in mind?
              </p>
            </div>
            <ButtonLink href="/contact">Get in touch →</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

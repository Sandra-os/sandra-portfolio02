import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/fade-in";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles, siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteInfo.name}'s approach to software engineering.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Computer engineering foundations. Full-stack execution."
        description="I am a software developer with more than four years of experience building scalable applications, improving system performance, and supporting users through complex technical problems."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <div className="surface blossom-photo relative aspect-square max-w-md overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#fff6f9]/80 via-transparent to-transparent" />
              <div className="absolute inset-8 rounded-full border border-white/55" />
              <div className="absolute inset-16 rounded-full border border-white/55" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-32 place-items-center rounded-full border border-white/70 bg-navy/78 font-display text-5xl font-semibold text-teal shadow-[0_20px_50px_rgba(119,73,98,0.18)] backdrop-blur">
                  S
                </span>
              </div>
              <p className="absolute bottom-6 left-6 rounded-full border border-line bg-navy/88 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur">
                {siteInfo.location} / Open to opportunities
              </p>
            </div>
          </FadeIn>

          <div>
            <SectionHeading
              eyebrow="My perspective"
              title="I enjoy understanding how the entire system works."
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                My background in computer engineering gives me a systems-level
                perspective, while my software experience has taught me how to
                deliver practical features across backend services, databases,
                cloud infrastructure, and user interfaces.
              </p>
              <p>
                At Saidatech, I have worked with Python, Flask, Django, SQL,
                React, Docker, Kubernetes, OpenShift, and AI-driven features for
                an e-learning platform serving more than 130,000 users.
              </p>
              <p>
                I am known for structured problem solving, clear communication,
                and steady collaboration in Agile environments. I keep learning
                because the best engineering work asks us to keep expanding what
                we can understand and build.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/experience">View experience</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact me
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      <section className="border-y border-line/80 bg-[#fff4f8]/55 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Working principles"
            title="The values behind the code."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="surface rounded-[1.4rem] p-6">
                <h2 className="text-xl font-semibold text-copy">
                  {principle.title}
                </h2>
                <p className="mt-3 leading-7 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

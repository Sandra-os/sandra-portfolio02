import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="border-y border-line/80 bg-[#fff4f8]/55 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="Full-stack experience with a computer engineer's perspective."
          description="My background spans backend systems, web interfaces, cloud delivery, hardware design, and technical support. That range helps me reason about the complete system and the people depending on it."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="surface rounded-[1.4rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-[0_22px_55px_rgba(119,73,98,0.13)]"
            >
              <p className="grid size-9 place-items-center rounded-full bg-teal/9 text-sm font-bold text-teal">
                0{index + 1}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-copy">
                {principle.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

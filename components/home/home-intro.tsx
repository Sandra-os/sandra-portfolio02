import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/site";

export function HomeIntro() {
  return (
    <section className="border-y border-line/70 bg-surface/25 py-20 sm:py-24">
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
              className="surface rounded-xl p-6 transition hover:-translate-y-1 hover:border-teal/40"
            >
              <p className="text-sm font-bold text-teal">0{index + 1}</p>
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

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import {
  certifications,
  education,
  professionalDevelopment,
} from "@/data/education";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Sandra's software engineering experience and education.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Software, systems, and support experience."
        description="From scalable e-learning systems to hardware troubleshooting and computer engineering design, my work is connected by practical problem solving and measurable outcomes."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_280px] lg:gap-20">
          <section aria-labelledby="work-heading">
            <h2 id="work-heading" className="text-2xl font-semibold text-copy">
              Work experience
            </h2>
            <ol className="mt-9 space-y-10">
              {experiences.map((experience) => (
                <li
                  key={`${experience.company}-${experience.role}`}
                  className="relative border-l border-line pl-7 sm:pl-9"
                >
                  <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-teal shadow-[0_0_0_5px_rgba(20,184,166,0.12)]" />
                  <p className="text-sm font-semibold text-teal">
                    {experience.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-copy">
                    {experience.role}
                  </h3>
                  <p className="mt-1 font-medium text-sky">
                    {experience.company} / {experience.location}
                  </p>
                  <p className="mt-4 leading-7 text-muted">
                    {experience.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 leading-7 text-muted"
                      >
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-teal" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <aside>
            <div className="surface rounded-xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Education
              </h2>
              <div className="mt-6 space-y-8">
                {education.map((item) => (
                  <article key={item.institution}>
                    <h3 className="font-semibold text-copy">{item.program}</h3>
                    <p className="mt-1 text-sm text-sky">{item.institution}</p>
                    <p className="mt-2 text-sm text-muted">{item.period}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.details}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  Certifications
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  Professional development
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {professionalDevelopment.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

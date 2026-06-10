import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Tag } from "@/components/ui/tag";
import { currentlyExploring, skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and engineering strengths.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="A practical toolkit for building dependable products."
        description="I focus on strong web fundamentals and choose tools based on the problem, the team, and the long-term needs of the product."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section key={group.category} className="surface rounded-2xl p-7">
              <h2 className="text-2xl font-semibold text-copy">
                {group.category}
              </h2>
              <p className="mt-3 leading-7 text-muted">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-teal/25 bg-teal/7 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Currently exploring
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-copy">
            Learning stays part of the job.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            I keep expanding the depth of my engineering practice while staying
            grounded in shipping useful work.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {currentlyExploring.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-teal/20 bg-navy/50 px-4 py-2 text-sm font-medium text-copy"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}

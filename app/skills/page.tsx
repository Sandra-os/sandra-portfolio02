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
            <section key={group.category} className="surface rounded-[1.5rem] p-7 transition duration-300 hover:-translate-y-0.5 hover:border-teal/30">
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

        <section className="blossom-wash mt-10 rounded-[1.5rem] border border-teal/20 bg-gradient-to-br from-[#fff0f6] via-surface to-[#edf7fc] p-7 shadow-[0_18px_50px_rgba(119,73,98,0.08)] sm:p-9">
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
                className="rounded-full border border-teal/15 bg-surface/80 px-4 py-2 text-sm font-medium text-copy shadow-sm"
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

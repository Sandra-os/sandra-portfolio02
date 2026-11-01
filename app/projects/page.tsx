import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/data/projects";
export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Petal Relay and KinOS engineering case studies, followed by earlier frontend and computer engineering projects.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="From rules to real interactions."
        description="Selected product work, the engineering decisions behind it, and the foundations that came before."
      />
      <Container className="py-14 sm:py-20">
        <section aria-label="Selected work" className="divide-y divide-line">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </section>
        <section id="foundations" className="scroll-mt-28 pt-20">
          <h2 className="text-3xl">Earlier work / Engineering foundations</h2>
          <p className="mb-8 mt-4 max-w-2xl leading-7 text-muted">
            Frontend practice and academic computer engineering projects.
            Coursework is presented in its original context.
          </p>
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </section>
      </Container>
    </>
  );
}

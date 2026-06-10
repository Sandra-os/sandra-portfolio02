import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software engineering projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Building from problem to product."
        description="A growing collection of software projects, each approached with attention to user needs, engineering quality, and maintainable delivery."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </>
  );
}

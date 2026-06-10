import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects shaped around real problems."
            description="A few examples of how I think about product goals, implementation details, and the people using the result."
          />
          <ButtonLink
            href="/projects"
            variant="text"
            className="shrink-0 justify-start px-0"
          >
            View all projects
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

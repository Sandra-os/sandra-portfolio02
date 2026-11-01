import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="selected-work"
      className="scroll-mt-28 border-y border-line py-14 sm:py-20"
    >
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              Two products. Different constraints. Decisions you can inspect.
            </p>
          </div>
          <Link className="text-link" href="/projects">
            All work & foundations →
          </Link>
        </div>
        <div className="divide-y divide-line">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </Container>
    </section>
  );
}

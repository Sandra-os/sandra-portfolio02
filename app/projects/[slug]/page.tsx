import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  BlossomIcon,
} from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="blossom-photo relative overflow-hidden border-b border-line/80 py-14 sm:py-20">
        <div className="blossom-wash pointer-events-none absolute inset-0" />
        <BlossomIcon className="pointer-events-none absolute -right-12 -top-14 size-64 text-teal/8" />
        <Container className="relative">
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-muted transition hover:text-teal"
          >
            <ArrowLeftIcon className="size-4" />
            Back to projects
          </Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {project.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-copy sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {project.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
        </Container>
      </header>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-copy">Overview</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                {project.description}
              </p>
            </section>

            {[
              ["The challenge", project.challenge],
              ["The approach", project.solution],
              ["The outcome", project.outcome],
            ].map(([title, content]) => (
              <section key={title} className="border-t border-line pt-10">
                <h2 className="text-2xl font-semibold text-copy">{title}</h2>
                <p className="mt-4 text-lg leading-8 text-muted">{content}</p>
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="surface rounded-[1.4rem] p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Project highlights
              </h2>
              <ul className="mt-5 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {project.githubUrl ? (
              <div className="flex flex-col gap-3">
                <ButtonLink
                  href={project.githubUrl}
                  external
                  variant="primary"
                >
                  View project repository
                  <ArrowUpRightIcon className="size-4" />
                </ButtonLink>
              </div>
            ) : null}
          </aside>
        </div>
      </Container>
    </>
  );
}

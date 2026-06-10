import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const accents = {
    teal: "from-[#f4bfd3]/70 via-[#fff0f6] to-[#eef7fc]",
    blue: "from-[#c7e1f1]/75 via-[#f8f4fb] to-[#fff0f6]",
    mixed: "from-[#f4c7db]/65 via-[#f7f2fb] to-[#cce5f2]/65",
  };

  return (
    <article className="surface group flex h-full flex-col overflow-hidden rounded-[1.6rem] transition duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-[0_24px_60px_rgba(119,73,98,0.14)]">
      <div
        className={cn(
          "relative flex min-h-48 items-end overflow-hidden border-b border-line bg-gradient-to-br p-6",
          accents[project.accent],
        )}
      >
        <div className="absolute -right-8 -top-12 size-48 rounded-full border border-white/50" />
        <div className="absolute -right-1 top-0 size-32 rounded-full border border-white/60" />
        <span className="petal right-14 top-8 [animation-delay:1s]" />
        <span className="petal right-24 top-16 scale-75 [animation-delay:2.6s]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            {project.eyebrow}
          </p>
          <p className="mt-2 font-mono text-sm text-muted">
            /projects/{project.slug}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-copy">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring rounded-sm transition group-hover:text-teal"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-4 flex-1 leading-7 text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="focus-ring mt-7 inline-flex w-fit items-center gap-2 rounded text-sm font-semibold text-teal transition hover:text-sky"
        >
          View case study
          <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  if (!project.featured) {
    return (
      <article className="grid gap-3 border-t border-line py-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
        <div>
          <h3 className="text-xl">
            <Link
              className="text-link text-copy"
              href={`/projects/${project.slug}`}
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-muted">{project.eyebrow}</p>
        </div>
        <div>
          <p className="leading-7 text-muted">{project.summary}</p>
          <Link
            className="text-link mt-3 inline-block"
            href={`/projects/${project.slug}`}
          >
            Project details →
          </Link>
        </div>
      </article>
    );
  }
  return (
    <article className="grid items-center gap-8 py-10 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-14">
      <div className="order-2 md:order-1">
        <p className="text-sm font-semibold text-teal">{project.status}</p>
        <h3 className="mt-3 text-3xl sm:text-4xl">
          <Link
            className="focus-ring rounded"
            href={`/projects/${project.slug}`}
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          {project.summary}
        </p>
        <p className="mt-5 text-sm leading-6 text-muted">
          {project.technologies.slice(0, 4).join(" / ")}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Read {project.title} case study →
          </Link>
          {project.liveUrl ? (
            <a className="text-link" href={project.liveUrl}>
              Play Petal Relay ↗
            </a>
          ) : null}
          <span className="text-sm text-muted">Source private</span>
        </div>
      </div>
      {project.slug === "petal-relay" ? (
        <Link
          href="/projects/petal-relay"
          className="focus-ring order-1 block overflow-hidden rounded-2xl border border-line bg-[#f7f9f6] md:order-2"
          aria-label="Petal Relay case study: public beta game capture"
        >
          <Image
            src="/images/petal-relay-beta.png"
            alt="Petal Relay public beta: a flower puzzle board with semantic controls, Undo and checked hints."
            width={1200}
            height={900}
            sizes="(min-width: 768px) 46vw, 100vw"
            className="h-auto w-full"
          />
        </Link>
      ) : (
        <div className="order-1 rounded-2xl border border-line bg-[#f2f5f7] px-7 py-9 md:order-2 sm:px-10">
          <p className="text-sm font-medium text-muted">
            Architecture at a glance
          </p>
          <ol
            className="mt-6 space-y-0"
            aria-label="KinOS request and data flow"
          >
            {[
              ["Web + mobile", "Typed clients and shared domain logic"],
              ["Authorized API", "Household membership and role checks"],
              ["PostgreSQL", "Persistent plans, tasks and events"],
            ].map(([title, detail], i) => (
              <li key={title} className="border-t border-copy/15 py-4">
                <p className="flex items-baseline gap-4 text-lg font-semibold">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  {title}
                </p>
                <p className="mt-1 pl-8 text-sm leading-6 text-muted">
                  {detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-5 text-muted">
            Conceptual architecture · synthetic-data beta
          </p>
        </div>
      )}
    </article>
  );
}

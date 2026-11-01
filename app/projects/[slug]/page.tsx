import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteInfo } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — ${p.featured ? "Engineering case study" : "Project"}`,
    description: p.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${p.title} | ${siteInfo.name}`,
      description: p.summary,
      url: `/projects/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} | ${siteInfo.name}`,
      description: p.summary,
    },
  };
}
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();
  const sections = p.sections ?? [
    { title: "The challenge", paragraphs: [p.challenge] },
    { title: "The approach", paragraphs: [p.solution] },
    { title: "The outcome", paragraphs: [p.outcome] },
  ];
  return (
    <>
      <header className="border-b border-line py-12 sm:py-16">
        <Container>
          <Link href="/projects" className="text-link text-sm">
            ← All work
          </Link>
          <p className="mt-9 text-sm font-semibold text-teal">
            {p.status ?? p.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl tracking-[-0.03em] sm:text-6xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">
            {p.summary}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            {p.liveUrl ? (
              <ButtonLink href={p.liveUrl}>
                {p.slug === "petal-relay"
                  ? "Play Petal Relay ↗"
                  : "Open live demo ↗"}
              </ButtonLink>
            ) : null}
            {p.githubUrl ? (
              <ButtonLink href={p.githubUrl} variant="secondary">
                View public source ↗
              </ButtonLink>
            ) : null}
            {p.sourcePrivate ? (
              <span className="text-sm text-muted">Source private</span>
            ) : null}
          </div>
        </Container>
      </header>
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-20">
          <div className="min-w-0">
            <section>
              <h2 className="text-3xl">Overview</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                {p.description}
              </p>
              {p.role ? (
                <p className="mt-5 leading-7 text-muted">
                  <strong className="text-copy">My role.</strong> {p.role}
                </p>
              ) : null}
            </section>
            {p.slug === "petal-relay" ? (
              <figure className="my-10">
                <Image
                  src="/images/petal-relay-beta.png"
                  alt="A real capture of the Petal Relay public beta, showing its flower board and player controls."
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="h-auto w-full rounded-xl border border-line"
                />
                <figcaption className="mt-3 text-sm leading-6 text-muted">
                  Public beta capture, November 1, 2026. Original vector game
                  art.
                </figcaption>
              </figure>
            ) : null}
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index + 1}`}
                className="mt-10 scroll-mt-28 border-t border-line pt-9"
              >
                <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
                {section.paragraphs.map((text) => (
                  <p key={text} className="mt-5 text-lg leading-8 text-muted">
                    {text}
                  </p>
                ))}
              </section>
            ))}
            <div className="mt-12 flex flex-wrap gap-7 border-t border-line pt-8">
              <Link
                className="text-link"
                href={
                  p.slug === "petal-relay"
                    ? "/projects/kinos"
                    : "/projects/petal-relay"
                }
              >
                {p.slug === "petal-relay"
                  ? "Next: KinOS"
                  : "Explore Petal Relay"}{" "}
                →
              </Link>
              <Link className="text-link" href="/contact">
                Discuss the work →
              </Link>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-lg font-semibold">Project context</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              {p.technologies.join(" / ")}
            </p>
            <ul className="mt-6 space-y-3 border-y border-line py-6">
              {p.highlights.map((h) => (
                <li key={h} className="text-sm leading-6 text-muted">
                  {h}
                </li>
              ))}
            </ul>
            {p.sections ? (
              <nav aria-label="Case study sections" className="mt-6">
                <p className="font-semibold">In this case study</p>
                <ol className="mt-3 space-y-3">
                  {sections.map((s, i) => (
                    <li key={s.title}>
                      <a
                        className="text-link text-sm font-normal"
                        href={`#section-${i + 1}`}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
          </aside>
        </div>
      </Container>
    </>
  );
}

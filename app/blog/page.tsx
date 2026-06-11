import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/page-header";
import { Tag } from "@/components/ui/tag";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Sandra Ogbudinkpa's writing on software engineering, learning, balance, and building a thoughtful career in technology.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Thoughts from the learning journey."
        description="Reflections on software engineering, continuous learning, and the human side of building a career in technology."
      />

      <Container className="py-16 sm:py-20">
        <section aria-labelledby="published-articles">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Published writing
            </p>
            <h2
              id="published-articles"
              className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-copy sm:text-4xl"
            >
              Lessons worth sharing.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Notes from my experience learning, problem-solving, and growing
              as an engineer.
            </p>
          </div>

          <div className="mt-10 space-y-7">
            {blogPosts.map((post) => (
              <article
                key={post.url}
                className="surface group overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_24px_60px_rgba(119,73,98,0.14)]"
              >
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring relative block min-h-64 overflow-hidden bg-[#f3d5e2]"
                    aria-label={`Read ${post.title} on ${post.source}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-copy/18 via-transparent to-transparent" />
                  </Link>

                  <div className="flex flex-col p-7 sm:p-9">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                      <span className="font-semibold text-teal">
                        {post.source}
                      </span>
                      <span aria-hidden="true">/</span>
                      <time dateTime={post.publishedAt}>
                        {post.publishedLabel}
                      </time>
                      <span aria-hidden="true">/</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-copy">
                      <Link
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring rounded-sm transition group-hover:text-teal"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 font-medium leading-7 text-copy">
                      {post.description}
                    </p>
                    <p className="mt-4 flex-1 leading-7 text-muted">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <ButtonLink
                      href={post.url}
                      external
                      className="mt-8 w-fit"
                    >
                      Read the article
                      <ArrowUpRightIcon className="size-4" />
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

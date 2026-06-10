import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/page-header";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteInfo.name} about software engineering opportunities and projects.`,
};

const fieldStyles =
  "focus-ring mt-2 w-full rounded-xl border border-line bg-surface/80 px-4 py-3 text-copy shadow-inner shadow-[#b77a9710] placeholder:text-muted/55 transition hover:border-teal/30";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the work ahead."
        description="Have a role, project, or engineering problem that could use a thoughtful collaborator? Send a note and tell me what you are working on."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <aside className="space-y-6">
            <div className="surface rounded-[1.4rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Email
              </p>
              <Link
                href={`mailto:${siteInfo.email}`}
                className="focus-ring mt-3 inline-block rounded text-lg font-semibold text-copy transition hover:text-teal"
              >
                {siteInfo.email}
              </Link>
              <p className="mt-3 text-sm leading-6 text-muted">
                The most direct way to reach me. I&apos;ll respond as soon as I can.
              </p>
              <a
                href={`tel:${siteInfo.phone.replaceAll("-", "")}`}
                className="focus-ring mt-4 inline-block rounded text-sm font-medium text-muted transition hover:text-teal"
              >
                {siteInfo.phone}
              </a>
            </div>

            <div className="surface rounded-[1.4rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Elsewhere
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["GitHub", siteInfo.github],
                  ["LinkedIn", siteInfo.linkedin],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-center justify-between rounded-xl border border-line bg-[#fff9fb]/70 px-4 py-3 text-sm font-medium text-muted transition hover:border-teal/40 hover:bg-[#fff2f7] hover:text-copy"
                  >
                    {label}
                    <ArrowUpRightIcon className="size-4 text-teal" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <form
            action={`mailto:${siteInfo.email}`}
            method="post"
            encType="text/plain"
            className="surface rounded-[1.6rem] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-copy">Send a message</h2>
            <p className="mt-3 leading-7 text-muted">
              This form opens your default email app with the details you enter.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-copy">
                Name
                <input
                  className={fieldStyles}
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="text-sm font-medium text-copy">
                Email
                <input
                  className={fieldStyles}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-copy">
              Subject
              <input
                className={fieldStyles}
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-copy">
              Message
              <textarea
                className={`${fieldStyles} min-h-40 resize-y`}
                name="message"
                placeholder="A little context about the role, project, or idea..."
                required
              />
            </label>

            <button
              type="submit"
              className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(194,79,124,0.22)] transition hover:bg-[#ad3f6b] sm:w-auto"
            >
              Send with email app
              <ArrowUpRightIcon className="size-4" />
            </button>
          </form>
        </div>
      </Container>
    </>
  );
}

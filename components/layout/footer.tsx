import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BlossomIcon } from "@/components/ui/icons";
import { siteInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-[#fff4f8]/75 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid size-8 place-items-center rounded-full bg-teal/10 text-teal">
            <BlossomIcon className="size-4" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-copy">
              {siteInfo.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              Software engineering rooted in systems thinking.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link className="focus-ring rounded text-muted transition hover:text-teal" href={siteInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="focus-ring rounded text-muted transition hover:text-teal" href={siteInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link className="focus-ring rounded text-muted transition hover:text-teal" href={`mailto:${siteInfo.email}`}>
            Email
          </Link>
        </div>

        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteInfo.shortName}
        </p>
      </Container>
    </footer>
  );
}

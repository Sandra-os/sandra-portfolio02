import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surface/30 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-copy">{siteInfo.name}</p>
          <p className="mt-1 text-sm text-muted">
            Software engineering rooted in systems thinking.
          </p>
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

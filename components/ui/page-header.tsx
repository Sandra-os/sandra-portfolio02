import { Container } from "@/components/ui/container";
import { BlossomIcon } from "@/components/ui/icons";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="blossom-photo relative overflow-hidden border-b border-line/80 py-16 sm:py-20">
      <div className="blossom-wash pointer-events-none absolute inset-0" />
      <BlossomIcon className="pointer-events-none absolute -right-10 -top-12 size-56 text-teal/8" />
      <Container className="relative">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-copy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      </Container>
    </header>
  );
}

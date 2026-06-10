import { Container } from "@/components/ui/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-line/70 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.12),transparent_32%)]" />
      <Container className="relative">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-copy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      </Container>
    </header>
  );
}

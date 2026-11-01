import { Container } from "@/components/ui/container";
type PageHeaderProps = { eyebrow: string; title: string; description: string };
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line py-14 sm:py-20">
      <Container>
        <h1 className="max-w-4xl text-4xl leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      </Container>
    </header>
  );
}

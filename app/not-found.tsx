import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[65vh] place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-copy">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you were looking for is not part of this portfolio.
        </p>
        <ButtonLink href="/" className="mt-7">
          Return home
        </ButtonLink>
      </div>
    </Container>
  );
}

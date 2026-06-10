import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  download = false,
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-teal text-navy shadow-[0_10px_30px_rgba(20,184,166,0.2)] hover:bg-teal/90",
    secondary:
      "border border-line bg-surface/70 text-copy hover:border-teal/60 hover:bg-line/30",
    text: "text-teal hover:text-sky",
  };

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition",
        styles[variant],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
    >
      {children}
    </Link>
  );
}

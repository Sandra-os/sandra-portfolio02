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
      "bg-teal text-navy shadow-[0_12px_30px_rgba(194,79,124,0.22)] hover:bg-[#ad3f6b] hover:shadow-[0_14px_34px_rgba(194,79,124,0.28)]",
    secondary:
      "border border-line bg-surface/80 text-copy shadow-sm hover:border-teal/45 hover:bg-[#fff2f7]",
    text: "text-teal hover:text-sky",
  };

  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300",
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

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div
      className={cn(
        "animate-rise",
        delay > 0 && `animate-delay-${delay}`,
        className,
      )}
    >
      {children}
    </div>
  );
}

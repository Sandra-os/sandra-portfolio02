import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-navy/60 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

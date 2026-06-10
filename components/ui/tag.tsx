import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#ead4df] bg-[#fff5f8]/90 px-3 py-1 text-xs font-medium text-[#765467]">
      {children}
    </span>
  );
}

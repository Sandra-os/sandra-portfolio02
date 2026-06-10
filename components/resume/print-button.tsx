"use client";

import { DownloadIcon } from "@/components/ui/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(194,79,124,0.22)] transition hover:bg-[#ad3f6b] print:hidden"
    >
      <DownloadIcon className="size-4" />
      Print or save as PDF
    </button>
  );
}

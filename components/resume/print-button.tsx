"use client";

import { DownloadIcon } from "@/components/ui/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-teal/90 print:hidden"
    >
      <DownloadIcon className="size-4" />
      Print or save as PDF
    </button>
  );
}

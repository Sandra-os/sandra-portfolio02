import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="border-t border-line pt-7 first:border-0 first:pt-0">
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

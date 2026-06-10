import type { Metadata } from "next";
import { PrintButton } from "@/components/resume/print-button";
import { ResumeSection } from "@/components/resume/resume-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { DownloadIcon } from "@/components/ui/icons";
import {
  certifications,
  education,
  professionalDevelopment,
} from "@/data/education";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${siteInfo.name}, ${siteInfo.role}.`,
};

export default function ResumePage() {
  return (
    <Container className="py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between print:hidden">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Resume
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-copy">
            Experience at a glance.
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteInfo.resumePath} download>
            <DownloadIcon className="size-4" />
            Download resume
          </ButtonLink>
          <PrintButton />
        </div>
      </div>

      <article className="surface mx-auto max-w-4xl rounded-2xl p-7 sm:p-11 print:max-w-none print:rounded-none print:border-0 print:p-0">
        <header className="flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-copy print:text-slate-900">
              {siteInfo.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-teal print:text-teal-700">
              {siteInfo.role}
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-muted print:text-slate-700">
              {siteInfo.summary}
            </p>
          </div>
          <address className="shrink-0 not-italic text-sm leading-7 text-muted print:text-slate-700">
            <p>{siteInfo.location}</p>
            <a href={`mailto:${siteInfo.email}`} className="hover:text-teal">
              {siteInfo.email}
            </a>
            <p>{siteInfo.phone}</p>
          </address>
        </header>

        <div className="mt-8 space-y-9">
          <ResumeSection title="Experience">
            <div className="space-y-8">
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.role}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-copy print:text-slate-900">
                        {experience.role}
                      </h3>
                      <p className="text-sm font-medium text-sky print:text-sky-700">
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted print:text-slate-600">
                      {experience.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-muted print:text-slate-700"
                      >
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-teal" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Skills">
            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="font-semibold text-copy print:text-slate-900">
                    {group.category}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted print:text-slate-700">
                    {group.skills.join(" / ")}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Education">
            {education.map((item) => (
              <article key={item.institution}>
                <h3 className="font-semibold text-copy print:text-slate-900">
                  {item.program}
                </h3>
                <p className="mt-1 text-sm text-sky print:text-sky-700">
                  {item.institution} / {item.period}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted print:text-slate-700">
                  {item.details}
                </p>
              </article>
            ))}
          </ResumeSection>

          <ResumeSection title="Certifications">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted print:text-slate-700">
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Professional Development">
            <ul className="grid gap-2 text-sm text-muted print:text-slate-700 sm:grid-cols-2">
              {professionalDevelopment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ResumeSection>
        </div>
      </article>
    </Container>
  );
}

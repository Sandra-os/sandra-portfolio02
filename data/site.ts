export const siteInfo = {
  name: "Sandra Ogbudinkpa",
  shortName: "Sandra",
  role: "Software Engineer",
  location: "Charlotte, North Carolina",
  email: "sandra.os325@gmail.com",
  phone: "862-704-9706",
  url: "https://sandra-ogbudinkpa.vercel.app",
  summary:
    "Computer engineer and software developer with 4+ years of experience building scalable applications with Python, Flask, Django, React, and modern cloud tooling.",
  availability: "Open to software engineering opportunities",
  github: "https://github.com/Sandra-os",
  linkedin: "https://www.linkedin.com/in/sandraogbudinkpa2/",
  resumePath: "/resume/sandra-ogbudinkpa-resume-2026.pdf",
  headline:
    "Software engineer building reliable full-stack products and thoughtful interactive experiences.",
  projectSummary:
    "Selected engineering work by Sandra Ogbudinkpa: a deterministic browser puzzle game and a private, synthetic-data family coordination beta.",
} as const;

export const navigation = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const principles = [
  {
    title: "Clarity over cleverness",
    description:
      "Readable code, direct communication, and interfaces that make the next step obvious.",
  },
  {
    title: "Built for real people",
    description:
      "Accessibility, performance, and responsive behavior are product requirements, not polish.",
  },
  {
    title: "Own the outcome",
    description:
      "I care about the problem before the implementation and the result after deployment.",
  },
] as const;

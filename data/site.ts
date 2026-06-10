export const siteInfo = {
  name: "Sandra Ogbudinkpa",
  shortName: "Sandra",
  role: "Software Engineer",
  location: "Charlotte, North Carolina",
  email: "sandra.os325@gmail.com",
  phone: "862-704-9706",
  summary:
    "Computer engineer and software developer with 4+ years of experience building scalable applications with Python, Flask, Django, React, and modern cloud tooling.",
  availability: "Open to software engineering opportunities",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  resumePath: "/resume/sandra-ogbudinkpa-resume-2026.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
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

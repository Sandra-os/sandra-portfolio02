export type Education = {
  institution: string;
  program: string;
  period: string;
  details: string;
};

export const education: Education[] = [
  {
    institution: "University of North Carolina at Charlotte",
    program:
      "Bachelor of Science in Computer Engineering, Minors in Electrical Engineering and Mathematics",
    period: "Charlotte, North Carolina",
    details:
      "Coursework included computer organization, embedded systems, data structures and algorithms, digital signal processing, VLSI systems design, electronics, and data communication and networking.",
  },
];

export const certifications = [
  "Python Programming Certificate",
  "Data Science with Python",
] as const;

export const professionalDevelopment = [
  "IEEE Robotics and Automation Society Member",
  "HTML5",
  "Project Management: Needs vs. Expectations",
  "Women in Leadership: Building Your Infrastructure for Leadership",
] as const;

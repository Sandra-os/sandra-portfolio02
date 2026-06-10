export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Development",
    description:
      "Languages and foundations used across application, systems, and web development.",
    skills: [
      "Python",
      "C/C++",
      "JavaScript",
      "VHDL",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Full-stack Web",
    description:
      "Building scalable backend services and user-facing web experiences.",
    skills: ["Django", "Flask", "React", "Node.js", "Express", "SQL"],
  },
  {
    category: "Cloud & DevOps",
    description:
      "Cloud development, containerized delivery, and collaborative engineering workflows.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Serverless Computing",
      "Git & GitHub",
      "Continuous Integration",
    ],
  },
  {
    category: "Data & AI",
    description:
      "Data-driven application development and machine learning foundations.",
    skills: [
      "Python for Data Science",
      "SQL Databases",
      "PyTorch",
      "Deep Learning",
      "AI Applications",
    ],
  },
  {
    category: "Systems & Engineering Tools",
    description:
      "Computer engineering, networking, design, and operating-system experience.",
    skills: [
      "TCP/IP",
      "VLAN",
      "Linux",
      "Windows",
      "macOS",
      "AutoCAD",
      "SolidWorks",
      "Eagle",
      "P-Spice",
      "MultiSim",
      "PCB Design",
    ],
  },
];

export const currentlyExploring = [
  "System design",
  "AI-driven applications",
  "Cloud architecture",
] as const;

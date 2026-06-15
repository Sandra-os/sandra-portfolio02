export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accent: "teal" | "blue" | "mixed";
};

export const projects: Project[] = [
  {
    slug: "bloomfit-fitness-tracker",
    title: "BloomFit Fitness Tracker",
    eyebrow: "React / Fitness dashboard",
    summary:
      "A polished React fitness dashboard for logging workouts, reviewing weekly performance, and visualizing progress over time.",
    description:
      "BloomFit is a portfolio-ready frontend application that helps users log workouts, track exercises, review weekly summaries, and understand progress with visual charts.",
    challenge:
      "Fitness tracking needs to feel quick and encouraging while still handling structured workout data, search, filters, summaries, and progress visualization.",
    solution:
      "I built a responsive React and Vite application with reusable components, localStorage persistence, Recharts visualizations, filtering, search, demo data, and utility tests with Vitest and Testing Library.",
    outcome:
      "The finished app gives users a friendly fitness dashboard with workout history, weekly stats, personal-best highlights, and a GitHub Pages deployment for live review.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Recharts",
      "Vitest",
      "GitHub Pages",
    ],
    highlights: [
      "Logs workouts with exercises, sets, reps, weight, cardio minutes, and notes",
      "Persists workout history with localStorage and supports search/filter workflows",
      "Includes charts, weekly summaries, personal-best highlights, and responsive layouts",
    ],
    githubUrl: "https://github.com/Sandra-os/fitness-tracker-app",
    liveUrl: "https://sandra-os.github.io/fitness-tracker-app/",
    featured: true,
    accent: "teal",
  },
  {
    slug: "task-manager-app",
    title: "Task Manager App",
    eyebrow: "React / Productivity app",
    summary:
      "A responsive React task management app for capturing tasks, organizing priorities, tracking due dates, and saving progress locally.",
    description:
      "The Task Manager App is a clean frontend project designed to help users manage everyday work with priorities, due dates, completion states, filtering, search, and local persistence.",
    challenge:
      "A task tool needs to stay simple enough for fast capture while still supporting the organization features people expect when their task list grows.",
    solution:
      "I built the app with React, Vite, reusable components, utility functions, localStorage persistence, priority and status filters, search, and clear loading, empty, and error states.",
    outcome:
      "The result is a portfolio-ready productivity application with a responsive interface and a maintainable frontend structure that can grow into categories, recurring tasks, or cloud sync.",
    technologies: ["React", "Vite", "JavaScript", "CSS", "localStorage"],
    highlights: [
      "Supports adding, editing, deleting, completing, searching, and filtering tasks",
      "Tracks due dates, overdue states, and high, medium, and low priorities",
      "Uses localStorage and responsive layouts for a smooth single-page app experience",
    ],
    githubUrl: "https://github.com/Sandra-os/task-manager-app",
    featured: true,
    accent: "mixed",
  },
  {
    slug: "real-time-product-marking",
    title: "Real-time Product Marking",
    eyebrow: "Senior design / Industrial automation",
    summary:
      "A Pallet Tower control program that measures corner-board length and speed, then signals a printer to apply the correct marking.",
    description:
      "A senior design project focused on coordinating user specifications, sensor measurements, and printer instructions in a real-time industrial workflow.",
    challenge:
      "The system needed to translate an operator's specifications into reliable timing and measurement signals for physical equipment.",
    solution:
      "I developed the control program in CLICK software to accept user specifications, trigger a sensor, evaluate corner-board length and speed, and direct the printer.",
    outcome:
      "The completed workflow connected sensing and marking operations into one coordinated product-marking process.",
    technologies: ["CLICK PLC", "Sensors", "Automation", "System Design"],
    highlights: [
      "Translated user specifications into machine-control logic",
      "Coordinated real-time sensor measurements and printer signals",
      "Delivered as a year-long computer engineering senior design project",
    ],
    featured: true,
    accent: "teal",
  },
  {
    slug: "uart-design",
    title: "UART Communication System",
    eyebrow: "Digital systems design",
    summary:
      "A Universal Asynchronous Receiver-Transmitter design with baud-rate generation, receiving, transmitting, and verification subsystems.",
    description:
      "A hardware communication project designed to send and receive system memory contents across multiple ChromeOS laptops.",
    challenge:
      "The system required accurate pulse timing, verified receive behavior, and dependable communication across devices separated by a long distance.",
    solution:
      "I designed the baud-rate generator and receiving subsystem, wrote a testbench to verify output pulses, and implemented the transmitter.",
    outcome:
      "The final system supported memory-content communication between multiple ChromeOS laptops positioned 800 meters apart.",
    technologies: ["VHDL", "UART", "Testbenches", "Digital Logic"],
    highlights: [
      "Designed baud-rate generation and receive subsystems",
      "Built verification testbenches for timing behavior",
      "Implemented long-distance send and receive communication",
    ],
    featured: true,
    accent: "blue",
  },
  {
    slug: "32-bit-processor",
    title: "32-bit Processor",
    eyebrow: "Computer architecture / Project lead",
    summary:
      "A VHDL processor design with a custom datapath, control unit, and both single-cycle and pipelined implementations.",
    description:
      "A three-person computer organization project to design, implement, and simulate a working 32-bit processor.",
    challenge:
      "The team needed to translate an instruction set into coordinated processor components while verifying behavior across the complete design.",
    solution:
      "As project lead, I wrote the VHDL for the processor design and created the testbench used to simulate and validate the implementation.",
    outcome:
      "The team successfully delivered a 32-bit processor with a datapath and control unit for single-cycle and pipelined execution.",
    technologies: ["VHDL", "Computer Architecture", "Pipelining", "Simulation"],
    highlights: [
      "Led a three-person engineering team",
      "Authored the complete VHDL design and simulation testbench",
      "Implemented single-cycle and pipelined processor approaches",
    ],
    featured: true,
    accent: "mixed",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

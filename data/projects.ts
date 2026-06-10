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
  featured: boolean;
  accent: "teal" | "blue" | "mixed";
};

export const projects: Project[] = [
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

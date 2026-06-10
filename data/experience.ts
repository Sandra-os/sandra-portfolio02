export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "Saidatech LLC",
    role: "Software Developer",
    period: "August 2020 - Present",
    location: "New York, New York",
    summary:
      "Engineering full-stack and cloud-based features for a scalable e-learning platform serving more than 130,000 users.",
    achievements: [
      "Built and maintained Python, Flask, and Django back-end systems, increasing system efficiency by 25% and reducing server downtime by 15%.",
      "Integrated SQL databases with Python to support optimized data handling for more than 130,000 users.",
      "Developed microservices and partnered with the AI team on personalized content delivery, improving results by 35%.",
      "Helped move monolithic services toward serverless functions using Docker, Kubernetes, and OpenShift.",
      "Collaborated on React interfaces that improved platform user-experience ratings by 9%.",
      "Used Git, GitHub, continuous integration, and testing practices to reduce code integration issues.",
    ],
  },
  {
    company: "iQor",
    role: "Technical Support Representative",
    period: "July 2023 - January 2024",
    location: "Charlotte, North Carolina",
    summary:
      "Resolved complex hardware and product issues while delivering clear, efficient support to customers.",
    achievements: [
      "Achieved a first-call resolution rate above 95% for intricate hardware issues while exceeding company KPIs.",
      "Maintained a 99.5% positive feedback rate through clear guidance across a broad range of products and services.",
      "Applied structured problem-solving methods that contributed to a 25% reduction in escalations.",
    ],
  },
  {
    company: "University of North Carolina at Charlotte",
    role: "IT Customer Service Desk Assistant",
    period: "February 2022 - February 2023",
    location: "Charlotte, North Carolina",
    summary:
      "Supported campus residents and staff through organized technical resources, process improvements, and peer mentorship.",
    achievements: [
      "Improved digital information organization and accessibility for campus residents and staff.",
      "Mentored new hires and helped build a stronger foundation for their technical support responsibilities.",
      "Introduced resource and data-management strategies that improved process efficiency and user satisfaction.",
    ],
  },
  {
    company: "RadicalX",
    role: "Software Engineer Intern",
    period: "April 2020 - August 2020",
    location: "New York, New York",
    summary:
      "Contributed to software features and frontend experiences as part of an Agile engineering team.",
    achievements: [
      "Designed, coded, and validated C++ features that increased software performance by 20%.",
      "Contributed to frontend development using HTML, CSS, and JavaScript to improve the user experience.",
    ],
  },
  {
    company: "Engineering, UNC Charlotte",
    role: "CAD Engineer Intern",
    period: "May 2019 - April 2020",
    location: "Charlotte, North Carolina",
    summary:
      "Produced detailed PCB designs and engineering documentation with an emphasis on quality and practical constraints.",
    achievements: [
      "Used AutoCAD and Eagle to deliver intricate PCB designs 15% faster than the department average.",
      "Developed solutions that met strict budget requirements without compromising design quality.",
    ],
  },
  {
    company: "University of North Carolina at Charlotte",
    role: "Resident Advisor",
    period: "October 2018 - December 2021",
    location: "Charlotte, North Carolina",
    summary:
      "Supported a large residential community through programming, communication, and rapid response to resident needs.",
    achievements: [
      "Introduced more than 500 students to extracurricular groups and campus involvement opportunities.",
      "Responded quickly to resident needs, facility concerns, and emergencies while maintaining strong resident satisfaction.",
    ],
  },
];

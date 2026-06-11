export type BlogPost = {
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  url: string;
  image: string;
  imageAlt: string;
  source: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Functioning or Functions",
    description:
      "A reflection on balancing the demands of learning to code with responsibilities, rest, and self-care.",
    excerpt:
      "The world of coding can be a storm of non-stop learning, constant challenges, and exciting problem-solving. Finding balance means planning flexibly, prioritizing thoughtfully, and treating downtime as an important part of learning.",
    publishedAt: "2023-07-28",
    publishedLabel: "July 28, 2023",
    readingTime: "1 min read",
    url: "https://dev.to/sandraos/functioning-or-functions-5co8",
    image: "/images/functioning-or-functions.jpg",
    imageAlt: "Colorful DEV Community illustration with coding interface elements",
    source: "DEV Community",
    tags: ["Beginners", "JavaScript", "Git", "CodeNewbie"],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string; // Path to project image
  fallbackIcon?: string; // Fallback icon if no image
  fallbackGradient?: {
    from: string;
    to: string;
  };
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "ai-recommendation",
    title: "AI-Powered Recommendation Engine",
    description: "Developed a personalized content recommendation system using collaborative filtering and deep learning models.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
    image: "/projects/trackify.png",
    fallbackIcon: "🤖",
    fallbackGradient: {
      from: "from-blue-100 dark:from-blue-900",
      to: "to-purple-100 dark:to-purple-900"
    }
  },
  {
    id: "portfolio-website",
    title: "Modern Portfolio Website",
    description: "Built a full-stack portfolio website with admin dashboard, contact management, and responsive design using modern web technologies.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker"],
    image: "/projects/tempfile.png",
    fallbackIcon: "💼",
    fallbackGradient: {
      from: "from-purple-100 dark:from-purple-900",
      to: "to-pink-100 dark:to-pink-900"
    }
  },
  {
    id: "microservices",
    title: "Scalable Microservices Platform",
    description: "Designed and implemented a cloud-native microservices architecture for a large-scale e-commerce application.",
    technologies: ["Golang", "gRPC", "Spring Boot", "AWS", "Terraform"],
    // image: "/projects/microservices.jpg", // Add when available
    fallbackIcon: "⚡",
    fallbackGradient: {
      from: "from-orange-100 dark:from-orange-900",
      to: "to-red-100 dark:to-red-900"
    }
  }
];
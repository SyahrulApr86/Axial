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
    id: "object-detection",
    title: "Real-time Object Detection API",
    description: "Built a high-performance API for real-time object detection in video streams using YOLOv8.",
    technologies: ["Python", "YOLO", "TensorFlow", "NestJS", "Kubernetes"],
    image: "/projects/tempfile.png",
    fallbackIcon: "👁️",
    fallbackGradient: {
      from: "from-green-100 dark:from-green-900",
      to: "to-teal-100 dark:to-teal-900"
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
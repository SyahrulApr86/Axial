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
    id: "trackify",
    title: "Trackify",
    description: "A modern task and note management application that helps you organize work with a Kanban board, daily notes, customizable categories, tagging system, reminders, and real-time capabilities.",
    technologies: [
      "React", "Vite", "Radix UI", "Shadcn", "Zustand",
      "Supabase", "Docker"
    ],
    image: "/projects/trackify.png",
    fallbackIcon: "📝",
    fallbackGradient: {
      from: "from-yellow-100 dark:from-yellow-900",
      to: "to-orange-100 dark:to-orange-900"
    }
  },
  {
    id: "portfolio-website",
    title: "Axial",
    description: "Built a portfolio website with admin dashboard, contact management, and responsive design using modern web technologies.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Three.js"],
    image: "/projects/axial.png",
    fallbackIcon: "💼",
    fallbackGradient: {
      from: "from-purple-100 dark:from-purple-900",
      to: "to-pink-100 dark:to-pink-900"
    }
  },
  {
    id: "tempfile",
    title: "TempFile.Link",
    description: "A web app designed to make managing temporary files effortless. Store, organise, and share your temporary files securely.",
    technologies: ["Golang", "Nuxt.js", "AWS", "Terraform"],
    image: "/projects/tempfile.png",
    fallbackIcon: "⚡",
    fallbackGradient: {
      from: "from-orange-100 dark:from-orange-900",
      to: "to-red-100 dark:to-red-900"
    }
  },
  {
    id: "marvel-dc-search",
    title: "Marvel vs DC Film Search Engine",
    description: "Semantic web application that provides intelligent search capabilities for Marvel and DC films.",
    technologies: ["Django", "Python", "GraphDB", "SPARQL", "RDF/Turtle", "Redis", "Docker", "Bootstrap", "JavaScript"],
    image: "/projects/marvel-dc.png",
    fallbackIcon: "🎬",
    fallbackGradient: {
      from: "from-green-100 dark:from-green-900",
      to: "to-teal-100 dark:to-teal-900"
    }
  },
  {
    id: "smart-retail-analytics",
    title: "Smart Retail Analytics Platform",
    description: "A machine learning-based retail analytics platform for rule mining in customer purchasing patterns. Implements the CRISP-DM methodology with advanced algorithms to deliver actionable business insights.",
    technologies: ["Streamlit", "Python", "Scikit-learn", "Pandas", "Plotly"],
    image: "/projects/smart-retail.png",
    fallbackIcon: "📊",
    fallbackGradient: {
      from: "from-indigo-100 dark:from-indigo-900",
      to: "to-blue-100 dark:to-blue-900"
    }
  },
  {
    id: "camsight",
    title: "CamSight",
    description: "A web application that provides real-time object detection and tracking using computer vision techniques.",
    technologies: ["FastAPI", "YOLO", "Next.js", "Websocket"],
    image: "/projects/camsight.png",
    fallbackIcon: "👁️",
    fallbackGradient: {
      from: "from-indigo-100 dark:from-indigo-900",
      to: "to-blue-100 dark:to-blue-900"
    }
  }
];
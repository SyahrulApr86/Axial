export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string; // Path to project image
  link?: string; // Live project URL
  github?: string; // GitHub repository URL
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
    link: "https://trackify.rul.blue/",
    github: "https://github.com/SyahrulApr86/Trackify"
  },
  {
    id: "portfolio-website",
    title: "Axial",
    description: "Built a portfolio website with admin dashboard, contact management, and responsive design using modern web technologies.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Three.js"],
    image: "/projects/axial.png",
    link: "https://rul.blue/",
    github: "https://github.com/SyahrulApr86/Axial"
  },
  {
    id: "tempfile",
    title: "TempFile.Link",
    description: "A web app designed to make managing temporary files effortless. Store, organise, and share your temporary files securely.",
    technologies: ["Golang", "Nuxt.js", "AWS", "Terraform"],
    image: "/projects/tempfile.png",
    link: "https://tempfile.rul.blue/",
    github: "https://github.com/orgs/TempFileLink/repositories"
  },
  {
    id: "marvel-dc-search",
    title: "Marvel vs DC Film Search Engine",
    description: "Semantic web application that provides intelligent search capabilities for Marvel and DC films.",
    technologies: ["Django", "Python", "GraphDB", "SPARQL", "RDF/Turtle", "Redis", "Docker", "Bootstrap", "JavaScript"],
    image: "/projects/marvel-dc.png",
    link: "https://marveldc.rul.blue/",
    github: "https://github.com/SyahrulApr86/Marvel-vs-DC-Search-Engine"
  },
  {
    id: "smart-retail-analytics",
    title: "Smart Retail Analytics Platform",
    description: "A machine learning-based retail analytics platform for rule mining in customer purchasing patterns. Implements the CRISP-DM methodology with advanced algorithms to deliver actionable business insights.",
    technologies: ["Streamlit", "Python", "Scikit-learn", "Pandas", "Plotly"],
    image: "/projects/smart-retail.png",
    link: "https://datamining.rul.blue/"
  },
  {
    id: "camsight",
    title: "CamSight",
    description: "A web application that provides real-time object detection and tracking using computer vision techniques.",
    technologies: ["FastAPI", "YOLO", "Next.js", "Websocket"],
    image: "/projects/camsight.png",
    github: "https://github.com/SyahrulApr86/CamSight",
  },
  {
    id: "asisten",
    title: "Asisten",
    description: "A Web Wrapper for SiAsisten CS UI with better UI/UX and additional features.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    image: "/projects/asisten.png",
    link: "https://asisten.rul.blue/",
    github: "https://github.com/SyahrulApr86/AsistenManager"
  },
  {
    id: "chronica",
    title: "Chronica",
    description: "A modern, elegant calendar application built with Next.js and NestJS that revolutionizes how you manage your time and schedule events.",
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/chronica.png",
    link: "https://chronica.rul.blue/",
    github: "https://github.com/SyahrulApr86/Chronica"
  },
  {
    id: "markify",
    title: "Markify",
    description: "Markify is a web application that allows you to easily convert text into markdown and preview it in real-time.",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/markify.png",
    link: "https://markify.rul.blue/",
    github: "https://github.com/SyahrulApr86/Markify"
  },
  {
    id: "point-of-sale",
    title: "POS System PT Galerry Merah Putih",
    description: "An integrated POS system for PT Galerry Merah Putih, enabling seamless management of furniture sales both online and offline, with comprehensive record-keeping and unified reporting.",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
    image: "/projects/pos.png",
    link: "https://pos.rul.blue/"
  },
  {
    id: "wiiks",
    title: "Wiiks",
    description: "Wiiks is a web-based application that allows users to efficiently organize their weekly schedules.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    image: "/projects/wiiks.png",
    link: "https://wiiks.rul.blue/",
    github: "https://github.com/SyahrulApr86/Wiiks"
  }
];
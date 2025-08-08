export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "Golang", "Java", "TypeScript", "JavaScript"]
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: ["FastAPI", "NestJS", "Nuxt.js", "Django", "Spring Boot"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Terraform", "Ansible", "Docker", "Kubernetes"]
  },
  {
    id: "data-ml",
    title: "Data & ML",
    skills: ["PyTorch", "scikit-learn", "Pandas", "YOLO", "TensorFlow"]
  }
];
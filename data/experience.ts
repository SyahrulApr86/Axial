export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI Engineer",
    company: "Innovate AI Corp.",
    period: "Jan 2022 - Present",
    description: "Leading the development of machine learning models for NLP and computer vision applications. Architecting and deploying scalable AI solutions on AWS and GCP."
  },
  {
    id: "software-engineer",
    title: "Software Engineer", 
    company: "Tech Solutions Inc.",
    period: "Jun 2019 - Dec 2021",
    description: "Developed and maintained RESTful APIs and microservices using Django and Spring Boot. Managed CI/CD pipelines and containerized applications with Docker."
  }
];
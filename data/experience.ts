export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    id: "teaching-assistant-ui",
    title: "Teaching Assistant",
    company: "Faculty of Computer Science, Universitas Indonesia",
    period: "Jul 2022 - Present",
    location: "Depok, West Java, Indonesia",
    description: "Served as Teaching Assistant across multiple computer science and mathematics courses for over 3+ years, including Reinforcement Learning, Deep Learning, Statistics, Linear Algebra, Calculus, and many more. Led coordination roles managing 5+ TAs and supporting 500+ students, while evaluating assignments and providing comprehensive academic support.",
    skills: ["Teaching", "Machine Learning", "Linear Algebra", "Data Structures", "Algorithms", "Calculus", "Discrete Mathematics", "Management", "Leadership", "Problem Solving"]
  },
  {
    id: "internship-abhinaya",
    title: "Software Engineering Intern",
    company: "PT Abhinaya Carva Utama",
    period: "Jun 2024 - Aug 2024",
    location: "Kota Bogor, Jawa Barat, Indonesia",
    description: "Developed backend systems using Django framework with Redis caching and Celery for background task processing.",
    skills: ["Django", "Redis", "Celery", "PostgreSQL"]
  },
  {
    id: "private-tutor-2023",
    title: "Private Tutor",
    company: "Faculty of Computer Science, Universitas Indonesia",
    period: "Sep 2023 - Jan 2024",
    description: "Privately tutored students in Databases, Linear Algebra, Statistics and Probability, and Discrete Math 2 courses intensively.",
    skills: ["Mathematics", "Logical Approach", "Databases", "Statistics", "Linear Algebra", "Discrete Mathematics"]
  }
];
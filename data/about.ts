export interface AboutInfo {
  title: string;
  description: string;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const aboutInfo: AboutInfo = {
  title: "About Me",
  description: "I'm a fresh graduate in Computer Science from Universitas Indonesia, passionate about building impactful and intelligent systems.\nMy interests span across machine learning, backend engineering, data systems, and cloud infrastructure — where algorithms, architecture, and scale converge.\n\nOver the past few years, I've built and deployed AI-powered recommendation engines, real-time detection APIs, and cloud-native microservices using tools like Python, Go, FastAPI, NestJS, and AWS. I enjoy working with data — from preprocessing pipelines to training deep learning models — and continuously explore how to make systems smarter and more adaptive.\n\nCurrently, I'm diving deeper into AI agents, ML workflows, and scalable backend design, with the goal of creating technology that's not only efficient, but also meaningful.\n\nDriven by curiosity and a bias for action, I thrive in environments that challenge both my technical and creative thinking.",
  highlights: [],
  stats: []
};
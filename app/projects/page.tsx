import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

interface ProjectGridCardProps {
  project: Project;
}

function ProjectGridCard({ project }: ProjectGridCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-black border-neutral-200 dark:border-neutral-700">
      <Link href={`/projects/${project.id}`}>
        <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          )}
        </div>
      </Link>
      
      <CardHeader className="bg-white dark:bg-black">
        <CardTitle className="text-lg text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/projects/${project.id}`}>
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="bg-white dark:bg-black">
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Project Links */}
        <div className="mt-4 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="bg-neutral-100/70 dark:bg-neutral-900/70 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="text-neutral-600 dark:text-neutral-300">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
            A comprehensive collection of my work, showcasing various technologies and solutions I've built.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
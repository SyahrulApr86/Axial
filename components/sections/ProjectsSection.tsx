import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.image && project.image.length > 0;

  return (
    <Card className="flex-shrink-0 w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-neutral-900">
      <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {hasImage ? (
          <>
            {/* Real Project Image with seamless fade mask */}
            <div className="absolute inset-0 m-0 p-0">
              <Image
                src={project.image!}
                alt={project.title}
                fill
                className="object-cover object-top grayscale m-0 p-0"
              />
            </div>
            
            {/* Seamless fade-out mask - blends image into card background */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, 
                  transparent 0%, 
                  transparent 40%, 
                  rgba(255, 255, 255, 0.1) 60%, 
                  rgba(255, 255, 255, 0.7) 80%, 
                  rgba(255, 255, 255, 0.95) 95%, 
                  white 100%
                )`
              }}
            />
            
            {/* Dark theme mask overlay */}
            <div 
              className="absolute inset-0 pointer-events-none dark:block hidden"
              style={{
                background: `linear-gradient(to bottom, 
                  transparent 0%, 
                  transparent 40%, 
                  rgba(23, 23, 23, 0.1) 60%, 
                  rgba(23, 23, 23, 0.7) 80%, 
                  rgba(23, 23, 23, 0.95) 95%, 
                  rgb(23, 23, 23) 100%
                )`
              }}
            />
          </>
        ) : (
          <>
            {/* Fallback Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient?.from} ${project.fallbackGradient?.to}`} />
            {/* Fallback Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">{project.fallbackIcon}</div>
            </div>
          </>
        )}
        
      </div>
      
      <CardHeader className="relative z-10 bg-white dark:bg-neutral-900 pt-4">
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 bg-white dark:bg-neutral-900">
        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
          {project.description}
        </p>
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-neutral-200 backdrop-blur-sm dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">
          Projects
        </h2>
      </div>
      
      {/* Full Width Horizontal Scrolling Container */}
      <div className="mt-12 w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 pl-4 md:pl-6 pb-4 animate-scroll">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {/* Duplicate for seamless loop */}
          {projects.map((project) => (
            <ProjectCard key={`${project.id}-duplicate`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
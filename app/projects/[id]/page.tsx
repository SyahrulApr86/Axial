import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Code } from "lucide-react";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="bg-neutral-100/70 dark:bg-neutral-900/70 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-neutral-600 dark:text-neutral-300">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Image */}
            {project.image && (
              <Card className="overflow-hidden mb-8 border-neutral-200 dark:border-neutral-700">
                <div className="relative w-full h-80 md:h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Card>
            )}

            {/* Project Description */}
            <Card className="mb-8 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">About This Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Technologies Used */}
            <Card className="border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-black dark:text-white flex items-center gap-2">
                  <Code size={20} />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 text-sm font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Links */}
            <Card className="mb-6 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Github size={20} className="text-neutral-600 dark:text-neutral-400" />
                    <div>
                      <div className="font-medium text-black dark:text-white">View Source Code</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">GitHub Repository</div>
                    </div>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ExternalLink size={20} className="text-neutral-600 dark:text-neutral-400" />
                    <div>
                      <div className="font-medium text-black dark:text-white">Live Demo</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">View Project Online</div>
                    </div>
                  </a>
                )}
                {!project.github && !project.link && (
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    No external links available for this project.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card className="border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Code size={16} className="text-neutral-600 dark:text-neutral-400" />
                  <div>
                    <span className="font-medium text-black dark:text-white">Technologies:</span>
                    <span className="text-neutral-600 dark:text-neutral-300 ml-2">
                      {project.technologies.length} used
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-neutral-600 dark:text-neutral-400" />
                  <div>
                    <span className="font-medium text-black dark:text-white">Type:</span>
                    <span className="text-neutral-600 dark:text-neutral-300 ml-2">
                      Personal Project
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
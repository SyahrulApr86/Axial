'use client'

import { memo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"

interface LazyProjectCardProps {
  project: Project
}

const LazyProjectCard = memo(function LazyProjectCard({ project }: LazyProjectCardProps) {
  return (
    <Card className="flex-shrink-0 w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-black">
      <div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {project.image && (
          <>
            {/* Project Image with seamless fade mask */}
            <div className="absolute inset-0 m-0 p-0">
              <Image
                src={project.image}
                alt={`${project.title} - Project screenshot`}
                fill
                className="object-cover object-top grayscale m-0 p-0"
                sizes="320px"
                loading="lazy"
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
                  rgba(0, 0, 0, 0.1) 60%, 
                  rgba(0, 0, 0, 0.7) 80%, 
                  rgba(0, 0, 0, 0.95) 95%, 
                  rgb(0, 0, 0) 100%
                )`
              }}
            />
          </>
        )}
      </div>
      
      <CardHeader className="relative z-10 bg-white dark:bg-black pt-4">
        <CardTitle className="text-lg text-black dark:text-white">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 bg-white dark:bg-black">
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
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
})

export default LazyProjectCard
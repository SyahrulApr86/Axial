import { ThemeToggle } from "@/components/theme-toggle"
import WaveMesh from "@/components/WaveMesh"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ContactSection from "@/components/sections/ContactSection"
import { personalInfo } from "@/data/personal"
import Image from 'next/image'

export default function PortfolioPage() {
return (
  <>
    {/* SVG filter for noise effect */}
    <svg className="absolute inset-0 w-0 h-0">
      <defs>
        <filter id="noise-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.75" 
            numOctaves="4" 
            result="noise"
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="10"
          />
        </filter>
      </defs>
    </svg>
    
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
      {/* Grainy Background Blobs */}
      <div className="grainy-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="grain-texture"></div>
      </div>
      
      {/* 3D Wave Mesh */}
      <WaveMesh />
      
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-sm dark:bg-black/80">
      <a className="flex items-center gap-3" href="#">
        <div className="w-8 h-8 md:w-10 md:h-10 relative">
          <Image
            src="/logo-black.png"
            alt="SA Logo"
            fill
            className="object-contain block dark:hidden"
          />
          <Image
            src="/logo-white.png"
            alt="SA Logo"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <span className="text-lg font-semibold text-black dark:text-white">{personalInfo.name}</span>
      </a>
      <ThemeToggle />
    </header>
    <main className="flex-1 pt-16">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <footer className="flex items-center justify-center py-6 w-full shrink-0 text-center text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-900">
      <p>© 2025 {personalInfo.name}. All rights reserved.</p>
    </footer>
  </div>
  </>
)
}

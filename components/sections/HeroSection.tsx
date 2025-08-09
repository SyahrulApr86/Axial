import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                {personalInfo.greeting}
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-2xl text-neutral-800 dark:text-neutral-200">
                {personalInfo.title}
              </p>
            </div>
            <p className="max-w-[600px] text-neutral-600 dark:text-neutral-400 md:text-xl mx-auto lg:mx-0">
              {personalInfo.description}
            </p>
            <div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0">
              <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-contain object-bottom grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
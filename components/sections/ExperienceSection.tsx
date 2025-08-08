import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">
          Experience
        </h2>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative border-l border-neutral-200 dark:border-neutral-700">
            {experiences.map((experience) => (
              <div key={experience.id} className="mb-10 ml-6">
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white ring-8 ring-white dark:ring-black" />
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-md text-neutral-600 dark:text-neutral-300">
                  {experience.company}
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">
                  {experience.period}
                </time>
                <p className="text-base font-normal text-neutral-600 dark:text-neutral-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
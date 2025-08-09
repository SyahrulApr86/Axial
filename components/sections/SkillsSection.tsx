import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="expertise" className="w-full py-12 md:py-24 bg-neutral-200/70 backdrop-blur-sm dark:bg-neutral-900/70">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">
          Technical Expertise
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.id} className="bg-white dark:bg-black shadow-md">
              <CardHeader className="bg-white dark:bg-black">
                <CardTitle className="text-black dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 bg-white dark:bg-black">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="expertise" className="w-full py-12 md:py-24 bg-neutral-200 backdrop-blur-sm dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">
          Technical Expertise
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
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
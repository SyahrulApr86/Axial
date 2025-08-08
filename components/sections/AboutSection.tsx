import { Card, CardContent } from "@/components/ui/card";
import { aboutInfo } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-neutral-100/50 dark:bg-neutral-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700">
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white">
                {aboutInfo.title}
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
                {aboutInfo.description.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-justify">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
          <p className="mt-2 text-lg font-medium text-black dark:text-white">
            {personalInfo.socialLinks.email}
          </p>
          <form className="mt-8 flex flex-col gap-4">
            <Input type="text" placeholder="Name" className="bg-white dark:bg-black" />
            <Input type="email" placeholder="Email" className="bg-white dark:bg-black" />
            <Textarea placeholder="Message" className="bg-white dark:bg-black" />
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
          <div className="mt-8 flex justify-center gap-6">
            <a href={`mailto:${personalInfo.socialLinks.email}`} aria-label="Email">
              <Mail className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
            <a href={personalInfo.socialLinks.linkedin} aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
            <a href={personalInfo.socialLinks.github} aria-label="GitHub">
              <Github className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
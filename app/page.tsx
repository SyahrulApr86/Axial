import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Download, Send } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 md:px-6 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <a className="flex items-center gap-2" href="#">
          <span className="text-lg font-semibold text-black dark:text-white">Syahrul Apriansyah</span>
        </a>
        <ThemeToggle />
      </header>
      <main className="flex-1 pt-16">
        <section id="hero" className="w-full py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black dark:text-white">
                Syahrul Apriansyah
              </h1>
              <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
                AI Engineer & Backend Developer
              </p>
              <div className="mt-8">
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">Projects</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Recommendation Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Developed a personalized content recommendation system using collaborative filtering and deep learning models.
                  </p>
                  <p className="mt-4 text-sm font-medium text-black dark:text-white">
                    Technologies: Python, PyTorch, FastAPI, Docker
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Object Detection API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Built a high-performance API for real-time object detection in video streams using YOLOv8.
                  </p>
                  <p className="mt-4 text-sm font-medium text-black dark:text-white">
                    Technologies: Python, YOLO, TensorFlow, NestJS, Kubernetes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Scalable Microservices Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Designed and implemented a cloud-native microservices architecture for a large-scale e-commerce application.
                  </p>
                  <p className="mt-4 text-sm font-medium text-black dark:text-white">
                    Technologies: Golang, gRPC, Spring Boot, AWS, Terraform
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">Experience</h2>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="relative border-l border-neutral-200 dark:border-neutral-700">
                <div className="mb-10 ml-6">
                  <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white ring-8 ring-white dark:ring-black" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">Senior AI Engineer</h3>
                  <p className="text-md text-neutral-600 dark:text-neutral-300">Innovate AI Corp.</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">
                    Jan 2022 - Present
                  </time>
                  <p className="text-base font-normal text-neutral-600 dark:text-neutral-300">
                    Leading the development of machine learning models for NLP and computer vision applications. Architecting and deploying scalable AI solutions on AWS and GCP.
                  </p>
                </div>
                <div className="mb-10 ml-6">
                  <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white ring-8 ring-white dark:ring-black" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">Backend Developer</h3>
                  <p className="text-md text-neutral-600 dark:text-neutral-300">Tech Solutions Inc.</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">
                    Jun 2019 - Dec 2021
                  </time>
                  <p className="text-base font-normal text-neutral-600 dark:text-neutral-300">
                    Developed and maintained RESTful APIs and microservices using Django and Spring Boot. Managed CI/CD pipelines and containerized applications with Docker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="w-full py-12 md:py-24 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white">Technical Expertise</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Golang</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Java</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">TypeScript</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">JavaScript</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">FastAPI</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">NestJS</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Nuxt.js</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Django</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Spring Boot</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">AWS</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">GCP</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Terraform</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Ansible</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Docker</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Kubernetes</span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data & ML</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">PyTorch</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">scikit-learn</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">Pandas</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">YOLO</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-black dark:text-white">TensorFlow</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white">Get in Touch</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Have a project in mind or just want to say hi? Feel free to reach out.
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
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
                </a>
                <a href="#" aria-label="GitHub">
                  <Github className="h-6 w-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-6 w-full shrink-0 text-center text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900">
        <p>© 2025 Syahrul Apriansyah. All rights reserved.</p>
      </footer>
    </div>
  )
}

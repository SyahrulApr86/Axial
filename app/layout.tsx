import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syahrul Apriansyah | AI Engineer & Software Engineer",
  description: "Personal portfolio of Syahrul Apriansyah, an AI Engineer and Software Engineer specializing in machine learning, backend development, and cloud infrastructure.",
  keywords: "Syahrul Apriansyah, AI Engineer, Software Engineer, Machine Learning, Backend Developer, Full Stack, Portfolio, Computer Science",
  authors: [{ name: "Syahrul Apriansyah" }],
  generator: 'Next.js',
  metadataBase: new URL('https://www.syahrulapriansyah.com'),
  alternates: {
    canonical: 'https://www.syahrulapriansyah.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.syahrulapriansyah.com',
    siteName: 'Syahrul Apriansyah Portfolio',
    title: 'Syahrul Apriansyah | AI Engineer & Software Engineer',
    description: 'Personal portfolio of Syahrul Apriansyah, an AI Engineer and Software Engineer specializing in machine learning, backend development, and cloud infrastructure.',
    images: [
      {
        url: '/logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Syahrul Apriansyah - AI Engineer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syahrul Apriansyah | AI Engineer & Software Engineer',
    description: 'Personal portfolio of Syahrul Apriansyah, an AI Engineer and Software Engineer specializing in machine learning, backend development, and cloud infrastructure.',
    images: ['/logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <PersonStructuredData
            name="Syahrul Apriansyah"
            jobTitle="AI Engineer & Software Engineer"
            description="AI Engineer and Software Engineer specializing in machine learning, backend development, and cloud infrastructure."
            url="https://www.syahrulapriansyah.com"
            imageUrl="https://www.syahrulapriansyah.com/logo-black.png"
            sameAs={[
              "https://github.com/SyahrulApr86",
              "https://www.linkedin.com/in/syahrul-apriansyah-257bab207/"
            ]}
          />
          <WebsiteStructuredData
            name="Syahrul Apriansyah Portfolio"
            url="https://www.syahrulapriansyah.com"
            description="Personal portfolio showcasing AI engineering and software development projects"
            author="Syahrul Apriansyah"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

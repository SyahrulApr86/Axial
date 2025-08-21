import { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
}

export function generateSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/logo-black.png',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOConfig): Metadata {
  const baseUrl = 'https://www.syahrulapriansyah.com'
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  
  return {
    title,
    description,
    ...(keywords && { keywords }),
    ...(canonical && { 
      alternates: { canonical } 
    }),
    openGraph: {
      title,
      description,
      url: canonical || baseUrl,
      type: ogType,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Syahrul Apriansyah Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [fullImageUrl],
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
  }
}

// Common SEO constants
export const DEFAULT_SEO = {
  siteName: 'Syahrul Apriansyah Portfolio',
  baseUrl: 'https://www.syahrulapriansyah.com',
  defaultTitle: 'Syahrul Apriansyah | AI Engineer & Software Engineer',
  defaultDescription: 'Personal portfolio of Syahrul Apriansyah, an AI Engineer and Software Engineer specializing in machine learning, backend development, and cloud infrastructure.',
  defaultKeywords: 'Syahrul Apriansyah, AI Engineer, Software Engineer, Machine Learning, Backend Developer, Full Stack, Portfolio, Computer Science',
  defaultImage: '/logo-black.png'
}
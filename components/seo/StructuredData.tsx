import Script from 'next/script'

interface PersonStructuredDataProps {
  name: string
  jobTitle: string
  description: string
  url: string
  imageUrl: string
  email?: string
  sameAs?: string[]
}

export function PersonStructuredData({
  name,
  jobTitle,
  description,
  url,
  imageUrl,
  email,
  sameAs = []
}: PersonStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "sameAs": sameAs,
    ...(email && { "email": email })
  }

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface WebsiteStructuredDataProps {
  name: string
  url: string
  description: string
  author: string
}

export function WebsiteStructuredData({
  name,
  url,
  description,
  author
}: WebsiteStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": name,
    "url": url,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "inLanguage": "en-US"
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface ProjectStructuredDataProps {
  name: string
  description: string
  url: string
  author: string
  programmingLanguages: string[]
  dateCreated?: string
  dateModified?: string
  image?: string
  repositoryUrl?: string
}

export function ProjectStructuredData({
  name,
  description,
  url,
  author,
  programmingLanguages,
  dateCreated,
  dateModified,
  image,
  repositoryUrl
}: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": author
    },
    "programmingLanguage": programmingLanguages,
    ...(dateCreated && { "dateCreated": dateCreated }),
    ...(dateModified && { "dateModified": dateModified }),
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    }),
    ...(repositoryUrl && { "codeRepository": repositoryUrl }),
    "applicationCategory": "WebApplication"
  }

  return (
    <Script
      id={`project-${name.toLowerCase().replace(/\s+/g, '-')}-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
interface MetaTagsProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
}

export default function MetaTags({
  title = "ByteMyResume - ATS Resume Score Checker | Optimize Your Resume",
  description = "ByteMyResume is an AI-powered ATS resume scanner that analyzes your resume against Applicant Tracking Systems. Get instant feedback, improve your resume score, and land more interviews. Free ATS resume checker.",
  canonical = "https://bytemyresume.tech",
  ogImage = "https://bytemyresume.tech/images/og-image.jpg",
  ogType = "website",
}: MetaTagsProps) {
  return (
    <>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="ATS resume checker, resume score, ATS score, resume optimization, job application, resume scanner, ByteMyResume, resume analysis, ATS friendly resume, resume parser, resume keywords, job search, career advice, resume tips, resume builder, resume template, ATS compatible resume, resume screening, applicant tracking system, resume ranking"
      />
      <meta name="author" content="ByteMyResume" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ByteMyResume" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </>
  )
}

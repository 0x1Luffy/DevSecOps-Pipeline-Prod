export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "ByteMyResume",
            url: "https://bytemyresume.tech",
            description: "AI-powered ATS resume scanner that analyzes your resume against Applicant Tracking Systems.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            author: {
              "@type": "Organization",
              name: "ByteMyResume",
              url: "https://bytemyresume.tech",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ByteMyResume",
            url: "https://bytemyresume.tech",
            logo: "https://bytemyresume.tech/icons/logo.png",
            sameAs: [
              "https://twitter.com/bytemyresume",
              "https://www.facebook.com/bytemyresume",
              "https://www.linkedin.com/company/bytemyresume",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
              email: "support@bytemyresume.tech",
              availableLanguage: "English",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an ATS resume scanner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An ATS (Applicant Tracking System) resume scanner is software that employers use to filter job applications. ByteMyResume analyzes your resume against these systems to help you get more interviews.",
                },
              },
              {
                "@type": "Question",
                name: "How does ByteMyResume work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Upload your resume, and our AI engine scans it for keywords, skills, and formatting that ATS systems look for. You'll receive a detailed score with personalized recommendations to improve your resume.",
                },
              },
              {
                "@type": "Question",
                name: "Is ByteMyResume free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, ByteMyResume offers a free ATS resume check. We also offer premium features for more detailed analysis and recommendations.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

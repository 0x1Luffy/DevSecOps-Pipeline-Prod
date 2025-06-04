import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Define valid slugs
const validSlugs = ["terms", "privacy", "cookies"];

// Generate static params for all valid slugs
export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

// Generate metadata for each slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // Check if the slug is valid
  if (!validSlugs.includes(params.slug)) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  // Return metadata based on the slug
  const titleMap: Record<string, string> = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
  };

  const descriptionMap: Record<string, string> = {
    terms:
      "Read our Terms of Service to understand the rules and guidelines for using ByteMyResume.",
    privacy:
      "Our Privacy Policy explains how we collect, use, and protect your personal information.",
    cookies:
      "Learn about how we use cookies and similar technologies on ByteMyResume.",
  };

  return {
    title: titleMap[params.slug],
    description: descriptionMap[params.slug],
    alternates: {
      canonical: `https://bytemyresume.tech/${params.slug}`,
    },
  };
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  // Check if the slug is valid
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  // Render the appropriate content based on the slug
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {params.slug === "terms" && "Terms of Service"}
              {params.slug === "privacy" && "Privacy Policy"}
              {params.slug === "cookies" && "Cookie Policy"}
            </h1>
            <p className="text-gray-300">Last updated: May 8, 2025</p>
          </div>

          {/* Content would be rendered here based on the slug */}
          {/* This is a placeholder for dynamic content */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
            <p className="text-gray-300">
              This is a dynamic page for {params.slug}. The actual content would
              be rendered here.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

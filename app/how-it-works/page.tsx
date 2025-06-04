import Header from "@/components/header"
import Footer from "@/components/footer"
import HowItWorks from "@/components/how-it-works"
import { Button } from "@/components/ui/button"
import BannerAd from "@/components/ads/banner-ad"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">How ByteMyResume Works</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform analyzes your resume against Applicant Tracking Systems to help you land more
              interviews. Here's how it works.
            </p>
          </div>

          {/* Banner Ad 1: After Header */}
          <BannerAd />

          <HowItWorks />

          {/* Banner Ad 2: After How It Works Component */}
          <BannerAd />

          <div className="mt-20 space-y-16">
            <section className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Understanding ATS Systems</h2>
                  <p className="text-gray-300 mb-4">
                    Applicant Tracking Systems (ATS) are software applications that employers use to manage job
                    applications. These systems scan resumes for specific keywords and qualifications before a human
                    ever sees them.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Up to 75% of resumes are rejected by ATS systems before they reach a hiring manager. This means that
                    even if you're qualified for a position, your resume might be filtered out if it's not optimized for
                    ATS.
                  </p>
                  <p className="text-gray-300">
                    ByteMyResume helps you understand how ATS systems work and how to optimize your resume to get past
                    these digital gatekeepers.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl" />
                  <div className="relative bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">Common ATS Issues</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-500 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          <strong className="text-white">Missing keywords:</strong> Not including industry-specific
                          terms and skills
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-500 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          <strong className="text-white">Complex formatting:</strong> Using tables, headers, footers,
                          and graphics that ATS can't read
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-500 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          <strong className="text-white">Non-standard section headings:</strong> Using creative titles
                          instead of standard ones like "Experience" and "Education"
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-purple-500 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-300">
                          <strong className="text-white">File type issues:</strong> Using file formats that ATS systems
                          struggle to parse
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Banner Ad 3: Between Sections */}
            <BannerAd />

            <section className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/20 blur-xl" />
                    <div className="relative bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4">Our Analysis Process</h3>
                      <ol className="space-y-4">
                        <li className="flex">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-white font-bold">
                            1
                          </span>
                          <div>
                            <h4 className="text-white font-semibold">Document Parsing</h4>
                            <p className="text-gray-300">
                              We extract text from your resume, preserving its structure and content.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-white font-bold">
                            2
                          </span>
                          <div>
                            <h4 className="text-white font-semibold">Keyword Analysis</h4>
                            <p className="text-gray-300">
                              We identify industry-specific keywords and skills in your resume.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-white font-bold">
                            3
                          </span>
                          <div>
                            <h4 className="text-white font-semibold">Format Evaluation</h4>
                            <p className="text-gray-300">
                              We check for formatting issues that might cause problems with ATS systems.
                            </p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-white font-bold">
                            4
                          </span>
                          <div>
                            <h4 className="text-white font-semibold">Score Calculation</h4>
                            <p className="text-gray-300">
                              We calculate your ATS score based on multiple factors and industry standards.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-white mb-4">Our Advanced Analysis</h2>
                  <p className="text-gray-300 mb-4">
                    ByteMyResume uses advanced natural language processing and machine learning algorithms to analyze
                    your resume the same way ATS systems do.
                  </p>
                  <p className="text-gray-300 mb-4">
                    We've built a comprehensive database of industry-specific keywords, skills, and job requirements
                    across multiple sectors. This allows us to provide accurate, tailored recommendations for your
                    specific career field.
                  </p>
                  <p className="text-gray-300">
                    Our analysis goes beyond simple keyword matching. We look at keyword context, density, placement,
                    and relevance to provide a holistic assessment of your resume's ATS compatibility.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Resume?</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Don't let your resume get filtered out before a human even sees it. Use ByteMyResume to analyze your
                  resume and get personalized recommendations to improve your chances of landing interviews.
                </p>
              </div>
              <div className="flex justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Score My Resume Now
                </Button>
              </div>
            </section>
          </div>

          {/* Banner Ad 4: Before Footer */}
          <BannerAd />
        </div>
      </main>

      <Footer />
    </div>
  )
}

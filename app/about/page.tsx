import Header from "@/components/header"
import Footer from "@/components/footer"
import BannerAd from "@/components/ads/banner-ad"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About ByteMyResume</h1>
            <p className="text-xl text-gray-300">Helping job seekers navigate the ATS maze since 2023</p>
          </div>

          {/* Banner Ad 1: After Header */}
          <BannerAd />

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              At ByteMyResume, we believe that talented professionals shouldn't miss out on opportunities because their
              resumes get filtered out by Applicant Tracking Systems. Our mission is to level the playing field by
              giving job seekers the tools they need to optimize their resumes and get past the ATS barriers.
            </p>
            <p className="text-gray-300">
              We've built an AI-powered platform that analyzes resumes the way ATS systems do, providing actionable
              insights and recommendations to help you land more interviews and ultimately find your dream job.
            </p>
          </div>

          {/* Banner Ad 2: Between Sections */}
          <BannerAd />

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 mb-6">
              ByteMyResume was founded by a team of tech professionals who experienced firsthand the frustration of
              applying to jobs and never hearing back. After learning about how Applicant Tracking Systems filter
              resumes, we realized that many qualified candidates were being overlooked simply because their resumes
              weren't optimized for these automated systems.
            </p>
            <p className="text-gray-300 mb-6">
              We set out to solve this problem by creating a tool that would help job seekers understand how ATS systems
              work and how to optimize their resumes accordingly. After months of research and development, ByteMyResume
              was born.
            </p>
            <p className="text-gray-300">
              Today, we're proud to have helped thousands of job seekers improve their resumes and land interviews at
              their dream companies. We're constantly improving our algorithms and adding new features to provide the
              best possible service to our users.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
            <p className="text-gray-300 mb-6">
              ByteMyResume uses advanced natural language processing and machine learning algorithms to analyze resumes
              and provide personalized recommendations. Our technology is designed to mimic the way ATS systems process
              resumes, allowing us to give you accurate insights into how your resume will perform.
            </p>
            <p className="text-gray-300 mb-6">
              We've built a comprehensive database of industry-specific keywords and skills, which we use to analyze
              your resume and identify areas for improvement. Our algorithms are constantly updated to keep up with the
              latest trends in ATS technology and hiring practices.
            </p>
            <p className="text-gray-300">
              We're committed to privacy and security, and we never share your personal information or resume data with
              third parties without your explicit consent. Your data is encrypted and stored securely, and you can
              delete it at any time.
            </p>
          </div>

          {/* Banner Ad 3: Before Footer */}
          <BannerAd />
        </div>
      </main>

      <Footer />
    </div>
  )
}

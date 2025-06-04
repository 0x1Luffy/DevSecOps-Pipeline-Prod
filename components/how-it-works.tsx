export default function HowItWorks() {
  return (
    <div className="relative mt-32 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12 text-center">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Upload Your Resume</h3>
                <p className="text-gray-300">
                  Simply upload your resume in PDF, DOCX, or TXT format. Our system will instantly parse and analyze
                  your document.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Analysis</h3>
                <p className="text-gray-300">
                  Our AI engine scans your resume for keywords, skills, and formatting that ATS systems look for in top
                  candidates.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Get Your Score</h3>
                <p className="text-gray-300">
                  Receive a detailed ATS score with personalized recommendations to improve your resume and land more
                  interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

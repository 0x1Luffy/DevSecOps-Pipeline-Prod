import { Button } from "@/components/ui/button";
import BannerAd from "./ads/banner-ad";

export default function HeroSection() {
  return (
    <div className="relative pt-32 pb-0 sm:pt-40">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent" />
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_0%,_#3b0764,_#0c0a09_25%,_#0c0a09_75%,_#3b0764_100%)] opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center rounded-full px-4 py-1 mb-8 
          bg-purple-900/50 border border-purple-700/50 
          shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]"
        >
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
          <span className="text-sm text-purple-300">
            AI-powered ATS scoring engine
          </span>
        </div>
        <BannerAd />
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Get your resume
          <br />
          <span className="text-purple-400">past the ATS.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-8">
          Our AI analyzes your resume against Applicant Tracking Systems to
          ensure you get more interviews. Optimize your resume for the job you
          want.
        </p>

        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 mb-16"
        >
          Score My Resume
        </Button>
      </div>
    </div>
  );
}

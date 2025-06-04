import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-900/30 mb-6">
              <span className="text-5xl font-bold text-white">404</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Go to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Looking for something specific?</h2>
            <p className="text-gray-300 mb-6">
              Here are some popular pages that might help you find what you're looking for:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/how-it-works"
                className="bg-black/60 hover:bg-black/80 p-4 rounded-lg border border-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">How It Works</h3>
                <p className="text-gray-400 text-sm">Learn how our ATS scoring system works</p>
              </Link>
              <Link
                href="/about"
                className="bg-black/60 hover:bg-black/80 p-4 rounded-lg border border-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">About Us</h3>
                <p className="text-gray-400 text-sm">Learn about our mission and story</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

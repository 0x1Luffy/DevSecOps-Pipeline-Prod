import Link from "next/link"
import BannerAd from "@/components/ads/banner-ad"

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-white/10 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Ad in Footer - appears on all pages */}
        <BannerAd />

        <nav className="py-8">
          {/* Primary Navigation */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-4">
            <li>
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Secondary Navigation */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <li>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center pb-8 text-sm text-gray-500">
          © {new Date().getFullYear()} ByteMyResume.tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

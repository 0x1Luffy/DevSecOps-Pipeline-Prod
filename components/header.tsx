"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16 my-2">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="ml-2 text-white font-bold">ByteMyResume</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/how-it-works">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  How It Works
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-xl">Try For Free</Button>
        </div>
      </div>
    </nav>
  )
}

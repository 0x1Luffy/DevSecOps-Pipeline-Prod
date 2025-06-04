import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SEO from "@/components/seo/seo";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Enhance SEO by adding more metadata and structured data
export const metadata: Metadata = {
  title: "ByteMyResume - ATS Resume Score Checker | Optimize Your Resume",
  description:
    "ByteMyResume is an AI-powered ATS resume scanner that analyzes your resume against Applicant Tracking Systems. Get instant feedback, improve your resume score, and land more interviews. Free ATS resume checker.",
  keywords:
    "ATS resume checker, resume score, ATS score, resume optimization, job application, resume scanner, ByteMyResume, resume analysis, ATS friendly resume, resume parser, resume keywords, job search, career advice, resume tips, resume builder, resume template, ATS compatible resume, resume screening, applicant tracking system, resume ranking",
  openGraph: {
    title: "ByteMyResume - ATS Resume Score Checker | Optimize Your Resume",
    description:
      "Get your resume past the ATS with our AI-powered resume scanner. Improve your resume score and land more interviews.",
    url: "https://bytemyresume.tech",
    siteName: "ByteMyResume",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bytemyresume.tech/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ByteMyResume - ATS Resume Score Checker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteMyResume - ATS Resume Score Checker | Optimize Your Resume",
    description:
      "Get your resume past the ATS with our AI-powered resume scanner. Improve your resume score and land more interviews.",
    images: ["https://bytemyresume.tech/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bytemyresume.tech",
  },
  verification: {
    google: "verification_token",
  },
  authors: [{ name: "ByteMyResume Team" }],
  creator: "ByteMyResume",
  publisher: "ByteMyResume",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
};

// Add structured data for SEO
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

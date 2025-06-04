import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ByteMyResume | Our Mission and Story",
  description:
    "Learn about ByteMyResume's mission to help job seekers navigate the ATS maze and land more interviews with our AI-powered resume optimization tools.",
  openGraph: {
    title: "About ByteMyResume | Our Mission and Story",
    description:
      "Learn about ByteMyResume's mission to help job seekers navigate the ATS maze and land more interviews.",
    url: "https://bytemyresume.tech/about",
    images: [
      {
        url: "https://bytemyresume.tech/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About ByteMyResume",
      },
    ],
  },
  alternates: {
    canonical: "https://bytemyresume.tech/about",
  },
}

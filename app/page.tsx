import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import ResumeSection from "@/components/resume-section";
import KeywordRichContent from "@/components/KeywordRichContent";
import BannerAd from "@/components/ads/banner-ad";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main>
        <HeroSection />

        {/* Banner Ad 1: After Hero Section */}
        <BannerAd />

        <ResumeSection />

        {/* Banner Ad 2: Between Resume Section and How It Works */}
        <BannerAd />

        <HowItWorks />

        {/* Banner Ad 3: After How It Works */}
        <BannerAd />

        <KeywordRichContent />
      </main>

      <Footer />
    </div>
  );
}

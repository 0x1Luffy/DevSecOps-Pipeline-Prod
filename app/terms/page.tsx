import Header from "@/components/header"
import Footer from "@/components/footer"
import BannerAd from "@/components/ads/banner-ad"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-gray-300">Last updated: May 8, 2025</p>
          </div>

          {/* Banner Ad 1: After Header */}
          <BannerAd />

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Welcome to ByteMyResume.tech ("we," "our," or "us"). These Terms of Service ("Terms") govern your access
                to and use of the ByteMyResume.tech website and services, including any content, functionality, and
                services offered on or through ByteMyResume.tech (the "Service").
              </p>
              <p className="text-gray-300">
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these
                Terms, you must not access or use the Service.
              </p>
            </section>

            {/* Banner Ad 2: Between Sections */}
            <BannerAd />

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
              <p className="text-gray-300">
                The Service is intended for users who are at least 18 years old. By using the Service, you represent and
                warrant that you are of legal age to form a binding contract with ByteMyResume.tech and meet all of the
                foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or
                use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-300 mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <p className="text-gray-300 mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a third-party
                service.
              </p>
              <p className="text-gray-300">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
            </section>

            {/* Banner Ad 3: Between Sections */}
            <BannerAd />

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of ByteMyResume.tech and its licensors. The Service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior written consent of ByteMyResume.tech.
              </p>
              <p className="text-gray-300">
                You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual design elements
                or concepts without express written permission from ByteMyResume.tech.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. User Content</h2>
              <p className="text-gray-300 mb-4">
                Our Service allows you to upload, submit, store, send or receive content, including your resume and
                personal information. You retain any intellectual property rights that you hold in that content.
              </p>
              <p className="text-gray-300 mb-4">
                When you upload, submit, store, send or receive content to or through our Service, you give
                ByteMyResume.tech a worldwide license to use, host, store, reproduce, modify, create derivative works,
                communicate, publish, publicly perform, publicly display and distribute such content solely for the
                purpose of providing and improving the Service.
              </p>
              <p className="text-gray-300">
                You represent and warrant that you own or have the necessary rights to grant us the license described
                above for any content that you submit to the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-300">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                In no event shall ByteMyResume.tech, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at legal@bytemyresume.tech.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

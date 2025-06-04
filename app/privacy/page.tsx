import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: May 8, 2025</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                ByteMyResume.tech ("we," "our," or "us") respects your privacy and is committed to protecting it through
                our compliance with this policy. This Privacy Policy describes the types of information we may collect
                from you or that you may provide when you visit ByteMyResume.tech (the "Website") and our practices for
                collecting, using, maintaining, protecting, and disclosing that information.
              </p>
              <p className="text-gray-300">
                This policy applies to information we collect on this Website, in email, text, and other electronic
                messages between you and this Website, and through any mobile applications you download from this
                Website, which provide dedicated non-browser-based interaction between you and this Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect several types of information from and about users of our Website, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  Personal information such as name, email address, and job title that you provide by filling in forms
                  on our Website, including information provided at the time of registering to use our Website or
                  requesting further services.
                </li>
                <li>
                  Resume data and content that you upload to our Website for analysis, including personal information,
                  work history, education, skills, and other information typically included in a resume.
                </li>
                <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
                <li>
                  Details of transactions you carry out through our Website and of the fulfillment of your orders.
                </li>
                <li>Your search queries on the Website.</li>
                <li>
                  Information about your internet connection, the equipment you use to access our Website, and usage
                  details.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use information that we collect about you or that you provide to us, including any personal
                information:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To analyze your resume and provide ATS scoring and recommendations.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>
                  To carry out our obligations and enforce our rights arising from any contracts entered into between
                  you and us.
                </li>
                <li>
                  To notify you about changes to our Website or any products or services we offer or provide through it.
                </li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from
                unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on
                secure servers behind firewalls.
              </p>
              <p className="text-gray-300">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do
                our best to protect your personal information, we cannot guarantee the security of your personal
                information transmitted to our Website. Any transmission of personal information is at your own risk. We
                are not responsible for circumvention of any privacy settings or security measures contained on the
                Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p className="text-gray-300">
                We will retain your personal information only for as long as is necessary for the purposes set out in
                this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
                legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as the
                right to access, correct, delete, restrict processing, or object to our processing of your personal
                information.
              </p>
              <p className="text-gray-300">To exercise these rights, please contact us at privacy@bytemyresume.tech.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Our Privacy Policy</h2>
              <p className="text-gray-300">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material
                changes to how we treat our users' personal information, we will notify you through a notice on the
                Website home page. The date the privacy policy was last revised is identified at the top of the page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-300">
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                privacy@bytemyresume.tech.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

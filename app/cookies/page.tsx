import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-gray-300">Last updated: May 8, 2025</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is
                stored in your web browser and allows the Service or a third-party to recognize you and make your next
                visit easier and the Service more useful to you.
              </p>
              <p className="text-gray-300">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
                mobile device when you go offline, while session cookies are deleted as soon as you close your web
                browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How ByteMyResume.tech Uses Cookies</h2>
              <p className="text-gray-300 mb-4">
                When you use and access the Service, we may place a number of cookie files in your web browser. We use
                cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>
                  <strong className="text-white">Essential cookies:</strong> These are cookies that are required for the
                  operation of our website. They include, for example, cookies that enable you to log into secure areas
                  of our website or use a shopping cart.
                </li>
                <li>
                  <strong className="text-white">Analytical/performance cookies:</strong> These allow us to recognize
                  and count the number of visitors and to see how visitors move around our website when they are using
                  it. This helps us to improve the way our website works, for example, by ensuring that users are
                  finding what they are looking for easily.
                </li>
                <li>
                  <strong className="text-white">Functionality cookies:</strong> These are used to recognize you when
                  you return to our website. This enables us to personalize our content for you, greet you by name and
                  remember your preferences (for example, your choice of language or region).
                </li>
                <li>
                  <strong className="text-white">Targeting cookies:</strong> These cookies record your visit to our
                  website, the pages you have visited and the links you have followed. We will use this information to
                  make our website and the advertising displayed on it more relevant to your interests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p className="text-gray-300">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the Service, deliver advertisements on and through the Service, and so on. These may include cookies
                from services such as Google Analytics, Google Ads, Facebook, Twitter, and other social media platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. What Are Your Choices Regarding Cookies</h2>
              <p className="text-gray-300 mb-4">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                the help pages of your web browser.
              </p>
              <p className="text-gray-300 mb-4">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use
                all of the features we offer, you may not be able to store your preferences, and some of our pages might
                not display properly.
              </p>
              <p className="text-gray-300">You can learn more about cookies and the following third-party websites:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>AllAboutCookies: http://www.allaboutcookies.org/</li>
                <li>Network Advertising Initiative: http://www.networkadvertising.org/</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Cookie Policy</h2>
              <p className="text-gray-300">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
                Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our Cookie Policy, please contact us at privacy@bytemyresume.tech.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

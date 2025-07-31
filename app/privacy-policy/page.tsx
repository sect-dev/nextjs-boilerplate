import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-white font-bold text-xl">Nexora</span>
            </Link>

            <Button asChild variant="ghost" className="text-white hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy for Nexora</h1>
            <p className="text-white/80 mb-8">
              <strong>Effective Date:</strong> July 29, 2025
            </p>

            <p className="text-white/80 mb-8">
              Nexora ("we", "our", or "us") is a mobile web browser for Android. This Privacy Policy explains how we
              collect, use, and protect your information when you use Nexora.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.1 Information You Provide</h3>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>
                <strong>Email address</strong> (only if you contact us for support).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1.2 Information Collected Automatically</h3>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>
                Device information (model, OS version, language, screen size, GAID, Android ID, IP address, mobile
                network code).
              </li>
              <li>Usage data (app open time, in-app behavior, error logs, crash reports).</li>
              <li>
                <strong>Location data</strong>: approximate or precise location may be collected if you grant
                permission. This may be used for web page functionality or ad relevance.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. App Permissions</h2>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>
                <strong>RECORD_AUDIO:</strong> Used for voice search only. No audio is stored or transmitted.
              </li>
              <li>
                <strong>ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION:</strong> Location access is used only if required
                by websites or ad networks and only with your explicit permission.
              </li>
              <li>
                <strong>INTERNET / ACCESS_NETWORK_STATE:</strong> Required for web browsing and ad delivery.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Third-Party Services</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Firebase by Google</h3>
            <p className="text-white/80 mb-6">
              We use Firebase Analytics, Crashlytics, and Remote Config to understand app usage, monitor stability, and
              improve user experience. Firebase may collect anonymized device data and crash logs.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Google AdMob</h3>
            <p className="text-white/80 mb-4">
              We use Google AdMob to serve ads. Based on your region and consent, ads may be:
            </p>
            <ul className="text-white/80 mb-4 space-y-2">
              <li>
                <strong>Personalized</strong>: based on your interests and usage behavior.
              </li>
              <li>
                <strong>Non-personalized</strong>: based on general context like app content or location.
              </li>
            </ul>
            <p className="text-white/80 mb-6">
              You can manage your ad preferences via{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                https://adssettings.google.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Cookies and Web Storage</h2>
            <p className="text-white/80 mb-6">
              Websites you visit in Nexora may use cookies, session storage, and local storage. Nexora itself does not
              access or manage this data.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. How We Use Your Data</h2>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>To improve stability and performance of the app.</li>
              <li>To analyze anonymized usage patterns.</li>
              <li>To deliver ads and optimize content delivery.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Data Sharing</h2>
            <p className="text-white/80 mb-6">
              We do not sell, trade, or share your personal data with third parties. Data shared with Firebase or AdMob
              is governed by their own privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Data Retention</h2>
            <p className="text-white/80 mb-6">
              Analytics and crash data are retained for up to 12 months. Email inquiries are deleted upon request.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Your Rights</h2>
            <p className="text-white/80 mb-4">
              If you are located in the EU, California, or other regions with data protection laws, you have the right
              to:
            </p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent for personalized advertising</li>
            </ul>
            <p className="text-white/80 mb-6">
              To exercise these rights, please contact us at the email provided below.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-white/80 mb-6">
              Nexora is not intended for children under 13. We do not knowingly collect personal information from
              children.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-white/80 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated effective date.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Contact Us</h2>
            <p className="text-white/80 mb-6">
              If you have any questions or concerns about this Privacy Policy, contact us at:
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dabrowski.kacper1996@gmail.com"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                dabrowski.kacper1996@gmail.com
              </a>
            </p>

            <hr className="border-white/20 my-8" />
            <p className="text-white/60 text-center">© 2025 Nexora Browser</p>
          </div>
        </div>
      </div>
    </div>
  )
}

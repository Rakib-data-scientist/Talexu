import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      <div className="container mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-white/60 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="mb-6">
              This Privacy Policy explains how Talexu.com collects, uses, stores and protects personal information when you visit or interact with this website. We are committed to safeguarding your privacy and ensuring transparency in the handling of your information. Please read this Privacy Policy carefully to understand how your Personally Identifiable Information (PII) is managed in accordance with industry standards and applicable laws.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect personal information from you when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out a contact form</li>
                <li>Register or submit details on the website</li>
                <li>Request information about services</li>
                <li>Respond to a survey, inquiry or communication</li>
                <li>Use any interactive features on the website</li>
              </ul>
              <p className="mt-4">
                Personal information may include your name, email address, phone number, company name, job title or other details required to communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">We may use the information collected from you in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To understand your requirements and respond to your inquiries</li>
                <li>To personalize your experience on the website</li>
                <li>To send updates, service information or communication relevant to your request</li>
                <li>To improve our website, offerings and communication</li>
                <li>To allow us to provide professional services you request or express interest in</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Protection of Information</h2>
              <p>
                Your personal information is stored on secure systems and accessible only to authorized personnel who are required to keep the information confidential. We use reasonable and responsible security measures to protect your information. While we follow industry standards, no method of electronic storage or transmission can be guaranteed 100 percent secure. All transactions, if any, are processed through secure third party payment gateways and are not stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                This website may use cookies to improve user experience and analyze website performance. Cookies help recognize preferences and understand how users interact with the website. You can choose to disable cookies through your browser settings. Disabling cookies may affect some features or functionality of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third Party Disclosure</h2>
              <p className="mb-4">We do not sell or trade your Personally Identifiable Information to outside parties. We may share information only when necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver a service requested by you</li>
                <li>Comply with legal requirements</li>
                <li>Work with trusted service providers who assist in operating the website</li>
              </ul>
              <p className="mt-4">All such third parties are required to maintain confidentiality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third Party Links</h2>
              <p>
                At our discretion, we may include third party services, tools or resources on the website. These external sites operate independently and have separate privacy policies. We do not take responsibility for the practices or content of linked websites but welcome feedback about them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Advertising and Analytics</h2>
              <p>
                This website may use analytics tools and advertising services (including but not limited to Google). These services may use cookies and technical identifiers to understand visitor activity and improve user experience. Users may change ad preferences and opt out using Google Ad Settings or other available tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Do Not Track Signals</h2>
              <p>
                When a browser sends a Do Not Track (DNT) signal, the website will attempt to respect the request where technically supported. Some third party tracking technologies may not recognize DNT signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p>
                We do not knowingly collect personal information from children under the age of 13. If such information is discovered, it will be removed in a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Fair Information Practices</h2>
              <p>
                In the event of a data breach, we will notify affected users by email within 7 business days where notification is required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">CAN-SPAM Compliance</h2>
              <p className="mb-4">To comply with regulations for commercial email communication:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will not use misleading subject lines or email identities</li>
                <li>We will provide a valid business contact address</li>
                <li>We will honor unsubscribe requests promptly</li>
                <li>Every marketing email will include an unsubscribe option</li>
              </ul>
              <p className="mt-4">
                If you no longer wish to receive communication from us, you can request removal through the unsubscribe link or by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes to our practices, services or legal requirements. The updated version will be posted on this page and remains effective from the date of posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contacting Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or wish to update, access or request deletion of personal information, you may contact us using the Contact Us form on this website.
              </p>
              <p className="mt-4">
                Email: support@talexu.com
              </p>
            </section>

            <p className="text-sm text-white/40 mt-12">
              © 2025 by Talexu.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

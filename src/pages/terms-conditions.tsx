import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsConditions() {
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
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="mb-6">
              Thank you for choosing Talexu.com for our staffing and recruitment services (referred to as the "Service"). By using this website and our services, you agree to the Terms & Conditions stated below.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Our Service</h2>
              <p>
                The Service provides staffing and recruitment solutions to companies and startups (national and international) to hire full-time, part-time, contract-based, project-based, and remote talent. We work exclusively with employers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Service Provider</h2>
              <p>
                The entity providing the Service is the recruitment agency operating this website ("we", "our", "us").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Applicable Terms</h2>
              <p className="mb-4">
                These Terms & Conditions, along with our Privacy Policy and other applicable business policies (collectively, the "Agreement"), govern your use of the Service. Please read this Agreement carefully. If you do not agree with any part of the Agreement, you may not use the Service.
              </p>
              <p className="mb-4">
                By accessing this website or availing the Service, you confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are authorized to act on behalf of a business or organization.</li>
                <li>You are at least 18 years of age and legally capable of entering into a binding agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Business Use</h2>
              <p>
                Our Service is intended only for employers, founders, HR teams, or hiring managers who engage our agency to recruit candidates. You may use the Service solely for lawful business purposes and for hiring-related requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Fees and Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All pricing will be discussed and finalized before the start of the hiring engagement.</li>
                <li>Upon confirmation to proceed, the client agrees to pay the quoted fees as per the commercial terms communicated.</li>
                <li>Unless otherwise agreed in writing, payments are non-refundable, as the Service involves time, manpower, screening and delivery of suitable candidates.</li>
                <li>Late or delayed payments will attract penalties as per the invoice or agreement shared.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Delivery of Candidates</h2>
              <p className="mb-4">
                We provide shortlisted candidates based on the job description, hiring criteria and expectations communicated by the client. The timeline for candidate delivery may vary depending on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Role complexity</li>
                <li>Skill requirements</li>
                <li>Experience level</li>
                <li>Hiring volume</li>
              </ul>
              <p className="mt-4">
                We do not guarantee that every candidate will accept an offer, join immediately, or perform to a specific standard post-joining.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Client Responsibilities</h2>
              <p className="mb-4">
                To ensure efficient delivery of the Service, the client agrees to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide complete and accurate job requirements</li>
                <li>Participate in interviews and feedback cycles without unnecessary delay</li>
                <li>Communicate changes in hiring needs promptly</li>
                <li>Maintain professional behavior with candidates and recruiters</li>
              </ul>
              <p className="my-4">
                The client will not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Share candidate profiles publicly</li>
                <li>Use candidate information for any unlawful purpose</li>
                <li>Contact candidates for roles outside the agreed hiring scope without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, we will not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of profits, business opportunities or goodwill</li>
                <li>Performance of candidates after hiring</li>
                <li>Withdrawal, resignation or early exit of a hired candidate</li>
                <li>Delays in hiring caused by market conditions or candidate availability</li>
              </ul>
              <p className="mt-4">
                Our total liability for any claim is limited to the fees paid by the client for the specific Service within the last 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Confidentiality & Data Protection</h2>
              <p className="mb-4">
                Both parties agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protect confidential information shared during the hiring process</li>
                <li>Not misuse candidate or company information for purposes beyond the agreed scope</li>
              </ul>
              <p className="mt-4">
                We process all client and candidate data in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="mb-4">
                The Service may be terminated by either party with written notice, subject to commercial terms agreed. If the client terminates the Service after work delivery has already started, all payments made remain non-refundable, and the client remains liable to pay for work completed up to the point of termination.
              </p>
              <p className="mb-4">
                We reserve the right to suspend or terminate Service immediately if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are withheld</li>
                <li>Terms of this Agreement are violated</li>
                <li>Abuse or misconduct toward candidates or staff occurs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Links</h2>
              <p>
                The website may contain links to third-party websites or services. We do not control or take responsibility for the content or practices of any external platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Agreement</h2>
              <p>
                We may update these Terms & Conditions periodically to reflect business, operational or legal changes. Updated terms will be posted on this website and are effective immediately upon posting. Continued use of the Service indicates acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
              <p>
                This Agreement is governed by the laws of India. Any disputes arising from or relating to this Agreement will be subject to the exclusive jurisdiction of courts located in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Final Note</h2>
              <p>
                This website and the Service are not affiliated with Facebook, Instagram, Google, LinkedIn, or any other third-party platform mentioned in marketing or advertising, unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>
                For questions about these Terms & Conditions, please contact us at:
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

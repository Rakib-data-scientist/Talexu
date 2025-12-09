import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CancellationRefund() {
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
          <h1 className="text-4xl font-bold mb-8">Cancellation & Refund Policy</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="mb-6">
              Talexu.com Refund & Cancellation Policy
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Refund Policy</h2>
              <p>
                All payments made for our services are non-refundable. Once the payment has been completed through the website, UPI, bank transfer, card, NEFT, or any third party payment gateway, the transaction is considered final. This is because the Service requires time, manpower, research, sourcing and screening efforts that begin immediately after receiving confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cancellation Policy</h2>
              <p className="mb-4">
                Once a service engagement has been confirmed, it cannot be cancelled. If you decide to discontinue the service midway, all payments made remain non-refundable and the client will remain liable to pay for work already completed up to the point of discontinuation.
              </p>
              <p>
                Please review all details of the service, pricing and agreement terms before making a payment or confirming engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                For questions about this policy, please contact us at:
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

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShippingDelivery() {
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
          <h1 className="text-4xl font-bold mb-8">Shipping & Delivery Policy</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="mb-6">
              Talexu.com Shipping & Delivery Policy
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Digital Service Delivery</h2>
              <p>
                We do not sell any physical products, hence, we do not have any shipping or delivery policy. All our products and programs are digital, virtual and are delivered through online channels like WhatsApp, Zoom, MS Teams, Google Meet, emails etc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                For questions about our service delivery process:
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

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20">
      {/* Hero Background - Mountain Landscape with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image - Mountain landscape */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient overlay - darker at edges, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        
        {/* Subtle blue tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/10" />
      </div>


      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative z-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            100x Faster Path To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Production Ready Talent
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
            Get developers who've shipped for YC startups and enterprises. Ready to contribute from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#1A91FF] hover:bg-[#1570C9] text-white rounded-full h-14 px-8 text-lg font-semibold shadow-[0_0_20px_-5px_rgba(26,145,255,0.5)] transition-all hover:scale-105"
              onClick={() => window.open("https://calendly.com/talexu-support/30min", "_blank")}
            >
              Start Hiring <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Quote, Star, Sparkles, ArrowRight, TrendingUp, Zap } from "lucide-react";

const testimonials = [
  {
    quote: "We hired two senior engineers in under 10 days and accelerated our release by 4 weeks. Talexu didn't add bodies — they added execution speed.",
    author: "Sarah Chen",
    role: "Tech Founder",
    company: "YC-backed Startup",
    icon: Sparkles,
    rating: 5
  },
  {
    quote: "The quality of developers is exceptional. They integrated seamlessly with our team and started contributing from day one. Best hiring decision we made.",
    author: "Michael Rodriguez",
    role: "VP Engineering",
    company: "Series B SaaS Company",
    icon: Star,
    rating: 5
  },
  {
    quote: "Talexu helped us scale from 3 to 15 engineers in 6 months. Their vetting process is thorough - every developer has been a perfect fit.",
    author: "David Kim",
    role: "CTO",
    company: "Fintech Startup",
    icon: TrendingUp,
    rating: 5
  },
  {
    quote: "We tried 3 other platforms before Talexu. The difference is night and day. Speed, quality, and zero overhead. This is how hiring should work.",
    author: "Emily Watson",
    role: "Head of Product",
    company: "AI Platform",
    icon: Zap,
    rating: 5
  },
  {
    quote: "Our developer from Talexu became our tech lead within 4 months. The level of expertise and professionalism exceeded all expectations.",
    author: "James Miller",
    role: "CEO",
    company: "Healthcare Tech",
    icon: Star,
    rating: 5
  },
  {
    quote: "Fast, reliable, and exactly what we needed. Hired 3 Python engineers in 2 weeks. They're still with us 8 months later, shipping critical features.",
    author: "Priya Sharma",
    role: "Engineering Manager",
    company: "E-commerce Scale-up",
    icon: Sparkles,
    rating: 5
  }
];

const caseStudies = [
  {
    company: "Fintech scale-up 'Ledger'",
    description: "Expanded engineering team by 15 members in Q3",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    metric: "15 hires in 90 days"
  },
  {
    company: "AI Startup 'Neural'",
    description: "Built entire ML team from scratch",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    metric: "8 ML engineers hired"
  },
  {
    company: "Remote-First SaaS",
    description: "Global engineering team across 12 timezones",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    metric: "100% remote success"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30"
          >
            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Success Stories</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Teams that scaled successfully <br /> with Talexu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Real results from companies that transformed their hiring with our platform
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${study.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                    {study.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-white/70 text-sm">{study.description}</p>
              </div>
              <Zap className="absolute top-4 right-4 text-blue-400 w-6 h-6 opacity-80" />
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all group"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-blue-500/30" />
                <testimonial.icon className="w-5 h-5 text-yellow-400 opacity-70" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-white/50">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.open("https://calendly.com/talexu-support/30min", "_blank")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Join These Success Stories <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

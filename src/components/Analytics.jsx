import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Star } from 'lucide-react'

const testimonials = [
  {
    text: "AgriVeda's soil AI told me exactly when to apply biofertilizer. My wheat yield jumped 34% this season. This is the future of farming.",
    name: "Ramesh Patidar",
    role: "Wheat Farmer, Madhya Pradesh",
  },
  {
    text: "The carbon credits feature alone earned me ₹8,000 extra last year. And the weather alerts saved my mustard crop from an unexpected frost.",
    name: "Sunita Devi",
    role: "Mixed Crop Farmer, Bihar",
  },
  {
    text: "I was skeptical about AI farming apps. But AgriVeda speaks in our language, understands our land, and gives real advice. It works.",
    name: "Manjunath Reddy",
    role: "Rice Farmer, Telangana",
  },
]

export default function Analytics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="analytics" className="py-32 relative bg-[#071508] border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Award className="w-10 h-10 text-[#4ADE80] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-semibold font-['Outfit'] text-white leading-tight mb-6">
            Supported by Science.<br/>
            <span className="text-white/40">Verified by Farmers.</span>
          </h2>
          <p className="text-white/50 text-xl font-light">
            Real impact across 18 states. We are building the most trusted agriculture platform in India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#4ADE80] text-[#4ADE80]" />)}
                </div>
                <p className="text-[#F8FAF5]/80 text-lg leading-relaxed mb-10 font-[Inter] font-light">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#14532D] flex items-center justify-center text-white font-semibold shadow-inner">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-white/40 text-sm mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

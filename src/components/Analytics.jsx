import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Leaf, Award, MapPin, Star } from 'lucide-react'

const metrics = [
  { value: '2,40,000+', label: 'Active Farmers', icon: Users, color: 'text-green-400' },
  { value: '₹620 Cr', label: 'Farmer Income Generated', icon: TrendingUp, color: 'text-yellow-400' },
  { value: '18 States', label: 'Pan-India Reach', icon: MapPin, color: 'text-blue-400' },
  { value: '94%', label: 'Farmer Satisfaction', icon: Star, color: 'text-orange-400' },
  { value: '8.4L tons', label: 'CO₂ Sequestered', icon: Leaf, color: 'text-emerald-400' },
  { value: '3,200+', label: 'Carbon Credits Traded', icon: Award, color: 'text-purple-400' },
]

const testimonials = [
  {
    text: "AgriVeda's soil AI told me exactly when to apply biofertilizer. My wheat yield jumped 34% this season. This is the future of farming.",
    name: "Ramesh Patidar",
    role: "Wheat Farmer, Madhya Pradesh",
    rating: 5,
  },
  {
    text: "The carbon credits feature alone earned me ₹8,000 extra last year. And the weather alerts saved my mustard crop from an unexpected frost.",
    name: "Sunita Devi",
    role: "Mixed Crop Farmer, Bihar",
    rating: 5,
  },
  {
    text: "I was skeptical about AI farming apps. But AgriVeda speaks in our language, understands our land, and gives real advice. It works.",
    name: "Manjunath Reddy",
    role: "Rice Farmer, Telangana",
    rating: 5,
  },
]

export default function Analytics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="analytics" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071508] via-[#0a1f0f] to-[#071508]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Metrics */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-5"
          >
            <TrendingUp className="w-3 h-3" />
            Farmer Success Metrics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-[Outfit] text-white mb-4"
          >
            Real Results for{' '}
            <span className="gradient-text">Real Farmers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-green-100/50 max-w-xl mx-auto"
          >
            Across 18 states, AgriVeda is transforming farming outcomes with measurable, verified impact.
          </motion.p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-24">
          {metrics.map(({ value, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 text-center group"
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`text-2xl md:text-3xl font-black font-[Outfit] ${color} mb-1`}>{value}</p>
              <p className="text-white/50 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black font-[Outfit] text-white mb-2">
            Farmers Love AgriVeda
          </h3>
          <p className="text-green-100/50">Real stories from across India</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="glass-card p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-green-100/70 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-green-100/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f0f] to-[#071508]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-green-800/10 blur-[100px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-tag mb-5"
            >
              <Leaf className="w-3 h-3" />
              Our Mission
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black font-[Outfit] text-white leading-tight mb-6"
            >
              Technology Rooted in{' '}
              <span className="gradient-text">Ancient Wisdom</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-green-100/55 leading-relaxed mb-5"
            >
              India has 15,000 years of agricultural wisdom encoded in texts like the Krishi Parashar and Vrikshayurveda. AgriVeda was born from the belief that this wisdom, combined with modern AI, sensor technology, and data science, can create the most powerful farming platform the world has ever seen.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="text-green-100/55 leading-relaxed mb-8"
            >
              We are a team of IIT/IISc alumni, agronomists, and farmers' children who are obsessively focused on one mission: making every Indian farmer prosperous, sustainable, and technologically empowered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary flex items-center gap-2">
                Our Story <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Talk to a Farm Advisor
              </button>
            </motion.div>
          </div>

          {/* Right: Values Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '🌱', title: 'Sustainability First', desc: 'Every feature is designed to reduce chemical usage and improve soil health long-term.' },
              { emoji: '🤝', title: 'Farmer-Centered', desc: 'Built in 12 Indian languages. Works on 2G. Designed for every farmer.' },
              { emoji: '🔬', title: 'Science-Backed', desc: 'All recommendations are backed by ICAR research and validated agronomists.' },
              { emoji: '🌍', title: 'Climate Action', desc: 'Every farm on AgriVeda actively contributes to India\'s net-zero carbon mission.' },
            ].map(({ emoji, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h4 className="text-white font-bold text-sm mb-2 font-[Outfit]">{title}</h4>
                <p className="text-green-100/45 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

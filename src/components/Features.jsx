import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Leaf, CloudRain, BarChart3, TreePine, Zap, Award,
  ArrowRight, CheckCircle2
} from 'lucide-react'

const features = [
  {
    icon: Leaf,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    title: 'Soil Health Intelligence',
    description: 'Real-time NPK analysis, pH monitoring, and microbial health assessment using IoT sensors and satellite data. Get AI-driven prescriptions in seconds.',
    bullets: ['NPK & micronutrient tracking', 'Satellite-based soil mapping', 'AI deficiency diagnosis'],
    stat: '94% accuracy',
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    title: 'AI Biofertilizer Guidance',
    description: 'Personalized biofertilizer blend recommendations based on your crop, soil type, and local ecological conditions. Zero-chemical solutions.',
    bullets: ['Crop-specific formulations', 'Vendor marketplace integration', 'Application timing alerts'],
    stat: '32% yield boost',
  },
  {
    icon: CloudRain,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    title: 'Smart Weather Forecasting',
    description: 'Hyper-local 14-day weather intelligence with irrigation scheduling, frost alerts, and pest infestation risk models.',
    bullets: ['Hyper-local 3km grid forecasts', 'Pest & disease risk models', 'Automated irrigation triggers'],
    stat: '97.3% accuracy',
  },
  {
    icon: TreePine,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    title: 'Carbon Credit Earnings',
    description: 'Earn verified carbon credits by adopting sustainable practices. We handle end-to-end MRV (Measurement, Reporting, Verification) automatically.',
    bullets: ['Automated credit verification', 'Marketplace for credit selling', 'Government subsidy guidance'],
    stat: '₹4,200 avg/acre',
  },
  {
    icon: BarChart3,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    title: 'Sustainable Farming Analytics',
    description: 'Track water usage, carbon sequestration, and biodiversity index over time. Beautiful dashboards that tell the story of your farm.',
    bullets: ['Water footprint tracking', 'Carbon sequestration metrics', 'Biodiversity scoring'],
    stat: '40% water save',
  },
  {
    icon: Award,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    title: 'Farmer Success Metrics',
    description: 'Track your farm\'s P&L, compare with district benchmarks, and get a Farmer Success Score to unlock premium credit facilities.',
    bullets: ['Farm P&L dashboard', 'District benchmark comparisons', 'Credit score for farm loans'],
    stat: '2.8x ROI average',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="glass-card p-7 group cursor-default"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${feature.color}`} />
      </div>

      {/* Stat badge */}
      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${feature.bgColor} ${feature.color} border ${feature.borderColor} mb-4`}>
        {feature.stat}
      </span>

      <h3 className="text-xl font-bold font-[Outfit] text-white mb-3 group-hover:text-green-300 transition-colors">
        {feature.title}
      </h3>

      <p className="text-green-100/55 text-sm leading-relaxed mb-5">
        {feature.description}
      </p>

      <ul className="space-y-2">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2.5 text-sm text-green-100/70">
            <CheckCircle2 className={`w-3.5 h-3.5 ${feature.color} flex-shrink-0`} />
            {b}
          </li>
        ))}
      </ul>

      <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f0f] via-[#0d2a14] to-[#0a1f0f]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mx-auto mb-5"
          >
            <Leaf className="w-3 h-3" />
            Platform Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-[Outfit] text-white mb-5"
          >
            Everything Your Farm{' '}
            <span className="gradient-text">Needs to Thrive</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-100/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From ancient Vedic principles of sustainable agriculture to cutting-edge AI — 
            AgriVeda brings the best of both worlds to every Indian farmer.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

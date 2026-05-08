import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { CheckCircle2, Leaf, CloudRain, ShieldCheck, TreePine } from 'lucide-react'

const features = [
  {
    tag: 'Section 1',
    title: 'AI-Powered Soil Intelligence',
    subtitle: 'Understand your land like never before.',
    description: 'We process multi-spectral satellite imagery and IoT sensor data to give you a real-time health card of your soil block by block—down to NPK levels, moisture, and microbial vitality.',
    points: ['Satellite-based soil nutrient mapping', 'IoT moisture and pH real-time syncing', 'Instant AI deficiency diagnosis'],
    visual: 'soil',
    icon: Leaf
  },
  {
    tag: 'Section 2',
    title: 'Smart Biofertilizer Engine',
    subtitle: 'Zero chemicals. Maximum yield.',
    description: 'Vedic farming meets modern agronomy. Our AI recommends precise biofertilizer formulations and Application schedules tailored strictly to your current crop and soil state.',
    points: ['Crop-specific organic formulations', 'Vendor marketplace routing', 'Application timing alerts via WhatsApp'],
    visual: 'bio',
    icon: ShieldCheck
  },
  {
    tag: 'Section 3',
    title: 'Hyper-Local Weather AI',
    subtitle: 'Forecasts built for your specific farm.',
    description: 'We do not just tell you if it will rain—we tell you if you should irrigate today, if pests are likely to breed tomorrow, and when to harvest to avoid crop damage safely.',
    points: ['3km grid-level accuracy', 'Pest and disease risk models', 'Automated irrigation triggers'],
    visual: 'weather',
    icon: CloudRain
  },
  {
    tag: 'Section 4',
    title: 'Earn Through Carbon Credits',
    subtitle: 'Get paid for planting sustainably.',
    description: 'AgriVeda handles the complex Measurement, Reporting, and Verification (MRV) process automatically. Every sustainable practice you log earns verified credits you can sell instantly.',
    points: ['Automated credit verification', 'Direct marketplace payouts', 'Historical sustainability dashboard'],
    visual: 'carbon',
    icon: TreePine
  }
]

function VisualBlock({ type }) {
  if (type === 'soil') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#14532D] to-[#071508] p-8 border border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.8)_0%,transparent_70%)] mix-blend-screen" />
        <div className="h-full w-full border border-white/10 rounded-2xl bg-black/20 backdrop-blur-md p-6 flex flex-col justify-end relative z-10 overflow-hidden">
          {/* Mock heatmap visual */}
          <div className="absolute top-0 left-0 w-full h-[60%] opacity-40" 
               style={{ background: 'linear-gradient(90deg, #8B5E3C 0%, #14532D 50%, #4ADE80 100%)', filter: 'blur(20px)' }} />
          
          <div className="relative z-20">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">Block A Health</p>
                <p className="text-3xl font-['Outfit'] text-white">Optimal</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#4ADE80]/20 flex items-center justify-center text-[#4ADE80] font-bold">A+</div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-[#4ADE80] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'bio') {
     return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-tl from-[#14532D]/40 to-[#071508] p-8 border border-white/5 flex items-center justify-center">
        <div className="glass-card w-full max-w-sm p-6 shadow-2xl relative z-10">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#4ADE80]" />
            </div>
            <div>
              <p className="font-semibold text-white">Rhizobium Blend</p>
              <p className="text-sm text-white/50">Apply within 48h</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/40">Expected Yield Boost</span>
            <span className="text-[#4ADE80] font-semibold">+24%</span>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'weather') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#071508] p-8 border border-white/5 flex flex-col justify-between">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15)_0%,transparent_60%)]" />
        <div className="relative z-10">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-2">Precipitation Map</p>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-6xl font-['Outfit'] font-light text-white">28°</span>
            <span className="text-blue-400 font-semibold mb-2">90% Rain</span>
          </div>
        </div>
        <div className="flex gap-2 relative z-10">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex-1 h-32 bg-white/5 rounded-t-xl relative overflow-hidden flex items-end">
               <div className="w-full bg-blue-500/20" style={{ height: `${Math.random() * 80 + 20}%`}} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'carbon') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#071508] to-[#14532D] p-8 border border-[#4ADE80]/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50" />
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4ADE80] text-[#071508] mb-6 shadow-[0_0_40px_rgba(74,222,128,0.4)]">
            <TreePine className="w-8 h-8" />
          </div>
          <p className="text-7xl font-['Outfit'] font-light text-white mb-2">₹12<span className="text-3xl">k</span></p>
          <p className="text-[#4ADE80] font-medium tracking-wide uppercase text-sm">Credits Mined This Season</p>
        </div>
      </div>
    )
  }
  return null
}

function FeatureRow({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 py-20 lg:py-32`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <feature.icon className="w-5 h-5 text-[#4ADE80]" />
          </div>
          <span className="text-sm font-semibold tracking-wider text-white/50 uppercase">{feature.tag}</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-white font-['Outfit'] mb-4 leading-tight">
          {feature.title}
        </h2>
        <h3 className="text-xl text-[#4ADE80] font-light mb-6">
          {feature.subtitle}
        </h3>
        <p className="text-[#F8FAF5]/60 text-lg leading-relaxed mb-8">
          {feature.description}
        </p>
        
        <ul className="space-y-4">
          {feature.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
              <span className="text-white/80">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Visual Component */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full aspect-square lg:aspect-[4/3] rounded-[32px] p-2 bg-gradient-to-b from-white/10 to-transparent"
      >
        <VisualBlock type={feature.visual} />
      </motion.div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="bg-[#071508] py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32 pt-20">
          <h2 className="text-4xl md:text-6xl font-semibold text-white font-['Outfit'] mb-6">
            Built for <span className="gradient-text-green font-bold">Sustainable</span> Indian Farming.
          </h2>
          <p className="text-xl text-white/50 font-light">
            Every feature is meticulously crafted to blend traditional ecological knowledge with tomorrow's AI capabilities.
          </p>
        </div>

        <div className="flex flex-col gap-8 divide-y divide-white/5">
          {features.map((feature, i) => (
            <FeatureRow key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

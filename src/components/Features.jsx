import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { CheckCircle2, Leaf, CloudRain, ShieldCheck, TreePine, Droplet, Sun, Activity } from 'lucide-react'

const features = [
  {
    tag: 'Intelligence Layer',
    title: 'AI-Powered Soil Intelligence',
    subtitle: 'Understand your land like never before.',
    description: 'We process multi-spectral satellite imagery and ground IoT sensor data to give you a real-time health card of your soil block by block—tracking absolute NPK levels, moisture depth, and microbial vitality.',
    points: ['Satellite-based soil nutrient mapping', 'IoT moisture and pH real-time syncing', 'Instant AI deficiency diagnosis'],
    visual: 'soil',
    icon: Leaf
  },
  {
    tag: 'Recommendation Engine',
    title: 'Smart Biofertilizer AI',
    subtitle: 'Zero chemicals. Maximum yield.',
    description: 'Vedic farming meets modern enterprise agronomy. Our AI recommends precise biofertilizer formulations and application schedules tailored strictly to your current crop genetics and soil state.',
    points: ['Crop-specific organic formulations', 'Vendor marketplace routing algorithm', 'Precision application timing alerts'],
    visual: 'bio',
    icon: ShieldCheck
  },
  {
    tag: 'Live Forecasting',
    title: 'Hyper-Local Weather AI',
    subtitle: 'Forecasts built for your specific coordinate.',
    description: 'We do not just tell you if it will rain—we tell you if you should irrigate today, if pests are likely to breed tomorrow given the humidity, and when to harvest to avoid crop damage safely.',
    points: ['3km grid-level accuracy', 'Pest and disease risk models', 'Automated hardware irrigation triggers'],
    visual: 'weather',
    icon: CloudRain
  },
  {
    tag: 'Sustainability Economics',
    title: 'Earn Through Carbon Credits',
    subtitle: 'Get paid for planting sustainably.',
    description: 'AgriVeda handles the complex Measurement, Reporting, and Verification (MRV) process automatically. Every sustainable practice you log via the app earns verified carbon credits you can sell instantly on our blockchain ledger.',
    points: ['Automated credit verification pipeline', 'Direct financial marketplace payouts', 'Historical sustainability ledger'],
    visual: 'carbon',
    icon: TreePine
  }
]

function VisualBlock({ type }) {
  if (type === 'soil') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#14532D] to-[#071508] p-8 border border-white/5 shadow-2xl flex flex-col justify-end group">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.8)_0%,transparent_70%)] mix-blend-screen transition-opacity duration-700 group-hover:opacity-40" />
        
        {/* Graph Mockup Layer */}
        <div className="absolute inset-x-4 top-4 bottom-24 rounded-2xl bg-black/20 backdrop-blur-md p-6 border border-white/5 flex items-end gap-2 overflow-hidden shadow-inner">
           {[30, 45, 25, 60, 80, 50, 90, 75].map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 0 }}
               whileInView={{ height: `${h}%` }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="flex-1 w-full bg-gradient-to-t from-[#4ADE80]/80 to-[#22C55E] rounded-t-lg relative z-10"
             />
           ))}
           <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#8B5E3C]/30 to-transparent blur-xl" />
        </div>

        <div className="relative z-20 bg-[#071508]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[#4ADE80] text-[10px] uppercase tracking-widest font-bold mb-1 flex items-center gap-1"><Activity className="w-3 h-3"/> Block A Health</p>
              <p className="text-3xl font-['Outfit'] text-white">Optimal State</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#4ADE80] flex items-center justify-center text-[#071508] font-black text-xl shadow-[0_0_20px_rgba(74,222,128,0.4)]">A+</div>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: '88%' }} 
              transition={{ duration: 1.5, delay: 0.5 }} 
              className="h-full bg-[#4ADE80] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]" 
            />
          </div>
        </div>
      </div>
    )
  }
  if (type === 'bio') {
     return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-tl from-[#071508] via-[#14532D]/40 to-[#071508] p-8 border border-white/5 flex items-center justify-center group">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-40 mix-blend-screen" />
        
        {/* Floating elements behind */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="absolute w-[300px] h-[300px] border border-[#4ADE80]/10 rounded-full border-dashed" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute w-[200px] h-[200px] border border-[#4ADE80]/20 rounded-full" />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card w-full max-w-sm p-8 shadow-2xl relative z-10 border border-[#4ADE80]/30 transform group-hover:scale-105 transition-transform duration-500"
        >
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4ADE80] text-[#071508] rounded-full flex items-center justify-center font-bold text-lg shadow-[0_0_30px_rgba(74,222,128,0.5)]">
            AI
          </div>
          <div className="flex items-center gap-5 border-b border-white/10 pb-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center shadow-inner border border-white/5">
              <ShieldCheck className="w-8 h-8 text-[#4ADE80]" />
            </div>
            <div>
              <p className="font-bold text-white text-xl">Rhizobium Blend</p>
              <p className="text-sm text-yellow-400 font-medium">Apply within 48h</p>
            </div>
          </div>
          <div className="space-y-4">
             <div className="flex items-center justify-between text-sm">
               <span className="text-white/40">Compatibility Match</span>
               <span className="text-white font-bold">98%</span>
             </div>
             <div className="flex items-center justify-between text-sm">
               <span className="text-white/40">Expected Yield Boost</span>
               <span className="text-[#4ADE80] font-bold">+24.5%</span>
             </div>
          </div>
        </motion.div>
      </div>
    )
  }
  if (type === 'weather') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#071508] p-8 border border-white/5 flex flex-col justify-between group shadow-[inset_0_0_100px_rgba(59,130,246,0.1)]">
        <div className="absolute top-[-30%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15)_0%,transparent_60%)] group-hover:scale-110 transition-transform duration-1000" />
        <div className="relative z-10">
          <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 flex items-center gap-1"><Droplet className="w-3 h-3"/> Live Precipitation Map</p>
          <div className="flex items-end gap-4 mb-8">
            <span className="text-7xl font-['Outfit'] font-light text-white tracking-tighter drop-shadow-xl">28<span className="text-5xl text-white/50">°</span></span>
            <div className="mb-2">
               <span className="text-white font-bold text-lg block">Heavy Rain Risk</span>
               <span className="text-blue-400 font-semibold text-sm">90% Probability</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 relative z-10">
          {['12:00', '14:00', '16:00', '18:00', '20:00'].map((time, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-3">
              <span className="text-white/30 text-[10px] font-bold">{time}</span>
              <div className="w-full h-32 bg-white/5 rounded-full relative overflow-hidden flex items-end">
                 <motion.div 
                   initial={{ height: 0 }}
                   whileInView={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                   className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-full" 
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'carbon') {
    return (
      <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-[#071508] to-[#14532D] p-8 border border-[#4ADE80]/20 flex items-center justify-center group shadow-[0_0_50px_rgba(74,222,128,0.1)] hover:shadow-[0_0_80px_rgba(74,222,128,0.2)] transition-shadow duration-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50 mix-blend-overlay" />
        <div className="relative z-10 text-center w-full max-w-sm">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#22C55E] text-[#071508] mb-8 shadow-[0_0_40px_rgba(74,222,128,0.5)] transform transition-transform"
          >
            <TreePine className="w-10 h-10" />
          </motion.div>
          
          <div className="glass-card bg-black/20 p-6 w-full backdrop-blur-md rounded-2xl border border-white/5">
             <p className="text-[#4ADE80] font-bold tracking-widest uppercase text-[10px] mb-2">Verified Blockchain Ledger</p>
             <p className="text-6xl font-['Outfit'] font-bold text-white mb-2 tracking-tight">₹12<span className="text-3xl text-white/50 font-medium">,450</span></p>
             <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-[#4ADE80]/50 to-transparent my-4"></div>
             <p className="text-white/60 text-sm">Credits generated this season</p>
          </div>
        </div>
      </div>
    )
  }
  return null
}

function FeatureRow({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-150px" })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 py-24 lg:py-32`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
            <feature.icon className="w-6 h-6 text-[#4ADE80]" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">{feature.tag}</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-['Outfit'] mb-6 leading-tight tracking-tight">
          {feature.title}
        </h2>
        <h3 className="text-xl md:text-2xl text-[#4ADE80] font-light mb-8">
          {feature.subtitle}
        </h3>
        <p className="text-[#F8FAF5]/60 text-lg md:text-xl leading-relaxed mb-10 font-light">
          {feature.description}
        </p>
        
        <ul className="space-y-5">
          {feature.points.map((point, i) => (
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              key={i} 
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-[#4ADE80] shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
              <span className="text-white/80 font-medium text-lg leading-snug">{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Visual Component */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full aspect-square lg:aspect-[4/3] rounded-[32px] p-2 bg-gradient-to-b from-white/10 to-transparent"
        style={{ perspective: 1000 }}
      >
        <VisualBlock type={feature.visual} />
      </motion.div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-[#071508] py-24 relative z-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4ADE80]/30 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#4ADE80] text-sm uppercase tracking-[0.2em] font-bold mb-6">Core Infrastructure</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white font-['Outfit'] mb-8 tracking-tight">
              Built for <span className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-transparent bg-clip-text">Sustainable</span><br/>Indian Farming.
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">
              Every system is meticulously crafted to blend centuries of ecological knowledge with tomorrow's AI capabilities, delivered in an enterprise-grade SaaS experience.
            </p>
          </motion.div>
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

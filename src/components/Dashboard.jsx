import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Leaf, CloudRain, Thermometer, Droplets, BarChart2,
  TrendingUp, AlertCircle, CheckCircle, Clock, ChevronUp,
  TreePine, Zap
} from 'lucide-react'

function AnimatedNumber({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

function SoilBar({ label, value, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-white/60">{label}</span>
        <span className={`font-semibold ${color}`}>{value}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className={`h-full rounded-full`}
          style={{ background: color.includes('green') ? '#4ADE80' : color.includes('blue') ? '#60a5fa' : color.includes('yellow') ? '#fbbf24' : '#a78bfa' }}
        />
      </div>
    </div>
  )
}

export default function Dashboard() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="dashboard" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f0f] to-[#071508]" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-green-500/5 blur-[120px]" />

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-5"
          >
            <BarChart2 className="w-3 h-3" />
            Live Dashboard Preview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-[Outfit] text-white mb-4"
          >
            Your Farm, <span className="gradient-text">Fully Visible</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-green-100/50 max-w-xl mx-auto"
          >
            Real-time intelligence at a glance. Everything you need to make the right farming decision.
          </motion.p>
        </div>

        {/* Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-2 md:p-4 overflow-hidden"
          style={{ boxShadow: '0 0 80px rgba(74,222,128,0.08), 0 0 200px rgba(74,222,128,0.04)' }}
        >
          {/* Top bar */}
          <div className="flex items-center gap-2 px-3 py-2 mb-3 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-white/20 text-xs mx-auto">AgriVeda Farm Intelligence ∙ Rajasthan, India</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 p-2">
            {/* Column 1: Health + Weather */}
            <div className="space-y-4">
              {/* Soil Health */}
              <div className="bg-white/4 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Soil Health</span>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                {/* Circular gauge */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
                      <motion.circle
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke="url(#greenGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="100"
                        initial={{ strokeDashoffset: 100 }}
                        animate={inView ? { strokeDashoffset: 13 } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                        pathLength="100"
                      />
                      <defs>
                        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4ADE80" />
                          <stop offset="100%" stopColor="#86efac" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-white font-[Outfit]">87</span>
                      <span className="text-xs text-green-400/70">/ 100</span>
                    </div>
                  </div>
                </div>
                <SoilBar label="Nitrogen (N)" value={78} color="text-green-400" />
                <SoilBar label="Phosphorus (P)" value={62} color="text-blue-400" />
                <SoilBar label="Potassium (K)" value={85} color="text-yellow-400" />
              </div>

              {/* Weather */}
              <div className="bg-white/4 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CloudRain className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Weather</span>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-3xl font-black text-white font-[Outfit]">28°C</p>
                    <p className="text-xs text-white/40">Partly cloudy • Jaipur</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-400 font-bold text-sm">Rain in 2d</p>
                    <p className="text-xs text-white/30">14mm expected</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-center">
                  {['Mon','Tue','Wed','Thu'].map((d,i) => (
                    <div key={d} className="bg-white/5 rounded-lg py-2">
                      <p className="text-white/30 text-xs">{d}</p>
                      <p className="text-white/70 text-xs font-semibold mt-1">{[28,30,26,25][i]}°</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Crop + Biofertilizer */}
            <div className="space-y-4">
              {/* Crop Status */}
              <div className="bg-white/4 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Crop Status</span>
                </div>
                <div className="space-y-3">
                  {[
                    { crop: 'Wheat (Field A)', stage: 'Tillering', health: 92, color: '#4ADE80' },
                    { crop: 'Mustard (Field B)', stage: 'Flowering', health: 76, color: '#fbbf24' },
                    { crop: 'Chickpea (Field C)', stage: 'Germination', health: 88, color: '#60a5fa' },
                  ].map(({ crop, stage, health, color }) => (
                    <div key={crop} className="bg-white/5 rounded-xl p-3">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-white/80 text-xs font-semibold">{crop}</p>
                          <p className="text-white/30 text-xs">{stage}</p>
                        </div>
                        <span className="text-xs font-bold" style={{ color }}>{health}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${health}%` } : {}}
                          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biofertilizer Recommendation */}
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-semibold text-yellow-400/80 uppercase tracking-wider">AI Recommendation</span>
                </div>
                <p className="text-white font-bold text-sm mb-1">Rhizobium + PSB Blend</p>
                <p className="text-green-100/55 text-xs leading-relaxed mb-3">
                  Apply 2kg/acre for nitrogen fixation. Optimal window: <strong className="text-green-400">Next 3 days</strong>, early morning.
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 text-xs bg-green-500 text-black font-bold py-2 rounded-lg hover:bg-green-400 transition-colors">
                    Buy Now ₹340
                  </button>
                  <button className="flex-1 text-xs border border-green-500/30 text-green-400 py-2 rounded-lg hover:bg-green-500/10 transition-colors">
                    Schedule
                  </button>
                </div>
              </div>
            </div>

            {/* Column 3: Carbon Credits + Metrics */}
            <div className="space-y-4">
              {/* Carbon Credits */}
              <div className="bg-white/4 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TreePine className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Carbon Credits</span>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <p className="text-4xl font-black font-[Outfit] text-white">₹<AnimatedNumber end={4200} /></p>
                  <div className="flex items-center gap-1 text-green-400 text-xs font-semibold mb-1">
                    <ChevronUp className="w-3 h-3" /> 18%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { label: 'CO₂ Saved', value: '2.4T' },
                    { label: 'Credits Issued', value: '12' },
                    { label: 'Available', value: '₹1,200' },
                    { label: 'Lifetime', value: '₹18,400' },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/5 rounded-lg p-2.5">
                      <p className="text-white/30 text-xs">{label}</p>
                      <p className="text-emerald-400 font-bold text-sm">{value}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-2 rounded-lg font-semibold hover:bg-emerald-500/30 transition-colors">
                  Sell Credits on Marketplace
                </button>
              </div>

              {/* Alerts */}
              <div className="bg-white/4 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Alerts</span>
                </div>
                <div className="space-y-2">
                  {[
                    { type: 'warning', msg: 'Low moisture in Field B', time: '2h ago' },
                    { type: 'info', msg: 'Pest risk moderate (whitefly)', time: '5h ago' },
                    { type: 'success', msg: 'Credit payment received', time: '1d ago' },
                  ].map(({ type, msg, time }) => (
                    <div key={msg} className="flex items-start gap-2.5 bg-white/5 rounded-xl p-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        type === 'warning' ? 'bg-orange-400' : type === 'info' ? 'bg-blue-400' : 'bg-green-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/70 text-xs leading-tight">{msg}</p>
                        <p className="text-white/25 text-xs mt-0.5">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

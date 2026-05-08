import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, Leaf, CloudRain, Droplets, Wind, TrendingUp } from 'lucide-react'

function Widget({ children, className, style, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass-card p-4 shadow-2xl ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#071508]">
      {/* Background cinematic glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#14532D]/40 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4ADE80]/20 rounded-full blur-[150px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: '2s' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="section-tag mb-8"
            >
              <Leaf className="w-4 h-4" />
              Intelligence for Indian Agriculture
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-8 font-['Outfit']"
            >
              Transform Soil Intelligence Into{' '}
              <span className="gradient-text-green font-semibold">Farmer Prosperity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-[#F8FAF5]/60 leading-relaxed mb-10 font-[Inter] font-light"
            >
              AgriVeda combines AI-powered soil analysis, weather forecasting, biofertilizer intelligence, and carbon credit tracking to help Indian farmers farm sustainably and profitably.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5"
            >
              <button className="btn-primary group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Live Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8"
            >
              <div>
                <p className="text-3xl font-semibold text-white font-['Outfit']">2.4L+</p>
                <p className="text-sm text-white/50 mt-1 uppercase tracking-wider">Farmers Trusted</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-semibold text-[#4ADE80] font-['Outfit']">₹620Cr</p>
                <p className="text-sm text-white/50 mt-1 uppercase tracking-wider">Farmer Income</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals - Cinematic Floating Dashboard Elements */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main Soil Dashboard */}
            <Widget delay={0.4} className="w-[340px] right-4 top-1/2 -translate-y-1/2 z-20 animate-float">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#4ADE80]" />
                    Soil Health
                  </h3>
                  <p className="text-xs text-white/40 mt-1">Real-time analysis</p>
                </div>
                <div className="w-12 h-12 rounded-full border-[3px] border-[#4ADE80] flex items-center justify-center">
                  <span className="text-[#4ADE80] font-bold text-sm">92</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { l: 'Nitrogen (N)', v: '85%', c: '#4ADE80' },
                  { l: 'Phosphorus (P)', v: '70%', c: '#F8FAF5' },
                  { l: 'Potassium (K)', v: '90%', c: '#4ADE80' }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-white/60">{stat.l}</span>
                      <span className="text-white font-medium">{stat.v}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.v }}
                        transition={{ duration: 1.5, delay: 1 + (i*0.2), ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.c }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-[#4ADE80] text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Optimal for Wheat Cultivation
                </p>
              </div>
            </Widget>

            {/* Weather Widget */}
            <Widget delay={0.6} className="w-[240px] left-0 top-[10%] z-10 animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <CloudRain className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">24°C</p>
                  <p className="text-xs text-white/50">Rain expected 4PM</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-blue-300 font-medium whitespace-nowrap">Auto-delaying irrigation system</p>
              </div>
            </Widget>

            {/* Carbon Credits Widget */}
            <Widget delay={0.8} className="w-[260px] left-8 bottom-[15%] z-30 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Carbon Earnings</p>
                  <p className="text-2xl font-semibold text-white">₹4,250</p>
                </div>
                <TrendingUp className="w-5 h-5 text-[#4ADE80]" />
              </div>
              <svg className="w-full h-12 overflow-visible">
                <motion.path 
                  d="M0,40 Q20,20 40,30 T80,20 T120,25 T160,10 T200,15 T240,5" 
                  fill="none" 
                  stroke="#4ADE80" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "300", strokeDashoffset: "300" }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </Widget>
          </div>

        </div>
      </div>
      
      {/* Cinematic bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#071508] to-transparent z-10 pointer-events-none" />
    </section>
  )
}

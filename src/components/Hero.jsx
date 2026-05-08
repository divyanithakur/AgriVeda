import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, Leaf, CloudRain, Droplets, Wind, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

function Widget({ children, className, delay = 0, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass-card p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl border border-white/10 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#071508] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')]">
      {/* Background cinematic soft glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-[#14532D]/40 rounded-full blur-[150px] animate-pulse-glow mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[10%] w-[600px] h-[600px] bg-[#4ADE80]/15 rounded-full blur-[150px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071508]/50 to-[#071508] z-10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text Block */}
          <div className="max-w-2xl relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] font-semibold text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.2)] mb-8"
            >
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
              </span>
              AgriTech Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-8 font-['Outfit'] drop-shadow-2xl"
            >
              Transform Soil Intelligence Into{' '}
              <span className="bg-gradient-to-r from-[#4ADE80] via-[#22C55E] to-[#4ADE80] text-transparent bg-clip-text font-bold bg-[length:200%_auto] animate-gradient">
                Prosperity.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-[#F8FAF5]/70 leading-relaxed mb-12 font-[Inter] font-light max-w-xl"
            >
              AI-powered soil insights, hyper-local weather intelligence, biofertilizer guidance, and verified carbon credit tracking for the modern Indian farmer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/login" className="bg-[#F8FAF5] hover:bg-[#4ADE80] text-[#071508] font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(74,222,128,0.4)] hover:-translate-y-1">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 backdrop-blur-md">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-20 flex items-center gap-10"
            >
              <div>
                <p className="text-4xl font-bold text-white font-['Outfit'] flex items-center gap-1">2.4<span className="text-xl text-white/50 font-normal">Lakh+</span></p>
                <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.15em] font-semibold">Farmers Trusted</p>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div>
                <p className="text-4xl font-bold text-[#4ADE80] font-['Outfit'] drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">₹620<span className="text-xl text-[#4ADE80]/60 font-normal">Cr</span></p>
                <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.15em] font-semibold">Verified Income</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Dashboard Mockup - Floating Architecture */}
          <div className="relative h-[700px] hidden lg:block z-20">
            
            {/* 1. Main Soil Dashboard */}
            <Widget delay={0.4} className="w-[380px] right-2 top-[30%] z-30 animate-float shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2 text-lg">
                    <Leaf className="w-5 h-5 text-[#4ADE80]" />
                    Soil Spectral Scan
                  </h3>
                  <p className="text-xs text-white/40 mt-1">Live from Node A7 • Validated</p>
                </div>
                <div className="w-14 h-14 rounded-full border-[3px] border-[#4ADE80] flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                  <span className="text-[#4ADE80] font-bold text-lg">92</span>
                </div>
              </div>
              
              <div className="space-y-5">
                {[
                  { l: 'Nitrogen (N)', v: '85%', c: '#4ADE80' },
                  { l: 'Phosphorus (P)', v: '70%', c: '#F8FAF5' },
                  { l: 'Potassium (K)', v: '90%', c: '#4ADE80' }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60 group-hover:text-white transition-colors">{stat.l}</span>
                      <span className="text-white font-bold">{stat.v}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.v }}
                        transition={{ duration: 2, delay: 1 + (i*0.2), ease: 'easeOut' }}
                        className="h-full rounded-full backdrop-blur-md"
                        style={{ backgroundColor: stat.c }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-[#4ADE80]/10 to-transparent border-l-2 border-[#4ADE80] rounded-r-xl">
                <p className="text-white text-sm font-medium flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" /> 
                  Optimal for early-stage Wheat sowing. No synthetic urea required.
                </p>
              </div>
            </Widget>

            {/* 2. Weather Intelligence Card */}
            <Widget delay={0.6} className="w-[280px] left-[-10%] top-[10%] z-20 animate-float-slow" style={{ animationDelay: '1s' }}>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">Hyper-Local Forecast</p>
              <div className="flex items-end gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <CloudRain className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-5xl font-light text-white font-['Outfit']">24°</p>
                  <p className="text-xs text-blue-400 font-semibold mt-1">90% Rain at 4 PM</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50">Auto-Irrigation</span>
                  <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded">PAUSED</span>
                </div>
              </div>
            </Widget>

            {/* 3. Carbon Earnings Visual */}
            <Widget delay={0.8} className="w-[300px] left-[5%] bottom-[5%] z-40 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-1">Carbon Wallet</p>
                  <p className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                    ₹4,250 
                    <span className="text-xs font-medium text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +14%
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative h-16 w-full">
                {/* Glowing graph base logic */}
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#4ADE80]/20 to-transparent blur-md mix-blend-screen" />
                <svg className="w-full h-full overflow-visible absolute inset-0 z-10">
                  <motion.path 
                    d="M0,50 Q40,40 80,45 T160,20 T240,30 T300,5" 
                    fill="none" 
                    stroke="#4ADE80" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0px 10px 10px rgba(74,222,128,0.5))" }}
                    initial={{ strokeDasharray: "400", strokeDashoffset: "400" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
                  />
                  {/* Endpoint glowing dot */}
                  <motion.circle
                     cx="300" cy="5" r="6" fill="#071508" stroke="#4ADE80" strokeWidth="3"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 3.8 }}
                  />
                </svg>
              </div>
            </Widget>

          </div>
        </div>
      </div>
      
      {/* Heavy Cinematic bottom fade to link to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#071508] to-transparent z-10 pointer-events-none" />
    </section>
  )
}

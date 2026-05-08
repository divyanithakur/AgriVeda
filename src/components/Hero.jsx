import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Leaf, Droplets, Sun, Wind } from 'lucide-react'

// Floating organic particle
function Particle({ style }) {
  return (
    <div
      className="particle"
      style={style}
    />
  )
}

// Animated dashboard card floating in hero
function DashboardFloat() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="glass-card p-6 relative overflow-hidden"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        {/* Glowing orb inside */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-600/10 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-green-400/60 text-xs font-semibold tracking-widest uppercase">Live Farm Monitor</p>
              <h3 className="text-white font-bold text-lg font-[Outfit]">Soil Health Dashboard</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-green-400" />
            </div>
          </div>

          {/* Soil Score */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-green-100/60">Soil Health Score</span>
              <span className="text-green-400 font-bold text-sm">87/100</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '87%' }}
                transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Droplets, label: 'Moisture', value: '72%', color: 'text-blue-400' },
              { icon: Sun, label: 'Temp', value: '28°C', color: 'text-yellow-400' },
              { icon: Wind, label: 'pH Level', value: '6.8', color: 'text-green-400' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="bg-white/5 rounded-xl p-3 text-center">
                <Icon className={`w-4 h-4 ${color} mx-auto mb-1`} />
                <p className="text-white/40 text-xs mb-1">{label}</p>
                <p className={`font-bold text-sm ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
            <p className="text-xs text-green-400/70 uppercase tracking-wider mb-1 font-semibold">AI Recommendation</p>
            <p className="text-sm text-green-100/80">Apply <strong className="text-green-400">Rhizobium biofertilizer</strong> for 23% yield boost</p>
          </div>
        </div>
      </motion.div>

      {/* Floating mini cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute -left-16 top-12 glass-card p-3 w-40 hidden lg:block"
        style={{ animation: 'float2 5s ease-in-out infinite' }}
      >
        <p className="text-xs text-green-400/60 mb-1">Rain Alert</p>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-400 w-4 h-4" />
          <p className="text-white font-bold text-sm">In 2 Days</p>
        </div>
        <p className="text-xs text-white/40 mt-1">Delay irrigation</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute -right-16 bottom-12 glass-card p-3 w-44 hidden lg:block"
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        <p className="text-xs text-green-400/60 mb-1">Carbon Credits</p>
        <div className="flex items-center gap-2">
          <Leaf className="text-green-400 w-4 h-4" />
          <p className="text-white font-bold text-sm">₹4,200 Earned</p>
        </div>
        <p className="text-xs text-white/40 mt-1">+18% this month</p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    width: `${Math.random() * 8 + 3}px`,
    height: `${Math.random() * 8 + 3}px`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 12 + 8}s`,
    animationDelay: `${Math.random() * 6}s`,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(74,222,128,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(20,83,45,0.18) 0%, transparent 60%), #0a1f0f',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Large glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-700/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-tag mb-6"
            >
              <Leaf className="w-3 h-3" />
              India's #1 AgriTech AI Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black font-[Outfit] leading-[1.06] tracking-tight mb-6"
            >
              Ancient Wisdom,{' '}
              <span className="gradient-text">Modern</span>{' '}
              Agriculture
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg text-green-100/60 leading-relaxed mb-10 max-w-xl"
            >
              AgriVeda uses AI-powered soil intelligence, weather forecasting, 
              biofertilizer recommendations, and carbon credit tracking to help 
              Indian farmers grow sustainably and profitably.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex gap-8 mb-10"
            >
              {[
                { value: '2.4L+', label: 'Farmers' },
                { value: '18 States', label: 'Coverage' },
                { value: '₹620Cr', label: 'Farmer Income' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black font-[Outfit] gradient-text">{value}</p>
                  <p className="text-xs text-green-100/50 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Explore Dashboard
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex items-center gap-6 flex-wrap"
            >
              {['ICAR Certified', 'DST Funded', 'YC Backed'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-100/40 font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <div className="relative">
            <DashboardFloat />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1f0f] to-transparent" />
    </section>
  )
}

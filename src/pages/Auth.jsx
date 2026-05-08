import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Mail, Lock, User, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated auth flow
    setTimeout(() => {
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#071508] relative flex items-center justify-center overflow-hidden p-6">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#14532D]/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4ADE80]/10 rounded-full blur-[100px] mix-blend-screen animate-float" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4ADE80] to-[#14532D] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#4ADE80]/20">
            <Leaf className="w-6 h-6 text-[#071508]" />
          </div>
          <h2 className="text-3xl font-semibold text-white font-['Outfit'] mb-2">
            {isLogin ? 'Welcome Back' : 'Join AgriVeda'}
          </h2>
          <p className="text-white/50 text-sm">
            {isLogin ? 'Sign in to access your farm intelligence dashboard.' : 'Start your sustainable farming journey today.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 relative z-10">
          {!isLogin && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4ADE80]/50 transition-colors" placeholder="Ramesh Kumar" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider">State / District</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4ADE80]/50 transition-colors" placeholder="Maharashtra" required />
                </div>
              </div>
            </motion.div>
          )}

          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider">Email or Phone</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4ADE80]/50 transition-colors" placeholder="farmer@example.com" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4ADE80]/50 transition-colors" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#F8FAF5] hover:bg-[#4ADE80] text-[#071508] font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group mt-6">
            {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-center mt-6">
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-white/50 text-sm hover:text-[#4ADE80] transition-colors">
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Mail, Lock, User, MapPin, Loader2 } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import toast from 'react-hot-toast'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      await addDoc(collection(db, 'leads'), {
        ...data,
        type: isLogin ? 'login_attempt' : 'registration',
        timestamp: new Date()
      });

      toast.success("Welcome to AgriVeda!", {
        style: { background: '#1A5C38', color: '#fff' }
      });

      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.", {
        style: { background: '#C8520A', color: '#fff' }
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-stretch bg-white scroll-smooth overflow-hidden">
      
      {/* Left side: Hero Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=85" 
          alt="Farmer at sunrise" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/90 to-primary-green/20" />
        <div className="absolute bottom-20 left-20 right-20 z-10">
           <Link to="/" className="flex items-center gap-3 mb-10 group">
             <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                <Leaf className="w-5 h-5 text-primary-green" />
             </div>
             <span className="text-2xl font-black text-white tracking-tight">AgriVeda</span>
           </Link>
           <h1 className="text-5xl font-black text-white leading-tight mb-6 font-display">
             Digitizing the roots of<br/>
             <span className="text-amber">Indian agriculture</span>
           </h1>
           <p className="text-white/70 text-lg font-medium max-w-md">
             Join 10,000+ farmers across 18 states maximizing their yield and carbon income.
           </p>
        </div>
      </div>

      {/* Right side: Login form */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-24 bg-white relative">
        <div className="absolute top-10 right-10 lg:hidden">
          <Link to="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 rounded-xl bg-primary-green flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
             </div>
             <span className="text-lg font-black text-dark-text tracking-tight">AgriVeda</span>
           </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-4xl font-black text-dark-text font-display mb-3 tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-dark-text/40 text-sm font-medium">
              {isLogin ? 'Sign in to access your farm intelligence.' : 'Start your sustainable farming journey today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-dark-text/40 mb-2 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/20" />
                    <input name="fullName" type="text" className="w-full bg-green-bg/30 border border-dark-text/5 rounded-2xl py-4 pl-12 pr-4 text-dark-text font-semibold placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-all shadow-sm" placeholder="Ramesh Kumar" required />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-dark-text/40 mb-2 uppercase tracking-widest">District/State</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/20" />
                    <input name="location" type="text" className="w-full bg-green-bg/30 border border-dark-text/5 rounded-2xl py-4 pl-12 pr-4 text-dark-text font-semibold placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-all shadow-sm" placeholder="Nagpur" required />
                  </div>
                </div>
              </motion.div>
            )}

            <div>
              <label className="block text-[10px] font-black text-dark-text/40 mb-2 uppercase tracking-widest">Email or Phone</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/20" />
                <input name="contact" type="text" className="w-full bg-green-bg/30 border border-dark-text/5 rounded-2xl py-4 pl-12 pr-4 text-dark-text font-semibold placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-all shadow-sm" placeholder="farmer@agriveda.io" required />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-dark-text/40 mb-2 uppercase tracking-widest">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/20" />
                <input name="password" type="password" className="w-full bg-green-bg/30 border border-dark-text/5 rounded-2xl py-4 pl-12 pr-4 text-dark-text font-semibold placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-all shadow-sm" placeholder="••••••••" required />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-terracotta hover:bg-accent-dark text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 group mt-10 transition-all shadow-lg shadow-terracotta/20 hover:-translate-y-1 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="text-center mt-10">
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-dark-text text-sm hover:text-primary-green transition-all font-black border-b-2 border-dark-text/10 hover:border-primary-green/40">
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

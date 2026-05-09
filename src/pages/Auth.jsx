import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Mail, Lock, User, MapPin, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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
      // Store to Firebase Firestore (collection: 'leads')
      await addDoc(collection(db, 'leads'), {
        ...data,
        type: isLogin ? 'login_attempt' : 'registration',
        timestamp: new Date()
      });

      toast.success("Thank you! We'll contact you soon.", {
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
    <div className="min-h-screen bg-cream relative flex items-center justify-center overflow-hidden p-6">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[120px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary-green flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-green/20">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-dark-text font-display mb-2">
            {isLogin ? 'Welcome Back' : 'Join AgriVeda'}
          </h2>
          <p className="text-dark-text/50 text-sm">
            {isLogin ? 'Sign in to access your farm intelligence dashboard.' : 'Start your sustainable farming journey today.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 space-y-5 rounded-2xl border border-dark-text/5 shadow-xl relative z-10">
          {!isLogin && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-dark-text/50 mb-1.5 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/40" />
                  <input name="fullName" type="text" className="w-full bg-green-bg border border-dark-text/10 rounded-xl py-3 pl-10 pr-4 text-dark-text placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="Ramesh Kumar" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-dark-text/50 mb-1.5 uppercase tracking-wider">State / District</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/40" />
                  <input name="location" type="text" className="w-full bg-green-bg border border-dark-text/10 rounded-xl py-3 pl-10 pr-4 text-dark-text placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="Maharashtra" required />
                </div>
              </div>
            </motion.div>
          )}

          <div>
            <label className="block text-xs font-semibold text-dark-text/50 mb-1.5 uppercase tracking-wider">Email or Phone</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/40" />
              <input name="contact" type="text" className="w-full bg-green-bg border border-dark-text/10 rounded-xl py-3 pl-10 pr-4 text-dark-text placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="farmer@example.com" required />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-dark-text/50 mb-1.5 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/40" />
              <input name="password" type="password" className="w-full bg-green-bg border border-dark-text/10 rounded-xl py-3 pl-10 pr-4 text-dark-text placeholder:text-dark-text/20 focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="••••••••" required />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full cta-button py-3.5 rounded-xl flex items-center justify-center gap-2 group mt-6 disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <div className="text-center mt-6">
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-dark-text/50 text-sm hover:text-primary-green transition-colors font-medium">
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, Leaf, CloudRain, Droplets, Wind, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

// Note: Framer motion is kept for the complex widget dashboard, but the main feature scroll applies CSS.
function Widget({ children, className, delay = 0, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute bg-white/90 p-5 shadow-[0_30px_60px_-15px_rgba(26,92,56,0.2)] backdrop-blur-3xl border border-primary-green/10 rounded-2xl ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCounter({ target, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    let startTime = null;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(progress * target);
          if (progress < 1) {
            window.requestAnimationFrame(animate);
          }
        };
        window.requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function Hero() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate 8 random leaves for floating animation
    const newLeaves = Array.from({ length: 8 }).map((_, i) => ({
      left: Math.random() * 100 + '%',
      animationDuration: 6 + Math.random() * 6 + 's',
      animationDelay: Math.random() * 5 + 's',
      scale: 0.5 + Math.random() * 0.8
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(135deg, #1A5C38 0%, #2E7D52 50%, #6BAE82 100%)' }}
      />
      
      {/* Floating Leaves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf, i) => (
          <svg 
            key={i} 
            className="floating-leaf"
            style={{ 
              left: leaf.left, 
              bottom: '-20px',
              animationDuration: leaf.animationDuration,
              animationDelay: leaf.animationDelay,
              transform: `scale(${leaf.scale})`
            }} 
            width="24" height="24" viewBox="0 0 24 24"
          >
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          </svg>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-20 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Text Block */}
          <div className="max-w-2xl relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-green-bg border border-light-green/20 text-primary-green font-semibold text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-green"></span>
              </span>
              AgriTech Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium leading-[1.05] tracking-tight mb-8 font-display text-dark-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Transform Soil Intelligence Into{' '}
              <span className="text-primary-green font-bold">
                Prosperity.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-dark-text/80 leading-relaxed mb-12 font-sans font-light max-w-xl"
            >
              AI-powered soil insights, hyper-local weather intelligence, biofertilizer guidance, and verified carbon credit tracking for the modern Indian farmer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/login" className="cta-button shadow-lg shadow-terracotta/20 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <button className="bg-white hover:bg-green-bg text-primary-green border border-primary-green/20 font-semibold text-lg py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center gap-3 hover:-translate-y-1">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4"
            >
              <span className="inline-flex items-center gap-1.5 bg-amber/10 text-dark-text px-3 py-1 rounded-full text-sm font-semibold border border-amber/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber" /> Trusted by 10,000+ farmers
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-16 flex items-center gap-10"
            >
              <div>
                <p className="text-4xl font-bold text-dark-text font-display flex items-center gap-1"><AnimatedCounter target={2.4} decimals={1} /><span className="text-xl text-dark-text/50 font-normal">Lakh+</span></p>
                <p className="text-xs text-dark-text/60 mt-2 uppercase tracking-[0.15em] font-semibold">Farmers Trusted</p>
              </div>
              <div className="w-px h-12 bg-primary-green/20" />
              <div>
                <p className="text-4xl font-bold text-primary-green font-display">₹<AnimatedCounter target={620} decimals={0} /><span className="text-xl text-primary-green/60 font-normal">Cr</span></p>
                <p className="text-xs text-dark-text/60 mt-2 uppercase tracking-[0.15em] font-semibold">Verified Income</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Dashboard Mockup */}
          <div className="relative h-[700px] hidden lg:block z-20">
            {/* 1. Main Soil Dashboard */}
            <Widget delay={0.4} className="w-[380px] right-2 top-[30%] z-30">
              <div className="flex items-center justify-between mb-8 border-b border-dark-text/5 pb-4">
                <div>
                  <h3 className="text-dark-text font-semibold flex items-center gap-2 text-lg">
                    <Leaf className="w-5 h-5 text-primary-green" />
                    Soil Spectral Scan
                  </h3>
                  <p className="text-xs text-dark-text/50 mt-1">Live from Node A7 • Validated</p>
                </div>
                <div className="w-14 h-14 rounded-full border-[3px] border-primary-green bg-green-bg flex items-center justify-center">
                  <span className="text-primary-green font-bold text-lg">92</span>
                </div>
              </div>
              
              <div className="space-y-5">
                {[
                  { l: 'Nitrogen (N)', v: '85%', c: '#1A5C38' },
                  { l: 'Phosphorus (P)', v: '70%', c: '#6BAE82' },
                  { l: 'Potassium (K)', v: '90%', c: '#2E7D52' }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-dark-text/70">{stat.l}</span>
                      <span className="text-dark-text font-bold">{stat.v}</span>
                    </div>
                    <div className="h-2 bg-green-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stat.v }}
                        transition={{ duration: 2, delay: 1 + (i*0.2), ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.c }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-bg border-l-2 border-primary-green rounded-r-xl">
                <p className="text-dark-text text-sm font-medium flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary-green shrink-0 mt-0.5" /> 
                  Optimal for early-stage Wheat sowing. No synthetic urea required.
                </p>
              </div>
            </Widget>

            {/* 2. Weather Intelligence Card */}
            <Widget delay={0.6} className="w-[280px] left-[-10%] top-[10%] z-20">
              <p className="text-[10px] text-dark-text/50 uppercase tracking-widest font-bold mb-4">Hyper-Local Forecast</p>
              <div className="flex items-end gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  <CloudRain className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <p className="text-5xl font-light text-dark-text font-display">24°</p>
                  <p className="text-xs text-blue-600 font-semibold mt-1">90% Rain at 4 PM</p>
                </div>
              </div>
              <div className="bg-white border border-dark-text/5 rounded-xl p-3 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-dark-text/60">Auto-Irrigation</span>
                  <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">PAUSED</span>
                </div>
              </div>
            </Widget>

            {/* 3. Carbon Earnings Visual */}
            <Widget delay={0.8} className="w-[300px] left-[5%] bottom-[5%] z-40">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] text-dark-text/50 uppercase tracking-[0.2em] font-bold mb-1">Carbon Wallet</p>
                  <p className="text-3xl font-bold text-dark-text tracking-tight flex items-center gap-2">
                    ₹4,250 
                    <span className="text-xs font-medium text-primary-green bg-green-bg px-2 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +14%
                    </span>
                  </p>
                </div>
              </div>
            </Widget>

          </div>
        </div>
      </div>
      
      {/* Soil Wave Divider */}
      <div className="soil-wave"></div>
    </section>
  )
}

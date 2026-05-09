import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, Leaf, CloudRain, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

function Widget({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute bg-white/90 p-5 shadow-2xl backdrop-blur-3xl border border-primary-green/10 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCounter({ target, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let startTime = null;
    const duration = 2000;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(progress * target);
          if (progress < 1) window.requestAnimationFrame(animate);
        };
        window.requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Floating Leaves */}
      <div className="floating-leaves absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {[
          { l: '8%', t: '20%', d: '8s', del: '0s', w: '28px', c: '#2E7D52', o: 0.25 },
          { l: '15%', t: '60%', d: '11s', del: '2s', w: '20px', c: '#6BAE82', o: 0.2 },
          { l: '80%', t: '15%', d: '9s', del: '1s', w: '34px', c: '#F5A623', o: 0.15 },
          { l: '72%', t: '70%', d: '13s', del: '4s', w: '22px', c: '#2E7D52', o: 0.18 },
          { l: '50%', t: '10%', d: '7s', del: '3s', w: '18px', c: '#6BAE82', o: 0.22 },
          { l: '90%', t: '45%', d: '10s', del: '1.5s', w: '30px', c: '#1A5C38', o: 0.12 },
        ].map((leaf, i) => (
          <svg 
            key={i} 
            className="leaf absolute animate-[floatLeaf_linear_infinite]" 
            style={{ 
              left: leaf.l, top: leaf.t, width: leaf.w, 
              animationDuration: leaf.d, animationDelay: leaf.del 
            }} 
            viewBox="0 0 40 60" 
            fill="none"
          >
            <path d="M20 5 C35 5 38 25 20 55 C2 25 5 5 20 5Z" fill={leaf.c} opacity={leaf.o}/>
          </svg>
        ))}
      </div>

      <style>{`
        @keyframes floatLeaf {
          0%   { transform: translateY(0px)   rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-120px) rotate(25deg); opacity: 0; }
        }
        .hero-image-badge .badge-dot {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="max-w-2xl relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-green-bg border border-light-green/20 text-primary-green font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full mb-8"
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
              className="font-black leading-[1.05] tracking-tight mb-8 font-display text-dark-text"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Transform Soil Intelligence Into{' '}
              <span className="text-primary-green font-black"> Prosperity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-dark-text/80 leading-relaxed mb-12 font-sans font-medium max-w-xl"
            >
              AI-powered soil insights, hyper-local weather intelligence, biofertilizer guidance, and verified carbon credit tracking for the modern Indian farmer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/login" className="cta-button shadow-2xl shadow-terracotta/20 group text-lg py-4 px-10">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <button className="bg-white hover:bg-green-bg text-primary-green border border-primary-green/20 font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 flex items-center gap-3 hover:-translate-y-1">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-16 flex items-center gap-10"
            >
              <div className="stats-section">
                <p className="text-4xl font-black text-dark-text font-display flex items-center gap-1"><AnimatedCounter target={2.4} decimals={1} /><span className="text-xl text-dark-text/50 font-normal">Lakh+</span></p>
                <p className="text-xs text-dark-text/60 mt-2 uppercase tracking-widest font-bold">Farmers Trusted</p>
              </div>
              <div className="w-px h-12 bg-primary-green/20" />
              <div className="stats-section">
                <p className="text-4xl font-black text-primary-green font-display">₹<AnimatedCounter target={620} decimals={0} /><span className="text-xl text-primary-green/60 font-normal">Cr</span></p>
                <p className="text-xs text-dark-text/60 mt-2 uppercase tracking-widest font-bold">Verified Income</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Upgraded with Farmer Image */}
          <div className="relative hidden lg:block z-20">
            <div className="hero-image-wrap relative rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(26,92,56,0.3)] fade-slide-up bg-cream">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=85" 
                alt="Indian farmer using AgriVeda on mobile in field"
                className="w-full h-[520px] object-cover object-center block hover:scale-105 transition-transform duration-700"
              />
              <div className="hero-image-badge absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-primary-green/10">
                <span className="badge-dot w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <span className="text-sm font-bold text-primary-green tracking-wide">Live soil analysis — Nashik, MH</span>
              </div>
            </div>

            {/* Floating Overlay Widget */}
            <Widget delay={0.8} className="w-[300px] -left-12 bottom-12 z-40 bg-white/95">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] text-dark-text/50 uppercase tracking-widest font-bold mb-1">Carbon Wallet</p>
                  <p className="text-3xl font-black text-dark-text tracking-tight flex items-center gap-2">
                    ₹4,250 
                    <span className="text-xs font-bold text-primary-green bg-green-bg px-2.5 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +14%
                    </span>
                  </p>
                </div>
              </div>
            </Widget>
          </div>
        </div>
      </div>
      
      <div className="soil-wave"></div>
    </section>
  )
}

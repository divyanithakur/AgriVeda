import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(eased * target);
          if (progress < 1) window.requestAnimationFrame(animate);
        };
        window.requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toFixed(decimals).toLocaleString('en-IN')}</span>;
}

export default function Hero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && videoRef.current) {
      videoRef.current.pause();
      setVideoLoaded(true);
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="hero-section relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d2e18]" id="home">
      
      {/* VIDEO BACKGROUND */}
      <video 
        ref={videoRef}
        className={`hero-video absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-[1.2s] ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay 
        muted 
        loop 
        playsInline
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        poster="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=60"
      >
        <source src="https://videos.pexels.com/video-files/5987267/5987267-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/4753926/4753926-hd_1280_720_30fps.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="hero-overlay absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to right, rgba(8, 24, 12, 0.88) 0%, rgba(8, 24, 12, 0.70) 50%, rgba(8, 24, 12, 0.35) 100%)'
      }}></div>

      {/* FLOATING LEAVES */}
      <div className="floating-leaves absolute inset-0 pointer-events-none overflow-hidden z-[2]" aria-hidden="true">
        {[
          { l: '6%', t: '25%', d: '9s', del: '0s', w: '28px', c: '#6BAE82' },
          { l: '14%', t: '55%', d: '12s', del: '2s', w: '18px', c: '#F5A623' },
          { l: '78%', t: '18%', d: '8s', del: '1s', w: '32px', c: '#6BAE82' },
          { l: '70%', t: '65%', d: '14s', del: '4s', w: '20px', c: '#2E7D52' },
          { l: '48%', t: '12%', d: '7s', del: '3s', w: '16px', c: '#F5A623' },
          { l: '88%', t: '42%', d: '11s', del: '2.5s', w: '26px', c: '#6BAE82' },
        ].map((leaf, i) => (
          <svg 
            key={i} 
            className="leaf absolute opacity-[0.22] animate-[floatLeaf_linear_infinite]" 
            style={{ 
              left: leaf.l, top: leaf.t, width: leaf.w, 
              animationDuration: leaf.d, animationDelay: leaf.del 
            }} 
            viewBox="0 0 40 60"
          >
            <path d="M20 5 C35 5 38 25 20 55 C2 25 5 5 20 5Z" fill={leaf.c}/>
          </svg>
        ))}
      </div>

      <style>{`
        @keyframes floatLeaf {
          0%   { transform: translateY(0)     rotate(0deg);  opacity: 0; }
          10%  { opacity: 0.22; }
          90%  { opacity: 0.22; }
          100% { transform: translateY(-100px) rotate(30deg); opacity: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes scrollAnim {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="hero-inner container relative z-[3] px-6 py-32 max-w-[1200px] mx-auto w-full">
        <div className="hero-text-col max-w-[620px]">
          
          {/* Live badge */}
          <div className="live-badge inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] px-[18px] py-2 mb-6 text-[12px] font-bold text-white/90 uppercase tracking-wider">
            <span className="live-dot w-2 h-2 bg-green-500 rounded-full animate-[pulseDot_1.5s_ease-in-out_infinite]"></span>
            <span>LIVE — 10,247 farmers active now</span>
          </div>

          {/* Headline */}
          <h1 className="hero-h1 text-[clamp(2.5rem,5.5vw,3.6rem)] font-extrabold text-white leading-[1.15] mb-5 tracking-tight shadow-sm">
            Ancient wisdom meets<br/>
            <span className="text-[#F5A623]">AI-powered farming</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub text-[clamp(15px,2vw,18px)] text-white/80 leading-[1.75] mb-9 max-w-[500px] font-medium">
            Monitor soil health, get biofertilizer recommendations, track weather — 
            and earn carbon credits. All in one app, starting at just ₹500/month.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns flex gap-3.5 flex-wrap mb-6">
            <a href="#pricing" className="btn-primary-hero bg-[#C8520A] text-white px-8 py-3.5 rounded-lg text-[16px] font-bold transition-all hover:bg-[#a03e06] hover:-translate-y-0.5 shadow-lg">
              🌱 Start Free Trial
            </a>
            <a href="#demo" className="btn-secondary-hero bg-white/10 backdrop-blur-md text-white px-8 py-3.5 rounded-lg text-[16px] font-semibold border border-white/25 transition-all hover:bg-white/20 hover:-translate-y-0.5">
              ▶ Watch Demo
            </a>
          </div>

          <p className="hero-trust text-[13px] text-white/50 mt-1">
            Trusted by farmers in Maharashtra, Punjab, Karnataka, UP & 14 more states
          </p>
        </div>
      </div>

      {/* BOTTOM STATS BAR */}
      <div className="hero-stats-bar relative z-[3] bg-[#08180c]/75 backdrop-blur-lg border-t border-white-[0.08]">
        <div className="max-w-[900px] mx-auto px-6 py-5">
          <div className="stats-inner flex items-center justify-center text-center">
            <div className="stat-item flex-1 px-4">
              <div className="stat-num text-[26px] font-black text-[#F5A623] leading-none mb-1.5 transition-transform hover:scale-110 cursor-default">
                <AnimatedCounter target={10000} />+
              </div>
              <div className="stat-label text-[11px] text-white/55 uppercase tracking-widest">Farmers</div>
            </div>
            <div className="stat-divider w-[1px] height-[48px] bg-white/10"></div>
            <div className="stat-item flex-1 px-4">
              <div className="stat-num text-[26px] font-black text-[#F5A623] leading-none mb-1.5"><AnimatedCounter target={18} /></div>
              <div className="stat-label text-[11px] text-white/55 uppercase tracking-widest">States covered</div>
            </div>
            <div className="stat-divider w-[1px] height-[48px] bg-white/10"></div>
            <div className="stat-item flex-1 px-4">
              <div className="stat-num text-[26px] font-black text-[#F5A623] leading-none mb-1.5"><AnimatedCounter target={40} />%</div>
              <div className="stat-label text-[11px] text-white/55 uppercase tracking-widest">Yield Increase</div>
            </div>
            <div className="stat-divider w-[1px] height-[48px] bg-white/10"></div>
            <div className="stat-item flex-1 px-4">
              <div className="stat-num text-[26px] font-black text-[#F5A623] leading-none mb-1.5">₹<AnimatedCounter target={8000} /></div>
              <div className="stat-label text-[11px] text-white/55 uppercase tracking-widest">Cost Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator absolute bottom-20 right-10 z-[3] flex flex-col items-center gap-2 opacity-50 hidden md:flex" aria-hidden="true">
        <div className="scroll-line w-[1px] h-12 bg-white/60 animate-[scrollAnim_2s_ease-in-out_infinite] origin-top"></div>
        <span className="text-[9px] text-white uppercase tracking-widest [writing-mode:vertical-rl]">scroll</span>
      </div>

    </section>
  )
}

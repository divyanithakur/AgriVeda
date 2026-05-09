import React, { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const vidRef = useRef(null);
  const [vidReady, setVidReady] = useState(false);

  useEffect(() => {
    const vid = vidRef.current;
    if (!vid) return;

    const show = () => setVidReady(true);
    vid.addEventListener('canplay', show);
    vid.addEventListener('loadeddata', show);
    if (vid.readyState >= 3) show();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
       vid.pause();
       setVidReady(true);
    }

    return () => {
      vid.removeEventListener('canplay', show);
      vid.removeEventListener('loadeddata', show);
    };
  }, []);

  return (
    <section className="hero relative min-h-screen flex flex-col overflow-hidden bg-[#071a0e]" id="home">
      
      {/* VIDEO BACKGROUND */}
      <video 
        ref={vidRef}
        className={`hero-video absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[1.4s] ${vidReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata"
        poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
      >
        <source src="https://videos.pexels.com/video-files/5987267/5987267-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
        <source src="https://videos.pexels.com/video-files/4117442/4117442-hd_1280_720_25fps.mp4" type="video/mp4"/>
        <source src="https://videos.pexels.com/video-files/3997264/3997264-hd_1280_720_25fps.mp4" type="video/mp4"/>
      </video>

      <div className="hero-overlay absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(100deg, rgba(4,15,8,0.92) 0%, rgba(4,15,8,0.75) 40%, rgba(4,15,8,0.20) 100%)'
      }}></div>

      <div className="floating-leaves absolute inset-0 pointer-events-none overflow-hidden z-[2]" aria-hidden="true">
        {[
          { l: '5%',   t: '22%', d: '9s',  del: '0s',   w: '26px', f: '#6BAE82', o: 0.28 },
          { l: '13%',  t: '58%', d: '12s', del: '2s',   w: '18px', f: '#F5A623', o: 0.22 },
          { l: '22%',  t: '35%', d: '8s',  del: '1s',   w: '32px', f: '#6BAE82', o: 0.20 },
          { l: '75%',  t: '18%', d: '10s', del: '3s',   w: '22px', f: '#2E7D52', o: 0.18 },
          { l: '82%',  t: '62%', d: '14s', del: '1.5s', w: '16px', f: '#F5A623', o: 0.15 },
          { l: '90%',  t: '40%', d: '11s', del: '0.5s', w: '28px', f: '#6BAE82', o: 0.24 },
          { l: '48%',  t: '8%',  d: '7s',  del: '4s',   w: '20px', f: '#F5A623', o: 0.18 },
          { l: '60%',  t: '75%', d: '13s', del: '2.5s', w: '24px', f: '#2E7D52', o: 0.22 },
        ].map((leaf, i) => (
          <svg key={i} className="leaf absolute animate-[floatUp_linear_infinite]" style={{
            width: leaf.w, left: leaf.l, top: leaf.t, animationDuration: leaf.d, animationDelay: leaf.del
          }} viewBox="0 0 40 60"><path d="M20 4C34 4 37 24 20 56 3 24 6 4 20 4Z" fill={leaf.f} opacity={leaf.o}/></svg>
        ))}
      </div>

      <div className="hero-inner container relative z-[3] flex-1 flex items-center pt-32 pb-20">
        <div className="hero-content max-w-[640px]">
          <div className="live-badge inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] px-5 py-2 mb-7 text-[12px] font-bold text-white/90 uppercase tracking-widest">
            <span className="live-pulse w-2 h-2 bg-green-500 rounded-full animate-[pulse_1.6s_ease-in-out_infinite]"></span>
            LIVE — 10,247 farmers active right now
          </div>

          <h1 className="text-white text-[clamp(2.2rem,5.5vw,3.8rem)] font-black leading-[1.12] mb-5 tracking-tight shadow-sm">
            Ancient wisdom meets<br/>
            <span className="text-amber">AI-powered farming</span>
          </h1>

          <p className="hero-sub text-[clamp(15px,2vw,18px)] text-white/85 leading-[1.75] mb-9 max-w-[520px] font-medium relative z-[5]" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
            Monitor soil health · Get biofertilizer recommendations · Track hyperlocal weather · 
            Earn carbon credits. Everything a modern Indian farmer needs — starting at just 
            <strong className="text-amber ml-1">₹500/month</strong>.
          </p>

          <div className="hero-actions flex gap-4 flex-wrap mb-8">
            <a href="#pricing" className="btn-primary text-base px-9 py-3.5">
              🌱 Start Free Trial
            </a>
            <a href="#how-it-works" className="btn-outline-hero inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-lg text-white px-7 py-3.5 rounded-lg text-sm font-bold border border-white/25 transition-all hover:bg-white/20 hover:-translate-y-0.5">
              <span className="play-circle w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-[10px]">▶</span> 
              See how it works
            </a>
          </div>

          <div className="hero-trust-row flex items-center gap-3.5">
            <div className="trust-avatars flex items-center">
              <img className="w-9 h-9 rounded-full border-2 border-white/60 -ml-2.5 first:ml-0 object-cover" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=60&q=80" alt="farmer"/>
              <img className="w-9 h-9 rounded-full border-2 border-white/60 -ml-2.5 object-cover" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=60&q=80" alt="farmer"/>
              <img className="w-9 h-9 rounded-full border-2 border-white/60 -ml-2.5 object-cover" src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=60&q=80" alt="farmer"/>
              <div className="w-9 h-9 rounded-full bg-primary-green text-white text-[10px] font-black flex items-center justify-center -ml-2.5 border-2 border-white/40 shadow-sm">+10K</div>
            </div>
            <span className="trust-text text-sm text-white/60 font-medium">Trusted by farmers across 18 states</span>
          </div>
        </div>
      </div>

      <div className="hero-stats-bar relative z-[3] bg-[#050f08]/80 backdrop-blur-2xl border-t border-white/10">
        <div className="container py-5">
          <div className="hero-stats-inner flex items-center justify-center flex-wrap">
            <div className="hero-stat flex-1 min-w-[120px] text-center px-3 py-2">
              <div className="hero-stat-num text-2xl font-black text-amber leading-none mb-1.5" data-count="10000" data-suffix="+">10,000+</div>
              <div className="hero-stat-label text-[11px] text-white/50 uppercase tracking-widest font-bold">Active Farmers</div>
            </div>
            <div className="hero-stat-divider w-px h-11 bg-white/10 hidden md:block"></div>
            <div className="hero-stat flex-1 min-w-[120px] text-center px-3 py-2">
              <div className="hero-stat-num text-2xl font-black text-amber leading-none mb-1.5" data-count="18">18</div>
              <div className="hero-stat-label text-[11px] text-white/50 uppercase tracking-widest font-bold">States Covered</div>
            </div>
            <div className="hero-stat-divider w-px h-11 bg-white/10 hidden md:block"></div>
            <div className="hero-stat flex-1 min-w-[120px] text-center px-3 py-2">
              <div className="hero-stat-num text-2xl font-black text-amber leading-none mb-1.5" data-count="40" data-suffix="%">40%</div>
              <div className="hero-stat-label text-[11px] text-white/50 uppercase tracking-widest font-bold">Avg Yield Increase</div>
            </div>
            <div className="hero-stat-divider w-px h-11 bg-white/10 hidden md:block"></div>
            <div className="hero-stat flex-1 min-w-[120px] text-center px-3 py-2">
              <div className="hero-stat-num text-2xl font-black text-amber leading-none mb-1.5" data-count="8000" data-prefix="₹">₹8,000</div>
              <div className="hero-stat-label text-[11px] text-white/50 uppercase tracking-widest font-bold">Savings Per Season</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-24 right-10 z-[3] flex flex-col items-center gap-2 opacity-40 hidden md:flex" aria-hidden="true">
        <div className="scroll-line w-px h-12 bg-white/60 animate-[scrollAnim_2.2s_ease-in-out_infinite] origin-top"></div>
        <span className="text-[9px] text-white uppercase tracking-[0.14em] [writing-mode:vertical-rl] font-medium">scroll</span>
      </div>
    </section>
  )
}

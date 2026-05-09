import React, { useEffect, useState, useRef } from 'react'

const STATS = [
  { num: '10,000+', label: 'Active Farmers' },
  { num: '18',      label: 'States Covered' },
  { num: '40%',     label: 'Avg Yield Increase' },
  { num: '₹8,000',  label: 'Savings / Season' },
]

const LEAVES = [
  { l: '5%',  t: '22%', d: '9s',  del: '0s',   w: '26px', f: '#6BAE82', o: 0.28 },
  { l: '13%', t: '58%', d: '12s', del: '2s',   w: '18px', f: '#F5A623', o: 0.22 },
  { l: '22%', t: '35%', d: '8s',  del: '1s',   w: '32px', f: '#6BAE82', o: 0.20 },
  { l: '75%', t: '18%', d: '10s', del: '3s',   w: '22px', f: '#2E7D52', o: 0.18 },
  { l: '82%', t: '62%', d: '14s', del: '1.5s', w: '16px', f: '#F5A623', o: 0.15 },
  { l: '90%', t: '40%', d: '11s', del: '0.5s', w: '28px', f: '#6BAE82', o: 0.24 },
  { l: '48%', t: '8%',  d: '7s',  del: '4s',   w: '20px', f: '#F5A623', o: 0.18 },
  { l: '60%', t: '75%', d: '13s', del: '2.5s', w: '24px', f: '#2E7D52', o: 0.22 },
]

const FARMER_IMGS = [
  'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=60&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=60&q=80',
  'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=60&q=80',
]

export default function Hero() {
  const vidRef   = useRef(null)
  const [vidReady, setVidReady] = useState(false)
  const [visible, setVisible]  = useState(false)

  useEffect(() => {
    const vid = vidRef.current
    if (!vid) return
    const show = () => setVidReady(true)
    vid.addEventListener('canplay', show)
    vid.addEventListener('loadeddata', show)
    if (vid.readyState >= 3) show()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      vid.pause(); setVidReady(true)
    }
    return () => { vid.removeEventListener('canplay', show); vid.removeEventListener('loadeddata', show) }
  }, [])

  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section className="hero relative min-h-screen flex flex-col overflow-hidden bg-[#071a0e]" id="home">

      {/* Video background */}
      <video
        ref={vidRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[1.4s] ${vidReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay muted loop playsInline preload="metadata"
        poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
      >
        <source src="https://videos.pexels.com/video-files/5987267/5987267-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/4117442/4117442-hd_1280_720_25fps.mp4"  type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(110deg, rgba(4,14,8,0.94) 0%, rgba(4,14,8,0.78) 42%, rgba(4,14,8,0.22) 100%)' }}
      />

      {/* Floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]" aria-hidden="true">
        {LEAVES.map((leaf, i) => (
          <svg
            key={i}
            className="absolute animate-[floatUp_linear_infinite]"
            style={{ width: leaf.w, left: leaf.l, top: leaf.t, animationDuration: leaf.d, animationDelay: leaf.del }}
            viewBox="0 0 40 60"
          >
            <path d="M20 4C34 4 37 24 20 56 3 24 6 4 20 4Z" fill={leaf.f} opacity={leaf.o} />
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-[3] flex-1 flex items-center pt-28 pb-20">
        <div className="max-w-[640px]">

          {/* Live badge */}
          <div
            className={`inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-[40px] px-5 py-2 mb-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-[pulse_1.6s_ease-in-out_infinite]" />
            <span className="text-[11px] font-bold text-white/90 uppercase tracking-widest">LIVE — 10,247 farmers active right now</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-white font-black leading-[1.1] mb-5 tracking-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2.2rem,5.5vw,3.8rem)', fontFamily: 'Syne,sans-serif', transitionDelay: '80ms' }}
          >
            Ancient wisdom meets<br />
            <span style={{ color: '#F5A623' }}>AI-powered farming</span>
          </h1>

          {/* Subline */}
          <p
            className={`text-white/82 leading-[1.8] mb-9 max-w-[520px] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(15px,2vw,17px)', textShadow: '0 1px 8px rgba(0,0,0,0.45)', transitionDelay: '160ms' }}
          >
            Monitor soil health · Get biofertilizer recommendations · Track hyperlocal weather ·
            Earn carbon credits. Everything a modern Indian farmer needs — starting at just{' '}
            <strong style={{ color: '#F5A623' }}>₹500/month</strong>.
          </p>

          {/* CTAs */}
          <div
            className={`flex gap-4 flex-wrap mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '240ms' }}
          >
            <a href="#pricing" className="btn-primary text-base px-8 py-3.5">
              🌱 Start Free Trial
            </a>
            
              href="#how-it-works"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-lg text-white px-7 py-3.5 rounded-lg text-sm font-bold border border-white/20 transition-all duration-300 hover:bg-white/18 hover:-translate-y-0.5"
            >
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-[10px]">▶</span>
              See how it works
            </a>
          </div>

          {/* Trust row */}
          <div
            className={`flex items-center gap-3.5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '320ms' }}
          >
            <div className="flex items-center">
              {FARMER_IMGS.map((src, i) => (
                <img
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white/60 -ml-2.5 first:ml-0 object-cover"
                  style={{ zIndex: 3 - i }}
                  src={src}
                  alt="farmer"
                  loading="lazy"
                />
              ))}
              <div className="w-9 h-9 rounded-full bg-[#1A5C38] text-white text-[10px] font-black flex items-center justify-center -ml-2.5 border-2 border-white/40">
                +10K
              </div>
            </div>
            <span className="text-sm text-white/58 font-medium">Trusted by farmers across 18 states</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-[3] bg-[#040e06]/82 backdrop-blur-2xl border-t border-white/8">
        <div className="container py-5">
          <div className="flex items-center justify-center flex-wrap">
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-10 bg-white/10 hidden md:block mx-1" />}
                <div className="flex-1 min-w-[120px] text-center px-3 py-2">
                  <div
                    className="text-[1.6rem] font-black leading-none mb-1.5"
                    style={{ color: '#F5A623', fontFamily: 'Syne,sans-serif' }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[10px] text-white/45 uppercase tracking-widest font-bold">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 right-10 z-[3] flex-col items-center gap-2 opacity-35 hidden md:flex"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-white/60 animate-[scrollAnim_2.2s_ease-in-out_infinite] origin-top" />
        <span className="text-[9px] text-white uppercase tracking-[0.14em] [writing-mode:vertical-rl] font-medium">scroll</span>
      </div>
    </section>
  )
}

import React, { useEffect, useState, useRef } from 'react'

const STATS = [
  { num: '10,000+', label: 'Active Farmers' },
  { num: '18',      label: 'States Covered' },
  { num: '40%',     label: 'Avg Yield Increase' },
  { num: '8,000',  label: 'Savings Per Season' },
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
  const vidRef = useRef(null)
  const [vidReady, setVidReady] = useState(false)
  const [visible,  setVisible]  = useState(false)

  useEffect(() => {
    const vid = vidRef.current
    if (!vid) return
    const show = () => setVidReady(true)
    vid.addEventListener('canplay', show)
    vid.addEventListener('loadeddata', show)
    if (vid.readyState >= 3) show()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      vid.pause()
      setVidReady(true)
    }
    return () => {
      vid.removeEventListener('canplay', show)
      vid.removeEventListener('loadeddata', show)
    }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#071a0e' }}
      id="home"
    >

      {/* Video background */}
      <video
        ref={vidRef}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
        style={{ opacity: vidReady ? 1 : 0 }}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=80"
      >
        <source src="https://videos.pexels.com/video-files/5987267/5987267-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/4117442/4117442-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(110deg, rgba(4,14,8,0.94) 0%, rgba(4,14,8,0.78) 42%, rgba(4,14,8,0.22) 100%)' }}
      />

      {/* Floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]" aria-hidden="true">
        {LEAVES.map((leaf, i) => {
          return (
            <svg
              key={i}
              className="absolute"
              style={{
                width: leaf.w,
                left: leaf.l,
                top: leaf.t,
                animation: 'floatUp linear infinite',
                animationDuration: leaf.d,
                animationDelay: leaf.del,
              }}
              viewBox="0 0 40 60"
            >
              <path d="M20 4C34 4 37 24 20 56 3 24 6 4 20 4Z" fill={leaf.f} opacity={leaf.o} />
            </svg>
          )
        })}
      </div>

      {/* Main content */}
      <div className="container relative z-[3] flex-1 flex items-center pt-28 pb-20">
        <div style={{ maxWidth: '640px' }}>

          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 border rounded-full px-5 py-2 mb-7"
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              borderColor: 'rgba(255,255,255,0.15)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: '#22c55e',
                animation: 'pulse 1.6s ease-in-out infinite',
              }}
            />
            <span className="text-white/90 font-bold uppercase tracking-widest" style={{ fontSize: '11px' }}>
              LIVE — 10,247 farmers active right now
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-black leading-none mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontFamily: 'Syne, sans-serif',
              lineHeight: 1.1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 80ms',
            }}
          >
            Ancient wisdom meets
            <br />
            <span style={{ color: '#F5A623' }}>AI-powered farming</span>
          </h1>

          {/* Subline */}
          <p
            className="text-white/82 leading-relaxed mb-9"
            style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              maxWidth: '520px',
              textShadow: '0 1px 8px rgba(0,0,0,0.45)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 160ms',
            }}
          >
            Monitor soil health · Get biofertilizer recommendations · Track hyperlocal weather ·
            Earn carbon credits. Everything a modern Indian farmer needs — starting at just{' '}
            <strong style={{ color: '#F5A623' }}>₹500/month</strong>.
          </p>

          {/* CTAs */}
          <div
            className="flex gap-4 flex-wrap mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 240ms',
            }}
          >
            
              href="#pricing"
              className="btn-primary text-base px-8 py-3"
            >
              Start Free Trial
            </a>
            
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-white text-sm font-bold rounded-lg border px-7 py-3"
              style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255,255,255,0.20)',
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
                style={{ background: 'rgba(255,255,255,0.20)' }}
              >
                ▶
              </span>
              See how it works
            </a>
          </div>

          {/* Trust row */}
          <div
            className="flex items-center gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 320ms',
            }}
          >
            <div className="flex items-center">
              {FARMER_IMGS.map((src, i) => {
                return (
                  <img
                    key={i}
                    className="w-9 h-9 rounded-full object-cover"
                    style={{
                      border: '2px solid rgba(255,255,255,0.6)',
                      marginLeft: i === 0 ? '0' : '-10px',
                      zIndex: 3 - i,
                    }}
                    src={src}
                    alt="farmer"
                    loading="lazy"
                  />
                )
              })}
              <div
                className="w-9 h-9 rounded-full text-white flex items-center justify-center font-black"
                style={{
                  background: '#1A5C38',
                  fontSize: '10px',
                  marginLeft: '-10px',
                  border: '2px solid rgba(255,255,255,0.4)',
                }}
              >
                +10K
              </div>
            </div>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.58)' }}>
              Trusted by farmers across 18 states
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-[3] border-t"
        style={{
          background: 'rgba(4,14,6,0.82)',
          backdropFilter: 'blur(24px)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <div className="container py-5">
          <div className="flex items-center justify-center flex-wrap">
            {STATS.map((s, i) => {
              return (
                <React.Fragment key={s.label}>
                  {i > 0 && (
                    <div
                      className="hidden md:block w-px h-10 mx-1"
                      style={{ background: 'rgba(255,255,255,0.10)' }}
                    />
                  )}
                  <div className="flex-1 text-center px-3 py-2" style={{ minWidth: '120px' }}>
                    <div
                      className="font-black leading-none mb-1"
                      style={{ color: '#F5A623', fontSize: '1.6rem', fontFamily: 'Syne, sans-serif' }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="uppercase font-bold tracking-widest"
                      style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 right-10 z-[3] flex-col items-center gap-2 hidden md:flex"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        <div
          className="w-px h-12"
          style={{
            background: 'rgba(255,255,255,0.6)',
            animation: 'scrollAnim 2.2s ease-in-out infinite',
            transformOrigin: 'top',
          }}
        />
        <span
          className="text-white uppercase font-medium"
          style={{ fontSize: '9px', letterSpacing: '0.14em', writingMode: 'vertical-rl' }}
        >
          scroll
        </span>
      </div>
    </section>
  )
}

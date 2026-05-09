import React, { useRef, useEffect } from 'react'
import { Award, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: "AgriVeda's soil AI told me exactly when to apply biofertilizer. My wheat yield jumped 34% this season. This is the future of farming.",
    name: 'Ramesh Patidar',
    role: 'Wheat Farmer, Madhya Pradesh',
  },
  {
    text: 'The carbon credits feature alone earned me ₹8,000 extra last year. And the weather alerts saved my mustard crop from an unexpected frost.',
    name: 'Sunita Devi',
    role: 'Mixed Crop Farmer, Bihar',
  },
  {
    text: 'I was skeptical about AI farming apps. But AgriVeda speaks in our language, understands our land, and gives real advice. It works.',
    name: 'Manjunath Reddy',
    role: 'Rice Farmer, Telangana',
  },
]

const STATS = [
  { target: 10000, suffix: '+', label: 'Farmers Impacted' },
  { target: 18,    suffix: '',  label: 'States Active' },
  { target: 40,    suffix: '%', label: 'Yield Increase' },
  { target: 12000, prefix: '₹', label: 'Avg Carbon Income' },
]

function animateValue(el, target, duration, prefix = '', suffix = '') {
  let start = null
  const step = (ts) => {
    if (!start) start = ts
    const progress = Math.min((ts - start) / duration, 1)
    const val = Math.floor(progress * target)
    el.textContent = prefix + val.toLocaleString('en-IN') + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Analytics() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')

          if (entry.target.classList.contains('stats-grid')) {
            entry.target.querySelectorAll('.ani-count').forEach((el) => {
              const target = parseInt(el.getAttribute('data-target'))
              const prefix = el.getAttribute('data-prefix') || ''
              const suffix = el.getAttribute('data-suffix') || ''
              animateValue(el, target, 2000, prefix, suffix)
            })
          }
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-slide-up, .stats-grid').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="analytics" className="py-24 relative bg-[#F9F4ED] border-t border-black/5 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-slide-up">
          <Award className="w-10 h-10 text-[#1A5C38] mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-black text-[#2C1A0E] leading-tight mb-6"
            style={{ fontFamily: 'Syne,sans-serif' }}
          >
            Supported by science.<br />
            <span className="text-[#1A5C38]/50">Verified by farmers.</span>
          </h2>
          <p className="text-[#5C4033]/70 text-xl font-light">
            Real impact across 18 states. We are building the most trusted agriculture platform in India.
          </p>
        </div>

        {/* Stat counters */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-black/5 text-center shadow-card hover:shadow-premium transition-all duration-400 hover:-translate-y-1">
              <div
                className="ani-count text-4xl font-black text-[#1A5C38] mb-2"
                style={{ fontFamily: 'Syne,sans-serif' }}
                data-target={s.target}
                data-prefix={s.prefix || ''}
                data-suffix={s.suffix || ''}
              >
                0
              </div>
              <p className="text-xs font-bold text-black/40 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="fade-slide-up bg-white p-8 rounded-2xl border border-black/5 flex flex-col justify-between shadow-card hover:shadow-premium transition-all duration-400 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4" style={{ fill: '#F5A623', color: '#F5A623' }} />
                  ))}
                </div>
                <p className="text-[#2C1A0E]/80 text-base leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-5 border-t border-black/5">
                <div
                  className="w-11 h-11 rounded-full bg-[#E8F4EC] flex items-center justify-center text-[#1A5C38] font-bold text-lg flex-shrink-0"
                  style={{ fontFamily: 'Syne,sans-serif' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[#2C1A0E] font-bold text-sm">{t.name}</p>
                  <p className="text-[#8D6E63] text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

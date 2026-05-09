import React, { useEffect } from 'react'

const PROBLEMS = [
  { icon: '🌱', title: 'Declining soil fertility',    p: "Over 30% of India's farmland is degraded by excessive chemical fertilizer use." },
  { icon: '🌦️', title: 'Unpredictable weather',      p: 'Farmers lose ₹50,000+ crore annually to weather-related crop failures.' },
  { icon: '📊', title: 'No scientific guidance',      p: '90% of farmers rely on local advice — not soil data, not crop science.' },
  { icon: '💸', title: 'Missing carbon credit income', p: 'Sustainable practices can earn ₹10,000–₹25,000/year — but no one shows farmers how.' },
]

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 100)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.10 })

    document.querySelectorAll('.problem-item').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Wave divider */}
      <div className="flex block line-height-0 -mt-0.5 bg-[#071a0e] relative z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-[80px] block">
          <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1380,20 1440,45 L1440,90 L0,90 Z" fill="#F9F4ED" />
        </svg>
      </div>

      <section className="bg-[#F9F4ED] py-24 overflow-hidden relative" id="problem">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Images */}
            <div className="relative h-[460px] hidden lg:block">
              <img
                className="absolute top-0 left-0 w-[70%] h-[280px] object-cover rounded-[20px] shadow-xl"
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=82"
                alt="Dry farmland"
                loading="lazy"
              />
              <img
                className="absolute bottom-0 right-0 w-[70%] h-[280px] object-cover rounded-[20px] shadow-2xl border-[4px] border-white transition-transform duration-400 hover:-translate-y-2"
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=82"
                alt="Farmer looking at crop"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute bottom-[108px] -left-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-10">
                <span className="text-2xl">😔</span>
                <div>
                  <strong className="block text-[13px] text-[#2C1A0E] font-bold">3 crore+ farmers</strong>
                  <small className="text-[11px] text-[#8D6E63] font-medium">still lack digital soil guidance</small>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-badge">The Challenge</span>
              <h2
                className="text-4xl font-extrabold mb-8 text-[#2C1A0E] leading-tight"
                style={{ fontFamily: 'Syne,sans-serif' }}
              >
                Indian farmers deserve<br className="hidden sm:block" /> better — and smarter — tools
              </h2>

              <div className="flex flex-col gap-4">
                {PROBLEMS.map((item, i) => (
                  <div
                    key={i}
                    className="problem-item flex gap-4 items-start p-5 bg-white rounded-xl border-l-4 transition-all duration-500 hover:translate-x-1 hover:shadow-lg"
                    style={{ borderLeftColor: '#F5A623', transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <strong className="block text-[15px] text-[#1A5C38] font-bold mb-1">{item.title}</strong>
                      <p className="text-[13px] text-[#5C4033] leading-relaxed m-0 font-medium">{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

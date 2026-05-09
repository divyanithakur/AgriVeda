import React, { useEffect } from 'react'

const FEATURES = [
  {
    icon: '🌱',
    title: 'AI-Powered Soil Intelligence',
    description: 'Multi-spectral satellite imagery + ground IoT sensors give you a real-time health card of your soil — block by block — tracking NPK levels, moisture depth, and microbial vitality.',
  },
  {
    icon: '🛡️',
    title: 'Smart Biofertilizer AI',
    description: 'Vedic farming meets modern agronomy. Our AI recommends precise biofertilizer formulations and application schedules tailored strictly to your current crop genetics and soil state.',
  },
  {
    icon: '🌦️',
    title: 'Hyper-Local Weather AI',
    description: "We don't just tell you if it'll rain — we tell you whether to irrigate today, if pests may breed tomorrow given the humidity, and the ideal harvest window to avoid damage.",
  },
  {
    icon: '🌍',
    title: 'Earn Through Carbon Credits',
    description: 'AgriVeda handles the full MRV process automatically. Every sustainable practice you log earns verified carbon credits you can sell instantly on the marketplace.',
  },
]

export default function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 120)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.feature-card').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="bg-white py-24 relative overflow-hidden">
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1A5C38 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">Core Infrastructure</span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#2C1A0E] mb-4"
            style={{ fontFamily: 'Syne,sans-serif' }}
          >
            Scientific precision for{' '}
            <span className="text-[#1A5C38]">modern agriculture.</span>
          </h2>
          <p className="text-[#8D6E63] text-lg leading-relaxed mt-3">
            Four pillars that transform how Indian farms think, grow, and earn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="feature-card group bg-white border border-[#EAF0EA] rounded-[20px] p-8 transition-all duration-400 hover:-translate-y-3 hover:shadow-premium cursor-default"
              style={{
                borderTop: '4px solid #F5A623',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#E8F4EC] rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-[#1A5C38] group-hover:scale-110 group-hover:-rotate-3">
                {feature.icon}
              </div>

              <h3
                className="text-[17px] font-extrabold text-[#2C1A0E] mb-3"
                style={{ fontFamily: 'Syne,sans-serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-[13.5px] text-[#5C4033] leading-relaxed">
                {feature.description}
              </p>

              
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 mt-6 text-[13px] font-bold text-[#1A5C38] no-underline group-hover:gap-2.5 transition-all duration-300"
              >
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

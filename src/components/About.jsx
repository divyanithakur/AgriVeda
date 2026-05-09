import React, { useEffect } from 'react'
import { Leaf, ArrowRight, Phone } from 'lucide-react'

const VALUES = [
  { emoji: '🌱', title: 'Sustainability First',  desc: 'Every feature is designed to reduce chemical usage and improve soil health long-term.' },
  { emoji: '🤝', title: 'Farmer-Centered',       desc: 'Built in 12 Indian languages. Works on 2G. Designed for every farmer.' },
  { emoji: '🔬', title: 'Science-Backed',         desc: 'All recommendations are backed by ICAR research and validated agronomists.' },
  { emoji: '🌍', title: 'Climate Action',          desc: "Every farm on AgriVeda actively contributes to India's net-zero carbon mission." },
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-slide-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="fade-slide-up">
            <div
              className="inline-flex items-center gap-2 bg-[#E8F4EC] border border-[#1A5C38]/15 text-[#1A5C38] font-semibold text-xs tracking-[0.18em] uppercase px-5 py-2.5 rounded-full mb-6"
            >
              <Leaf className="w-3 h-3" />
              Our Mission
            </div>

            <h2
              className="text-4xl md:text-5xl font-black text-[#2C1A0E] leading-tight mb-6"
              style={{ fontFamily: 'Syne,sans-serif' }}
            >
              Technology rooted in{' '}
              <span className="text-[#1A5C38]">ancient wisdom</span>
            </h2>

            <p className="text-[#2C1A0E]/65 leading-relaxed mb-5 text-[1.05rem]">
              India has 15,000 years of agricultural wisdom encoded in texts like the <em>Krishi Parashar</em> and
              <em> Vrikshayurveda</em>. AgriVeda was born from the belief that this wisdom — combined with modern
              AI, sensor technology, and data science — can create the most powerful farming platform the world
              has ever seen.
            </p>
            <p className="text-[#2C1A0E]/65 leading-relaxed mb-8 text-[1.05rem]">
              We are a team of IIT/IISc alumni, agronomists, and farmers' children who are obsessively focused on
              one mission: making every Indian farmer prosperous, sustainable, and technologically empowered.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1A5C38] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#2E7D52] transition-all shadow-green-glow inline-flex items-center gap-2">
                Our Story <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-[#1A5C38] border border-[#1A5C38]/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-[#E8F4EC] transition-all inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Talk to a Farm Advisor
              </button>
            </div>
          </div>

          {/* Right: Value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map(({ emoji, title, desc }, i) => (
              <div
                key={title}
                className="fade-slide-up bg-[#F9F4ED] p-7 rounded-2xl border border-black/5 hover:shadow-premium hover:-translate-y-2 transition-all duration-400 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h4
                  className="text-[#2C1A0E] font-bold text-lg mb-2"
                  style={{ fontFamily: 'Syne,sans-serif' }}
                >
                  {title}
                </h4>
                <p className="text-[#5C4033]/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

import React, { useEffect } from 'react'

const STORIES = [
  {
    img:    'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&q=82',
    name:   'Ramesh Patil',
    role:   'Soybean Farmer · 6 acres',
    place:  'Nagpur, Maharashtra',
    quote:  'AgriVeda told me my soil needed zinc — not more urea. My soybean yield jumped 40% and I saved ₹8,000 this season. My son now wants to farm too.',
    tags:   [{ text: '↑ 40% yield', type: 'green' }, { text: '₹8,000 saved', type: 'amber' }],
  },
  {
    img:    'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500&q=82',
    name:   'Sunita Devi',
    role:   'Wheat Farmer · 3 acres',
    place:  'Ludhiana, Punjab',
    quote:  'The weather alert at 2 AM saved my entire wheat crop. I covered 3 acres before the unseasonal rain hit. AgriVeda is like having a scientist in my pocket.',
    tags:   [{ text: 'Crop saved', type: 'green' }, { text: '₹45,000 loss prevented', type: 'amber' }],
  },
  {
    img:    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=82',
    name:   'Krishnappa G.',
    role:   'Rice Farmer · 4 acres',
    place:  'Mandya, Karnataka',
    quote:  'I earned ₹12,000 in carbon credits this year just by following AgriVeda\'s sustainable practices. Free money for doing the right thing.',
    tags:   [{ text: '₹12,000 carbon income', type: 'green' }, { text: 'Soil carbon +18%', type: 'amber' }],
  },
]

const TRUST_IMGS = [
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=80&q=80',
  'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=80&q=80',
  'https://images.unsplash.com/photo-1561484930-974b10b1fcf7?w=80&q=80',
  'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=80&q=80',
]

export default function FarmerStories() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 120)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.story-card').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F9F4ED] py-24 overflow-hidden" id="stories">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge">Real Farmers. Real Results.</span>
          <h2
            className="text-4xl md:text-5xl font-black text-[#2C1A0E] mb-4"
            style={{ fontFamily: 'Syne,sans-serif' }}
          >
            Stories that inspire every harvest
          </h2>
          <p className="text-[#8D6E63] text-lg max-w-[520px] mx-auto mt-3 font-medium">
            From Vidarbha to Punjab, AgriVeda farmers are seeing real change — in their soil, their yields, and their income.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {STORIES.map((story, i) => (
            <div
              key={i}
              className="story-card bg-white rounded-[22px] overflow-hidden shadow-card group transition-all duration-400 hover:-translate-y-3 hover:shadow-premium"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-106"
                  src={story.img}
                  alt={story.name}
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-[#1A5C38] shadow-sm">
                  {story.place}
                </div>
              </div>

              {/* Body */}
              <div className="p-7 relative">
                <span
                  className="block text-[72px] leading-[0.6] mb-4 opacity-80"
                  style={{ color: '#F5A623', fontFamily: 'Georgia, serif' }}
                >
                  "
                </span>
                <p className="text-sm italic text-[#3D2B1F] mb-5 leading-[1.8]">
                  {story.quote}
                </p>
                <div className="mb-4">
                  <strong className="block text-[#1A5C38] font-extrabold" style={{ fontFamily: 'Syne,sans-serif' }}>
                    {story.name}
                  </strong>
                  <span className="text-xs text-[#8D6E63] font-bold">{story.role}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {story.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                        tag.type === 'green'
                          ? 'bg-[#E8F4EC] text-[#1A5C38]'
                          : 'bg-[#FEF3E2] text-[#92400E]'
                      }`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex items-center justify-center gap-7 bg-white rounded-[20px] p-6 px-8 border border-[#E8EEE8] flex-wrap text-center shadow-card">
          <div className="flex items-center">
            {TRUST_IMGS.map((src, i) => (
              <img
                key={i}
                className="w-11 h-11 rounded-full border-[3px] border-white -ml-3 first:ml-0 shadow-md object-cover"
                src={src}
                alt="farmer"
                loading="lazy"
              />
            ))}
            <div className="w-11 h-11 rounded-full bg-[#1A5C38] text-white text-[11px] font-black flex items-center justify-center -ml-3 border-[3px] border-white shadow-sm">
              +10K
            </div>
          </div>
          <div className="text-[#5C4033]">
            <strong className="font-extrabold text-[#2C1A0E]">10,000+ farmers</strong> across{' '}
            <strong className="font-extrabold text-[#2C1A0E]">18 states</strong> trust AgriVeda
            <div className="text-[13px] text-[#8D6E63] mt-1 font-bold">
              ⭐⭐⭐⭐⭐ &nbsp; 4.9/5 average rating from verified farmers
            </div>
          </div>
          <a href="#pricing" className="btn-primary py-3 px-7 text-sm font-bold">
            Join them today →
          </a>
        </div>
      </div>
    </section>
  )
}

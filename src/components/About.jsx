import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Phone, MessageCircle } from 'lucide-react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedEls = document.querySelectorAll('.fade-slide-up');
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="fade-slide-up">
            <div className="inline-flex items-center gap-2 bg-green-bg border border-light-green/20 text-primary-green font-semibold text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6">
              <Leaf className="w-3 h-3" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-dark-text leading-tight mb-6">
              Technology Rooted in{' '}
              <span className="text-primary-green">Ancient Wisdom</span>
            </h2>
            <p className="text-dark-text/70 leading-relaxed mb-5 text-lg">
              India has 15,000 years of agricultural wisdom encoded in texts like the Krishi Parashar and Vrikshayurveda. AgriVeda was born from the belief that this wisdom, combined with modern AI, sensor technology, and data science, can create the most powerful farming platform the world has ever seen.
            </p>
            <p className="text-dark-text/70 leading-relaxed mb-8 text-lg">
              We are a team of IIT/IISc alumni, agronomists, and farmers' children who are obsessively focused on one mission: making every Indian farmer prosperous, sustainable, and technologically empowered.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-green text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-mid-green transition-all shadow-lg shadow-primary-green/10">
                Our Story <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </button>
              <button className="bg-white text-primary-green border border-primary-green/20 px-8 py-3.5 rounded-lg font-semibold hover:bg-green-bg transition-all">
                <Phone className="w-4 h-4 inline-block mr-2" />
                Talk to a Farm Advisor
              </button>
            </div>
          </div>

          {/* Right: Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: '🌱', title: 'Sustainability First', desc: 'Every feature is designed to reduce chemical usage and improve soil health long-term.' },
              { emoji: '🤝', title: 'Farmer-Centered', desc: 'Built in 12 Indian languages. Works on 2G. Designed for every farmer.' },
              { emoji: '🔬', title: 'Science-Backed', desc: 'All recommendations are backed by ICAR research and validated agronomists.' },
              { emoji: '🌍', title: 'Climate Action', desc: 'Every farm on AgriVeda actively contributes to India\'s net-zero carbon mission.' },
            ].map(({ emoji, title, desc }, i) => (
              <div
                key={title}
                className="fade-slide-up bg-cream p-7 rounded-2xl border border-dark-text/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h4 className="text-dark-text font-bold text-lg mb-2 font-display">{title}</h4>
                <p className="text-dark-text/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

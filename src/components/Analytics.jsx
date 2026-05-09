import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Star } from 'lucide-react'

const testimonials = [
  {
    text: "AgriVeda's soil AI told me exactly when to apply biofertilizer. My wheat yield jumped 34% this season. This is the future of farming.",
    name: "Ramesh Patidar",
    role: "Wheat Farmer, Madhya Pradesh",
  },
  {
    text: "The carbon credits feature alone earned me ₹8,000 extra last year. And the weather alerts saved my mustard crop from an unexpected frost.",
    name: "Sunita Devi",
    role: "Mixed Crop Farmer, Bihar",
  },
  {
    text: "I was skeptical about AI farming apps. But AgriVeda speaks in our language, understands our land, and gives real advice. It works.",
    name: "Manjunath Reddy",
    role: "Rice Farmer, Telangana",
  },
]

export default function Analytics() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-slide-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="analytics" className="py-24 relative bg-cream border-t border-dark-text/5">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10 section-padding">
        
        <div className="text-center max-w-3xl mx-auto mb-20 fade-slide-up">
          <Award className="w-10 h-10 text-primary-green mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black font-display text-dark-text leading-tight mb-6">
            Supported by Science.<br/>
            <span className="text-primary-green/50">Verified by Farmers.</span>
          </h2>
          <p className="text-dark-text/60 text-xl font-light">
            Real impact across 18 states. We are building the most trusted agriculture platform in India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-slide-up bg-white p-8 rounded-2xl border border-dark-text/5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber text-amber" />)}
                </div>
                <p className="text-dark-text/80 text-lg leading-relaxed mb-10 font-sans italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-bg flex items-center justify-center text-primary-green font-bold text-xl font-display">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-dark-text font-bold">{t.name}</p>
                  <p className="text-dark-text/40 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

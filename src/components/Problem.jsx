import React, { useEffect } from 'react'

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const animatedEls = document.querySelectorAll('.fade-slide-up');
    animatedEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="problem-section py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="problem-image-col relative h-[460px] fade-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=600&q=80"
              alt="Farmer examining dry cracked soil"
              className="problem-img w-[75%] h-[300px] object-cover rounded-2xl absolute top-0 left-0 shadow-2xl"
              loading="lazy"
            />
            <img 
              src="https://images.unsplash.com/photo-1561484930-974b10b1fcf7?w=600&q=80"
              alt="Farmer looking at sky worried about weather"
              className="problem-img problem-img-overlap w-[75%] h-[300px] object-cover rounded-2xl absolute bottom-0 right-0 border-4 border-white shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="problem-text-col fade-slide-up" style={{ transitionDelay: '0.2s' }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background:'#FEF3E2', color:'#B45309' }}>
              The Challenge
            </div>
            <h2 className="text-4xl font-bold text-dark-text mb-8 leading-tight">Indian farmers deserve better tools</h2>
            <div className="problem-list flex flex-col gap-6">
              <div className="problem-item flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 mt-1">🌱</div>
                <div>
                  <strong className="block text-lg text-primary-green mb-1">Declining soil fertility</strong>
                  <p className="text-dark-text/70 text-sm leading-relaxed">Over-use of chemical fertilizers is degrading 30% of India's farmland</p>
                </div>
              </div>
              <div className="problem-item flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 mt-1">🌦️</div>
                <div>
                  <strong className="block text-lg text-primary-green mb-1">Unpredictable weather</strong>
                  <p className="text-dark-text/70 text-sm leading-relaxed">Farmers lose ₹50,000+ crore annually to weather-related crop failures</p>
                </div>
              </div>
              <div className="problem-item flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 mt-1">📊</div>
                <div>
                  <strong className="block text-lg text-primary-green mb-1">No scientific guidance</strong>
                  <p className="text-dark-text/70 text-sm leading-relaxed">Most farmers rely on local advice — not soil data or crop science</p>
                </div>
              </div>
              <div className="problem-item flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 mt-1">💸</div>
                <div>
                  <strong className="block text-lg text-primary-green mb-1">Missed income from carbon credits</strong>
                  <p className="text-dark-text/70 text-sm leading-relaxed">Healthy soil practices can earn ₹10,000–₹25,000/year — but farmers don't know how</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

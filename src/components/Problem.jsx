import React, { useEffect } from 'react'

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10 });

    document.querySelectorAll('.problem-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="wave-divider flex block line-height-0 -mt-0.5 bg-[#071a0e] relative z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-[90px] block">
          <path d="M0,50 C180,90 360,10 540,50 C720,90 900,10 1080,50 C1260,90 1380,20 1440,45 L1440,90 L0,90 Z" fill="#F9F4ED"/>
        </svg>
      </div>

      <section className="problem-section bg-cream py-24 overflow-hidden relative" id="problem">
        <div className="container">
          <div className="problem-grid grid lg:grid-cols-2 gap-20 items-center">

            <div className="problem-images relative h-[480px]">
              <img className="problem-img problem-img-back absolute top-0 left-0 w-[72%] h-[300px] object-cover rounded-[20px] shadow-2xl"
                src="https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=600&q=82"
                alt="Farmer examining dry cracked soil" loading="lazy"/>
              <img className="problem-img problem-img-front absolute bottom-0 right-0 w-[72%] h-[300px] object-cover rounded-[20px] shadow-2xl border-[5px] border-white transition-transform duration-400 hover:-translate-y-1.5"
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=82"
                alt="Farmer looking at damaged crop" loading="lazy"/>
              <div className="problem-img-badge absolute bottom-[110px] -left-5 bg-white rounded-2xl p-4 flex items-center gap-3 shadow-xl z-10">
                <span className="text-2xl">😔</span>
                <div>
                  <strong className="block text-[13px] text-earth font-bold">3 crore+ farmers</strong>
                  <small className="text-[11px] text-muted font-medium">still lack digital soil guidance</small>
                </div>
              </div>
            </div>

            <div className="problem-text">
              <span className="section-badge !bg-amber-bg !text-[#92400E]">The Challenge</span>
              <h2 className="text-4xl font-extrabold mb-8 text-earth leading-tight">Indian farmers deserve better — and smarter — tools</h2>
              <div className="problem-items flex flex-col gap-5">
                {[
                  { icon: '🌱', title: 'Declining soil fertility', p: "Over 30% of India's farmland is degraded by excessive chemical fertilizer use" },
                  { icon: '🌦️', title: 'Unpredictable weather', p: "Farmers lose ₹50,000+ crore annually to weather-related crop failures" },
                  { icon: '📊', title: 'No scientific guidance', p: "90% rely on local advice — not soil data, not crop science" },
                  { icon: '💸', title: 'Missing carbon credit income', p: "Sustainable practices can earn ₹10,000–₹25,000/year — but nobody shows farmers how" },
                ].map((item, i) => (
                  <div key={i} className="problem-item flex gap-4 items-start p-4.5 bg-white rounded-xl border-l-4 border-amber transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
                    <div className="problem-icon text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <strong className="block text-[15px] text-primary-green font-bold mb-1">{item.title}</strong>
                      <p className="text-[13px] text-soil leading-relaxed m-0 font-medium">{item.p}</p>
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

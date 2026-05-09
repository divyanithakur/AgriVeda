import React, { useEffect } from 'react'

export default function FarmerStories() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const animatedEls = document.querySelectorAll('.story-card, .fade-slide-up');
    animatedEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="farmer-stories" className="farmer-stories-section py-24 bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-green-bg text-primary-green">
          Our Community
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">Real Farmers. Real Stories.</h2>
        <p className="text-lg text-dark-text/70 max-w-xl mb-16 leading-relaxed">
          From Vidarbha to Punjab, AgriVeda is helping farmers like you build 
          a better future — one healthy crop at a time.
        </p>

        <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Story Card 1 */}
          <div className="story-card bg-white rounded-2xl overflow-hidden shadow-premium group fade-slide-up">
            <div className="farmer-image-wrap relative h-[220px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&q=80" 
                alt="Ramesh Patil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="story-quote-icon absolute -bottom-3 left-5 text-7xl text-amber font-serif opacity-80">"</div>
            </div>
            <div className="story-body p-7 pt-9">
              <p className="story-quote text-sm italic text-dark-text/80 mb-4 leading-relaxed">
                "AgriVeda told me my soil needed zinc — not more urea. 
                My soybean yield went up 40% and I spent ₹8,000 less this season."
              </p>
              <div className="story-author block mb-4">
                <strong className="block text-primary-green">Ramesh Patil</strong>
                <span className="text-xs text-dark-text/50">Soybean Farmer · Nagpur, Maharashtra</span>
              </div>
              <div className="story-stat flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-bg text-primary-green text-xs font-bold rounded-full">+40% yield</span>
                <span className="px-3 py-1 bg-amber/10 text-amber text-xs font-bold rounded-full">₹8,000 saved</span>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="story-card bg-white rounded-2xl overflow-hidden shadow-premium group fade-slide-up" style={{ transitionDelay: '0.15s' }}>
            <div className="farmer-image-wrap relative h-[220px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&q=80" 
                alt="Sunita Devi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="story-quote-icon absolute -bottom-3 left-5 text-7xl text-amber font-serif opacity-80">"</div>
            </div>
            <div className="story-body p-7 pt-9">
              <p className="story-quote text-sm italic text-dark-text/80 mb-4 leading-relaxed">
                "The weather alerts saved my entire wheat crop last March. 
                I covered the field before the unseasonal rain. My family is grateful."
              </p>
              <div className="story-author block mb-4">
                <strong className="block text-primary-green">Sunita Devi</strong>
                <span className="text-xs text-dark-text/50">Wheat Farmer · Ludhiana, Punjab</span>
              </div>
              <div className="story-stat flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-bg text-primary-green text-xs font-bold rounded-full">Crop saved</span>
                <span className="px-3 py-1 bg-amber/10 text-amber text-xs font-bold rounded-full">3 acres</span>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="story-card bg-white rounded-2xl overflow-hidden shadow-premium group fade-slide-up" style={{ transitionDelay: '0.3s' }}>
            <div className="farmer-image-wrap relative h-[220px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80" 
                alt="Krishnappa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="story-quote-icon absolute -bottom-3 left-5 text-7xl text-amber font-serif opacity-80">"</div>
            </div>
            <div className="story-body p-7 pt-9">
              <p className="story-quote text-sm italic text-dark-text/80 mb-4 leading-relaxed">
                "I earned ₹12,000 in carbon credits this year just by following 
                AgriVeda's soil practices. It felt like bonus income from the sky."
              </p>
              <div className="story-author block mb-4">
                <strong className="block text-primary-green">Krishnappa G.</strong>
                <span className="text-xs text-dark-text/50">Rice Farmer · Mandya, Karnataka</span>
              </div>
              <div className="story-stat flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-bg text-primary-green text-xs font-bold rounded-full">₹12,000 earned</span>
                <span className="px-3 py-1 bg-amber/10 text-amber text-xs font-bold rounded-full">Carbon credits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="trust-bar flex items-center gap-5 p-6 bg-white rounded-2xl border border-green-bg shadow-sm w-fit mx-auto fade-slide-up">
          <div className="trust-item flex items-center">
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=80&q=80" alt="farmer" />
            <img className="w-10 h-10 rounded-full border-2 border-white -ml-3 object-cover" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=80&q=80" alt="farmer" />
            <img className="w-10 h-10 rounded-full border-2 border-white -ml-3 object-cover" src="https://images.unsplash.com/photo-1561484930-974b10b1fcf7?w=80&q=80" alt="farmer" />
            <div className="w-10 h-10 rounded-full bg-primary-green text-white text-[10px] font-bold flex items-center justify-center -ml-3 border-2 border-white shadow-sm">+10,000</div>
          </div>
          <p className="text-sm text-dark-text font-medium">Farmers across <strong className="font-bold underline decoration-amber decoration-4 underline-offset-4">18 states</strong> trust AgriVeda</p>
        </div>
      </div>
    </section>
  )
}

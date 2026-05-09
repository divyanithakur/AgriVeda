import React, { useEffect } from 'react'

export default function FarmerStories() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = i * 120;
          setTimeout(() => entry.target.classList.add('in-view'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.story-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stories-section bg-cream py-24 overflow-hidden" id="stories">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-badge">Real Farmers. Real Results.</span>
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">Stories that inspire every harvest</h2>
          <p className="text-muted text-lg max-w-[520px] mx-auto mt-3 font-medium">
            From Vidarbha to Punjab, AgriVeda farmers are seeing real change — in their soil, their yields, and their income.
          </p>
        </div>

        <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {/* Story Card 1 */}
          <div className="story-card bg-white rounded-[22px] overflow-hidden shadow-premium group transition-all duration-350 hover:-translate-y-2.5 hover:shadow-2xl">
            <div className="story-img-wrap relative h-[230px] overflow-hidden">
              <img className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&q=82"
                alt="Ramesh Patil" loading="lazy"/>
              <div className="story-overlay-badge absolute top-3.5 left-3.5 bg-white/88 backdrop-blur p-1.5 px-3 rounded-full text-[12px] font-bold text-primary-green shadow-sm">Nagpur, Maharashtra</div>
            </div>
            <div className="story-body p-7 pt-7 relative">
              <span className="story-quote-mark text-[80px] font-serif text-amber leading-[0.6] mb-4 block opacity-90">"</span>
              <p className="story-quote text-sm italic text-[#3D2B1F] mb-4.5 leading-[1.75]">AgriVeda told me my soil needed zinc — not more urea. My soybean yield jumped 40% and I saved ₹8,000 this season. My son now wants to farm too.</p>
              <div className="story-author mb-4">
                <strong className="block text-primary-green font-extrabold">Ramesh Patil</strong>
                <span className="text-xs text-muted font-bold">Soybean Farmer · 6 acres</span>
              </div>
              <div className="story-tags flex flex-wrap gap-2 mt-3.5">
                <span className="story-tag green bg-green-bg text-primary-green text-[11px] font-bold px-3 py-1 rounded-full">↑ 40% yield</span>
                <span className="story-tag amber bg-amber-bg text-[#92400E] text-[11px] font-bold px-3 py-1 rounded-full">₹8,000 saved</span>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="story-card bg-white rounded-[22px] overflow-hidden shadow-premium group transition-all duration-350 hover:-translate-y-2.5 hover:shadow-2xl">
            <div className="story-img-wrap relative h-[230px] overflow-hidden">
              <img className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500&q=82"
                alt="Sunita Devi" loading="lazy"/>
              <div className="story-overlay-badge absolute top-3.5 left-3.5 bg-white/88 backdrop-blur p-1.5 px-3 rounded-full text-[12px] font-bold text-primary-green shadow-sm">Ludhiana, Punjab</div>
            </div>
            <div className="story-body p-7 pt-7 relative">
              <span className="story-quote-mark text-[80px] font-serif text-amber leading-[0.6] mb-4 block opacity-90">"</span>
              <p className="story-quote text-sm italic text-[#3D2B1F] mb-4.5 leading-[1.75]">The weather alert at 2 AM saved my entire wheat crop. I covered 3 acres before the unseasonal rain hit. AgriVeda is like having a scientist in my pocket.</p>
              <div className="story-author mb-4">
                <strong className="block text-primary-green font-extrabold">Sunita Devi</strong>
                <span className="text-xs text-muted font-bold">Wheat Farmer · 3 acres</span>
              </div>
              <div className="story-tags flex flex-wrap gap-2 mt-3.5">
                <span className="story-tag green bg-green-bg text-primary-green text-[11px] font-bold px-3 py-1 rounded-full">Crop saved</span>
                <span className="story-tag amber bg-amber-bg text-[#92400E] text-[11px] font-bold px-3 py-1 rounded-full">₹45,000 prevented loss</span>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="story-card bg-white rounded-[22px] overflow-hidden shadow-premium group transition-all duration-350 hover:-translate-y-2.5 hover:shadow-2xl">
            <div className="story-img-wrap relative h-[230px] overflow-hidden">
              <img className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=82"
                alt="Krishnappa" loading="lazy"/>
              <div className="story-overlay-badge absolute top-3.5 left-3.5 bg-white/88 backdrop-blur p-1.5 px-3 rounded-full text-[12px] font-bold text-primary-green shadow-sm">Mandya, Karnataka</div>
            </div>
            <div className="story-body p-7 pt-7 relative">
              <span className="story-quote-mark text-[80px] font-serif text-amber leading-[0.6] mb-4 block opacity-90">"</span>
              <p className="story-quote text-sm italic text-[#3D2B1F] mb-4.5 leading-[1.75]">I earned ₹12,000 in carbon credits this year just by following AgriVeda's sustainable soil practices. It felt like bonus rain from the sky — free money for doing the right thing.</p>
              <div className="story-author mb-4">
                <strong className="block text-primary-green font-extrabold">Krishnappa G.</strong>
                <span className="text-xs text-muted font-bold">Rice Farmer · 4 acres</span>
              </div>
              <div className="story-tags flex flex-wrap gap-2 mt-3.5">
                <span className="story-tag green bg-green-bg text-primary-green text-[11px] font-bold px-3 py-1 rounded-full">₹12,000 carbon income</span>
                <span className="story-tag amber bg-amber-bg text-[#92400E] text-[11px] font-bold px-3 py-1 rounded-full">Soil carbon: +18%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stories-trust-bar flex items-center justify-center gap-7 bg-white rounded-[20px] p-6.5 px-9 border border-[#E8EEE8] flex-wrap text-center shadow-sm">
          <div className="trust-avatars-lg flex items-center">
            <img className="w-11 h-11 rounded-full border-3 border-white -ml-3 first:ml-0 shadow-md object-cover" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=80&q=80" alt="farmer"/>
            <img className="w-11 h-11 rounded-full border-3 border-white -ml-3 shadow-md object-cover" src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=80&q=80" alt="farmer"/>
            <img className="w-11 h-11 rounded-full border-3 border-white -ml-3 shadow-md object-cover" src="https://images.unsplash.com/photo-1561484930-974b10b1fcf7?w=80&q=80" alt="farmer"/>
            <img className="w-11 h-11 rounded-full border-3 border-white -ml-3 shadow-md object-cover" src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=80&q=80" alt="farmer"/>
            <div className="w-11 h-11 rounded-full bg-primary-green text-white text-[11px] font-black flex items-center justify-center -ml-3 border-3 border-white shadow-sm">+10K</div>
          </div>
          <div className="text-soil">
            <strong className="font-extrabold text-earth">10,000+ farmers</strong> across <strong className="font-extrabold text-earth">18 states</strong> trust AgriVeda
            <div style={{ fontSize: '13px', color: 'var(--clr-muted)', marginTop: '4px', fontWeight: 'bold' }}>
              ⭐⭐⭐⭐⭐ &nbsp; 4.9/5 average rating from verified farmers
            </div>
          </div>
          <a href="#pricing" className="btn-primary py-3 px-7 text-sm font-bold">Join them today →</a>
        </div>
      </div>
    </section>
  )
}

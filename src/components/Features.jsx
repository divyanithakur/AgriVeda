import React, { useEffect } from 'react'

export default function Features() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🌱',
      title: 'AI-Powered Soil Intelligence',
      description: 'We process multi-spectral satellite imagery and ground IoT sensor data to give you a real-time health card of your soil block by block—tracking absolute NPK levels, moisture depth, and microbial vitality.'
    },
    {
      icon: '🛡️',
      title: 'Smart Biofertilizer AI',
      description: 'Vedic farming meets modern enterprise agronomy. Our AI recommends precise biofertilizer formulations and application schedules tailored strictly to your current crop genetics and soil state.'
    },
    {
      icon: '🌦️',
      title: 'Hyper-Local Weather AI',
      description: 'We do not just tell you if it will rain—we tell you if you should irrigate today, if pests are likely to breed tomorrow given the humidity, and when to harvest to avoid crop damage safely.'
    },
    {
      icon: '🌍',
      title: 'Earn Through Carbon Credits',
      description: 'AgriVeda handles the complex Measurement, Reporting, and Verification (MRV) process automatically. Every sustainable practice you log via the app earns verified carbon credits you can sell instantly.'
    }
  ]

  return (
    <>
      <div className="wave-divider relative -mt-0.5 leading-[0] z-[5]" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-20">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F9F4ED" />
        </svg>
      </div>

      <section id="features" className="features-section bg-[#F9F4ED] py-24 relative z-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="section-header text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-green text-sm uppercase tracking-[0.2em] font-bold mb-6">Core Infrastructure</p>
            <h2 className="text-4xl md:text-5xl font-black font-display text-dark-text mb-4">
              Scientific Precision for <span className="text-primary-green">Modern Agriculture.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="feature-card bg-white rounded-[20px] p-9 border-t-[3px] border-[#F5A623] shadow-[0_2px_16px_rgba(26,92,56,0.06)] transition-all duration-[0.35s] hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(26,92,56,0.13)] group"
              >
                <div className="icon-wrap w-14 h-14 bg-[#E8F4EC] rounded-[14px] flex items-center justify-center text-3xl mb-5 transition-all duration-250 group-hover:bg-[#1A5C38] group-hover:scale-[1.08] group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-dark-text mb-2.5 font-display">{feature.title}</h3>
                <p className="text-[14px] text-[#5C4033] leading-[1.7]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

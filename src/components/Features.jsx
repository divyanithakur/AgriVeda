import React, { useEffect } from 'react'

export default function Features() {
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

    document.querySelectorAll('.feature-card').forEach(el => observer.observe(el));
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
    <section id="features" className="features-section bg-[#fff] py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">Core Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">
            Scientific Precision for <span className="text-primary-green">Modern Agriculture.</span>
          </h2>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="feature-card bg-white border border-[#EAF0EA] rounded-[20px] p-9 pt-10 pb-8 border-top-4 border-amber shadow-sm transition-all duration-350 hover:-translate-y-2.5 hover:shadow-2xl group"
              style={{ borderTop: '4px solid #F5A623' }}
            >
              <div className="icon-circle w-[60px] h-[60px] bg-green-bg rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-primary-green group-hover:scale-[1.08] group-hover:-rotate-4 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-18 font-extrabold text-earth mb-2.5 font-display">{feature.title}</h3>
              <p className="text-14 text-soil leading-relaxed">{feature.description}</p>
              <a href="#how-it-works" className="learn-more inline-flex items-center gap-1.5 mt-5 text-[13px] font-bold text-primary-green no-underline group-hover:gap-2.5 transition-all">
                Learn more <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useRef } from 'react'
import { CheckCircle2, Leaf, CloudRain, ShieldCheck, TreePine, Droplet, Activity } from 'lucide-react'

const features = [
  {
    tag: 'Intelligence Layer',
    title: 'AI-Powered Soil Intelligence',
    subtitle: 'Understand your land like never before.',
    description: 'We process multi-spectral satellite imagery and ground IoT sensor data to give you a real-time health card of your soil block by block—tracking absolute NPK levels, moisture depth, and microbial vitality.',
    points: ['Satellite-based soil nutrient mapping', 'IoT moisture and pH real-time syncing', 'Instant AI deficiency diagnosis'],
    visual: 'soil',
    icon: Leaf
  },
  {
    tag: 'Recommendation Engine',
    title: 'Smart Biofertilizer AI',
    subtitle: 'Zero chemicals. Maximum yield.',
    description: 'Vedic farming meets modern enterprise agronomy. Our AI recommends precise biofertilizer formulations and application schedules tailored strictly to your current crop genetics and soil state.',
    points: ['Crop-specific organic formulations', 'Vendor marketplace routing algorithm', 'Precision application timing alerts'],
    visual: 'bio',
    icon: ShieldCheck
  },
  {
    tag: 'Live Forecasting',
    title: 'Hyper-Local Weather AI',
    subtitle: 'Forecasts built for your specific coordinate.',
    description: 'We do not just tell you if it will rain—we tell you if you should irrigate today, if pests are likely to breed tomorrow given the humidity, and when to harvest to avoid crop damage safely.',
    points: ['3km grid-level accuracy', 'Pest and disease risk models', 'Automated hardware irrigation triggers'],
    visual: 'weather',
    icon: CloudRain
  },
  {
    tag: 'Sustainability Economics',
    title: 'Earn Through Carbon Credits',
    subtitle: 'Get paid for planting sustainably.',
    description: 'AgriVeda handles the complex Measurement, Reporting, and Verification (MRV) process automatically. Every sustainable practice you log via the app earns verified carbon credits you can sell instantly on our blockchain ledger.',
    points: ['Automated credit verification pipeline', 'Direct financial marketplace payouts', 'Historical sustainability ledger'],
    visual: 'carbon',
    icon: TreePine
  }
]

export default function Features() {

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

    const cards = document.querySelectorAll('.fade-slide-up');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="bg-cream py-24 relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20 fade-slide-up visible">
          <p className="text-primary-green text-sm uppercase tracking-[0.2em] font-bold mb-6">Core Infrastructure</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text font-display mb-8 tracking-tight">
            Built for <span className="text-primary-green">Sustainable</span><br/>Indian Farming.
          </h2>
          <p className="text-lg md:text-xl text-dark-text/70 font-light max-w-3xl mx-auto leading-relaxed">
            Every system is meticulously crafted to blend centuries of ecological knowledge with tomorrow's AI capabilities, delivered in an enterprise-grade SaaS experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="fade-slide-up feature-card relative bg-white rounded-2xl p-8 border-t-[3px] border-amber shadow-sm group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 flex gap-4 items-start">
                <div className="w-14 h-14 rounded-full bg-green-bg flex items-center justify-center shrink-0 group-hover:bg-primary-green transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-dark-text/50 uppercase">{feature.tag}</span>
                  <h3 className="text-2xl font-bold text-dark-text font-display mt-1">{feature.title}</h3>
                </div>
              </div>
              <h4 className="text-lg text-primary-green font-medium mb-3">{feature.subtitle}</h4>
              <p className="text-dark-text/70 mb-8 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <span className="text-dark-text/90 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

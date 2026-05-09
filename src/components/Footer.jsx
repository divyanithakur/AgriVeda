import React, { useEffect } from 'react'
import { Sprout, Mail, Phone, MapPin, ArrowRight, Leaf, Globe } from 'lucide-react'

const footerLinks = {
  Product: ['Soil Intelligence', 'Weather AI', 'Biofertilizer Guide', 'Carbon Credits', 'Analytics', 'Mobile App'],
  Farmers: ['Getting Started', 'Video Tutorials', 'Success Stories', 'Community Forum', 'Help Center', 'WhatsApp Support'],
  Company: ['About AgriVeda', 'Mission & Vision', 'Careers', 'Blog', 'Press Kit', 'Investors'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Usage', 'Cookie Policy'],
}

export default function Footer() {

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
    <footer className="relative overflow-hidden bg-dark-text text-cream" id="about">
      <div className="relative border-t border-primary-green/10">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          
          {/* CTA Banner */}
          <div className="fade-slide-up w-full relative overflow-hidden rounded-[40px] mb-24 border border-amber/20 shadow-[0_30px_80px_rgba(245,166,35,0.05)] bg-gradient-to-br from-dark-text to-[#3E2916]">
            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-12">
              
              <div className="hidden lg:flex flex-1 items-center justify-center relative w-full h-[250px]">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <Leaf className="w-24 h-24 text-amber drop-shadow-[0_0_20px_rgba(245,166,35,0.4)]" />
                 </div>
              </div>

              <div className="flex-1 text-center lg:text-left z-20">
                <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 text-amber font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                  Join the Revolution
                </span>
                
                <h2 className="text-4xl lg:text-5xl font-black font-display text-cream mb-6 leading-[1.1] tracking-tight">
                  Ready to Transform <br/>
                  <span className="text-amber">Your Farm?</span>
                </h2>
                
                <p className="text-cream/80 text-lg lg:text-xl font-light mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Join <strong className="text-cream font-medium">2.4 lakh+</strong> Indian farmers already using AgriVeda. Get AI-powered insights delivered directly to your WhatsApp.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                  <button className="w-full sm:w-auto bg-amber hover:bg-[#D9911C] text-dark-text font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(245,166,35,0.4)] hover:-translate-y-1">
                    Get Started Free <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-cream font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14 fade-slide-up">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-dark-text" />
                </div>
                <span className="text-xl font-bold font-display">
                  Agri<span className="text-amber">Veda</span>
                </span>
              </div>
              <p className="text-cream/70 text-sm leading-relaxed mb-5">
                Bridging ancient agricultural wisdom with modern AI to empower every Indian farmer.
              </p>
              <div className="flex gap-3">
                {[Leaf, Mail, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/50 hover:text-amber hover:border-amber/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-cream font-bold text-sm mb-4 font-display uppercase tracking-wider">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-cream/60 text-sm hover:text-amber transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-t border-cream/10 mb-6 fade-slide-up">
            <div>
              <h4 className="text-cream font-bold text-sm mb-4 font-display tracking-wider uppercase">Contact Us</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'divyanigour2@gmail.com' },
                  { icon: Phone, text: '+91 9011492357' },
                  { icon: MapPin, text: 'Ansing, District Washim, Maharashtra, India' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-cream/70 text-sm">
                    <Icon className="w-4 h-4 text-amber" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-cream/5 p-6 md:p-8 rounded-2xl border border-cream/10">
               <h4 className="text-amber font-bold text-sm mb-6 font-display tracking-wider uppercase">Founding Team</h4>
               <div className="grid sm:grid-cols-2 gap-8 mb-6">
                 {/* Founder 1 */}
                 <div className="flex gap-4 items-start">
                   <div className="w-12 h-12 rounded-full bg-amber text-dark-text flex items-center justify-center text-xl font-bold font-display">DG</div>
                   <div>
                     <h5 className="text-cream font-semibold text-lg">Divyani Gour</h5>
                     <p className="text-amber text-sm font-medium mb-1">Founder</p>
                     <p className="text-cream/60 text-xs">+91 9011492357</p>
                   </div>
                 </div>
                 {/* Founder 2 */}
                 <div className="flex gap-4 items-start">
                   <div className="w-12 h-12 rounded-full border border-amber text-amber flex items-center justify-center text-xl font-bold font-display">S</div>
                   <div>
                     <h5 className="text-cream font-semibold text-lg">Suraj</h5>
                     <p className="text-amber/80 text-sm font-medium mb-1">Co-Founder</p>
                     <p className="text-cream/60 text-xs">+91 87675 56984</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-cream/10">
            <p className="text-cream/40 text-xs text-center md:text-left">
              © 2025 AgriVeda Technologies Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-cream/40 text-xs flex items-center gap-1.5 flex-wrap justify-center">
              Made with <span className="text-amber">♥</span> for Indian Farmers • ICAR Certified • DST Funded
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

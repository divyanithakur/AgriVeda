import React from 'react'
import { Sprout, Mail, Phone, MapPin, Globe, Leaf } from 'lucide-react'

const footerLinks = {
  Product: ['Soil Intelligence', 'Weather AI', 'Biofertilizer Guide', 'Carbon Credits', 'Analytics', 'Mobile App'],
  Farmers: ['Getting Started', 'Video Tutorials', 'Success Stories', 'Community Forum', 'Help Center', 'WhatsApp Support'],
  Company: ['About AgriVeda', 'Mission & Vision', 'Careers', 'Blog', 'Press Kit', 'Investors'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Usage', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-white/70 py-16 pb-8" id="about">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-amber flex items-center justify-center transition-transform group-hover:rotate-12">
                <Sprout className="w-5 h-5 text-[#2C1A0E]" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Agri<span className="text-primary-lt">Veda</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Bridging ancient agricultural wisdom with modern AI to empower every Indian farmer.
            </p>
            <div className="flex gap-3">
              {[Leaf, Mail, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-amber hover:border-amber/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-amber transition-colors duration-200 no-underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-t border-white/10 mb-6">
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'divyanigour2@gmail.com' },
                { icon: Phone, text: '+91 9011492357' },
                { icon: MapPin, text: 'Ansing, District Washim, Maharashtra, India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-amber" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sprout size={80} className="text-white" />
             </div>
             <h4 className="text-amber font-bold text-sm mb-6 uppercase tracking-widest">Founding Team</h4>
             <div className="grid sm:grid-cols-2 gap-8 relative z-10">
               <div className="flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full bg-amber text-[#2C1A0E] flex items-center justify-center text-sm font-black">DG</div>
                 <div>
                   <h5 className="text-white font-bold text-base">Divyani Gour</h5>
                   <p className="text-amber text-xs font-bold mb-1">Founder</p>
                   <p className="text-white/40 text-[11px]">Ansing, Maharashtra</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full border border-amber/30 text-amber flex items-center justify-center text-sm font-black">S</div>
                 <div>
                   <h5 className="text-white font-bold text-base">Suraj</h5>
                   <p className="text-white/60 text-xs font-bold mb-1">Co-Founder</p>
                   <p className="text-white/40 text-[11px]">+91 87675 56984</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="footer-bottom border-t border-white/10 mt-12 pt-6 text-[13px] text-white/35 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 AgriVeda Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p>Made with <span className="text-amber">♥</span> for Indian Farmers</p>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter text-[10px] font-bold">ICAR Certified</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter text-[10px] font-bold">DST Funded</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

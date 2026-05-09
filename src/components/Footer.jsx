import React from 'react'
import { Sprout, Mail, Phone, MapPin, Globe, Leaf } from 'lucide-react'

const footerLinks = {
  Product: ['Soil Intelligence', 'Weather AI', 'Biofertilizer Guide', 'Carbon Credits', 'Analytics', 'Mobile App'],
  Farmers: ['Getting Started', 'Video Tutorials', 'Success Stories', 'Community Forum', 'Help Center', 'WhatsApp Support'],
  Company: ['About AgriVeda', 'Mission & Vision', 'Careers', 'Blog', 'Press Kit', 'Investors'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Usage', 'Cookie Policy'],
}

// SVG social icons (avoids lucide-react version issues)
const SocialIcons = [
  {
    label: 'X (Twitter)',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-white/70 py-16 pb-8" id="about">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623] flex items-center justify-center transition-transform group-hover:rotate-12">
                <Sprout className="w-5 h-5 text-[#2C1A0E]" />
              </div>
              <span
                className="text-xl font-black text-white tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Agri<span className="text-[#6BAE82]">Veda</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Bridging ancient agricultural wisdom with modern AI to empower every Indian farmer.
            </p>
            <div className="flex gap-3">
              {SocialIcons.map(({ label, svg }) => (
                
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F5A623] hover:border-[#F5A623]/30 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
              
                href="mailto:divyanigour2@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F5A623] hover:border-[#F5A623]/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-bold text-sm mb-4 uppercase tracking-widest"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    
                      href="#"
                      className="text-white/55 text-sm hover:text-[#F5A623] transition-colors duration-200 no-underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + Team row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-t border-white/10 mb-6">
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-widest"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: Mail,   text: 'divyanigour2@gmail.com' },
                { icon: Phone,  text: '+91 9011492357' },
                { icon: MapPin, text: 'Ansing, District Washim, Maharashtra, India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/65 text-sm">
                  <Icon className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Founding team card */}
          <div className="lg:col-span-2 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sprout size={80} className="text-white" />
            </div>
            <h4
              className="text-[#F5A623] font-bold text-sm mb-6 uppercase tracking-widest"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Founding Team
            </h4>
            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#F5A623] text-[#2C1A0E] flex items-center justify-center text-sm font-black flex-shrink-0">
                  DG
                </div>
                <div>
                  <h5 className="text-white font-bold text-base">Divyani Gour</h5>
                  <p className="text-[#F5A623] text-xs font-bold mb-1">Founder</p>
                  <p className="text-white/40 text-[11px]">Ansing, Maharashtra</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-[#F5A623]/30 text-[#F5A623] flex items-center justify-center text-sm font-black flex-shrink-0">
                  S
                </div>
                <div>
                  <h5 className="text-white font-bold text-base">Suraj</h5>
                  <p className="text-white/55 text-xs font-bold mb-1">Co-Founder</p>
                  <p className="text-white/40 text-[11px]">+91 87675 56984</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-[13px] text-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 AgriVeda Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p>Made with <span className="text-[#F5A623]">♥</span> for Indian Farmers</p>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter text-[10px] font-bold">ICAR Certified</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter text-[10px] font-bold">DST Funded</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

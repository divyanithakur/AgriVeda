import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sprout, Mail, Phone, MapPin, ArrowRight, Leaf, Globe } from 'lucide-react'

const footerLinks = {
  Product: ['Soil Intelligence', 'Weather AI', 'Biofertilizer Guide', 'Carbon Credits', 'Analytics', 'Mobile App'],
  Farmers: ['Getting Started', 'Video Tutorials', 'Success Stories', 'Community Forum', 'Help Center', 'WhatsApp Support'],
  Company: ['About AgriVeda', 'Mission & Vision', 'Careers', 'Blog', 'Press Kit', 'Investors'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Data Usage', 'Cookie Policy'],
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer className="relative overflow-hidden" id="about">
      {/* CTA Banner */}
      <div className="relative border-t border-green-500/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f0f] to-[#071508]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        <div ref={ref} className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Newsletter CTA */}
          {/* Premium Cinematic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative overflow-hidden rounded-[40px] mb-24 border border-[#4ADE80]/30 shadow-[0_30px_80px_rgba(74,222,128,0.15)] bg-gradient-to-br from-[#071508] to-[#14532D]"
          >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-60 mix-blend-screen" />
            <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-[#4ADE80]/20 rounded-full blur-[200px] animate-pulse-glow" />
            <div className="absolute bottom-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-12">
              
              {/* Left Side Visual: AI Hologram Feel */}
              <div className="hidden lg:flex flex-1 items-center justify-center relative w-full h-[350px]">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-b from-[#4ADE80]/30 to-transparent rounded-full blur-2xl" />
                 
                 {/* Floating Hologram Rings */}
                 <motion.div 
                   animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                   className="absolute w-[300px] h-[300px] border-2 border-[#4ADE80]/30 rounded-full border-t-[#4ADE80]"
                 />
                 <motion.div 
                   animate={{ rotateX: [70, 70], rotateZ: [360, 0] }}
                   transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                   className="absolute w-[220px] h-[220px] border-2 border-[#4ADE80]/40 rounded-full border-b-[#4ADE80]/80 border-dashed"
                 />
                 
                 {/* Plant Vector Mock */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center">
                    <Leaf className="w-24 h-24 text-[#4ADE80] drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
                    <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: 80 }}
                       transition={{ duration: 1.5, delay: 0.5 }}
                       className="w-1 bg-gradient-to-t from-transparent via-[#4ADE80] to-transparent mt-2 opacity-50"
                    />
                 </div>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 text-center lg:text-left z-20">
                <span className="inline-flex items-center gap-2 bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.2)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                  Join the Revolution
                </span>
                
                <h2 className="text-4xl lg:text-6xl font-black font-['Outfit'] text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                  Ready to Transform <br/>
                  <span className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]">Your Farm?</span>
                </h2>
                
                <p className="text-white/60 text-lg lg:text-xl font-light mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Join <strong className="text-white font-medium">2.4 lakh+</strong> Indian farmers already using AgriVeda. Get AI-powered insights delivered directly to your WhatsApp.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-[#4ADE80] to-[#22C55E] hover:to-[#4ADE80] text-[#071508] font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] hover:-translate-y-1">
                    Get Started Free <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-full sm:w-auto bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md">
                    Watch Demo
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
                  {[
                    'No credit card required',
                    'Setup in 2 minutes',
                    'Cancel anytime'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <div className="w-4 h-4 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                         <svg className="w-2.5 h-2.5 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-[Outfit]">
                  <span className="text-white">Agri</span>
                  <span className="gradient-text">Veda</span>
                </span>
              </div>
              <p className="text-green-100/45 text-sm leading-relaxed mb-5">
                Bridging ancient agricultural wisdom with modern AI to empower every Indian farmer.
              </p>
              <div className="flex gap-3">
                {[Leaf, Mail, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-500/30 transition-all"
                  >
                    {/* Placeholder for social - Using Leaf/Mail/Github */}
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white/80 font-bold text-sm mb-4 font-[Outfit]">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/40 text-sm hover:text-green-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Founder Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 border-t border-white/5 mb-6">
            <div>
              <h4 className="text-white/80 font-bold text-sm mb-4 font-[Outfit]">Contact Us</h4>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'divyanigour2@gmail.com' },
                  { icon: Phone, text: '+91 9011492357' },
                  { icon: MapPin, text: 'Ansing, District Washim, Maharashtra, India' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-white/50 text-sm">
                    <Icon className="w-4 h-4 text-[#4ADE80]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 glass-card p-6 md:p-8 border border-[#4ADE80]/10 bg-gradient-to-br from-white/5 to-transparent">
              <h4 className="text-[#4ADE80] font-bold text-sm mb-6 font-[Outfit] tracking-wider uppercase">Founding Team</h4>
              <div className="grid sm:grid-cols-2 gap-8 mb-6">
                {/* Founder 1 */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#14532D] text-white flex items-center justify-center text-xl font-bold font-['Outfit'] shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                    DG
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-lg">Divyani Gour</h5>
                    <p className="text-[#4ADE80] text-sm font-medium mb-1">Founder</p>
                    <a href="mailto:divyanigour2@gmail.com" className="text-white/40 text-xs block hover:text-white transition-colors">divyanigour2@gmail.com</a>
                    <p className="text-white/40 text-xs">+91 9011492357</p>
                  </div>
                </div>

                {/* Founder 2 */}
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-bl from-[#8B5E3C] to-[#14532D] text-white flex items-center justify-center text-xl font-bold font-['Outfit'] shadow-[0_0_20px_rgba(139,94,60,0.2)]">
                    S
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-lg">Suraj</h5>
                    <p className="text-[#8B5E3C] text-sm font-medium mb-1">Co-Founder</p>
                    <p className="text-white/40 text-xs">+91 87675 56984</p>
                  </div>
                </div>
              </div>
              <p className="text-[#F8FAF5]/60 text-sm leading-relaxed italic border-t border-white/5 pt-4">
                “Building AI-powered sustainable farming solutions for the future of Indian agriculture.”
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5">
            <p className="text-white/25 text-xs">
              © 2025 AgriVeda Technologies Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-white/20 text-xs flex items-center gap-1.5">
              Made with <span className="text-green-400">♥</span> for Indian Farmers • ICAR Certified • DST Funded
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

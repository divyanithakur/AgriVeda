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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="glass-card p-10 md:p-14 text-center mb-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.06), rgba(20,83,45,0.12))' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-green-500/8 blur-3xl" />
            <div className="relative z-10">
              <div className="section-tag mx-auto mb-5">
                <Leaf className="w-3 h-3" />
                Join the Revolution
              </div>
              <h2 className="text-3xl md:text-4xl font-black font-[Outfit] text-white mb-4">
                Ready to Transform <span className="gradient-text">Your Farm?</span>
              </h2>
              <p className="text-green-100/50 mb-8 max-w-lg mx-auto">
                Join 2.4 lakh Indian farmers already using AgriVeda. Get AI-powered insights delivered to your WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email or phone"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/8 border border-green-500/20 text-white placeholder:text-white/30 text-sm outline-none focus:border-green-400/50 transition-colors"
                />
                <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-white/25 text-xs mt-4">No credit card required • Setup in 2 minutes • Cancel anytime</p>
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

          {/* Contact Row */}
          <div className="flex flex-wrap gap-6 py-6 border-t border-white/5 mb-6">
            {[
              { icon: Mail, text: 'hello@agriveda.in' },
              { icon: Phone, text: '+91 1800-AGRIVEDA' },
              { icon: MapPin, text: 'Bengaluru, Karnataka, India' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/40 text-sm">
                <Icon className="w-4 h-4 text-green-500/60" />
                {text}
              </div>
            ))}
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

import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050f08] text-white pt-20 pb-10 overflow-hidden relative" id="footer">
      {/* Decorative leaf bg */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.03] rotate-45 translate-x-20 -translate-y-20">
         <Leaf className="w-full h-full text-primary-green" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 rounded-2xl bg-amber flex items-center justify-center text-[#2C1A0E] text-sm font-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                🌱
              </div>
              <span className="text-2xl font-black font-display tracking-tight hover:text-primary-lt transition-colors">AgriVeda</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">
              We are digitizing the roots of Indian agriculture. Our platform combines ancient Krishi wisdom with modern AI to empower 14 crore farmers with data-driven prosperity.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-green hover:text-white hover:-translate-y-1 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-green hover:text-white hover:-translate-y-1 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary-green hover:text-white hover:-translate-y-1 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-7 font-display">Agri Platform</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Soil Intelligence</a></li>
              <li><a href="#problem" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Weather Guard AI</a></li>
              <li><a href="#stories" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Farmer Stories</a></li>
              <li><a href="#pricing" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Enterprise Plans</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-7 font-display">Resources</h4>
            <ul className="space-y-4">
              <li><a href="/docs" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Krishi Documentation</a></li>
              <li><a href="/carbon" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Carbon Credits 101</a></li>
              <li><a href="/api" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Agri-Data API</a></li>
              <li><a href="/legal" className="text-white/50 hover:text-amber text-sm font-bold transition-all hover:translate-x-1 inline-block">Terms & Privacy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-7 font-display">Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 group">
                <MapPin className="w-5 h-5 text-amber shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/50 text-sm font-medium leading-relaxed">
                  Innovation Hub, IIT Delhi Campus,<br />New Delhi, India — 110016
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <Mail className="w-5 h-5 text-amber shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@agriveda.io" className="text-white/50 hover:text-white text-sm font-bold transition-colors">hello@agriveda.io</a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <Phone className="w-5 h-5 text-amber shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/50 text-sm font-bold">+91 11-4020-5020</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-white/30 text-[13px] font-bold tracking-wide">
             © {currentYear} AgriVeda Platforms Pvt Ltd. Built with passion for Indian Farmers.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white/40 text-[11px] font-black uppercase tracking-widest">System Status: Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

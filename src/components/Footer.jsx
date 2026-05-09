import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Problem',  href: '#problem' },
  { label: 'Stories',  href: '#stories' },
  { label: 'Pricing',  href: '#pricing' },
  { label: 'About',    href: '#about' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center px-6 md:px-10 transition-all duration-500 ${
        scrolled ? 'navbar-solid' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-[1.25rem] font-black tracking-tight text-white flex items-center gap-2 group"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="w-7 h-7 rounded-lg bg-[#F5A623] flex items-center justify-center text-[#2C1A0E] text-xs font-black transition-transform duration-300 group-hover:rotate-12">
            🌱
          </span>
          Agri<span className="text-[#6BAE82]">Veda</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            return (
              
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="relative text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 group py-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#F5A623] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            )
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold text-white/75 hover:text-white transition-colors duration-200"
          >
            Log in
          </Link>
          <Link
            to="/dashboard"
            className="bg-[#C8520A] hover:bg-[#A03E06] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: 'Syne, sans-serif', boxShadow: '0 4px 14px rgba(200,82,10,0.30)' }}
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-[99] transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5,14,8,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-7 py-10 flex flex-col gap-1">
          {navLinks.map((link) => {
            return (
              
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-bold py-4 border-b border-white/10 flex items-center justify-between group"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {link.label}
                <span className="text-white/20 text-lg group-hover:text-[#F5A623] transition-colors">
                  →
                </span>
              </a>
            )
          })}

          <div className="flex flex-col gap-3 mt-8">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-center font-bold text-white py-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-center font-bold text-white py-4 rounded-xl bg-[#C8520A] hover:bg-[#A03E06] transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

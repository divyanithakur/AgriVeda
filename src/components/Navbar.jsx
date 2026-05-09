import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sprout } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Problem', href: '#problem' },
  { label: 'Stories', href: '#stories' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 h-16 flex items-center px-10 ${
        scrolled ? 'navbar-solid' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="nav-logo text-xl font-black text-white tracking-tighter flex items-center gap-2">
          Agri<span className="text-primary-lt">Veda</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium text-white/85 transition-colors relative hover:text-amber group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-white/85 text-sm font-medium hover:text-amber">Log in</Link>
          <Link to="/dashboard" className="nav-cta bg-terracotta text-white px-5 py-2 rounded-lg font-bold text-sm transition-all hover:bg-accent-dark hover:-translate-y-0.5">
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-[#08180c] z-[99] transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="px-6 py-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-bold border-b border-white/10 pb-4"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
             <Link to="/login" className="text-center font-bold text-white py-3 bg-white/10 rounded-lg">Log in</Link>
             <Link to="/dashboard" className="btn-primary w-full text-center py-4">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

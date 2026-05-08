import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import DashboardPreview from '../components/Dashboard'
import Analytics from '../components/Analytics'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Analytics />
      <About />
      <Pricing />
      <Footer />
    </>
  )
}

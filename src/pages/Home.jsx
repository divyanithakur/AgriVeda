import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Features from '../components/Features'
import DashboardPreview from '../components/Dashboard'
import FarmerStories from '../components/FarmerStories'
import Analytics from '../components/Analytics'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <DashboardPreview />
      <FarmerStories />
      <Analytics />
      <About />
      <Pricing />
      <Footer />
    </>
  )
}

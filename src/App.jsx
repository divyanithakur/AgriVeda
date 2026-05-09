import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DashboardApp from './pages/DashboardApp'
import Auth from './pages/Auth'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-[#E8F4EC] text-dark-text overflow-x-hidden font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardApp />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App

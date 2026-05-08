import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DashboardApp from './pages/DashboardApp'
import Auth from './pages/Auth'

function App() {
  return (
    <div className="min-h-screen bg-[#071508] text-white overflow-x-hidden font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardApp />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App

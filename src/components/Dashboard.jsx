import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Droplets, TrendingUp, Sun, ChevronRight, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react'

// Elegant Apple-style card
function MetricCard({ title, value, subValue, trend, icon: Icon, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6 border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#4ADE80]" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-[#4ADE80] text-xs font-bold tracking-wide bg-[#4ADE80]/10 border border-[#4ADE80]/20 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            <TrendingUp className="w-3.5 h-3.5" /> {trend}
          </div>
        )}
      </div>
      <div>
        <h4 className="text-white/50 text-sm font-semibold mb-2 font-[Inter] tracking-wide">{title}</h4>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white font-['Outfit'] drop-shadow-md">{value}</span>
          {subValue && <span className="text-white/40 text-sm font-semibold">{subValue}</span>}
        </div>
      </div>
    </motion.div>
  )
}

const chartData = [
  { year: 2019, yield: 3.2, carbon: '18K', heightPrimary: 32, heightSecondary: 18 },
  { year: 2020, yield: 4.1, carbon: '24K', heightPrimary: 41, heightSecondary: 24 },
  { year: 2021, yield: 3.8, carbon: '22K', heightPrimary: 38, heightSecondary: 22 },
  { year: 2022, yield: 5.6, carbon: '32K', heightPrimary: 56, heightSecondary: 32 },
  { year: 2023, yield: 6.4, carbon: '38K', heightPrimary: 64, heightSecondary: 38 },
  { year: 2024, yield: 5.2, carbon: '31K', heightPrimary: 52, heightSecondary: 31 },
  { year: 2025, yield: 7.3, carbon: '45K', heightPrimary: 73, heightSecondary: 45 },
  { year: 2026, yield: 8.1, carbon: '52K', heightPrimary: 81, heightSecondary: 52 },
]

export default function Dashboard() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredData, setHoveredData] = useState(null)

  return (
    <section id="dashboard" className="py-32 relative bg-[#071508] z-20 overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#14532D]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[#4ADE80] font-bold tracking-[0.2em] text-xs uppercase mb-4"
            >
              Enterprise Dashboard
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold font-['Outfit'] text-white leading-tight tracking-tight"
            >
              Smart Farming Analytics<br/>
              <span className="text-white/40">Simplified into perfection.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-white hover:text-[#4ADE80] transition-colors font-semibold bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]">
              Explore Live Platform <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Dashboard Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard title="Avg. Yield Increase" value="+28" subValue="%" trend="High" icon={TrendingUp} delay={0.2} />
          <MetricCard title="Total Carbon Earnings" value="₹1.4" subValue="Cr" trend="Verified" icon={Leaf} delay={0.3} />
          <MetricCard title="Sustainable Impact" value="94" subValue="/ 100" trend="A+" icon={Activity} delay={0.4} />
          <MetricCard title="Better Profitability" value="2.4x" subValue="Margin" trend="Proven" icon={CheckCircle2} delay={0.5} />
        </div>

        {/* Massive Data Visualizer - Fixed Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full glass-card overflow-hidden p-8 lg:p-12 border border-[#4ADE80]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 border-b border-white/5 pb-8">
            <div>
              <h3 className="text-3xl text-white font-bold font-['Outfit'] tracking-tight">Yield Projection vs Carbon Earnings</h3>
              <p className="text-white/50 text-sm mt-2 font-medium">Verified historical data mapped via AI interpolation algorithms.</p>
            </div>
            
            <div className="flex gap-6 mt-6 sm:mt-0 bg-[#071508]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-inner">
               <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded-md bg-gradient-to-t from-[#22C55E] to-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.4)]" /> 
                 <span className="text-sm font-semibold text-white">Yield Size (t/ha)</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded-md bg-gradient-to-t from-blue-600/80 to-blue-400 border border-blue-400/50" /> 
                 <span className="text-sm font-semibold text-white/70">Carbon Revenue</span>
               </div>
            </div>
          </div>

          <div className="relative h-80 lg:h-96 w-full flex items-end justify-between gap-4 px-4 pb-4">
            {chartData.map((data, i) => (
              <div 
                key={i} 
                className="relative flex-1 group flex flex-col justify-end items-center h-full cursor-pointer"
                onMouseEnter={() => setHoveredData(data)}
                onMouseLeave={() => setHoveredData(null)}
              >
                {/* Secondary bar (Carbon) */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${data.heightSecondary}%` } : { height: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[80px] bg-gradient-to-t from-blue-700/60 to-blue-500/80 rounded-t-xl absolute bottom-[12px] transform group-hover:scale-x-110 transition-transform duration-300 border border-blue-400/20"
                />
                
                {/* Primary bar (Yield) */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${data.heightPrimary}%` } : { height: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[80px] bg-gradient-to-t from-[#14532D] via-[#22C55E] to-[#4ADE80] rounded-t-xl relative z-10 group-hover:scale-x-110 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.5)] transition-all duration-300 border border-[#4ADE80]/80"
                />
                
                <span className="text-white/40 font-bold text-sm mt-5 select-none absolute -bottom-8 group-hover:text-white transition-colors">
                   {data.year}
                </span>

                {/* Floating Interactive Tooltip */}
                <AnimatePresence>
                  {hoveredData?.year === data.year && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-32 w-48 glass-card border border-[#4ADE80]/30 shadow-[0_20px_40px_rgba(0,0,0,0.8)] p-4 z-50 pointer-events-none"
                    >
                      <p className="text-white font-bold mb-2">{data.year} Report</p>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-white/60">Yield:</span>
                        <span className="text-[#4ADE80] font-bold">{data.yield} t/ha</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Revenue:</span>
                        <span className="text-blue-400 font-bold">{data.carbon}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

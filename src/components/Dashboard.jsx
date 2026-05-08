import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Droplets, TrendingUp, Sun, Wind, CheckCircle2, ChevronRight, Activity, ArrowUpRight } from 'lucide-react'

// Elegant Apple-style card
function MetricCard({ title, value, subValue, trend, icon: Icon, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white/70" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-[#4ADE80] text-xs font-semibold bg-[#4ADE80]/10 px-2.5 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" /> {trend}
          </div>
        )}
      </div>
      <div>
        <h4 className="text-white/50 text-sm font-medium mb-1 font-[Inter]">{title}</h4>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-white font-['Outfit']">{value}</span>
          {subValue && <span className="text-white/40 text-sm">{subValue}</span>}
        </div>
      </div>
    </motion.div>
  )
}

export default function Dashboard() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="dashboard" className="py-32 relative bg-[#071508] z-20">
      {/* Background Glow */}
       <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#14532D]/30 rounded-full blur-[150px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-[#4ADE80] font-semibold tracking-widest text-sm uppercase mb-4"
            >
              Intelligence Platform
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold font-['Outfit'] text-white leading-tight"
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
            <button className="flex items-center gap-2 text-white hover:text-[#4ADE80] transition-colors font-medium">
              Explore Platform <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <MetricCard title="Farm Health Index" value="94" subValue="/ 100" trend="+2.4" icon={Activity} delay={0.2} />
          <MetricCard title="Avg Moisture" value="68" subValue="%" trend="+5.1" icon={Droplets} delay={0.3} />
          <MetricCard title="Carbon Sequestered" value="1.2" subValue="Tons" trend="+0.3" icon={Leaf} delay={0.4} />
          <MetricCard title="Weekly Sunlight" value="54" subValue="hrs" icon={Sun} delay={0.5} />
        </div>

        {/* Massive Data Visualizer Mock */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full glass-card overflow-hidden p-6 lg:p-10"
        >
          <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
            <div>
              <h3 className="text-xl text-white font-semibold font-['Outfit']">Yield Projection vs Carbon Earnings</h3>
              <p className="text-white/40 text-sm mt-1">Multi-year forecast based on current sustainable practices</p>
            </div>
            <div className="hidden sm:flex gap-4">
               <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 rounded-full bg-[#4ADE80]" /> Yield</div>
               <div className="flex items-center gap-2 text-sm text-white/50"><div className="w-3 h-3 rounded-full bg-blue-500/50" /> Carbon Revenue</div>
            </div>
          </div>

          <div className="relative h-64 lg:h-80 w-full flex items-end justify-between gap-2 lg:gap-4 px-2">
            {/* Minimalist Bar Chart Mock */}
            {[40, 55, 45, 70, 75, 65, 85, 95].map((height, i) => (
              <div key={i} className="relative flex-1 group flex flex-col justify-end items-center h-full">
                {/* Secondary bar */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${height * 0.4}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.8 + (i*0.1), ease: "easeOut" }}
                  className="w-full max-w-[40px] bg-blue-500/20 rounded-t-lg absolute bottom-[10px]"
                />
                /* Primary bar */
                <motion.div 
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${height}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.8 + (i*0.1), ease: "easeOut" }}
                  className="w-full max-w-[40px] bg-[#4ADE80] rounded-t-lg relative z-10 group-hover:bg-[#22C55E] transition-colors"
                />
                <span className="text-white/30 text-xs mt-3 select-none absolute -bottom-6">
                   {2019 + i}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Leaf, Droplets, TrendingUp, Sun, ChevronRight, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react'

// Elegant Apple-style card
function MetricCard({ title, value, subValue, trend, icon: Icon, delay }) {
  const ref = useRef(null)
  
  return (
    <div
      ref={ref}
      className="fade-slide-up bg-white p-6 border border-dark-text/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
      style={{ transitionDelay: `${delay * 1000}s` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-green-bg flex items-center justify-center group-hover:bg-primary-green transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-primary-green text-xs font-bold tracking-wide bg-green-bg px-3 py-1.5 rounded-full border border-primary-green/10">
            <TrendingUp className="w-3.5 h-3.5" /> {trend}
          </div>
        )}
      </div>
      <div>
        <h4 className="text-dark-text/50 text-sm font-semibold mb-2 font-display tracking-wide uppercase">{title}</h4>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-dark-text font-display">{value}</span>
          {subValue && <span className="text-dark-text/40 text-sm font-semibold">{subValue}</span>}
        </div>
      </div>
    </div>
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
  const [hoveredData, setHoveredData] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-slide-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dashboard" className="py-24 relative bg-white z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 section-padding">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6 fade-slide-up">
          <div className="max-w-2xl">
            <div className="text-primary-green font-bold tracking-[0.2em] text-xs uppercase mb-4">
              Enterprise Dashboard
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-dark-text leading-tight tracking-tight">
              Smart Farming Analytics<br/>
              <span className="text-primary-green/40">Simplified into perfection.</span>
            </h2>
          </div>
          <div>
            <button className="cta-button">
              Explore Live Platform <ArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Dashboard Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard title="Avg. Yield Increase" value="+28" subValue="%" trend="High" icon={TrendingUp} delay={0.2} />
          <MetricCard title="Total Carbon Earnings" value="₹1.4" subValue="Cr" trend="Verified" icon={Leaf} delay={0.3} />
          <MetricCard title="Sustainable Impact" value="94" subValue="/ 100" trend="A+" icon={Activity} delay={0.4} />
          <MetricCard title="Better Profitability" value="2.4x" subValue="Margin" trend="Proven" icon={CheckCircle2} delay={0.5} />
        </div>

        {/* Massive Data Visualizer */}
        <div 
          className="fade-slide-up w-full bg-cream rounded-3xl overflow-hidden p-8 lg:p-12 border border-dark-text/5 shadow-premium"
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 border-b border-dark-text/10 pb-8">
            <div>
              <h3 className="text-3xl text-dark-text font-black font-display tracking-tight">Yield Projection vs Carbon Earnings</h3>
              <p className="text-dark-text/50 text-sm mt-2 font-medium">Verified historical data mapped via AI interpolation algorithms.</p>
            </div>
            
            <div className="flex gap-6 mt-6 sm:mt-0 bg-white p-4 rounded-2xl border border-dark-text/5 shadow-sm">
               <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded-md bg-primary-green shadow-sm" /> 
                 <span className="text-sm font-semibold text-dark-text">Yield Size</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-4 h-4 rounded-md bg-amber shadow-sm" /> 
                 <span className="text-sm font-semibold text-dark-text/70">Carbon Revenue</span>
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
                  whileInView={{ height: `${data.heightSecondary}%` }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[80px] bg-amber rounded-t-xl absolute bottom-[12px] group-hover:scale-x-110 transition-transform duration-300"
                />
                
                {/* Primary bar (Yield) */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${data.heightPrimary}%` }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[80px] bg-primary-green rounded-t-xl relative z-10 group-hover:scale-x-110 shadow-sm transition-all duration-300"
                />
                
                <span className="text-dark-text/40 font-bold text-sm mt-5 select-none absolute -bottom-8 group-hover:text-primary-green transition-colors">
                   {data.year}
                </span>

                <AnimatePresence>
                  {hoveredData?.year === data.year && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-32 w-48 bg-white border border-primary-green/10 shadow-2xl rounded-2xl p-4 z-50 pointer-events-none"
                    >
                      <p className="text-dark-text font-black mb-2 font-display">{data.year} Report</p>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-dark-text/60">Yield:</span>
                        <span className="text-primary-green font-bold">{data.yield} t/ha</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-dark-text/60">Revenue:</span>
                        <span className="text-amber font-bold">{data.carbon}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

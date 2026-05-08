import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, Search, Menu, Leaf, LayoutDashboard, Database, CloudRain, 
  TreePine, ShoppingBag, Settings, LogOut, ChevronDown, User, MessageSquare
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import axios from 'axios'
import { Link } from 'react-router-dom'

const mockCarbonData = [
  { month: 'Jan', credits: 120, revenue: 3500 },
  { month: 'Feb', credits: 150, revenue: 4200 },
  { month: 'Mar', credits: 180, revenue: 5100 },
  { month: 'Apr', credits: 160, revenue: 4700 },
  { month: 'May', credits: 210, revenue: 6200 },
  { month: 'Jun', credits: 240, revenue: 7100 },
]

function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Namaste! I am AgriVeda AI. How can I assist you with your farm today? (Hindi/English both supported)' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if(!query.trim()) return;
    
    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsTyping(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot', {
        message: userMsg, 
        context: { soil: 'Low Nitrogen', rain: 'Expected in 2 days' }
      });
      setMessages(prev => [...prev, { role: 'ai', text: res.data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: 'Connection to AI server lost. Fallback: Based on soil block A, apply Vermicompost.' }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#4ADE80] to-[#14532D] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)] z-50 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-[#071508]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] glass-card z-50 flex flex-col overflow-hidden border border-[#4ADE80]/30 shadow-2xl"
          >
            <div className="bg-gradient-to-r from-[#14532D] to-[#071508] p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                <Leaf className="w-4 h-4 text-[#4ADE80]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">AgriVeda Expert AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
                  <p className="text-[#4ADE80] text-xs">Online</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-white/5 border border-white/10 text-white/90 self-start rounded-tl-sm' : 'bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-[#071508] font-medium self-end rounded-tr-sm shadow-[0_5px_15px_rgba(74,222,128,0.2)]'}`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                 <div className="bg-white/5 border border-white/10 text-[#4ADE80] text-xs self-start px-4 py-2 rounded-2xl rounded-tl-sm animate-pulse flex items-center gap-1">
                   Thinking<span className="animate-bounce">.</span><span className="animate-bounce delay-75">.</span><span className="animate-bounce delay-150">.</span>
                 </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/40 flex gap-2 backdrop-blur-md">
              <input 
                type="text" 
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Ask about fertilizer, weather..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function DashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [weatherData, setWeatherData] = useState(null)
  
  useEffect(() => {
    // Fetch real localized weather mock from our Node backend
    axios.get('http://localhost:5000/api/weather/forecast?lat=19&lon=77')
      .then(res => setWeatherData(res.data.current))
      .catch(err => console.error("Weather fetch failed", err))
  }, [])

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: Database, label: 'Soil Health', active: false },
    { icon: CloudRain, label: 'Weather AI', active: false },
    { icon: TreePine, label: 'Carbon Credits', active: false },
    { icon: ShoppingBag, label: 'Marketplace', active: false },
  ]

  return (
    <div className="min-h-screen flex bg-[#030a04] overflow-hidden">
      
      {!sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={() => setSidebarOpen(true)} />
      )}

      <motion.aside 
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="w-64 fixed lg:static inset-y-0 left-0 bg-[#071508] border-r border-white/5 flex flex-col z-50 transition-all duration-300"
      >
        <div className="p-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#14532D] flex items-center justify-center shadow-lg shadow-[#4ADE80]/20 group-hover:shadow-[#4ADE80]/40 transition-all">
              <Leaf className="w-4 h-4 text-[#071508]" />
            </div>
            <span className="text-xl font-bold font-['Outfit'] text-white">Agri<span className="text-[#4ADE80]">Veda</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item, i) => (
            <motion.button 
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${item.active ? 'bg-gradient-to-r from-[#4ADE80]/10 to-transparent text-[#4ADE80] font-medium border-l-2 border-[#4ADE80]' : 'text-white/50 hover:bg-white/5 hover:text-white border-l-2 border-transparent'}`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-[#4ADE80]' : ''}`} />
              {item.label}
            </motion.button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400/80 hover:bg-red-400/10 hover:text-red-400 transition-all">
            <LogOut className="w-5 h-5" /> Sign Out
          </Link>
        </div>
      </motion.aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')]">
        
        <header className="h-20 bg-[#071508]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-white/70">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex relative w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#4ADE80] transition-colors" />
              <input type="text" placeholder="Search farms, crops, alerts..." className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#4ADE80]/50 focus:bg-white/10 transition-all shadow-inner" />
            </div>
          </div>

          <div className="flex items-center gap-5">
             <div className="hidden sm:flex text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/70 items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
               EN <ChevronDown className="w-3 h-3" />
             </div>
             <button className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
               <Bell className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse" />
             </button>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-[#14532D] flex items-center justify-center overflow-hidden border-2 border-[#4ADE80]/30 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <User className="w-5 h-5 text-white" />
             </div>
          </div>
        </header>

        <ScrollArea>
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4"
           >
             <div>
               <h1 className="text-3xl font-semibold text-white font-['Outfit']">Farm Overview</h1>
               <p className="text-white/40 mt-1 font-light text-sm">Hello Ramesh, here's your farm's intelligence brief for today.</p>
             </div>
             <button className="bg-white hover:bg-[#4ADE80] text-[#071508] px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:-translate-y-0.5">
               + Add Field Data
             </button>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {[
                { title: 'Avg Soil Health', val: '88', suffix: '/100', sub: 'Optimal condition detected', color: 'text-[#4ADE80]', delay: 0 },
                { title: 'Rain Probability', val: weatherData ? weatherData.rain_probability : '92', suffix: '%', sub: weatherData ? weatherData.weather : 'Starting at 14:00 today', color: 'text-blue-400', delay: 0.1 },
                { title: 'Carbon Revenue', val: '₹7,100', sub: '+14% from last month', color: 'text-emerald-400', delay: 0.2 },
                { title: 'AI Alerts', val: '2 Active', sub: 'Biofertilizer application due', color: 'text-yellow-400', delay: 0.3 },
              ].map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: m.delay }}
                  key={i} 
                  className="glass-card p-5 group"
                >
                  <p className="text-white/50 text-sm font-medium mb-3 tracking-wide">{m.title}</p>
                  <p className={`text-4xl font-semibold font-['Outfit'] mb-2 ${m.color} drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}>
                    {m.val}<span className="text-xl ml-1 opacity-70">{m.suffix}</span>
                  </p>
                  <p className="text-white/40 text-xs font-light">{m.sub}</p>
                </motion.div>
              ))}
           </div>

           <div className="grid lg:grid-cols-3 gap-6 mb-8">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 glass-card p-6 flex flex-col"
              >
                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h2 className="text-white font-semibold font-['Outfit'] text-lg tracking-wide">Carbon Credit Extractor</h2>
                    <p className="text-white/40 text-xs mt-1">Verified earnings strictly from sustainable practices.</p>
                  </div>
                  <select className="bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/80 outline-none focus:border-[#4ADE80]/50 transition-colors cursor-pointer hover:bg-white/5">
                    <option>Year 2026</option>
                  </select>
                </div>
                <div className="flex-1 min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockCarbonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#4ADE80" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}`} dx={-10} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(7, 21, 8, 0.9)', backdropFilter: 'blur(10px)', borderColor: 'rgba(74,222,128,0.3)', borderRadius: '16px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                        itemStyle={{ color: '#4ADE80', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#4ADE80" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" activeDot={{ r: 6, fill: '#4ADE80', stroke: '#071508', strokeWidth: 2 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6 flex flex-col bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] bg-gradient-to-br from-[#14532D]/40 to-transparent"
              >
                 <h2 className="text-white font-semibold font-['Outfit'] text-xl mb-1 tracking-wide">AgriVeda Core</h2>
                 <p className="text-[#4ADE80] text-xs font-semibold mb-6 uppercase tracking-widest">Active Intelligence</p>

                 <div className="flex-1 space-y-4">
                    <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/30 rounded-2xl p-5 hover:bg-[#4ADE80]/20 transition-colors group cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center gap-2 mb-3">
                        <Leaf className="w-5 h-5 text-[#4ADE80]" />
                        <span className="text-[#4ADE80] font-bold text-sm tracking-wide">Biofertilizer Action</span>
                      </div>
                      <p className="text-white/80 text-sm mb-4 leading-relaxed font-light">Apply Rhizobium mix to Field Block B before predicted rainfall to maximize nitrogen fixation.</p>
                      <button className="text-xs bg-[#4ADE80] text-[#071508] px-4 py-2 rounded-xl font-bold transition-all w-full shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                        Mark Complete
                      </button>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 hover:bg-blue-500/20 transition-colors group cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center gap-2 mb-3">
                        <CloudRain className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-400 font-bold text-sm tracking-wide">Irrigation Alert</span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed font-light mb-1">Skip scheduled irrigation for Field A today.</p>
                      <p className="text-blue-400/80 text-xs">Soil moisture is optimal.</p>
                    </div>
                 </div>
              </motion.div>

           </div>

        </ScrollArea>
      </main>

      <AIChatAssistant />
    </div>
  )
}

function ScrollArea({ children }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
       <div className="max-w-7xl mx-auto pb-20">
         {children}
       </div>
    </div>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, Search, Menu, Leaf, LayoutDashboard, Database, CloudRain, 
  TreePine, ShoppingBag, Settings, LogOut, ChevronDown, User, MessageSquare
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockCarbonData = [
  { month: 'Jan', credits: 120, revenue: 3500 },
  { month: 'Feb', credits: 150, revenue: 4200 },
  { month: 'Mar', credits: 180, revenue: 5100 },
  { month: 'Apr', credits: 160, revenue: 4700 },
  { month: 'May', credits: 210, revenue: 6200 },
  { month: 'Jun', credits: 240, revenue: 7100 },
]

// ----------------------------------------------------
// AI Chat Component
// ----------------------------------------------------
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
      // Connect to local Express server API for Gemini AI
      const res = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, context: { soil: 'Low Nitrogen', rain: 'Expected in 2 days' } })
      });
      const data = await res.json();
      
      setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: 'Connection to AI server lost. Using fallback logic: Based on soil block A, apply Vermicompost.' }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#4ADE80] to-[#14532D] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)] z-50 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-[#071508]" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] glass-card z-50 flex flex-col overflow-hidden border border-[#4ADE80]/30 shadow-2xl"
          >
            <div className="bg-[#14532D]/80 p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#4ADE80]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">AgriVeda Expert AI</p>
                <p className="text-[#4ADE80] text-xs">Online • Gemini Powered</p>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'ai' ? 'bg-white/10 text-white/90 self-start rounded-tl-sm' : 'bg-[#4ADE80] text-[#071508] font-medium self-end rounded-tr-sm'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                 <div className="bg-white/5 text-white/50 text-xs self-start p-3 rounded-2xl rounded-tl-sm animate-pulse">
                   Thinking...
                 </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20 flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Ask about fertilizer, weather..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#4ADE80]/50"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


// ----------------------------------------------------
// Main Dashboard Layout
// ----------------------------------------------------
export default function DashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: Database, label: 'Soil Health', active: false },
    { icon: CloudRain, label: 'Weather AI', active: false },
    { icon: TreePine, label: 'Carbon Credits', active: false },
    { icon: ShoppingBag, label: 'Marketplace', active: false },
  ]

  return (
    <div className="min-h-screen flex bg-[#030a04] overflow-hidden">
      
      {/* Sidebar Overlay for Mobile */}
      {!sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(true)} />
      )}

      {/* Sidebar */}
      <motion.aside 
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="w-64 fixed lg:static inset-y-0 left-0 bg-[#071508] border-r border-white/5 flex flex-col z-50 transition-all duration-300"
      >
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#14532D] flex items-center justify-center">
              <Leaf className="w-4 h-4 text-[#071508]" />
            </div>
            <span className="text-xl font-bold font-['Outfit'] text-white">Agri<span className="text-[#4ADE80]">Veda</span></span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-[#4ADE80]/10 text-[#4ADE80] font-medium' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-white transition-all">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-[#071508]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-white/70">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search farms, crops, alerts..." className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#4ADE80]/50" />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/70 items-center gap-2 cursor-pointer">
               EN <ChevronDown className="w-3 h-3" />
             </div>
             <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center relative hover:bg-white/10 transition-colors">
               <Bell className="w-5 h-5 text-white/70" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
             </button>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-[#4ADE80]/30 shadow-lg cursor-pointer">
                <User className="w-5 h-5 text-white" />
             </div>
          </div>
        </header>

        {/* Dashboard Scrollable Area */}
        <ScrollArea>
           
           <div className="flex justify-between items-end mb-8">
             <div>
               <h1 className="text-3xl font-semibold text-white font-['Outfit']">Farm Overview</h1>
               <p className="text-white/40 mt-1">Hello Ramesh, here's your farm's intelligence brief for today.</p>
             </div>
             <button className="bg-[#4ADE80] text-[#071508] px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#22C55E] transition-colors shadow-[0_0_20px_rgba(74,222,128,0.2)]">
               + Add Field Data
             </button>
           </div>

           {/* Metrics Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {[
                { title: 'Avg Soil Health', val: '88/100', sub: 'Optimal condition', color: 'text-[#4ADE80]' },
                { title: 'Rain Probability', val: '92%', sub: 'Starting at 14:00 today', color: 'text-blue-400' },
                { title: 'Carbon Revenue', val: '₹7,100', sub: '+14% from last month', color: 'text-emerald-400' },
                { title: 'AI Alerts', val: '2 Active', sub: 'Biofertilizer application due', color: 'text-yellow-400' },
              ].map((m, i) => (
                <div key={i} className="glass-card p-5">
                  <p className="text-white/50 text-sm font-medium mb-2">{m.title}</p>
                  <p className={`text-3xl font-semibold font-['Outfit'] mb-1 ${m.color}`}>{m.val}</p>
                  <p className="text-white/30 text-xs">{m.sub}</p>
                </div>
              ))}
           </div>

           {/* Main Content Area */}
           <div className="grid lg:grid-cols-3 gap-6 mb-8">
              
              {/* Carbon Credits Chart */}
              <div className="lg:col-span-2 glass-card p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white font-semibold font-['Outfit'] text-lg">Carbon Credit Extractor</h2>
                  <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-white/70 outline-none">
                    <option>Year 2026</option>
                  </select>
                </div>
                <div className="flex-1 min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockCarbonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4ADE80" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}`} />
                      <Tooltip contentStyle={{ backgroundColor: '#071508', borderColor: 'rgba(74,222,128,0.3)', borderRadius: '12px' }} />
                      <Area type="monotone" dataKey="revenue" stroke="#4ADE80" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* AI Recommendation Widget */}
              <div className="glass-card p-6 flex flex-col bg-gradient-to-br from-[#14532D]/30 to-transparent">
                 <h2 className="text-white font-semibold font-['Outfit'] text-lg mb-2">AgriVeda Engine</h2>
                 <p className="text-white/40 text-sm mb-6">Critical interventions for today.</p>

                 <div className="flex-1 space-y-4">
                    <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-4 h-4 text-[#4ADE80]" />
                        <span className="text-[#4ADE80] font-semibold text-sm">Biofertilizer Action</span>
                      </div>
                      <p className="text-white/80 text-sm mb-3">Apply Rhizobium mix to Field Block B before predicted rainfall to maximize nitrogen fixation.</p>
                      <button className="text-xs bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1.5 rounded-lg font-medium hover:bg-[#4ADE80]/30 transition-colors w-full">
                        Mark Complete
                      </button>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CloudRain className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm">Irrigation Alert</span>
                      </div>
                      <p className="text-white/80 text-sm">Skip scheduled irrigation for Field A today. Soil moisture is sufficient and rain is expected.</p>
                    </div>
                 </div>
              </div>

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
       <div className="max-w-7xl mx-auto">
         {children}
       </div>
    </div>
  )
}

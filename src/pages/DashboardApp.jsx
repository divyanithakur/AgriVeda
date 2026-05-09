import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, Search, Menu, Leaf, LayoutDashboard, Database, CloudRain, 
  TreePine, ShoppingBag, Settings, LogOut, ChevronDown, User, MessageSquare, Loader2
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

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = (lat = 19, lon = 77) => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/weather/forecast?lat=${lat}&lon=${lon}`)
      .then(res => {
        setWeather(res.data.current);
        setLoading(false);
      })
      .catch(err => {
        setError("Weather data unavailable. Try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => {
          // If denied, fallback to manual or default
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return (
    <div className="glass-card p-5 animate-pulse bg-green-bg/20">
      <div className="h-4 w-24 bg-dark-text/10 rounded mb-4"></div>
      <div className="h-8 w-16 bg-dark-text/20 rounded mb-2"></div>
      <div className="h-3 w-32 bg-dark-text/10 rounded"></div>
    </div>
  );

  if (error || !weather) return (
    <div className="glass-card p-5 border-red-200 bg-red-50">
      <p className="text-red-500 text-sm font-medium mb-3">{error || "Location Access Denied"}</p>
      <input 
        type="text" 
        placeholder="Enter City..." 
        className="w-full bg-white border border-red-100 rounded-lg px-3 py-1.5 text-xs text-dark-text"
        onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
      />
    </div>
  );

  return (
    <div className="glass-card p-5 group bg-white border-blue-100">
      <p className="text-dark-text/50 text-sm font-semibold mb-3 tracking-wide uppercase">Rain Probability</p>
      <p className="text-4xl font-black font-display mb-2 text-blue-600 drop-shadow-sm">
        {weather.rain_probability}<span className="text-xl ml-1 opacity-70">%</span>
      </p>
      <p className="text-dark-text/40 text-xs font-medium uppercase tracking-wider">{weather.weather}</p>
    </div>
  );
}

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
        className="fixed bottom-6 right-6 w-14 h-14 bg-terracotta rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-white z-50 flex flex-col overflow-hidden border border-dark-text/10 shadow-2xl rounded-2xl"
          >
            <div className="bg-primary-green p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <p className="text-white font-bold text-sm">AgriVeda Expert AI</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-cream/30">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-white border border-dark-text/5 text-dark-text self-start rounded-tl-none' : 'bg-primary-green text-white font-medium self-end rounded-tr-none'}`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                 <div className="bg-white border border-dark-text/5 text-primary-green text-xs self-start px-4 py-2 rounded-2xl animate-pulse">
                   Thinking...
                 </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-dark-text/5 bg-white flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Ask about fertilizer, weather..." 
                className="flex-1 bg-green-bg border border-dark-text/10 rounded-full px-4 py-2 text-sm text-dark-text focus:outline-none focus:border-primary-green/50 transition-colors"
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

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: Database, label: 'Soil Health', active: false },
    { icon: CloudRain, label: 'Weather AI', active: false },
    { icon: TreePine, label: 'Carbon Credits', active: false },
    { icon: ShoppingBag, label: 'Marketplace', active: false },
  ]

  return (
    <div className="min-h-screen flex bg-cream overflow-hidden">
      
      <motion.aside 
        animate={{ x: sidebarOpen ? 0 : -260 }}
        className="w-64 fixed lg:static flex flex-col bg-white border-r border-dark-text/5 z-50"
      >
        <div className="p-6 border-b border-dark-text/5">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary-green flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-dark-text">Agri<span className="text-primary-green">Veda</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-green-bg text-primary-green font-bold shadow-sm' : 'text-dark-text/50 hover:bg-cream hover:text-dark-text'}`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-dark-text/5 space-y-1">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-terracotta hover:bg-terracotta/5 font-semibold">
            <LogOut className="w-5 h-5" /> Sign Out
          </Link>
        </div>
      </motion.aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-dark-text/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-dark-text">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-text/30" />
              <input type="text" placeholder="Search..." className="w-full bg-green-bg border border-dark-text/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary-green/50" />
            </div>
          </div>

          <div className="flex items-center gap-5">
             <div className="w-10 h-10 rounded-full bg-green-bg flex items-center justify-center border border-dark-text/5">
                <User className="w-5 h-5 text-primary-green" />
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
           <div className="max-w-7xl mx-auto pb-20">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
                <div>
                  <h1 className="text-3xl font-black text-dark-text font-display">Farm Overview</h1>
                  <p className="text-dark-text/50 mt-1 font-medium text-sm">Hello Ramesh, your farm is looking healthy today.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                  <div className="glass-card p-5 bg-white">
                    <p className="text-dark-text/50 text-sm font-semibold mb-3 tracking-wide uppercase">Soil Health</p>
                    <p className="text-4xl font-black font-display mb-2 text-primary-green">88<span className="text-xl ml-1 opacity-70">/100</span></p>
                    <p className="text-dark-text/40 text-xs font-medium">OPTIMAL CONDITION</p>
                  </div>
                  <WeatherWidget />
                  <div className="glass-card p-5 bg-white">
                    <p className="text-dark-text/50 text-sm font-semibold mb-3 tracking-wide uppercase">Carbon Earnings</p>
                    <p className="text-4xl font-black font-display mb-2 text-amber">₹7,100</p>
                    <p className="text-dark-text/40 text-xs font-medium">+14% FROM LAST MONTH</p>
                  </div>
                  <div className="glass-card p-5 bg-white border-amber/20">
                    <p className="text-dark-text/50 text-sm font-semibold mb-3 tracking-wide uppercase">AI Alerts</p>
                    <p className="text-4xl font-black font-display mb-2 text-terracotta">2 Active</p>
                    <p className="text-dark-text/40 text-xs font-medium">ACTION REQUIRED</p>
                  </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                 <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-dark-text/5 shadow-sm">
                    <h2 className="text-dark-text font-black font-display text-xl mb-6 border-b border-dark-text/5 pb-4 uppercase tracking-wider">Carbon Revenue History</h2>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockCarbonData}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1A5C38" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#1A5C38" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                          <XAxis dataKey="month" stroke="#999" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="#999" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}`} />
                          <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                          <Area type="monotone" dataKey="revenue" stroke="#1A5C38" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                 </div>

                 <div className="bg-white rounded-3xl p-6 border border-dark-text/5 shadow-sm">
                    <h2 className="text-dark-text font-black font-display text-xl mb-6 uppercase tracking-wider">Recommended Actions</h2>
                    <div className="space-y-4">
                       <div className="bg-green-bg p-5 rounded-2xl border border-primary-green/10">
                          <p className="text-primary-green font-black text-xs uppercase mb-2">Sustainable Boost</p>
                          <p className="text-dark-text font-medium text-sm mb-4">Apply bio-decomposer to Block B stubble to earn 15% more carbon credits.</p>
                          <button className="cta-button py-2 w-full text-xs">Execute Action</button>
                       </div>
                       <div className="bg-red-50 p-5 rounded-2xl border border-terracotta/10">
                          <p className="text-terracotta font-black text-xs uppercase mb-2">Weather Alert</p>
                          <p className="text-dark-text font-medium text-sm">Suspend irrigation. 90% rain probability detected within 12 hours.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <AIChatAssistant />
    </div>
  )
}

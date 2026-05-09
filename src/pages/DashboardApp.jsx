import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, Search, Menu, Leaf, LayoutDashboard, Database, CloudRain, 
  TreePine, ShoppingBag, LogOut, User, MessageSquare, Loader2, MapPin
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import axios from 'axios'
import { Link } from 'react-router-dom'

const yieldData = [
  { year: '2019', yield: 3.2, revenue: 18000 },
  { year: '2020', yield: 3.8, revenue: 22000 },
  { year: '2021', yield: 4.1, revenue: 26000 },
  { year: '2022', yield: 5.0, revenue: 31000 },
  { year: '2023', yield: 6.4, revenue: 38000 },
  { year: '2024', yield: 5.8, revenue: 35000 },
  { year: '2025', yield: 6.9, revenue: 42000 },
  { year: '2026', yield: 7.5, revenue: 48000 },
];

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

  const mockWeather = {
    city: 'Nagpur, Maharashtra',
    temp: 34,
    feels_like: 37,
    humidity: 62,
    wind: 12,
    condition: 'Partly Cloudy',
    icon: '⛅',
    forecast: [
      { day: 'Tomorrow', icon: '🌧️', high: 32, low: 26, rain: '80%' },
      { day: 'Wed', icon: '⛅', high: 35, low: 28, rain: '20%' },
      { day: 'Thu', icon: '☀️', high: 38, low: 29, rain: '5%' },
    ]
  };

  useEffect(() => {
    // Simulate auto-detection
    const timer = setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 1000);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {}, // Success just silences for now since we use mock for demo
        () => {}  // Error hidden
      );
    }
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="glass-card p-5 animate-pulse bg-white border border-dark-text/5 min-h-[160px] flex items-center justify-center">
      <Loader2 className="w-6 h-6 animate-spin text-primary-green/30" />
    </div>
  );

  return (
    <div className="glass-card p-5 bg-white border border-blue-50 relative overflow-hidden group transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
           <div className="flex items-center gap-1.5 text-dark-text/50 text-[10px] font-bold uppercase tracking-widest mb-1">
             <MapPin className="w-3 h-3" /> {weather.city}
           </div>
           <div className="text-4xl font-black text-amber font-display">{weather.temp}°</div>
        </div>
        <div className="text-4xl">{weather.icon}</div>
      </div>

      <div className="flex gap-4 mb-5 pb-4 border-b border-dark-text/5">
        <div className="flex flex-col">
          <span className="text-[10px] text-dark-text/40 font-bold uppercase">Humidity</span>
          <span className="text-sm font-bold text-dark-text">{weather.humidity}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-dark-text/40 font-bold uppercase">Wind</span>
          <span className="text-sm font-bold text-dark-text">{weather.wind} km/h</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2">
        {weather.forecast.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-green-bg/30 p-2 rounded-xl flex-1">
            <span className="text-[9px] font-bold text-dark-text/50 uppercase mb-1">{f.day}</span>
            <span className="text-lg mb-1">{f.icon}</span>
            <span className="text-[10px] font-bold text-primary-green">{f.high}°</span>
          </div>
        ))}
      </div>

      {weather.forecast[0].rain === '80%' && (
        <div className="mt-4 bg-red-50 p-2.5 rounded-xl border border-red-100 flex items-center gap-2 animate-pulse">
           <span className="text-red-500 text-xs font-black">⚠️ Heavy rain — suspend irrigation</span>
        </div>
      )}
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

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'Based on soil block A, apply Vermicompost to restore Nitrogen levels before the next rain cycle.' }]);
      setIsTyping(false);
    }, 1000);
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

  const statCards = [
    {
      label: 'SOIL HEALTH',
      value: '88/100',
      sub: 'OPTIMAL CONDITION',
      color: '#1A5C38',
      icon: '🌱'
    },
    {
      label: 'ACTIVE CROPS',
      value: '3',
      sub: 'WHEAT · SOYBEAN · COTTON',
      color: '#2E7D52',
      icon: '🌾'
    },
    {
      label: 'CARBON EARNINGS',
      value: '₹7,100',
      sub: '+14% FROM LAST MONTH',
      color: '#F5A623',
      icon: '💰'
    },
    {
      label: 'AI ALERTS',
      value: '2 Active',
      sub: 'ACTION REQUIRED',
      color: '#C8520A',
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen flex bg-cream overflow-hidden">
      
      <motion.aside 
        animate={{ x: sidebarOpen ? 0 : -260 }}
        className="w-64 fixed lg:static flex flex-col bg-white border-r border-dark-text/5 z-50 transition-all"
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
                  {statCards.map((card, i) => (
                    i === 1 ? <WeatherWidget key="weather" /> : (
                      <div key={card.label} className="glass-card p-5 bg-white border border-dark-text/5 transition-all hover:shadow-lg">
                        <div className="flex justify-between items-start mb-3">
                          <p className="text-dark-text/50 text-[10px] font-bold tracking-widest uppercase">{card.label}</p>
                          <span className="text-xl">{card.icon}</span>
                        </div>
                        <p className="text-4xl font-black font-display mb-2" style={{ color: card.color }}>{card.value}</p>
                        <p className="text-dark-text/40 text-[10px] font-bold uppercase">{card.sub}</p>
                      </div>
                    )
                  ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                 <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 border border-dark-text/5 shadow-sm">
                    <div className="flex justify-between items-center mb-10 border-b border-dark-text/5 pb-6">
                      <div>
                        <h2 className="text-dark-text font-black font-display text-xl uppercase tracking-wider">Yield Projection vs Carbon Earnings</h2>
                        <p className="text-xs text-dark-text/40 font-medium mt-1">Verified historical data and predictive AI modeling.</p>
                      </div>
                    </div>
                    <div className="h-[320px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={yieldData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                          <XAxis dataKey="year" tick={{ fill: '#5C4033', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis yAxisId="left" tick={{ fill: '#1A5C38', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#F5A623', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ background:'#fff', border:'none', borderRadius:'12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                          />
                          <Legend wrapperStyle={{ paddingTop: '20px' }} />
                          <Line yAxisId="left" type="monotone" dataKey="yield" 
                                stroke="#1A5C38" strokeWidth={4} dot={{ fill: '#1A5C38', r: 5, strokeWidth: 2, stroke: '#fff' }}
                                name="Yield Size (t/ha)" />
                          <Line yAxisId="right" type="monotone" dataKey="revenue" 
                                stroke="#F5A623" strokeWidth={4} dot={{ fill: '#F5A623', r: 5, strokeWidth: 2, stroke: '#fff' }}
                                name="Carbon Revenue (₹)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                 </div>

                 <div className="bg-white rounded-3xl p-6 border border-dark-text/5 shadow-sm flex flex-col">
                    <h2 className="text-dark-text font-black font-display text-xl mb-6 uppercase tracking-wider">Carbon Revenue History</h2>
                    <div className="h-[200px] mb-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockCarbonData}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1A5C38" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#1A5C38" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                          <XAxis dataKey="month" stroke="#999" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                          <Area type="monotone" dataKey="revenue" stroke="#1A5C38" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-auto space-y-4">
                       <h3 className="text-xs font-bold text-dark-text/30 uppercase tracking-widest border-b border-dark-text/5 pb-2">Recommended Actions</h3>
                       <div className="bg-green-bg p-4 rounded-2xl border border-primary-green/10">
                          <p className="text-primary-green font-black text-[10px] uppercase mb-1">Sustainable Boost</p>
                          <p className="text-dark-text font-medium text-xs mb-3">Apply bio-decomposer to earn 15% more credits.</p>
                          <button className="bg-primary-green text-white text-[10px] font-bold py-2 w-full rounded-lg hover:bg-mid-green transition-colors">Execute Action</button>
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

function AreaChart({ data, children }) {
  const { AreaChart: RechartsAreaChart } = require('recharts');
  return <RechartsAreaChart data={data}>{children}</RechartsAreaChart>;
}

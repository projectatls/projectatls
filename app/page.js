'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, name: "Make.com Automation Suite", category: "Automation", curator: "WorkflowMaster", views: "14.2k clicks", status: "TRENDING", bgGradient: "from-indigo-600 via-purple-700 to-pink-500", featured: true },
  { id: 2, name: "v0.dev Frontend Engine", category: "Development", curator: "VercelDev", views: "38.5k clicks", status: "HOT", bgGradient: "from-neutral-900 via-neutral-800 to-zinc-700", featured: false },
  { id: 3, name: "Clay.com Data Enrichment", category: "Lead Gen", curator: "GrowthHacker", views: "9.1k clicks", status: "POPULAR", bgGradient: "from-emerald-600 via-teal-700 to-cyan-500", featured: true },
  { id: 4, name: "Supabase Relational Postgres", category: "Database", curator: "DB_Architect", views: "22.4k clicks", status: "STABLE", bgGradient: "from-cyan-900 via-blue-950 to-slate-900", featured: false },
  { id: 5, name: "Cursor AI Programmatic IDE", category: "Development", curator: "CodeAgent", views: "51.3k clicks", status: "META", bgGradient: "from-amber-600 via-orange-700 to-red-600", featured: false },
  { id: 6, name: "Phantombuster Cloud Agents", category: "Lead Gen", curator: "PhantomScrape", views: "11.1k clicks", status: "ACTIVE", bgGradient: "from-fuchsia-600 via-pink-700 to-rose-600", featured: false },
];

const CATEGORIES = ["All Items", "Automation", "Development", "Lead Gen", "Database"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Items');

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Items' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f0f2f5] font-sans antialiased flex flex-col selection:bg-purple-500/30">
      
      {/* SPOTIFY STYLE STICKY HEADER */}
      <nav className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md h-16 flex items-center justify-between px-6 border-b border-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]"></div>
          <span className="text-sm font-black tracking-widest text-white font-mono">
            PROJECT_ATLAS // <span className="text-purple-400 font-bold">SHOP</span>
          </span>
        </div>

        {/* CONSUMER SEARCH BAR */}
        <div className="flex flex-1 max-w-md mx-6">
          <div className="flex w-full bg-[#161822] border border-white/[0.05] rounded-full px-4 py-2 focus-within:border-purple-500/50 transition-all">
            <input
              type="text"
              placeholder="What stack are you looking for today?..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>
        </div>

        {/* FORTNITE SHOP PREMIUM SLOT CALL-TO-ACTION */}
        <div>
          <button 
            onClick={() => alert('Opening Secure Sponsorship Vault...')}
            className="relative px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase text-white overflow-hidden group bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">+ Submit Your Tool ($15)</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </nav>

      {/* SHOP MAIN LAYOUT CONTAINER */}
      <div className="flex flex-1">
        
        {/* LEFTSIDE MINI NAVIGATION BAR */}
        <aside className="w-60 bg-[#0b0c10] p-4 hidden lg:flex flex-col gap-1 border-r border-white/[0.02] text-sm">
          <div className="text-neutral-500 font-bold text-[10px] px-3 uppercase tracking-widest mb-3">Discover</div>
          <div className="bg-white/[0.04] text-white px-3 py-2 rounded-xl font-bold cursor-pointer transition-all border border-white/[0.05]">✨ Featured Offers</div>
          <div className="text-neutral-400 px-3 py-2 rounded-xl hover:bg-white/[0.02] cursor-pointer transition-colors mt-1">🚀 Highly Voted</div>
          <div className="text-neutral-400 px-3 py-2 rounded-xl hover:bg-white/[0.02] cursor-pointer transition-colors mt-1">🕒 Vault Archives</div>
        </aside>

        {/* CONTENT ROW */}
        <main className="flex-1 p-6 md:p-8 bg-gradient-to-b from-[#111219] to-[#0b0c10]">
          
          {/* HORIZONTAL CAPSULE PILLS (Fortnite / Spotify Tag Matrix) */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/[0.04]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat 
                    ? 'bg-white text-black scale-105 shadow-md shadow-white/10' 
                    : 'bg-[#1c1e27] text-neutral-300 hover:bg-[#282a36] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* EYE-POPPING MARKETPLACE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <div 
                key={item.id} 
                className={`group relative bg-[#151722] rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  item.featured 
                    ? 'border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/50' 
                    : 'border-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                
                {/* HIGH-IMPACT THUMBNAIL DISPLAY CARD CONTAINER */}
                <div className={`w-full aspect-[16/10] bg-gradient-to-br ${item.bgGradient} flex flex-col justify-between p-4 relative overflow-hidden group-hover:brightness-110 transition-all`}>
                  
                  {/* CARD TOP DECORATORS */}
                  <div className="flex justify-between items-center z-10">
                    <span className="bg-black/60 backdrop-blur-md text-[10px] text-white font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/[0.1]">
                      {item.status}
                    </span>
                    {item.featured && (
                      <span className="bg-yellow-400 text-black text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded shadow-md animate-pulse">
                        EPIC OFFER
                      </span>
                    )}
                  </div>

                  {/* VISUAL CENTER BANNER TEXT */}
                  <div className="z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
                    <h2 className="text-white text-xl font-black uppercase tracking-tighter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                      {item.category}
                    </h2>
                    <span className="text-[10px] text-white/70 font-mono tracking-widest uppercase block mt-1">
                      [ NODE_ACTIVE_STK ]
                    </span>
                  </div>

                  {/* BOTTOM DECORATOR BLOCK */}
                  <div className="z-10 flex justify-between items-center font-mono text-[10px] text-white/90 drop-shadow-sm">
                    <span>⚡ INITIALIZE</span>
                    <span>v2.44</span>
                  </div>

                  {/* Card overlay shine filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* USER-FRIENDLY METADATA BLOCK */}
                <div className="p-4 flex gap-3 items-start bg-[#151722]">
                  
                  {/* Dynamic Circular Creator Profile Initial Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#202334] border border-white/[0.08] flex items-center justify-center font-black text-sm text-purple-400 shrink-0 shadow-inner">
                    {item.curator.charAt(0)}
                  </div>
                  
                  {/* Primary text descriptions */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <h3 className="text-sm font-black text-white tracking-tight truncate group-hover:text-purple-400 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-medium">
                      by <span className="text-neutral-300 underline decoration-purple-500/50 hover:text-white transition-colors cursor-pointer">{item.curator}</span>
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/[0.03] text-[11px] text-neutral-500 font-mono">
                      <span>👁️ {item.views}</span>
                      <span className="text-purple-400 font-bold uppercase tracking-wider text-[10px]">Inspect ➔</span>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}

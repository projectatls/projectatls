'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, name: "Make.com Workflow Node", category: "Automation", developer: "Integromat Enterprise", badge: "Core Engine", cost: "Freemium", sync: "API V2 Syncing", glow: "from-blue-500/20 to-indigo-500/10", border: "group-hover:border-blue-500/50", featured: true },
  { id: 2, name: "v0.dev Component Generator", category: "Development", developer: "Vercel Labs Inc.", badge: "AI Infrastructure", cost: "Free Tier", sync: "Edge Network Deployment", glow: "from-purple-500/20 to-pink-500/10", border: "group-hover:border-purple-500/50", featured: false },
  { id: 3, name: "Clay.com Data Enrichment Pipeline", category: "Lead Gen", developer: "Growth Metrics LLC", badge: "Data Proxy", cost: "Paid Scale", sync: "REST Realtime Data", glow: "from-emerald-500/20 to-teal-500/10", border: "group-hover:border-emerald-500/50", featured: true },
  { id: 4, name: "Supabase Relational Database", category: "Database", developer: "OSS Architecture", badge: "Postgres Cluster", cost: "Open Source", sync: "SSL Multi-Region Sync", glow: "from-cyan-500/20 to-blue-500/10", border: "group-hover:border-cyan-500/50", featured: false },
  { id: 5, name: "Cursor AI Integrated Environment", category: "Development", developer: "Anysphere Global", badge: "IDE Subsystem", cost: "Usage Based", sync: "Local Vector Context", glow: "from-orange-500/20 to-red-500/10", border: "group-hover:border-orange-500/50", featured: false },
  { id: 6, name: "Phantombuster Cloud Automation", category: "Lead Gen", developer: "Phantom Systems", badge: "Browser Agent", cost: "Free Trial", sync: "Scheduled Cloud Cron", glow: "from-fuchsia-500/20 to-pink-500/10", border: "group-hover:border-fuchsia-500/50", featured: false },
];

const CATEGORIES = ["All Nodes", "Automation", "Development", "Lead Gen", "Database"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Nodes');

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Nodes' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#e2e8f0] font-sans antialiased flex flex-col selection:bg-blue-500/30">
      
      {/* ENTERPRISE TOP HEADER BAR */}
      <nav className="sticky top-0 z-50 bg-[#090a0f]/80 backdrop-blur-md border-b border-slate-800/60 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-sm font-bold tracking-widest text-white uppercase font-mono">
            PROJECT_ATLAS // <span className="text-slate-400 font-normal">NODE_DIR</span>
          </span>
        </div>

        {/* CLEAN MINIMALIST SEARCH ARCHITECTURE */}
        <div className="flex flex-1 max-w-lg mx-8">
          <div className="flex w-full bg-[#11131e] border border-slate-800 rounded-lg px-4 py-2 focus-within:border-blue-500/70 transition-all shadow-inner">
            <input
              type="text"
              placeholder="Filter infrastructure matrix by keyword or environment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-200 placeholder-slate-500 focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* MONETIZATION HOOK */}
        <div>
          <button 
            onClick={() => alert('Sponsorship portal loading secure Stripe checkout...')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4 py-2 rounded-md font-mono transition-all border border-blue-400/30 shadow-lg shadow-blue-600/20 active:scale-95"
          >
            + Deploy Premium Slot ($15)
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        
        {/* PERSISTENT B2B UTILITY SIDEBAR */}
        <aside className="w-64 bg-[#090a0f] p-4 hidden lg:flex flex-col gap-1 border-r border-slate-900 font-mono text-xs">
          <div className="text-slate-500 font-semibold px-3 uppercase tracking-wider mb-2">Navigation Matrix</div>
          <div className="bg-slate-800/50 text-blue-400 px-3 py-2.5 rounded-md font-medium cursor-pointer border border-slate-700/30">◇ Active Core Directory</div>
          <div className="text-slate-400 px-3 py-2.5 rounded-md hover:bg-slate-900 cursor-pointer transition-colors">◆ High-Yield Analytics</div>
          <div className="text-slate-400 px-3 py-2.5 rounded-md hover:bg-slate-900 cursor-pointer transition-colors">◆ Global Upstream Status</div>
          
          <div className="mt-auto border-t border-slate-900 pt-4 px-3 flex flex-col gap-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">System Architecture</div>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Edge Proxies Active
            </div>
            <div className="text-slate-500 text-[10px]">Lat: ~12ms // Ver: 4.0.1</div>
          </div>
        </aside>

        {/* MAIN DATA RUNWAY */}
        <main className="flex-1 p-6 md:p-8 bg-[#0b0d14]">
          
          {/* PROFESSIONAL PILL MATRIX FILTERS */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-900 font-mono text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded transition-all tracking-wide ${
                  activeCategory === cat 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/40 font-semibold' 
                    : 'bg-[#11131e] text-slate-400 border border-slate-800/60 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* SAAS DATA CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-[#11131e] border ${item.featured ? 'border-blue-500/40 shadow-md shadow-blue-500/5' : 'border-slate-800/80'} rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${item.border}`}
              >
                {/* Visual Glow Gradient Accent Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* CARD TOPLINE: Badge & Pricing */}
                <div className="flex items-center justify-between z-10 font-mono text-[10px]">
                  <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span className="text-slate-400">{item.cost}</span>
                  </div>
                </div>

                {/* CARD CORE: Tool Info */}
                <div className="z-10 flex flex-col gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 font-mono text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded shrink-0">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Engineered by <span className="text-slate-300 font-semibold">{item.developer}</span>
                  </p>
                </div>

                {/* CARD BOTTOM: Technical Metadata Parameter Fields */}
                <div className="z-10 mt-2 pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    📂 <span className="text-slate-400 group-hover:text-slate-300 transition-colors">{item.category}</span>
                  </span>
                  <span className="text-[10px] bg-black/30 px-2 py-0.5 rounded border border-slate-900">
                    {item.sync}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}

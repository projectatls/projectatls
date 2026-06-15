'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, name: "Make.com Workflow Node", category: "Automation", desc: "Visual automation platform to connect apps and build complex, multi-step cloud workflows without code.", badge: "Core Engine", cost: "Freemium", featured: true },
  { id: 2, name: "v0.dev Component Generator", category: "Development", desc: "Generative UI system by Vercel that converts simple text prompts into production-ready React and Tailwind components.", badge: "AI Infra", cost: "Free Tier", featured: false },
  { id: 3, name: "Clay.com Data Enrichment", category: "Lead Gen", desc: "Maximize outbound scale by combining 50+ data providers into a single, automated spreadsheet pipeline.", badge: "Data Proxy", cost: "Paid Scale", featured: true },
  { id: 4, name: "Supabase Relational Database", category: "Database", desc: "Open-source Postgres suite providing realtime data synchronization, instant REST APIs, and secure authentication channels.", badge: "Postgres", cost: "Open Source", featured: false },
  { id: 5, name: "Cursor AI Code Editor", category: "Development", desc: "An advanced fork of VS Code deeply integrated with context-aware AI agents for rapid codebase engineering.", badge: "IDE Subsystem", cost: "Usage Based", featured: false },
  { id: 6, name: "Phantombuster Cloud Scaler", category: "Lead Gen", desc: "Cloud-based data extraction and automation tools to scrape the web and generate high-yield lead lists on autopilot.", badge: "Browser Agent", cost: "Free Trial", featured: false },
];

const CATEGORIES = ["All Systems", "Automation", "Development", "Lead Gen", "Database"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Systems');
  const [selectedTool, setSelectedTool] = useState(DATASET[0]);

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.category.toLowerCase().includes(search.toLowerCase()) ||
                          item.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Systems' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#050507] text-[#e2e8f0] font-sans antialiased flex flex-col selection:bg-blue-500/30">
      
      {/* COMMAND HEADER */}
      <header className="sticky top-0 z-50 bg-[#050507]/80 backdrop-blur-md border-b border-white/[0.06] h-14 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          <span className="text-xs font-black tracking-[0.2em] text-white font-mono">
            ATLAS<span className="text-blue-500">_MATRIX</span>
          </span>
        </div>

        {/* INTEGRATED SEARCH HUB */}
        <div className="flex flex-1 max-w-xl mx-8">
          <div className="flex w-full bg-white/[0.02] border border-white/[0.08] rounded-full px-4 py-1.5 focus-within:border-blue-500/50 focus-within:bg-white/[0.04] transition-all">
            <input
              type="text"
              placeholder="Type to filter node array instantly..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                // Auto-select first matching item to keep layout filled
                const matches = DATASET.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
                if (matches.length > 0) setSelectedTool(matches[0]);
              }}
              className="w-full bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none font-mono"
            />
          </div>
        </div>

        <div>
          <button 
            onClick={() => alert('Sponsorship terminal initializing secure payment...')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] px-4 py-2 rounded-full font-mono transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95"
          >
            + Feature Your Tool ($15)
          </button>
        </div>
      </header>

      {/* DASHBOARD WORKSPACE */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT COLUMN: NAVIGATION & FILTER RUNWAY */}
        <aside className="w-56 bg-[#050507] p-4 hidden md:flex flex-col gap-1 border-r border-white/[0.04] font-mono text-[11px]">
          <div className="text-slate-500 font-bold px-2 uppercase tracking-widest text-[9px] mb-3">System Filters</div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const matches = DATASET.filter(i => cat === 'All Systems' || i.category === cat);
                if (matches.length > 0) setSelectedTool(matches[0]);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                activeCategory === cat 
                  ? 'bg-white/[0.05] text-blue-400 font-bold border border-white/[0.08]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
              }`}
            >
              {cat === 'All Systems' ? '⊙ ' : '⬡ '} {cat.toUpperCase()}
            </button>
          ))}

          <div className="mt-auto border-t border-white/[0.04] pt-4 px-2 flex flex-col gap-2 text-[10px] text-slate-500">
            <div>NETWORK // EDGE_ACTIVE</div>
            <div>LOAD // STABLE</div>
          </div>
        </aside>

        {/* CENTER COLUMN: HIGH-DENSITY SCAN MATRIX */}
        <main className="flex-1 overflow-y-auto p-6 border-r border-white/[0.04]">
          <div className="flex flex-col gap-2">
            {filteredData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedTool(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedTool.id === item.id
                    ? 'bg-blue-600/[0.04] border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.05)]'
                    : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Status Node Indicator */}
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.featured ? 'bg-blue-400 shadow-[0_0_6px_#60a5fa]' : 'bg-slate-700'}`} />
                  
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white tracking-tight truncate">{item.name}</h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{item.category} • {item.cost}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 font-mono text-[10px]">
                  <span className="bg-white/[0.04] text-slate-400 px-2 py-0.5 rounded border border-white/[0.04]">
                    {item.badge}
                  </span>
                  {item.featured && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-bold tracking-wider text-[9px]">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
            ))}
            {filteredData.length === 0 && (
              <div className="text-center py-12 font-mono text-xs text-slate-500">
                No system nodes matching parameters found.
              </div>
            )}
          </div>
        </main>

        {/* RIGHT COLUMN: TERMINAL CONTROL INSPECTOR (THE HOOK) */}
        <aside className="w-96 bg-[#07070a] p-6 hidden lg:flex flex-col border-l border-white/[0.02] overflow-y-auto">
          {selectedTool ? (
            <div className="flex flex-col h-full gap-5">
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                // System_Inspector_Node_{selectedTool.id}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">{selectedTool.name}</h2>
                </div>
                <span className="inline-block mt-2 text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded">
                  {selectedTool.category.toUpperCase()}
                </span>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4 flex flex-col gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">// Operational Overview</span>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedTool.desc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                <div className="bg-white/[0.01] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Pricing Architecture</span>
                  <span className="text-white font-semibold block mt-0.5">{selectedTool.cost}</span>
                </div>
                <div className="bg-white/[0.01] border border-white/[0.04] p-3 rounded-lg">
                  <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Deploy Tag</span>
                  <span className="text-white font-semibold block mt-0.5">{selectedTool.badge}</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/[0.04]">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert('Routing to partner application node...'); }}
                  className="w-full bg-white hover:bg-slate-200 text-black font-semibold text-xs py-3 rounded-xl block text-center transition-all active:scale-[0.98]"
                >
                  Launch App Instance ↗
                </a>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center font-mono text-xs text-slate-600">
              Select an asset node to initialize telemetry.
            </div>
          )}
        </aside>

      </div>
    </div>
  )
}

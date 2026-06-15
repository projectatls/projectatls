'use client';
import { useState } from 'react';

const DATASET = [
  // SECTION 1: ACTIVE LIVE TERMINAL INSTANCES (MOST VISITED)
  { id: 1, title: "Automated Roof Damage Analysis & Drone Inspection Engine", category: "Property AI", curator: "RoofAI Labs", rating: "5.0", reviews: 1420, price: "$49/mo", badge: "Ready to Run", img: "https://images.unsplash.com/photo-1631651412411-9252329fb44b?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 2, title: "Context-Aware Neural Code Autocomplete & Repository Refactoring", category: "Development", curator: "CursorForge", rating: "4.9", reviews: 3102, price: "$20/mo", badge: "Live Model", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 3, title: "Multi-Source Lead Enrichment Matrix & B2B Pipeline Scraper", category: "Lead Gen", curator: "ClayScale", rating: "5.0", reviews: 984, price: "$149/mo", badge: "Ready to Run", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 4, title: "Autonomous Real Estate Assessment & Commercial Property Valuation", category: "Property AI", curator: "SiteInspect", rating: "4.8", reviews: 755, price: "$89/mo", badge: "Live Model", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60", section: "visited" },

  // SECTION 2: OPEN STANDARDS
  { id: 5, title: "Zero-Cost Next.js React Element Engine & Tailwind Builder", category: "Development", curator: "v0 OpenLabs", rating: "4.9", reviews: 843, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 6, title: "Open-Source Relational Postgres Storage System & Edge Sync", category: "Database", curator: "SupaBase OSS", rating: "4.8", reviews: 612, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 7, title: "No-Code Workflow Node Integration & API Webhook Proxy", category: "Automation", curator: "MakeFree", rating: "4.7", reviews: 219, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60", section: "free" },

  // SECTION 3: DEPLOYABLE STACK PIPELINES
  { id: 8, title: "Full Scale Outbound Engine (Clay Matrix + Make Workflows + Phantom Scraping)", category: "Bundles", curator: "EnterpriseOps", rating: "5.0", reviews: 112, price: "$199/mo bundle", badge: "Deploy Stack", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60", section: "bundle" },
  { id: 9, title: "Complete Dev Environment (Cursor Subsystem + Supabase Cluster + v0 Engine)", category: "Bundles", curator: "DevStack Corp", rating: "4.9", reviews: 94, price: "$35/mo bundle", badge: "Deploy Stack", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60", section: "bundle" },
];

const CATEGORIES = ["All Core Engines", "Property AI", "Development", "Lead Gen", "Database", "Automation", "Orchestrated Bundles"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Core Engines');
  const [funnelStep, setFunnelStep] = useState('closed');
  const [selectedPromo, setSelectedPromo] = useState('standard');
  
  // LIVE TERMIAL BLUEPRINT SIMULATION STATE
  const [activeWorkspaceModel, setActiveWorkspaceModel] = useState('Multi-Source Lead Enrichment Matrix');
  const [terminalLogs, setTerminalLogs] = useState(['[SYSTEM]: Stackerr Unified Layer Ready.', '[SYSTEM]: Ready to initialize environment nodes...']);
  const [isProcessing, setIsProcessing] = useState(false);

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Core Engines' || item.category === activeCategory || (activeCategory === 'Orchestrated Bundles' && item.category === 'Bundles');
    return matchesSearch && matchesCategory;
  });

  const simulateExecution = (modelName) => {
    setActiveWorkspaceModel(modelName);
    setIsProcessing(true);
    setTerminalLogs(prev => [...prev, `[INIT]: Spinning up container matrix for [${modelName}]...`]);
    
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        `[SYNC]: Routing consolidated API throughput safely through Stackerr Middleman Layer...`,
        `[LIVE]: Execution Successful. Data stream compiled flawlessly.`
      ]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#050608] to-[#010102] text-[#e4e6eb] font-sans antialiased flex flex-col pb-32">
      
      {/* BRAND INTERFACE HEADER */}
      <nav className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-lg border-b border-white/[0.04] h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-black tracking-tight text-white select-none cursor-pointer" onClick={() => setActiveCategory('All Core Engines')}>
            stackerr<span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">.</span>
          </span>
          <span className="text-xs text-neutral-400 font-semibold hidden lg:inline-block border-l border-white/[0.08] pl-6 tracking-wide uppercase text-[10px]">
            The Unified Multi-Model Execution Matrix
          </span>
        </div>

        {/* COMPACT SECURE ROUTING SEARCH CONTROL */}
        <div className="flex flex-1 max-w-xl mx-8">
          <div className="flex w-full bg-[#151722] border border-white/[0.05] rounded-full px-5 py-2 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/10 transition-all">
            <input
              type="text"
              placeholder="Search specialized models, or select a pre-packaged multi-AI blueprint..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <span 
            onClick={() => setFunnelStep('login')}
            className="text-xs font-bold text-neutral-400 hover:text-white cursor-pointer transition-colors hidden md:inline-block"
          >
            Developer Access
          </span>
          <button 
            onClick={() => setFunnelStep('login')}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-extrabold text-xs px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_14px_rgba(16,185,129,0.2)]"
          >
            + List Your AI ($15)
          </button>
        </div>
      </nav>

      {/* FILTER CAPSULE STRIP */}
      <div className="bg-[#050608]/80 backdrop-blur-md border-b border-white/[0.02] px-6 py-3 flex gap-3 overflow-x-auto select-none scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
              activeCategory === cat 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-md' 
                : 'bg-[#12141c] text-neutral-400 hover:text-white hover:bg-[#1a1d29]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ACCOUNT & PACKAGING MODAL */}
      {funnelStep !== 'closed' && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f111a] border border-white/[0.06] rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button onClick={() => setFunnelStep('closed')} className="absolute top-4 right-4 text-neutral-400 hover:text-white">✕</button>

            {funnelStep === 'login' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-extrabold text-white tracking-tight">Establish Your AI Node Infrastructure</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">Connect your API clusters directly to the Stackerr operational middleman interface to collect instant usage streams.</p>
                <div className="flex flex-col gap-2.5 mt-2">
                  <input type="email" placeholder="Corporate Developer Email" className="bg-[#171a26] border border-white/[0.05] rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-400" defaultValue="developer@network.ai" />
                  <input type="password" placeholder="Node Key Token" className="bg-[#171a26] border border-white/[0.05] rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-400" defaultValue="••••••••••••" />
                </div>
                <button 
                  onClick={() => setFunnelStep('promote')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold text-xs py-3 rounded-xl mt-2 transition-all"
                >
                  Configure Orchestration Options ➔
                </button>
              </div>
            )}

            {funnelStep === 'promote' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-extrabold text-white tracking-tight">Select Distribution Priority</h3>
                <p className="text-xs text-neutral-400">Configure how aggressively your software stack will compete for client sandbox usage allocations.</p>
                <div className="flex flex-col gap-2.5 mt-1">
                  <div onClick={() => setSelectedPromo('standard')} className={`p-3.5 rounded-xl border cursor-pointer transition-all ${selectedPromo === 'standard' ? 'bg-emerald-500/10 border-emerald-500' : 'bg-[#171a26] border-white/[0.04]'}`}>
                    <div className="flex justify-between font-bold text-xs text-white"><span>Standard Index Listing</span><span className="text-emerald-400">$15 Fix</span></div>
                    <p className="text-[11px] text-neutral-400 mt-1">Maps your raw execution endpoint inside category grids.</p>
                  </div>
                  <div onClick={() => setSelectedPromo('premium')} className={`p-3.5 rounded-xl border cursor-pointer transition-all ${selectedPromo === 'premium' ? 'bg-purple-500/10 border-purple-500' : 'bg-[#171a26] border-white/[0.04]'}`}>
                    <div className="flex justify-between font-bold text-xs text-white"><span>Live Workbench Feature Boost</span><span className="text-purple-400">$39 / mo</span></div>
                    <p className="text-[11px] text-neutral-400 mt-1">Pins your live interface to the top row and directly integrates it into our dynamic workbench console simulator.</p>
                  </div>
                </div>
                <button onClick={() => { alert('Routing securely to unified billing gateway...'); setFunnelStep('closed'); }} className="bg-white text-black font-bold text-xs py-3 rounded-xl mt-2 transition-all hover:bg-neutral-200">
                  Proceed to Secure Checkout ↗
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CORE MARKET MATRIX MAIN LAYOUT CONTAINER */}
      <div className="max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col gap-14">
        
        {/* BANNER PROMPT */}
        <div className="bg-[#10121c] border border-white/[0.04] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
          <div>
            <span className="bg-emerald-400/10 text-emerald-400 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-emerald-400/20">The Vision Alpha</span>
            <h1 className="text-xl font-black text-white tracking-tight mt-2">Why lease individual tools when you can control the entire stack?</h1>
            <p className="text-xs text-neutral-400 mt-1">Stackerr aggregates autonomous nodes. Buy your enterprise bundle, load your keys, and trigger multiple AI workflows instantly from a single secure account dashboard.</p>
          </div>
        </div>

        {/* SECTION 1: LIVE RUNNABLE INSTANCES */}
        { (activeCategory === 'All Core Engines' || activeCategory === 'Property AI' || activeCategory === 'Development' || activeCategory === 'Lead Gen') && (
          <section className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                Most Visited Executable Instances
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">Click "Initialize Sandbox" on any node to load its operational frame into the Stackerr workbench below.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredData.filter(i => i.section === 'visited').map((item) => (
                <RenderCard key={item.id} item={item} onTrigger={() => simulateExecution(item.title)} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: OPEN ACCESSIBLE CORE SYSTEMS */}
        { (activeCategory === 'All Core Engines' || activeCategory === 'Development' || activeCategory === 'Database' || activeCategory === 'Automation') && (
          <section className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                Open Access Sandboxes (Free Tiers)
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">Fully operational open nodes ready to process automated data streams with zero initial usage fees.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredData.filter(i => i.section === 'free').map((item) => (
                <RenderCard key={item.id} item={item} onTrigger={() => simulateExecution(item.title)} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: MULTI-AI INTEGRATION BUNDLES */}
        { (activeCategory === 'All Core Engines' || activeCategory === 'Orchestrated Bundles') && (
          <section className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
                Orchestrated Multi-AI Stack Pipelines
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">The ultimate middleman value proposition. Multiple apps completely bound into a single operational stream with one single billing matrix.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.filter(i => i.section === 'bundle').map((item) => (
                <div key={item.id} className="group bg-[#0e1017] border border-white/[0.04] hover:border-purple-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl">
                  <div className="w-full aspect-video relative overflow-hidden bg-neutral-900">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-black/10 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-purple-600/90 backdrop-blur-md text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/10">
                      Multi-AI Pipe Bundle
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-4 justify-between flex-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors leading-snug cursor-pointer">{item.title}</h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">This stack merges intelligence layers into an unified execution container, running synchronized procedures via our backend core proxy.</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.03] text-xs">
                      <button 
                        onClick={() => simulateExecution(item.title)}
                        className="bg-purple-500 hover:bg-purple-400 text-white font-extrabold text-[10px] uppercase px-3 py-1.5 rounded-lg transition-all"
                      >
                        Deploy Full Stack Node
                      </button>
                      <div className="text-right">
                        <span className="text-white font-extrabold text-sm">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* DYNAMIC WORKBENCH INTERFACE TERMINAL FOOTER BAR */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 bg-[#090a0f]/95 backdrop-blur-md border-t border-white/[0.08] p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0"></div>
          <div className="min-w-0">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Active Layer Container Workspace</span>
            <span className="text-xs font-bold text-white block truncate">{activeWorkspaceModel}</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl w-full bg-black/50 border border-white/[0.05] rounded-lg p-2.5 h-12 overflow-y-auto font-mono text-[10px] text-emerald-400 scrollbar-none flex flex-col gap-0.5">
          {terminalLogs.slice(-2).map((log, index) => (
            <div key={index} className="truncate">{log}</div>
          ))}
        </div>

        <div className="w-full md:w-auto shrink-0 flex gap-2">
          <button 
            disabled={isProcessing}
            onClick={() => alert('Opening Integrated Unified Account Control Panel...')}
            className="w-full md:w-auto bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors"
          >
            Manage Combined Subscriptions
          </button>
        </div>
      </footer>

    </div>
  );
}

// MARKETPLACE REUSABLE CONTAINER CARD SUB-ARCHITECT
function RenderCard({ item, onTrigger }) {
  return (
    <div className="group bg-[#0e1017] border border-white/[0.04] hover:border-white/[0.12] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl">
      
      <div className="w-full aspect-[16/10] relative overflow-hidden bg-neutral-900 shrink-0">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <span className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-sm text-neutral-200 text-[9px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-white/[0.06]">
          {item.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-[10px] font-black text-black">
            {item.curator.charAt(0)}
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-bold text-white hover:underline cursor-pointer">{item.curator}</span>
            <span className="text-[9px] text-emerald-400 font-bold mt-0.5 tracking-wider uppercase">{item.badge}</span>
          </div>
        </div>

        <p className="text-xs text-neutral-200 font-semibold leading-relaxed line-clamp-2 hover:text-emerald-400 transition-colors cursor-pointer">
          {item.title}
        </p>

        <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
          <span>★</span><span>{item.rating}</span><span className="text-neutral-500 font-medium text-[11px]">({item.reviews})</span>
        </div>

        <div className="border-t border-white/[0.03] mt-1 pt-3 flex items-center justify-between text-xs">
          <button 
            onClick={onTrigger}
            className="bg-[#161823] hover:bg-emerald-500 hover:text-black text-neutral-300 font-bold text-[10px] uppercase px-3 py-1.5 rounded-lg border border-white/[0.04] hover:border-transparent transition-all"
          >
            Initialize Sandbox
          </button>
          <div className="text-right">
            <span className="text-emerald-400 font-extrabold text-xs block">{item.price}</span>
          </div>
        </div>

      </div>

    </div>
  );
}

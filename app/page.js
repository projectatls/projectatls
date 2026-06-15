'use client';
import { useState } from 'react';

const DATASET = [
  // SECTION 1: MOST VISITED AI MODELS
  { id: 1, title: "Automated Roof Damage Analysis & Drone Inspection Engine", category: "Property AI", curator: "RoofAI Labs", rating: "5.0", reviews: 1420, price: "$49/mo", badge: "Most Visited", img: "https://images.unsplash.com/photo-1631651412411-9252329fb44b?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 2, title: "Context-Aware Neural Code Autocomplete & Repository Refactoring", category: "Development", curator: "CursorForge", rating: "4.9", reviews: 3102, price: "$20/mo", badge: "Most Visited", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 3, title: "Multi-Source Lead Enrichment Matrix & B2B Pipeline Scraper", category: "Lead Gen", curator: "ClayScale", rating: "5.0", reviews: 984, price: "$149/mo", badge: "Most Visited", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 4, title: "Autonomous Real Estate Assessment & Commercial Property Valuation", category: "Property AI", curator: "SiteInspect", rating: "4.8", reviews: 755, price: "$89/mo", badge: "Most Visited", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60", section: "visited" },

  // SECTION 2: FREE AI ASSETS
  { id: 5, title: "Zero-Cost Next.js React Element Engine & Tailwind Builder", category: "Development", curator: "v0 OpenLabs", rating: "4.9", reviews: 843, price: "FREE", badge: "Free Tier", img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 6, title: "Open-Source Relational Postgres Storage System & Edge Sync", category: "Database", curator: "SupaBase OSS", rating: "4.8", reviews: 612, price: "FREE", badge: "Free Tier", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 7, title: "No-Code Workflow Node Integration & API Webhook Proxy", category: "Automation", curator: "MakeFree", rating: "4.7", reviews: 219, price: "FREE", badge: "Free Tier", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60", section: "free" },

  // SECTION 3: BUNDLED STACK PLANS
  { id: 8, title: "Full Scale Outbound Engine (Clay Matrix + Make Workflows + Phantom Scraping)", category: "Bundles", curator: "EnterpriseOps", rating: "5.0", reviews: 112, price: "$199/mo", badge: "Stack Bundle", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60", section: "bundle" },
  { id: 9, title: "Complete Dev Environment (Cursor Subsystem + Supabase Cluster + v0 Engine)", category: "Bundles", curator: "DevStack Corp", rating: "4.9", reviews: 94, price: "$35/mo", badge: "Stack Bundle", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60", section: "bundle" },
];

const CATEGORIES = ["All Systems", "Property AI", "Development", "Lead Gen", "Database", "Automation", "Bundles"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Systems');
  const [funnelStep, setFunnelStep] = useState('closed'); // closed, login, promote
  const [selectedPromo, setSelectedPromo] = useState('standard');

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All Systems' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#07080c] text-[#e4e6eb] font-sans antialiased flex flex-col pb-20">
      
      {/* HEADER ARCHITECTURE */}
      <nav className="sticky top-0 z-40 bg-[#07080c]/95 backdrop-blur-md border-b border-neutral-900 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black tracking-tight text-white select-none cursor-pointer" onClick={() => setActiveCategory('All Systems')}>
            stackerr<span className="text-emerald-500">.</span>
          </span>
          <span className="text-xs text-neutral-500 font-medium hidden lg:inline-block border-l border-neutral-800 pl-6 font-mono">
            // ENTERPRISE AI AGENT MARKETPLACE
          </span>
        </div>

        {/* COMPREHENSIVE SEARCH MATRIX */}
        <div className="flex flex-1 max-w-xl mx-8">
          <div className="flex w-full bg-[#11131c] border border-neutral-800 rounded px-4 py-2 focus-within:border-emerald-500 transition-all shadow-inner">
            <input
              type="text"
              placeholder="Query specialized models, architecture bundles, or specific niches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-neutral-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span 
            onClick={() => setFunnelStep('login')}
            className="text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition-colors hidden md:inline-block"
          >
            Sign In
          </span>
          <button 
            onClick={() => setFunnelStep('login')}
            className="border border-emerald-500/50 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold text-xs px-4 py-2 rounded transition-all active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            + List Your AI ($15)
          </button>
        </div>
      </nav>

      {/* FILTER FLOW BAR */}
      <div className="bg-[#0b0c12] border-b border-neutral-900/60 px-6 py-3 flex gap-6 overflow-x-auto text-xs text-neutral-400 font-medium select-none scrollbar-none">
        {CATEGORIES.map((cat) => (
          <span
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer whitespace-nowrap transition-colors pb-0.5 uppercase tracking-wider text-[10px] font-mono ${
              activeCategory === cat ? 'text-emerald-400 font-black border-b-2 border-emerald-400' : 'hover:text-white'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* FUNNEL MODAL INTERFACE SUBSYSTEM */}
      {funnelStep !== 'closed' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#10121a] border border-neutral-800 rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setFunnelStep('closed')}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white text-sm"
            >
              ✕
            </button>

            {funnelStep === 'login' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold text-white">Initialize Stackerr Developer Portal</h3>
                <p className="text-xs text-neutral-400">Create an authenticated asset account to index and deploy your custom AI model configurations.</p>
                <div className="flex flex-col gap-2 mt-2">
                  <input type="email" placeholder="Developer Corporate Email" className="bg-[#161824] border border-neutral-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" defaultValue="founder@domain.ai" />
                  <input type="password" placeholder="Access Password" className="bg-[#161824] border border-neutral-800 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" defaultValue="••••••••••••" />
                </div>
                <button 
                  onClick={() => setFunnelStep('promote')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs py-2.5 rounded mt-2 transition-all"
                >
                  Authenticate & Continue ➔
                </button>
              </div>
            )}

            {funnelStep === 'promote' && (
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold text-white">Select Integration Priority level</h3>
                <p className="text-xs text-neutral-400">Choose how aggressively your software stack will compete for attention in the active directory runway.</p>
                
                <div className="flex flex-col gap-2 mt-1">
                  <div 
                    onClick={() => setSelectedPromo('standard')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${selectedPromo === 'standard' ? 'bg-emerald-500/10 border-emerald-500' : 'bg-[#161824] border-neutral-800'}`}
                  >
                    <div className="flex justify-between font-bold text-xs text-white">
                      <span>Standard Listing Placement</span>
                      <span className="text-emerald-400">$15 / single build</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">Indexes asset inside matching categorical arrays forever.</p>
                  </div>

                  <div 
                    onClick={() => setSelectedPromo('premium')}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${selectedPromo === 'premium' ? 'bg-purple-500/10 border-purple-500' : 'bg-[#161824] border-neutral-800'}`}
                  >
                    <div className="flex justify-between font-bold text-xs text-white">
                      <span>Most Visited Carousel Sync</span>
                      <span className="text-purple-400">$39 / mo</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">Forces asset exposure inside high-traffic hero grids.</p>
                  </div>
                </div>

                <button 
                  onClick={() => { alert('Routing to secure encrypted billing network...'); setFunnelStep('closed'); }}
                  className="bg-white hover:bg-neutral-200 text-black font-bold text-xs py-2.5 rounded mt-2 transition-all"
                >
                  Proceed to Secure Checkout ↗
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* COMPACT INTERFACE MARKETPLACE LAYOUT */}
      <div className="max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col gap-12">
        
        {/* SECTION 1: MOST VISITED AI MODELS */}
        { (activeCategory === 'All Systems' || activeCategory === 'Property AI' || activeCategory === 'Development' || activeCategory === 'Lead Gen') && (
          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-end border-b border-neutral-900 pb-2">
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]"></span>
                  Most Visited Machine Instances
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">Highest daily throughput telemetry recorded across the global hub network.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredData.filter(i => i.section === 'visited').map((item) => (
                <RenderCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: FREE AI ASSETS */}
        { (activeCategory === 'All Systems' || activeCategory === 'Development' || activeCategory === 'Database' || activeCategory === 'Automation') && (
          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-end border-b border-neutral-900 pb-2">
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                  Open Access & Free Tier Nodes
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">Zero financial entry cost sandboxes built for modular production trials.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredData.filter(i => i.section === 'free').map((item) => (
                <RenderCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: BUNDLED STACK PLANS */}
        { (activeCategory === 'All Systems' || activeCategory === 'Bundles') && (
          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-end border-b border-neutral-900 pb-2">
              <div>
                <h2 className="text-base font-black text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]"></span>
                  Pre-Configured Architecture Bundles
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">Fully orchestrated tool combinations designed to function as an autonomous unit.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.filter(i => i.section === 'bundle').map((item) => (
                <div key={item.id} className="group bg-[#11131c] border border-neutral-900 hover:border-purple-500/40 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-lg">
                  <div className="w-full aspect-video relative overflow-hidden bg-neutral-900">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-purple-600 text-white font-mono font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded">
                      STACK PACKAGE
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-3 justify-between flex-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors leading-snug cursor-pointer">{item.title}</h3>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-900/60 font-mono text-[11px]">
                      <span className="text-neutral-500 uppercase tracking-widest text-[9px]">ENGINE BY {item.curator.toUpperCase()}</span>
                      <div className="text-right">
                        <span className="text-white font-black text-xs block">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

// CARD REUSABLE SUB-COMPONENT ARCHITECTURE
function RenderCard({ item }) {
  return (
    <div className="group bg-[#11131c] border border-neutral-900/80 hover:border-neutral-800 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200">
      
      {/* EXPLICIT CONTEXT PHOTO THUMBNAIL WRAPPER */}
      <div className="w-full aspect-[16/10] relative overflow-hidden bg-neutral-900 shrink-0">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <span className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md text-[#e2e8f0] font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border border-white/5">
          {item.category}
        </span>
      </div>

      {/* CORE FRAME METADATA BODY */}
      <div className="p-3.5 flex flex-col gap-2.5 flex-1 justify-between">
        
        {/* PLATFORM OWNER PROFILES */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[9px] font-mono font-bold text-emerald-400">
            {item.curator.charAt(0)}
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-bold text-white hover:underline cursor-pointer">{item.curator}</span>
            <span className="text-[9px] text-neutral-500 font-mono mt-0.5 tracking-wider uppercase">{item.badge}</span>
          </div>
        </div>

        {/* RESTRUCTURED OBJECTIVE WORK CAPABILITY DESCRIPTION */}
        <p className="text-xs text-neutral-300 font-medium leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors cursor-pointer">
          {item.title}
        </p>

        {/* RATING MATRIX */}
        <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
          <span>★</span>
          <span>{item.rating}</span>
          <span className="text-neutral-500 font-normal text-[10px] font-mono">({item.reviews})</span>
        </div>

        {/* CARD FOOTER RUNWAY: PLAN VALUATION */}
        <div className="border-t border-neutral-900 mt-1 pt-2.5 flex items-center justify-between font-mono text-[11px]">
          <span className="text-neutral-500 uppercase tracking-widest text-[9px]">CAPACITY</span>
          <div className="text-right">
            <span className="text-white font-black text-xs block">{item.price}</span>
          </div>
        </div>

      </div>

    </div>
  );
}

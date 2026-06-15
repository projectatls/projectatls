'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, title: "Automated Roof Damage Analysis & Drone Inspection Engine", category: "Property AI", curator: "RoofAI Labs", rating: "5.0", reviews: 1420, price: "$49/mo", badge: "Best Seller", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60", section: "vision" },
  { id: 2, title: "Context-Aware Neural Code Autocomplete & Repository Refactoring", category: "Development", curator: "CursorForge", rating: "4.9", reviews: 3102, price: "$20/mo", badge: "Trending", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60", section: "text" },
  { id: 3, title: "Multi-Source Lead Enrichment Matrix & B2B Pipeline Scraper", category: "Lead Gen", curator: "ClayScale", rating: "5.0", reviews: 984, price: "$149/mo", badge: "Top Rated", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60", section: "data" },
  { id: 4, title: "Autonomous Real Estate Assessment & Commercial Property Valuation", category: "Property AI", curator: "SiteInspect", rating: "4.8", reviews: 755, price: "$89/mo", badge: "New", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60", section: "vision" },
  { id: 5, title: "Zero-Cost Next.js React Element Engine & Tailwind Builder", category: "Development", curator: "v0 OpenLabs", rating: "4.9", reviews: 843, price: "FREE TIER", badge: "Popular", img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60", section: "automation" },
  { id: 6, title: "Open-Source Relational Postgres Storage System & Edge Sync", category: "Database", curator: "SupaBase OSS", rating: "4.8", reviews: 612, price: "FREE TIER", badge: "Verified", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60", section: "data" },
  { id: 7, title: "No-Code Workflow Node Integration & API Webhook Proxy", category: "Automation", curator: "MakeFree", rating: "4.7", reviews: 219, price: "FREE TIER", badge: "Starter", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60", section: "automation" },
  { id: 8, title: "Full Scale Outbound Engine (Clay Matrix + Make Workflows + Phantom Scraping)", category: "Bundles", curator: "EnterpriseOps", rating: "5.0", reviews: 112, price: "$199/mo", badge: "Value Bundle", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60", section: "bundle" },
  { id: 9, title: "Complete Dev Environment (Cursor Subsystem + Supabase Cluster + v0 Engine)", category: "Bundles", curator: "DevStack Corp", rating: "4.9", reviews: 94, price: "$35/mo", badge: "Hot Pack", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60", section: "bundle" },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [currentView, setCurrentView] = useState('all'); 
  const [ownedModelIds, setOwnedModelIds] = useState([1, 2, 5]); 
  const [selectedDashboardModelId, setSelectedDashboardModelId] = useState(1);
  const [showModelSwitcher, setShowModelSwitcher] = useState(false);
  const [isGroupChat, setIsGroupChat] = useState(true);
  
  const [discussionMessages, setDiscussionMessages] = useState([
    { sender: "System", text: "Welcome to your centralized operational dashboard. Type a message below to coordinate your active AI assets.", type: "system" }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (currentView === 'all') return true;
    return item.section === currentView;
  });

  const acquireModel = (id) => {
    if (!ownedModelIds.includes(id)) {
      setOwnedModelIds(prev => [...prev, id]);
      alert("Added to your Active Dashboard Workspace successfully!");
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setDiscussionMessages(prev => [...prev, { sender: "You", text: chatInput, type: "user" }]);
    setChatInput('');
    setIsProcessing(true);

    setTimeout(() => {
      if (isGroupChat) {
        const activeModels = DATASET.filter(m => ownedModelIds.includes(m.id));
        const responses = activeModels.map(m => ({
          sender: m.curator,
          text: `Analyzing parameters from your unified prompt directive. Syncing pipeline operational data lines.`,
          type: "agent"
        }));
        setDiscussionMessages(prev => [...prev, ...responses]);
      } else {
        const currentModel = DATASET.find(m => m.id === selectedDashboardModelId);
        setDiscussionMessages(prev => [...prev, {
          sender: currentModel ? currentModel.curator : "AI Engine",
          text: `Isolated workflow operational node received your command. Stream processed.`,
          type: "agent"
        }]);
      }
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0d0e10] text-[#f4f5f7] font-sans antialiased flex flex-col h-screen overflow-hidden">
      
      {/* GLOBAL TOP NAVIGATION BRAND BAR */}
      <nav className="bg-[#111215] border-b border-white/[0.05] h-16 flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center">
          <span className="text-2xl font-black text-white tracking-tight cursor-pointer select-none" onClick={() => setCurrentView('all')}>
            stackerr<span className="text-[#1dbf73]">.</span>
          </span>
        </div>

        {/* CONTROLS & AUTH MATRIX */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-2 ${currentView === 'dashboard' ? 'bg-[#1dbf73] text-white' : 'bg-[#222327] text-neutral-300 hover:text-white hover:bg-[#2d2e34]'}`}
          >
            My Workspace ({ownedModelIds.length})
          </button>
          
          <button 
            onClick={() => alert("Registration pipeline setup initiated.")}
            className="border border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white font-bold text-xs px-4 py-2 rounded-lg transition-all"
          >
            Join as Creator
          </button>

          <div className="h-4 w-px bg-white/[0.1] mx-1"></div>

          <div className="flex items-center gap-2">
            <button onClick={() => alert("Sign In route activated.")} className="text-xs font-semibold text-neutral-400 hover:text-white px-2 py-1 transition-colors">
              Sign In
            </button>
            <button onClick={() => alert("Sign Up route activated.")} className="bg-white hover:bg-neutral-200 text-black text-xs font-bold px-3 py-1.5 rounded-lg transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN LAYOUT SPLIT */}
      <div className="flex flex-1 overflow-hidden w-full">
        
        {/* SIDE NAVIGATION PANEL */}
        <aside className="w-56 bg-[#111215] border-r border-white/[0.02] p-3 flex flex-col justify-between shrink-0 select-none z-10">
          <div className="flex flex-col gap-1 overflow-y-auto max-h-full pr-1 scrollbar-none">
            
            {/* ANCHORED TOP DASHBOARD CONSOLE BUTTON */}
            <button 
              onClick={() => setCurrentView('dashboard')} 
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all mb-3 flex items-center justify-between ${currentView === 'dashboard' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' : 'bg-[#1e2025] text-emerald-400 hover:bg-[#25282e] border border-emerald-500/[0.15]'}`}
            >
              <span>Active Dashboard Console</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase px-4 mt-2 mb-1 block">Discover Stacks</span>
            
            <button onClick={() => setCurrentView('all')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'all' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              All Systems Overview
            </button>
            <button onClick={() => setCurrentView('bundle')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'bundle' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Integrated Bundles
            </button>

            <div className="h-px bg-white/[0.05] my-2 mx-2"></div>
            
            <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase px-4 mt-1 mb-1 block">AI Engine Modules</span>

            <button onClick={() => setCurrentView('text')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'text' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Text & Language Models
            </button>
            <button onClick={() => setCurrentView('vision')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'vision' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Image & Vision Systems
            </button>
            <button onClick={() => setCurrentView('data')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'data' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Data Matrices & Storage
            </button>
            <button onClick={() => setCurrentView('automation')} className={`w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${currentView === 'automation' ? 'bg-[#222327] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Automation Webhooks
            </button>
          </div>

          <div className="p-3 bg-[#17181c] rounded-xl border border-white/[0.03] text-center shrink-0 mt-2">
            <p className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase">Account Access Status</p>
            <span className="text-xs font-semibold text-emerald-400 block mt-0.5">Enterprise Core Active</span>
          </div>
        </aside>

        {/* CORE CONTENT CANVAS - NOW SET TO W-FULL / FLEX-1 WITHOUT ACCIDENTAL WIDTH LIMITS */}
        <main className="flex-1 h-full overflow-hidden bg-[#0d0e10] w-full">
          
          {currentView !== 'dashboard' ? (
            /* MARKETPLACE PLATFORM VIEW */
            <div className="h-full overflow-y-auto p-6 md:p-8 flex flex-col gap-8 w-full">
              
              {/* HERO BANNER ELEMENT */}
              <div className="bg-gradient-to-r from-[#421d2a] via-[#2d1b2c] to-[#14151b] border border-white/[0.04] rounded-2xl p-8 relative overflow-hidden shadow-xl shrink-0 w-full">
                <div className="max-w-2xl relative z-10">
                  <span className="bg-[#1dbf73] text-white text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                    Stackerr Hub Feature
                  </span>
                  <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-3 leading-tight">
                    Deploy Popular Specialized AI Engines Instantly.
                  </h1>
                  <p className="text-xs md:text-sm text-neutral-300 mt-2 font-medium leading-relaxed">
                    Why waste time juggling multiple separate AI subscriptions? Acquire specialized software endpoints and control them together directly inside your centralized Stackerr workspace console.
                  </p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none transform skew-x-12"></div>
              </div>

              {/* SEARCH & FILTERS CONTROLS ROW */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.04] pb-4 w-full">
                <div>
                  <h2 className="text-base font-bold text-white tracking-tight capitalize">Explore {currentView} Services</h2>
                  <p className="text-xs text-neutral-500 mt-0.5">Proven models curated by elite operational developers. Click to initialize and own.</p>
                </div>

                {/* SEARCH CONTAINER */}
                <div className="flex items-center w-full md:w-[380px] shrink-0">
                  <input
                    type="text"
                    placeholder="Search specialized models in this view..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#17181c] text-xs text-white placeholder-neutral-500 rounded-l-lg px-4 py-2 focus:outline-none border border-white/[0.04] focus:border-neutral-600 shadow-md"
                  />
                  <button className="bg-[#222327] border border-l-0 border-white/[0.04] text-neutral-300 px-4 py-2 rounded-r-lg text-xs font-semibold hover:bg-neutral-700 transition-colors shrink-0">
                    Filter
                  </button>
                </div>
              </div>

              {/* STRETCHED CARD GRID MATRIX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-12">
                {filteredData.map((item) => (
                  <div key={item.id} className="bg-[#17181c] border border-white/[0.03] hover:border-white/[0.1] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-xl group">
                    
                    <div className="w-full aspect-[16/10] relative overflow-hidden bg-neutral-900 shrink-0 border-b border-white/[0.02]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                      <span className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-[#ffb33e] text-[9px] font-extrabold tracking-wide px-2.5 py-1 rounded-full border border-white/[0.05]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold text-[#1dbf73] uppercase tracking-wide">{item.category}</span>
                        <h3 className="text-xs text-white font-bold leading-snug line-clamp-2 cursor-pointer hover:text-[#1dbf73] transition-colors">{item.title}</h3>
                        <span className="text-[11px] text-neutral-400 font-medium mt-1">Engine provided by {item.curator}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs font-bold text-[#ffb33e]">
                        <span>★</span>
                        <span>{item.rating}</span>
                        <span className="text-neutral-500 font-medium text-[11px]">({item.reviews.toLocaleString()})</span>
                      </div>

                      <div className="border-t border-white/[0.04] pt-3 mt-1 flex items-center justify-between text-xs">
                        <button 
                          onClick={() => acquireModel(item.id)}
                          className="bg-[#222327] hover:bg-[#1dbf73] text-white hover:text-black text-[11px] font-bold px-3.5 py-2 rounded-lg transition-all"
                        >
                          {ownedModelIds.includes(item.id) ? "View in Dashboard" : "Order Access Node"}
                        </button>
                        <div className="flex flex-col items-end leading-none">
                          <span className="text-[9px] text-neutral-500 uppercase font-bold tracking-wider">Starting At</span>
                          <span className="text-white font-extrabold text-sm mt-0.5">{item.price}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ) : (
            /* ACTIVE WORKSPACE PANEL */
            <div className="h-full flex flex-col justify-between relative max-w-5xl mx-auto px-6 w-full">
              
              <div className="pt-6 pb-3 border-b border-white/[0.05] bg-[#0d0e10] z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-white tracking-tight">Unified Engine Operations Panel</h2>
                  <p className="text-xs text-neutral-500">Coordinate and cross-talk active AI assets tied to your profile subscription cluster parameters.</p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <div className="bg-[#17181c] border border-white/[0.05] p-0.5 rounded-lg flex shadow-inner">
                    <button 
                      onClick={() => setIsGroupChat(true)}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-md transition-all ${isGroupChat ? 'bg-[#2d2e34] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'}`}
                    >
                      Cross-Channel Cluster
                    </button>
                    <button 
                      onClick={() => setIsGroupChat(false)}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-md transition-all ${!isGroupChat ? 'bg-[#2d2e34] text-white shadow-sm' : 'text-neutral-400 hover:text-neutral-200'}`}
                    >
                      Isolated Interface Link
                    </button>
                  </div>

                  {!isGroupChat && (
                    <div className="relative">
                      <button 
                        onClick={() => setShowModelSwitcher(!showModelSwitcher)}
                        className="bg-[#17181c] border border-white/[0.05] rounded-lg px-3 py-1.5 text-xs font-semibold text-neutral-300 flex items-center gap-2 hover:text-white"
                      >
                        <span>{DATASET.find(m => m.id === selectedDashboardModelId)?.curator}</span>
                        <span className="text-neutral-500 text-[10px]">{showModelSwitcher ? '▲' : '▼'}</span>
                      </button>

                      {showModelSwitcher && (
                        <div className="absolute right-0 top-full mt-1 w-56 bg-[#17181c] border border-white/[0.08] rounded-lg shadow-2xl z-30 overflow-hidden max-h-48 overflow-y-auto">
                          {DATASET.filter(m => ownedModelIds.includes(m.id)).map(model => (
                            <div 
                              key={model.id}
                              onClick={() => { setSelectedDashboardModelId(model.id); setShowModelSwitcher(false); }}
                              className={`p-2.5 text-xs cursor-pointer transition-colors hover:bg-[#2d2e34] truncate ${selectedDashboardModelId === model.id ? 'text-[#1dbf73] bg-white/[0.01]' : 'text-neutral-300'}`}
                            >
                              {model.curator} Node
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* TIMELINE */}
              <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-6 pr-2 scrollbar-none">
                {discussionMessages.map((msg, idx) => (
                  <div key={idx} className="max-w-4xl flex flex-col gap-1 bg-[#17181c]/40 border border-white/[0.02] p-4 rounded-xl shadow-sm">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${msg.type === 'user' ? 'text-blue-400' : msg.type === 'system' ? 'text-purple-400' : 'text-[#1dbf73]'}`}>
                      {msg.sender}
                    </span>
                    <p className="text-sm text-neutral-200 font-medium leading-relaxed whitespace-pre-wrap mt-0.5">
                      {msg.text}
                    </p>
                  </div>
                ))}
                {isProcessing && (
                  <div className="text-xs text-neutral-400 font-bold animate-pulse tracking-wide px-4">
                    Orchestrating concurrent pipeline response matrix...
                  </div>
                )}
              </div>

              {/* BOTTOM CONTROL BAR */}
              <div className="pb-8 pt-2 bg-[#0d0e10] shrink-0">
                <form onSubmit={handleSendMessage} className="relative max-w-4xl mx-auto flex items-center bg-[#17181c] rounded-full border border-white/[0.04] shadow-2xl focus-within:ring-1 focus-within:ring-[#1dbf73] transition-all">
                  <input 
                    type="text" 
                    placeholder={isGroupChat ? "Broadcast a system directive to all owned subscription engines..." : `Direct prompt isolation pipeline link for ${DATASET.find(m => m.id === selectedDashboardModelId)?.curator}...`}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full bg-transparent text-xs text-white placeholder-neutral-500 px-6 py-4 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-3 bg-[#1dbf73] hover:brightness-110 text-black text-xs font-extrabold px-5 py-2 rounded-full transition-all"
                  >
                    Broadcast
                  </button>
                </form>
                <div className="text-center text-[11px] text-neutral-600 mt-3 tracking-wide font-medium">
                  Stackerr multi-agent backend consolidation tier. Complete utility across fragmented models from one console.
                </div>
              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}

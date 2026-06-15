'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, title: "Automated Roof Damage Analysis & Drone Inspection Engine", category: "Property AI", curator: "RoofAI Labs", rating: "5.0", reviews: 1420, price: "$49/mo", badge: "Ready to Run", img: "https://images.unsplash.com/photo-1631651412411-9252329fb44b?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 2, title: "Context-Aware Neural Code Autocomplete & Repository Refactoring", category: "Development", curator: "CursorForge", rating: "4.9", reviews: 3102, price: "$20/mo", badge: "Live Model", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 3, title: "Multi-Source Lead Enrichment Matrix & B2B Pipeline Scraper", category: "Lead Gen", curator: "ClayScale", rating: "5.0", reviews: 984, price: "$149/mo", badge: "Ready to Run", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 4, title: "Autonomous Real Estate Assessment & Commercial Property Valuation", category: "Property AI", curator: "SiteInspect", rating: "4.8", reviews: 755, price: "$89/mo", badge: "Live Model", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60", section: "visited" },
  { id: 5, title: "Zero-Cost Next.js React Element Engine & Tailwind Builder", category: "Development", curator: "v0 OpenLabs", rating: "4.9", reviews: 843, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 6, title: "Open-Source Relational Postgres Storage System & Edge Sync", category: "Database", curator: "SupaBase OSS", rating: "4.8", reviews: 612, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 7, title: "No-Code Workflow Node Integration & API Webhook Proxy", category: "Automation", curator: "MakeFree", rating: "4.7", reviews: 219, price: "LAUNCH FREE", badge: "Sandbox Active", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60", section: "free" },
  { id: 8, title: "Full Scale Outbound Engine (Clay Matrix + Make Workflows + Phantom Scraping)", category: "Bundles", curator: "EnterpriseOps", rating: "5.0", reviews: 112, price: "$199/mo bundle", badge: "Deploy Stack", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60", section: "bundle" },
  { id: 9, title: "Complete Dev Environment (Cursor Subsystem + Supabase Cluster + v0 Engine)", category: "Bundles", curator: "DevStack Corp", rating: "4.9", reviews: 94, price: "$35/mo bundle", badge: "Deploy Stack", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60", section: "bundle" },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [currentView, setCurrentView] = useState('all'); // all, visited, free, bundle, dashboard
  const [ownedModelIds, setOwnedModelIds] = useState([1, 2, 5]); 
  const [selectedDashboardModelId, setSelectedDashboardModelId] = useState(1);
  const [showModelSwitcher, setShowModelSwitcher] = useState(false);
  const [isGroupChat, setIsGroupChat] = useState(true); // Toggle between group discussion and single mode
  
  const [discussionMessages, setDiscussionMessages] = useState([
    { sender: "System", text: "Unified orchestration terminal ready. Input a collective system directive below.", type: "system" }
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
    } else {
      alert("Instance is already active inside your profile layers.");
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: "User", text: chatInput, type: "user" };
    setDiscussionMessages(prev => [...prev, userMsg]);
    const savedInput = chatInput;
    setChatInput('');
    setIsProcessing(true);

    setTimeout(() => {
      if (isGroupChat) {
        // Multi-agent simultaneous cluster conversation response
        const activeModels = DATASET.filter(m => ownedModelIds.includes(m.id));
        const responses = activeModels.map(m => ({
          sender: m.curator,
          text: `Processed directive context independently. Optimizing system responses based on internal criteria.`,
          type: "agent"
        }));
        setDiscussionMessages(prev => [...prev, ...responses]);
      } else {
        // Isolated single tool interface response
        const currentModel = DATASET.find(m => m.id === selectedDashboardModelId);
        setDiscussionMessages(prev => [...prev, {
          sender: currentModel ? currentModel.curator : "Selected Agent",
          text: `Isolated stream command accepted. Returning system structural updates.`,
          type: "agent"
        }]);
      }
      setIsProcessing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#131314] text-[#e3e3e3] font-sans antialiased flex flex-col h-screen overflow-hidden">
      
      {/* MATTE BLACK TOP NAVIGATION LAYER */}
      <nav className="bg-[#131314] border-b border-white/[0.04] h-14 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-white select-none cursor-pointer" onClick={() => setCurrentView('all')}>
            stackerr
          </span>
          <span className="text-[11px] text-neutral-500 font-medium hidden md:inline-block tracking-wider uppercase">
            Interface Network Layer
          </span>
        </div>

        {/* RE-CENTERED MINIMALIST QUERY CONTROLLER */}
        <div className="flex flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search engines, assets, or architectures..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1e1e1f] text-xs text-white placeholder-neutral-500 rounded-lg px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition-all"
          />
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`text-xs font-semibold tracking-wide transition-colors ${currentView === 'dashboard' ? 'text-white underline underline-offset-4' : 'text-neutral-400 hover:text-white'}`}
          >
            Workspace ({ownedModelIds.length})
          </button>
          <button 
            onClick={() => setCurrentView('all')}
            className="bg-[#1e1e1f] text-white hover:bg-neutral-800 font-medium text-xs px-4 py-2 rounded-lg transition-colors border border-white/[0.04]"
          >
            Explore Engines
          </button>
        </div>
      </nav>

      {/* SYSTEM SPLIT CONTENT PANEL CONTAINER */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR NAVIGATION GRID ARCHITECTURE (GEMINI STYLING STYLE) */}
        <aside className="w-56 bg-[#0e0e10] p-4 flex flex-col justify-between shrink-0 select-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-600 px-3 mb-2 block">Navigation</span>
            
            <button onClick={() => setCurrentView('all')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${currentView === 'all' ? 'bg-[#1e1e1f] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              All Configurations
            </button>
            <button onClick={() => setCurrentView('visited')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${currentView === 'visited' ? 'bg-[#1e1e1f] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Most Visited
            </button>
            <button onClick={() => setCurrentView('free')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${currentView === 'free' ? 'bg-[#1e1e1f] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Open Access
            </button>
            <button onClick={() => setCurrentView('bundle')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${currentView === 'bundle' ? 'bg-[#1e1e1f] text-white' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Bundled Pipelines
            </button>

            <div className="h-px bg-white/[0.04] my-4 mx-3"></div>

            <button onClick={() => setCurrentView('dashboard')} className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${currentView === 'dashboard' ? 'bg-[#1e1e1f] text-emerald-400 font-semibold' : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'}`}>
              Active Dashboard
            </button>
          </div>

          <div className="px-3 py-2 text-[11px] text-neutral-600 font-medium tracking-wide">
            Verified Stackerr User
          </div>
        </aside>

        {/* CORE MARKET DISPLAY SPACE OR IMMERSIVE CLEAN DASHBOARD LAYER */}
        <main className="flex-1 overflow-hidden bg-[#131314] relative">
          
          {currentView !== 'dashboard' ? (
            /* MARKETPLACE EXPLORATION SCREEN VIEW MODE */
            <div className="h-full overflow-y-auto p-8 flex flex-col gap-6">
              <div>
                <h1 className="text-lg font-medium text-white tracking-tight capitalize">{currentView} Systems Architecture</h1>
                <p className="text-xs text-neutral-500 mt-0.5">Initialize single operational system endpoints inside your unified user profile container layer.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
                {filteredData.map((item) => (
                  <div key={item.id} className="bg-[#0e0e10] border border-white/[0.03] rounded-xl overflow-hidden flex flex-col justify-between shadow-lg">
                    <div className="w-full aspect-[16/10] relative overflow-hidden bg-neutral-900 shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80" />
                    </div>

                    <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                      <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400">
                        <span>{item.curator}</span>
                        <span className="text-emerald-400">{item.badge}</span>
                      </div>
                      <h3 className="text-xs text-white font-medium leading-relaxed line-clamp-2">{item.title}</h3>
                      
                      <div className="border-t border-white/[0.03] pt-3 mt-1 flex items-center justify-between text-xs">
                        <button 
                          onClick={() => acquireModel(item.id)}
                          className="bg-[#1e1e1f] text-neutral-200 hover:bg-neutral-800 text-[11px] font-medium px-3 py-1.5 rounded-lg border border-white/[0.03] transition-colors"
                        >
                          {ownedModelIds.includes(item.id) ? "Active in Workspace" : "Initialize Container"}
                        </button>
                        <span className="text-neutral-400 font-medium text-xs">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* GEMINI INSPIRED HIGHLY FUNCTIONAL MINIMAL CONSOLE STREAM */
            <div className="h-full flex flex-col justify-between relative max-w-4xl mx-auto px-6">
              
              {/* STICKY DISCOVERY DASHBOARD TOP HEADER SWITCHER */}
              <div className="pt-6 pb-2 border-b border-white/[0.03] bg-[#131314] z-10 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-medium text-white">Centralized Execution Console</h2>
                  <p className="text-[11px] text-neutral-500">Query and cycle seamlessly across your profile's active tool layers.</p>
                </div>

                <div className="flex items-center gap-3">
                  {/* WORKSPACE TOGGLE: ISOLATED SINGLE VS FULL CLUSTER DISCUSSIONS */}
                  <div className="bg-[#0e0e10] border border-white/[0.04] p-0.5 rounded-lg flex">
                    <button 
                      onClick={() => setIsGroupChat(true)}
                      className={`text-[10px] font-medium px-2.5 py-1 rounded-md transition-all ${isGroupChat ? 'bg-[#1e1e1f] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                      Cluster Discussion
                    </button>
                    <button 
                      onClick={() => setIsGroupChat(false)}
                      className={`text-[10px] font-medium px-2.5 py-1 rounded-md transition-all ${!isGroupChat ? 'bg-[#1e1e1f] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                      Single Isolated Node
                    </button>
                  </div>

                  {/* DROP DOWN SWITCH CONTROL (ARROW TOGGLE SWITCHER ELEMENT) */}
                  {!isGroupChat && (
                    <div className="relative">
                      <button 
                        onClick={() => setShowModelSwitcher(!showModelSwitcher)}
                        className="bg-[#0e0e10] border border-white/[0.04] rounded-lg px-3 py-1 text-[11px] font-medium text-neutral-300 flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <span>{DATASET.find(m => m.id === selectedDashboardModelId)?.curator}</span>
                        <span className="text-neutral-500 text-[9px]">{showModelSwitcher ? '▲' : '▼'}</span>
                      </button>

                      {showModelSwitcher && (
                        <div className="absolute right-0 top-full mt-1 w-52 bg-[#0e0e10] border border-white/[0.06] rounded-lg shadow-2xl z-30 overflow-hidden max-h-48 overflow-y-auto">
                          {DATASET.filter(m => ownedModelIds.includes(m.id)).map(model => (
                            <div 
                              key={model.id}
                              onClick={() => { setSelectedDashboardModelId(model.id); setShowModelSwitcher(false); }}
                              className={`p-2.5 text-[11px] cursor-pointer transition-colors hover:bg-[#1e1e1f] truncate ${selectedDashboardModelId === model.id ? 'text-emerald-400 bg-white/[0.01]' : 'text-neutral-400'}`}
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

              {/* CLEAN DYNAMIC INTERACTIVE LOG CHAT ARENA */}
              <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-6 scrollbar-none pr-2">
                {discussionMessages.map((msg, idx) => (
                  <div key={idx} className="max-w-3xl flex flex-col gap-1.5 transition-opacity duration-200">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className={`${msg.type === 'user' ? 'text-neutral-300' : msg.type === 'system' ? 'text-neutral-500' : 'text-emerald-400'}`}>
                        {msg.sender}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-300 leading-relaxed font-normal whitespace-pre-wrap pl-0">
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="text-xs text-neutral-500 font-medium animate-pulse tracking-wide">
                    Synchronizing network output array keys...
                  </div>
                )}
              </div>

              {/* PILL INPUT BOX FORM FIELD CONTROL (GOOGLE GEMINI CLEAN STYLE COALESCENCE) */}
              <div className="pb-8 pt-2 bg-[#131314] shrink-0">
                <form onSubmit={handleSendMessage} className="relative max-w-3xl mx-auto flex items-center bg-[#1e1e1f] rounded-full border border-white/[0.02] shadow-xl focus-within:ring-1 focus-within:ring-neutral-700 transition-all">
                  <input 
                    type="text" 
                    placeholder={isGroupChat ? "Message all active system layers simultaneously..." : `Direct prompt isolation link for ${DATASET.find(m => m.id === selectedDashboardModelId)?.curator}...`}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full bg-transparent text-xs text-white placeholder-neutral-500 px-6 py-3.5 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-3 bg-[#131314] hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
                  >
                    Send
                  </button>
                </form>
                <div className="text-center text-[10px] text-neutral-600 mt-2 tracking-wide font-medium">
                  Stackerr aggregates third-party enterprise orchestration tools. One account, zero context fragmentation.
                </div>
              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}

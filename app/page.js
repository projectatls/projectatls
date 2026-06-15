'use client';
import { useState } from 'react';

const DATASET = [
  { id: 1, name: "Make.com Advanced Blueprints", category: "Automation", creator: "Workflow Labs", views: "1.2k views", time: "2 days ago", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60", featured: true },
  { id: 2, name: "v0.dev Generative Engine", category: "Development", creator: "Vercel Team", views: "4.8k views", time: "5 hours ago", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=60", featured: false },
  { id: 3, name: "Clay.com Data Enrichment", category: "Lead Gen", creator: "Growth Systems", views: "982 views", time: "1 day ago", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60", featured: true },
  { id: 4, name: "Supabase Postgres Engine", category: "Database", creator: "OSS Architect", views: "2.4k views", time: "3 days ago", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60", featured: false },
  { id: 5, name: "Cursor AI Code Editor", category: "Development", creator: "Anysphere", views: "12.1k views", time: "1 week ago", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&auto=format&fit=crop&q=60", featured: false },
  { id: 6, name: "Phantombuster Cloud Scaler", category: "Lead Gen", creator: "Phantoms", views: "3.1k views", time: "4 days ago", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60", featured: false },
];

const CATEGORIES = ["All", "Automation", "Development", "Lead Gen", "Database"];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData = DATASET.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] font-sans antialiased flex flex-col">
      
      {/* YOUTUBE STYLE TOP NAV */}
      <nav className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-[#272727] h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-1 text-white">
            <span className="bg-red-600 px-2 py-0.5 rounded-lg text-xs font-black tracking-normal">PRO</span>
            PROJECT ATLAS
          </div>
        </div>

        {/* SEARCH BAR (Verbatim YouTube style from image_af76a8.png) */}
        <div className="flex flex-1 max-w-[600px] mx-4 items-center">
          <div className="flex w-full bg-[#121212] border border-[#303030] rounded-l-full px-4 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Search tools, infrastructure, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-white placeholder-[#888888] focus:outline-none"
            />
          </div>
          <button className="bg-[#222222] border-y border-r border-[#303030] rounded-r-full px-6 py-2 hover:bg-[#272727] text-white">
            🔍
          </button>
        </div>

        <div>
          <button 
            onClick={() => alert('Sponsorship checkout window opening soon.')}
            className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs px-4 py-2 rounded-full transition-all"
          >
            + Create Slot ($15)
          </button>
        </div>
      </nav>

      {/* SIDEBAR + MAIN CONTENT CONTAINER */}
      <div className="flex flex-1">
        
        {/* PERSISTENT SIDEBAR (Verbatim layout from image_af76a8.png) */}
        <aside className="w-64 bg-[#0f0f0f] p-3 hidden md:flex flex-col gap-1 border-r border-[#272727]/30 text-sm">
          <div className="bg-[#272727] px-4 py-2 rounded-xl font-medium cursor-pointer text-white">🏠 Home</div>
          <div className="px-4 py-2 rounded-xl font-normal hover:bg-[#272727]/50 cursor-pointer text-[#f1f1f1]">🔥 Trending Tools</div>
          <div className="px-4 py-2 rounded-xl font-normal hover:bg-[#272727]/50 cursor-pointer text-[#f1f1f1]">🌐 Shared Infrastructure</div>
          <hr className="border-[#272727] my-3" />
          <div className="px-4 pb-2 text-xs font-semibold text-[#aaa] uppercase tracking-wider">Target Metrics</div>
          <div className="px-4 py-1.5 text-xs text-[#aaa]">🟢 Database Engine Online</div>
          <div className="px-4 py-1.5 text-xs text-[#aaa]">🚀 Local Sync Ready</div>
        </aside>

        {/* MAIN DISPLAY AREA */}
        <main className="flex-1 p-6 bg-[#0f0f0f]">
          
          {/* HORIZONTAL PILL FILTERS (Verbatim styling from image_af76a8.png) */}
          <div className="flex gap-3 overflow-x-auto pb-6 mb-4 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* HIGH-CONVERSION MEDIA GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
            {filteredData.map((item) => (
              <div key={item.id} className="group cursor-pointer flex flex-col gap-3 relative">
                
                {/* VIDEO THUMBNAIL WRAPPER */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#272727]">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/80 text-[11px] font-medium px-1.5 py-0.5 rounded text-white">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="absolute top-2 left-2 bg-blue-600 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded text-white shadow-md">
                      SPONSOR
                    </span>
                  )}
                </div>

                {/* METADATA BLOCK */}
                <div className="flex gap-3 px-1">
                  {/* Avatar Placeholder */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center font-bold text-xs text-black shrink-0">
                    {item.creator.charAt(0)}
                  </div>
                  
                  {/* Text Details */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2 group-hover:text-neutral-200">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#aaa] mt-1.5 flex items-center gap-1 hover:text-white transition-colors">
                      {item.creator}
                    </p>
                    <p className="text-xs text-[#aaa] mt-0.5">
                      {item.views} • {item.time}
                    </p>
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

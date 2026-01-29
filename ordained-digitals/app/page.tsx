import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen px-8 pt-64 pb-20 lg:px-20 lg:pt-72 flex flex-col items-center">
      
      {/* Background Orbs - Atmospheric Layer */}
      <div className="orb-container">
        <div className="orb orb-purple w-[600px] h-[600px] -top-24 -left-24" />
        <div className="orb orb-pink w-[500px] h-[500px] bottom-10 -right-24" />
        <div className="orb orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="max-w-6xl w-full">
        
        {/* Top Branding Section */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Ordained <span className="text-electric-pink">Digitals</span>
            </h1>
            <p className="text-gray-400 mt-4 text-lg">Premium Tech & Aesthetic Engineering</p>
          </div>
          <div className="glass-card px-6 py-2 rounded-full text-xs font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            System Status: <span className="text-green-400">OPTIMIZED_300MS</span>
          </div>
        </header>

        {/* Main Concept Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Hero Card */}
          <div className="md:col-span-8 glass-card p-10 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">We code the future of luxury.</h2>
              <p className="text-gray-400 max-w-md mb-8 text-lg leading-relaxed">
                Your brand deserves more than a template. We build bespoke digital 
                ecosystems with sub-300ms performance.
              </p>
              <button className="bg-electric-pink hover:bg-white text-black font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer">
                Start Project
              </button>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-electric-pink/10 blur-3xl rounded-full group-hover:bg-electric-pink/20 transition-colors" />
          </div>

          {/* Stats Card */}
          <div className="md:col-span-4 glass-card p-8 flex flex-col justify-between border-electric-pink/20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 font-mono">Current Velocity</p>
              <h3 className="text-5xl font-mono text-electric-pink font-bold">298ms</h3>
            </div>
            <div className="mt-8 space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-soft-purple to-electric-pink" />
              </div>
              <p className="text-[10px] text-gray-500 font-mono tracking-widest">CORE_PERFORMANCE_INDEX</p>
            </div>
          </div>

          {/* Automation Card (The Sheets Flex) */}
          <div className="md:col-span-12 glass-card p-10 flex flex-col md:flex-row gap-10 items-center">
             <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Automated Intelligence</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Integrating your website directly into custom Google Sheets for real-time inventory and lead management. We turn your site into a living business tool.
                </p>
                <Link href="/services/automation" className="inline-flex items-center gap-2 text-electric-pink font-bold hover:underline group cursor-pointer">
                  Explore Integration 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
             </div>
             <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 text-white">
                  <span className="text-[10px] text-gray-500 font-mono">NODE_JS</span>
                  <span className="font-mono text-xs">API_SYNC</span>
                </div>
                <div className="h-24 bg-electric-pink/5 border border-electric-pink/20 rounded-2xl flex flex-col items-center justify-center gap-2">
                  <span className="text-[10px] text-electric-pink/50 font-mono">STATUS</span>
                  <span className="font-mono text-xs text-electric-pink uppercase font-bold">Active</span>
                </div>
             </div>
          </div>
        </div>

        {/* Selected Work Section - Portfolio */}
        <section className="w-full">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-electric-pink font-mono text-xs uppercase tracking-[0.3em] mb-2">Portfolio</p>
              <h2 className="text-4xl font-bold tracking-tighter text-white">Selected Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aura Wellness Project Card */}
            <Link href="/work/aura" className="group relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-video glass-card flex flex-col justify-end p-8 border-white/5 hover:border-electric-pink/30 transition-all cursor-pointer">
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              
              {/* Placeholder for Project Glow/Background */}
              <div className="absolute inset-0 bg-soft-purple/5 group-hover:bg-soft-purple/10 transition-colors duration-700" />
              
              <div className="relative z-20">
                <p className="text-xs font-mono text-electric-pink mb-2">LIFESTYLE & WELLNESS</p>
                <h3 className="text-3xl font-bold text-white mb-2">Aura Wellness</h3>
                <p className="text-gray-400 max-w-sm group-hover:text-white transition-colors duration-300">
                  A premium e-commerce experience built for high-conversion and aesthetic flow.
                </p>
              </div>
            </Link>

            {/* Empty Project Slot */}
            <div className="glass-card rounded-3xl aspect-[4/5] md:aspect-video flex items-center justify-center border-dashed border-white/10 opacity-50">
              <p className="text-gray-600 font-mono text-sm tracking-widest uppercase">Next Project Pending</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
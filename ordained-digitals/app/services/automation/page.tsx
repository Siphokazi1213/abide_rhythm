export default function AutomationService() {
  return (
    <main className="relative min-h-screen px-8 pt-56 pb-20 lg:px-24 flex flex-col items-center">
      {/* Background Orbs (Keeping the brand consistency) */}
      <div className="orb-container">
        <div className="orb orb-purple w-[800px] h-[800px] -top-40 -right-20 opacity-30" />
        <div className="orb orb-pink w-[600px] h-[600px] bottom-0 -left-20 opacity-20" />
      </div>

      <div className="max-w-5xl w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-electric-pink mb-8 uppercase tracking-widest">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <span className="text-gray-500">Services</span>
          <span>/</span>
          <span>Automation</span>
        </div>

        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
            Your Business, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-pink to-soft-purple">
              Synchronized.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We bridge the gap between your digital presence and your daily operations. 
            By treating Google Sheets as a headless database, we provide real-time control 
            over your website without needing a complex backend.
          </p>
        </section>

        {/* The Technical Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Feature List */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                <span className="w-8 h-[1px] bg-electric-pink" /> Real-time Inventory
              </h3>
              <p className="text-gray-400">
                Update a row in your Google Sheet, and watch your website reflect 
                the change in sub-300ms. No CMS logins, no technical friction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
                <span className="w-8 h-[1px] bg-electric-pink" /> Lead Orchestration
              </h3>
              <p className="text-gray-400">
                Every lead captured on your site is instantly validated and injected 
                into your CRM pipeline via Google Sheets API v4.
              </p>
            </div>
          </div>

          {/* Code/Terminal Visual - Fixed with string literals for braces */}
          <div className="glass-card p-6 font-mono text-sm overflow-hidden border-white/10">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="text-electric-pink">// Initializing Sync</p>
              <p>const sheets = google.sheets(&apos;v4&apos;);</p>
              <p>const data = await sheets.spreadsheets.values.get({"{"}</p>
              <p className="pl-4">spreadsheetId: &apos;ORD_DB_001&apos;,</p>
              <p className="pl-4">range: &apos;Inventory!A2:E&apos;,</p>
              <p>{"}"});</p>
              <p className="text-green-400 mt-4">✓ 200 OK: Data Stream Established</p>
              <p className="animate-pulse">_</p>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <section className="mt-32 p-12 glass-card border-soft-purple/30 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to automate your workflow?</h2>
            <button className="bg-white text-black font-bold py-4 px-10 rounded-xl hover:bg-electric-pink transition-all cursor-pointer">
              Schedule Architecture Call
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-soft-purple/10 blur-3xl -z-10" />
        </section>
      </div>
    </main>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 pt-32 lg:px-24">
      {/* Background Effect */}
      <div className="mesh-gradient" />

      {/* Hero Section */}
      <section className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase border rounded-full border-electricPink/30 bg-electricPink/10 text-electricPink">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricPink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electricPink"></span>
          </span>
          Sub-300ms Performance
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight lg:text-8xl mb-8">
          Digital Craftsmanship, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricPink to-softPurple">
            Ordained
          </span> for Speed.
        </h1>

        <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed">
          We build high-performance Next.js experiences for brands that value precision. 
          Where soft nightlife aesthetics meet technical superiority.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-electricPink text-charcoal font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,77,166,0.5)] transition-all">
            Launch Your Vision
          </button>
          <button className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
            Explore the Lab
          </button>
        </div>
      </section>
    </main>
  );
}
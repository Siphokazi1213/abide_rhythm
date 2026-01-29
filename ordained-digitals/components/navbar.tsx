import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="nav-glass px-6 py-3 rounded-2xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-pink to-soft-purple flex items-center justify-center font-bold text-black text-xs">
            OD
          </div>
          <span className="font-bold tracking-tighter text-lg hidden sm:block">ORDAINED</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services/automation" className="nav-link">Automation</Link>
          <button className="ml-4 px-5 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-electric-pink transition-colors cursor-pointer">
            Inquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}
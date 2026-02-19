'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          AGRI<span className="text-accent">NEWS</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-zinc-500 transition-colors">Latest</Link>
          <Link href="/news" className="hover:text-zinc-500 transition-colors">News</Link>
          <Link href="/" className="hover:text-zinc-500 transition-colors">Technology</Link>
          <Link href="/" className="hover:text-zinc-500 transition-colors">Market</Link>
          <Link href="/" className="hover:text-zinc-500 transition-colors">Science</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-muted rounded-full transition-colors md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

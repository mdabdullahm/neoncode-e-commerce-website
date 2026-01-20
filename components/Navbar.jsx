"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart, ChevronRight } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { name: "Mobile", icon: "📱", slug: "/mobile" },
  { name: "T-Shirt", icon: "👕", slug: "/t-shirt" },
  { name: "Watch", icon: "⌚", slug: "/watch" },
  { name: "Cleaning", icon: "🧼", slug: "/cleaning" },
  { name: "Shoes", icon: "👟", slug: "/shoes" },
  { name: "Beauty", icon: "💄", slug: "/beauty" },
  { name: "Gadgets", icon: "🎧", slug: "/gadgets" },
  { name: "Laptop", icon: "💻", slug: "/laptop" },
  { name: "Food", icon: "🍎", slug: "/food" },
  { name: "Sports", icon: "⚽", slug: "/sports" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="px-4 py-4 md:px-12 flex items-center justify-between">
        
        {/* --- Logo Section (Left Side) --- */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 overflow-hidden rounded-md group-hover:ring-2 ring-[#5BF527] transition-all">
            <img 
              src="/neonlogo/neoncodelogo.jpg" 
              alt="NeonCode Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase">
            NEON<span className="text-[#5BF527]">CODE</span>
          </div>
        </Link>

        {/* --- Desktop Menu Links (Center) --- */}
        <div className="hidden md:flex items-center space-x-10 font-black text-xs uppercase tracking-widest text-gray-800">
          <Link href="/" className="hover:text-[#5BF527] transition-colors">Home</Link>
          
          <div className="group relative py-2 cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-[#5BF527] transition-all">
              Categories <span className="text-[10px]">▼</span>
            </div>

            {/* Desktop Dropdown Grid */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[650px] bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-6 transition-all duration-500 ease-out">
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                {categories.map((cat, index) => (
                  <Link href={cat.slug} key={index} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#5BF527]/10 transition-all group/item border border-transparent hover:border-[#5BF527]/20">
                    <div className="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center text-xl group-hover/item:bg-white group-hover/item:scale-110 transition-all shadow-sm">
                      {cat.icon}
                    </div>
                    <div>
                      <p className="font-black text-[11px] text-gray-900 uppercase">{cat.name}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase">View All</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/new-arrival" className="hover:text-[#5BF527] transition-colors">New Arrival</Link>
          <Link href="/collection" className="hover:text-[#5BF527] transition-colors">Collection</Link>
        </div>

        {/* --- Right Side Actions (Desktop & Mobile) --- */}
        <div className="flex items-center space-x-2 md:space-x-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-transform active:scale-90">
            <Search size={20} />
          </button>

          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full group">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-[#5BF527] text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">
                0
            </span>
          </Link>

          <Link href="/account" className="hidden sm:block bg-black text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-lg active:scale-95">
            Account
          </Link>

          {/* --- Hamburger Menu Button (Far Right - Mobile Only) --- */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar Menu (Right Side Drawer) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
            />

            {/* Right Side Slide-in Content */}
            <motion.div 
              initial={{ x: '100%' }} // ডান পাশ থেকে শুরু
              animate={{ x: 0 }}      // ভেতরে আসবে
              exit={{ x: '100%' }}    // ডানেই ফিরে যাবে
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[110] md:hidden shadow-2xl flex flex-col p-6 overflow-y-auto"
            >
              {/* Menu Title & Close Button */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="text-xl font-black text-black">MENU</div>
                <button onClick={toggleMenu} className="p-2 bg-gray-50 rounded-full">
                   <X size={20} />
                </button>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col space-y-4 mb-8">
                <Link onClick={toggleMenu} href="/" className="px-2 py-1 text-xs font-black uppercase tracking-widest text-gray-800 hover:text-[#5BF527] transition-colors">Home</Link>
                <Link onClick={toggleMenu} href="/new-arrival" className="px-2 py-1 text-xs font-black uppercase tracking-widest text-gray-800 hover:text-[#5BF527] transition-colors">New Arrival</Link>
                <Link onClick={toggleMenu} href="/collection" className="px-2 py-1 text-xs font-black uppercase tracking-widest text-gray-800 hover:text-[#5BF527] transition-colors">Collection</Link>
                <Link onClick={toggleMenu} href="/account" className="px-2 py-1 text-xs font-black uppercase tracking-widest text-gray-800 hover:text-[#5BF527] transition-colors">My Account</Link>
              </div>

              {/* Categories Section */}
              <div className="flex flex-col">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-4">Explore Categories</p>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <Link 
                      href={cat.slug} 
                      key={index} 
                      onClick={toggleMenu}
                      className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl hover:bg-[#5BF527]/10 transition-all border border-transparent active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{cat.icon}</span>
                        <span className="text-[11px] font-black uppercase tracking-tight text-gray-800">{cat.name}</span>
                      </div>
                      <ChevronRight size={14} className="text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer inside menu */}
              <div className="mt-auto pt-10">
                 <Link onClick={toggleMenu} href="/categories" className="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-xl">
                    All Categories 🛍️
                 </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
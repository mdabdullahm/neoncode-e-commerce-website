"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, ShoppingCart, User } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  // মেনু খোলা থাকলে স্ক্রল বন্ধ রাখার জন্য
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[100] px-4 py-4 md:px-12 bg-white/40 backdrop-blur-xl shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 cursor-pointer group z-[110]">
          <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:border-[#5BF527] transition-all border border-gray-100">
            <img 
              src="/neonlogo/neoncodelogo.jpg" 
              alt="NeonCode Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl md:text-2xl font-black tracking-tighter text-black">
            NEON<span className="text-[#5BF527]">CODE</span>
          </div>
        </Link>

        {/* 2. Desktop Menu Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 font-black text-[11px] uppercase tracking-widest text-gray-800">
          <Link href="/" className="hover:text-[#5BF527] transition-colors">Home</Link>
          
          <div className="group relative py-2 cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-[#5BF527] transition-all">
              Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>

            {/* Desktop Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-6 transition-all duration-500 ease-out">
              <div className="grid grid-cols-3 gap-4">
                {categories.map((cat, index) => (
                  <Link href={cat.slug} key={index} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#5BF527]/10 transition-all group/item">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg group-hover/item:scale-110 transition-all shadow-sm">
                      {cat.icon}
                    </div>
                    <div>
                      <p className="font-black text-[10px] text-gray-900 uppercase">{cat.name}</p>
                      <p className="text-[8px] text-gray-400 font-bold uppercase">Explore</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/new-arrival" className="hover:text-[#5BF527] transition-colors">New Arrival</Link>
          <Link href="/collection" className="hover:text-[#5BF527] transition-colors">Collection</Link>
        </div>

        {/* 3. Action Buttons & Mobile Toggle */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="hidden sm:block text-gray-800 hover:scale-110 transition-transform">
             <Search size={20} />
          </button>
          
          <Link href="/cart" className="relative group">
            <ShoppingCart size={20} className="text-gray-800 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-[#5BF527] text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                0
            </span>
          </Link>

          <Link href="/account" className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all active:scale-95 shadow-lg">
            Account
          </Link>

          {/* Mobile Menu Toggle Button (Hamburger) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[110] p-2  text-green-500 rounded-xl active:scale-90 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* 4. Mobile Slide-out Menu (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-[105] shadow-2xl p-6 pt-24 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col space-y-6">
                
                {/* Mobile Links */}
                <div className="flex flex-col space-y-4">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2">Home</Link>
                  
                  {/* Mobile Categories Accordion */}
                  <div className="flex flex-col">
                    <button 
                      onClick={() => setMobileCatOpen(!mobileCatOpen)}
                      className="flex items-center justify-between text-xl font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2"
                    >
                      Categories <ChevronDown className={`${mobileCatOpen ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileCatOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="grid grid-cols-2 gap-2 mt-4 overflow-hidden"
                        >
                          {categories.map((cat, i) => (
                            <Link 
                              key={i} 
                              href={cat.slug}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-2 p-2 bg-gray-50 rounded-xl"
                            >
                              <span className="text-lg">{cat.icon}</span>
                              <span className="text-[10px] font-black uppercase">{cat.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/new-arrival" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2">New Arrival</Link>
                  <Link href="/collection" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter text-gray-900 border-b border-gray-50 pb-2">Collection</Link>
                </div>

                {/* Mobile Account Button */}
                <div className="pt-10">
                   <Link 
                     href="/account" 
                     onClick={() => setIsOpen(false)}
                     className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs"
                   >
                     <User size={18} /> Account
                   </Link>
                </div>

                <div className="text-center pt-10">
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2024 NeonCode Store</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
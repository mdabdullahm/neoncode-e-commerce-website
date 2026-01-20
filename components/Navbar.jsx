"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[100] w-full h-20 px-4 md:px-12 bg-white/40 backdrop-blur-xl transition-all duration-300 flex items-center shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* লোগো সেকশন - মোবাইলে মেনু খোলা থাকলে এটি হাইড হবে */}
        <Link href="/" className={`flex items-center gap-2 md:gap-3 cursor-pointer transition-all duration-300 ${isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img src="/neonlogo/neoncodelogo.jpg" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <div className="text-xl md:text-2xl font-black text-black">
            NEON<span className="text-[#5BF527]">CODE</span>
          </div>
        </Link>

        {/* বড় ডিভাইসের জন্য মেনু লিংক (Categories সহ) */}
        <div className="hidden md:flex items-center space-x-8 font-black text-[11px] uppercase tracking-widest text-gray-800">
          <Link href="/" className="hover:text-[#5BF527] transition-colors">Home</Link>
          
          {/* Categories Dropdown for Desktop */}
          <div className="group relative py-2 cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-[#5BF527] transition-all">
              Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>

            {/* ড্রপডাউন মেনু */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-6 transition-all duration-500 ease-out">
              <div className="grid grid-cols-3 gap-4">
                {categories.map((cat, index) => (
                  <Link href={cat.slug} key={index} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#5BF527]/10 transition-all group/item">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg group-hover/item:scale-110 transition-all shadow-sm">
                      {cat.icon}
                    </div>
                    <div>
                      <p className="font-black text-[10px] text-gray-900 uppercase">{cat.name}</p>
                      <p className="text-[8px] text-gray-400 font-bold uppercase">View All</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/new-arrival" className="hover:text-[#5BF527] transition-colors">New Arrival</Link>
          <Link href="/collection" className="hover:text-[#5BF527] transition-colors">Collection</Link>
        </div>

        {/* ডান পাশের আইকনসমূহ */}
        <div className="flex items-center space-x-4 z-[120]">
          <Link href="/cart" className={`relative transition-all duration-300 ${isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            <ShoppingCart size={22} className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-[#5BF527] text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">0</span>
          </Link>

          {/* মোবাইল মেনু বাটন (X বা Hamburger) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1 text-[#5BF527] outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* ডেস্কটপ একাউন্ট বাটন */}
          <Link href="/account" className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all">
            Account
          </Link>
        </div>
      </div>

      {/* মোবাইল ড্রয়ার মেনু */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] md:hidden"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[85%] bg-white z-[110] shadow-2xl md:hidden overflow-hidden flex flex-col"
            >
              {/* ড্রয়ারের ভেতর লোগো এবং ক্লোজ বাটন */}
              <div className="h-20 flex items-center justify-between px-6 border-b border-gray-50 bg-white">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg overflow-hidden border border-gray-100">
                    <img src="/neonlogo/neoncodelogo.jpg" alt="Logo" className="w-full h-full object-cover"/>
                  </div>
                  <div className="text-lg font-black text-black">
                    NEON<span className="text-[#5BF527]">CODE</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-[#5BF527]">
                   <X size={30} />
                </button>
              </div>

              {/* মোবাইল মেনু আইটেমসমূহ */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase text-gray-900 block border-b border-gray-50 pb-4">HOME</Link>
                
                <div className="flex flex-col">
                  <button onClick={() => setMobileCatOpen(!mobileCatOpen)} className="flex items-center justify-between text-xl font-black uppercase text-gray-900 border-b border-gray-50 pb-4">
                    CATEGORIES <ChevronDown className={`${mobileCatOpen ? 'rotate-180' : ''} transition-transform`} size={20} />
                  </button>
                  <AnimatePresence>
                    {mobileCatOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="grid grid-cols-2 gap-2 mt-4 overflow-hidden">
                        {categories.map((cat, i) => (
                          <Link key={i} href={cat.slug} onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                            <span className="text-lg">{cat.icon}</span>
                            <span className="text-[10px] font-black uppercase">{cat.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/new-arrival" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase text-gray-900 block border-b border-gray-50 pb-4">NEW ARRIVAL</Link>
                <Link href="/collection" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase text-gray-900 block border-b border-gray-50 pb-4">COLLECTION</Link>
                
                <Link href="/account" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-xl font-black uppercase text-xs mt-10 shadow-xl">
                  <User size={18} /> ACCOUNT
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
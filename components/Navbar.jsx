"use client";

import React from 'react';
import Link from 'next/link'; // লিঙ্ক করার জন্য এটি প্রয়োজন

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
  return (
    <nav className="sticky top-0 z-[100] px-4 py-4 md:px-12 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between">
        
        {/* Logo Section - লিঙ্ক করা হয়েছে */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 overflow-hidden group-hover:border-[#5BF527] transition-all">
            <img 
              src="/neonlogo/neoncodelogo.jpg" 
              alt="NeonCode Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-2xl font-black tracking-tighter text-black">
            NEON<span className="text-[#5BF527]">CODE</span>
          </div>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center space-x-10 font-black text-xs uppercase tracking-widest text-gray-800">
          <Link href="/" className="hover:text-[#5BF527] transition-colors">Home</Link>
          
          {/* Categories Dropdown Container */}
          <div className="group relative py-2 cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-[#5BF527] transition-all">
              Categories 
              <span className="text-[10px] group-hover:rotate-180 transition-transform duration-300">⬇</span>
            </div>

            {/* Dropdown Menu: 3 Columns Layout */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[650px] bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-6 transition-all duration-500 ease-out">
              
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                {categories.map((cat, index) => (
                  /* এখানে প্রতিটি ক্যাটাগরিকে লিঙ্ক করা হয়েছে */
                  <Link 
                    href={cat.slug}
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#5BF527]/10 transition-all group/item border border-transparent hover:border-[#5BF527]/20"
                  >
                    <div className="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center text-xl group-hover/item:bg-white group-hover/item:scale-110 transition-all shadow-sm">
                      {cat.icon}
                    </div>
                    <div>
                      <p className="font-black text-[11px] text-gray-900 uppercase tracking-tighter">{cat.name}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase">View All</p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-5 border-t border-gray-100 flex justify-between items-center">
                 <p className="text-[10px] text-gray-400 font-bold italic">Top Handpicked Categories for you!</p>
                 <Link href="/categories" className="bg-black text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all">
                   Browse More →
                 </Link>
              </div>
            </div>
          </div>

          <Link href="/new-arrival" className="hover:text-[#5BF527] transition-colors">New Arrival</Link>
          <Link href="/collection" className="hover:text-[#5BF527] transition-colors">Collection</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-xl hover:scale-125 transition-transform">🔍</button>
          <Link href="/cart" className="relative cursor-pointer group">
            <span className="text-xl group-hover:scale-125 transition-transform block">🛒</span>
            <span className="absolute -top-2 -right-2 bg-[#5BF527] text-black text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">
                0
            </span>
          </Link>
          <Link href="/account" className="bg-black text-white px-7 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95">
            Account
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingCart, User, Search, Zap, LogIn, UserPlus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// সার্চের জন্য প্রোডাক্ট ডাটাবেস
const allProducts = [
  { id: "m1", name: "iPhone 15 Pro Max", price: "1,55,000", category: "mobile", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=200" },
  { id: "w1", name: "Rolex Submariner Gold", price: "12,50,000", category: "watch", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=200" },
  { id: "s1", name: "Nike Air Max 270", price: "14,500", category: "shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" },
  { id: "g1", name: "Sony WH-1000XM5", price: "38,500", category: "gadgets", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200" },
  { id: "l1", name: "MacBook Pro M3 Max", price: "3,45,000", category: "laptop", img: "https://images.unsplash.com/photo-1517336714467-d13a863f1171?q=80&w=200" },
  { id: "f1", name: "Premium Organic Honey", price: "1,250", category: "food", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=200" },
];

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();

  // সার্চ লজিক
  const searchResults = searchQuery === "" ? [] : allProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, isSearchOpen]);

  return (
    <>
    <nav className="sticky top-0 z-[100] w-full h-20 px-4 md:px-12 bg-white/40 backdrop-blur-xl flex items-center shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* ১. লোগো */}
        <Link href="/" className={`flex items-center gap-2 md:gap-3 transition-opacity ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img src="/neonlogo/neoncodelogo.jpg" alt="Logo" className="w-full h-full object-cover"/>
          </div>
          <div className="text-xl md:text-2xl font-black text-black tracking-tighter uppercase">
            NEON<span className="text-[#5BF527]">CODE</span>
          </div>
        </Link>

        {/* ২. ডেস্কটপ মেনু */}
        <div className="hidden md:flex items-center space-x-8 font-black text-[11px] uppercase tracking-widest text-gray-800">
          <Link href="/" className="hover:text-[#5BF527] transition-colors">Home</Link>
          
          <div className="group relative py-2 cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-[#5BF527] transition-all">
              Categories <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-6 group-hover:translate-y-0 transition-all duration-500">
              <div className="grid grid-cols-3 gap-4">
                {categories.map((cat, index) => (
                  <Link href={cat.slug} key={index} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#5BF527]/10 transition-all">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg">{cat.icon}</div>
                    <p className="font-black text-[10px] text-gray-900 uppercase">{cat.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="hover:text-[#5BF527] transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-[#5BF527] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#5BF527] transition-colors">Contact</Link>
        </div>

        {/* ৩. অ্যাকশন বাটনসমূহ (Search, Cart, Login) */}
        <div className="flex items-center space-x-4">
          
          <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <Search size={22} className="text-gray-800" />
          </button>

          <Link href="/cart" className={`relative transition-all ${isOpen ? 'opacity-0 invisible' : 'visible'}`}>
            <ShoppingCart size={24} className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-[#5BF527] text-black text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-sm">
              {cartCount}
            </span>
          </Link>

          <button onClick={() => setIsOpen(true)} className={`md:hidden p-1 text-[#5BF527] transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <Menu size={32} />
          </button>

          {/* ডেস্কটপ একাউন্ট বাটন -> লগইন পেজে নিয়ে যাবে */}
          <Link href="/login" className="hidden md:block bg-black text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-lg active:scale-95">
            Account
          </Link>
        </div>
      </div>
    </nav>

    {/* ৪. ফুল-স্ক্রিন সার্চ ওভারলে */}
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl p-6 md:p-20 flex flex-col items-center text-white">
          <button onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }} className="absolute top-10 right-10 text-white/50 hover:text-[#5BF527] transition-colors"><X size={40} /></button>
          <div className="w-full max-w-4xl mt-20">
            <input autoFocus type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="SEARCH PRODUCTS..." className="w-full bg-transparent border-b-4 border-white/10 py-6 text-2xl md:text-5xl font-black outline-none focus:border-[#5BF527] transition-all placeholder:text-white/10 uppercase tracking-tighter" />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[50vh] pr-4">
              {searchResults.map((p) => (
                <Link href={`/${p.category}/${p.id}`} key={p.id} onClick={() => setIsSearchOpen(false)}>
                  <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 group transition-all">
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0"><img src={p.img} className="w-full h-full object-cover" /></div>
                    <div className="flex-1"><h3 className="font-bold uppercase">{p.name}</h3><p className="text-[#5BF527] font-black">৳{p.price}</p></div>
                    <Zap size={18} className="text-[#5BF527] opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* ৫. মোবাইল স্লাইড-আউট ড্রয়ার */}
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] md:hidden" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 right-0 h-screen w-[85%] bg-white z-[120] shadow-2xl md:hidden flex flex-col overflow-hidden">
            
            <div className="h-20 flex items-center justify-between px-6 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-100"><img src="/neonlogo/neoncodelogo.jpg" className="w-full h-full object-cover"/></div>
                <div className="text-xl font-black text-black tracking-tight">NEON<span className="text-[#5BF527]">CODE</span></div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#5BF527] p-1"><X size={34} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-7">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase text-gray-900 block border-b border-gray-50 pb-4">HOME</Link>
              
              <div className="flex flex-col">
                <button onClick={() => setMobileCatOpen(!mobileCatOpen)} className="flex items-center justify-between text-lg font-bold uppercase text-gray-900 border-b border-gray-50 pb-4">CATEGORIES <ChevronDown size={20} className={`${mobileCatOpen ? 'rotate-180' : ''} transition-transform text-gray-400`} /></button>
                {mobileCatOpen && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {categories.map((cat, i) => (
                      <Link key={i} href={cat.slug} onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-3 bg-gray-50 rounded-2xl">
                        <span className="text-xl">{cat.icon}</span><span className="text-[10px] font-bold uppercase text-gray-700">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase text-gray-900 block border-b border-gray-50 pb-4">BLOG</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase text-gray-900 block border-b border-gray-50 pb-4">ABOUT</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase text-gray-900 block border-b border-gray-50 pb-4">CONTACT</Link>
              
              {/* ড্রয়ারের ভেতর লগইন এবং সাইন আপ বাটন */}
              <div className="pt-6 space-y-4">
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl font-bold uppercase text-xs shadow-lg">
                  <LogIn size={18} /> Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center gap-3 bg-gray-50 text-black border border-gray-100 py-4 rounded-2xl font-bold uppercase text-xs">
                  <UserPlus size={18} /> Create Account
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
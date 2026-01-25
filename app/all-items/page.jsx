"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, LayoutGrid, ChevronRight, Zap } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. সব ক্যাটাগরির পূর্ণাঙ্গ প্রোডাক্ট লিস্ট
const allProducts = [
  { id: "m1", name: "iPhone 15 Pro Max", price: "1,55,000", category: "mobile", brand: "Apple", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=400", badge: "Premium" },
  { id: "w1", name: "Rolex Submariner Gold", price: "12,50,000", category: "watch", brand: "Rolex", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=400", badge: "Luxury" },
  { id: "s1", name: "Nike Air Max 270", price: "14,500", category: "shoes", brand: "Nike", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400", badge: "Trending" },
  { id: "l1", name: "MacBook Pro M3 Max", price: "3,45,000", category: "laptop", brand: "Apple", img: "https://i.ibb.co.com/k6kwpYf7/still-life-device-table.jpg", badge: "Pro Gear" },
  { id: "g1", name: "Sony WH-1000XM5 ANC", price: "38,500", category: "gadgets", brand: "Sony", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", badge: "Audio" },
  { id: "f1", name: "Premium Organic Honey", price: "1,250", category: "food", brand: "NeonOrganic", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400", badge: "Natural" },
  { id: "sp1", name: "Willow Cricket Bat", price: "18,500", category: "sports", brand: "NeonSports", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=400", badge: "Pro Grade" },
  { id: "b1", name: "Radiance Vitamin C Serum", price: "2,200", category: "beauty", brand: "BioPure", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400", badge: "Glowing" },
];

const AllItemsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = ["All", "Mobile", "Watch", "Shoes", "Laptop", "Gadgets", "Food", "Sports", "Beauty"];

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-24">
      
      {/* ১. পেজ হিরো সেকশন */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5BF527]/10 rounded-full blur-[120px]"></div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#5BF527] font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Store Collection</span>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              EXPLORE <span className="text-white/20">CATALOG</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-lg mx-auto font-medium uppercase tracking-widest text-[9px]">
              আপনার পছন্দের সব ক্যাটাগরি এবং প্রিমিয়াম পণ্য এখন একই ছাদের নিচে।
            </p>
          </motion.div>
        </div>
      </section>

      {/* ২. ইন্টারেক্টিভ ফিল্টার বার */}
      <section className="px-4 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-xl p-3 rounded-3xl border border-white/50 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full">
            <div className="bg-black p-3 rounded-2xl text-[#5BF527] ml-1">
               <LayoutGrid size={18} />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-[1.2rem] text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${activeCategory === cat ? 'bg-black text-[#5BF527] shadow-xl' : 'bg-transparent text-black/60 hover:text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ৩. প্রোডাক্ট গ্রিড (সংশোধিত কার্ড ডিজাইন) */}
      <section className="px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                // কার্ড রাউন্ডেড rounded-[2.5rem] এবং প্যাডিং কমানো হয়েছে
                className="group bg-white rounded-[2.5rem] p-4 shadow-xl relative border border-white/50 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* ইমেজ সেকশন - হাইট h-52 (আগে h-64 ছিল) */}
                <Link href={`/${product.category}/${product.id}`}>
                  <div className="relative h-52 bg-gray-50 rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                    <span className="absolute top-4 left-4 bg-black text-[#5BF527] px-3 py-1 rounded-full text-[8px] font-black uppercase z-20">
                      {product.badge}
                    </span>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="bg-white text-black p-3 rounded-full shadow-2xl transform translate-y-5 group-hover:translate-y-0 transition-transform">
                          <ChevronRight size={20} />
                       </div>
                    </div>
                  </div>
                </Link>

                {/* কন্টেন্ট সেকশন */}
                <div className="mt-5 px-2 flex-1">
                  <div className="flex justify-between items-center mb-2">
                     <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest">{product.brand}</p>
                     <p className="text-[8px] font-black text-gray-300 uppercase tracking-tighter">{product.category}</p>
                  </div>
                  <Link href={`/${product.category}/${product.id}`}>
                    <h3 className="text-sm md:text-base font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-tight line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                {/* বাটন সেকশন */}
                <div className="px-2 pb-2">
                  <div className="flex items-center justify-between pt-4 mt-3 border-t border-gray-50">
                    <div className="flex flex-col">
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Price</p>
                       <p className="text-lg font-black text-black">৳{product.price}</p>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        alert('Added to Cart! 🚀');
                      }}
                      className="bg-black text-white p-3.5 rounded-2xl hover:bg-[#5BF527] hover:text-black transition-all active:scale-90 shadow-lg"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Result State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <Zap size={48} className="mx-auto text-black/10 mb-4" />
            <h2 className="text-2xl font-black text-black/20 uppercase tracking-widest">System Empty // No Items Found</h2>
          </div>
        )}
      </section>

    </main>
  );
};

export default AllItemsPage;
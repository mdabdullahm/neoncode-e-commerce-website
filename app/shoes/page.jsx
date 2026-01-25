"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Zap, MoveRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// জুতোর ডাটাবেস
const shoesProducts = [
  { id: "s1", name: "Nike Air Max 270 Neon", price: "14,500", brand: "Nike", type: "Sneakers", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400", badge: "New Trend" },
  { id: "s2", name: "Adidas Ultraboost White", price: "12,800", brand: "Adidas", type: "Running", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=400", badge: "Best Comfort" },
  { id: "s3", name: "Puma RS-X Bold Black", price: "9,500", brand: "Puma", type: "Sneakers", img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=400", badge: "Limited" },
  { id: "s4", name: "Classic Italian Leather", price: "7,200", brand: "Bata", type: "Formal", img: "https://i.ibb.co.com/gL341xVd/concentrated-shoemaker-workshop-making-shoes.jpg", badge: "Office Wear" },
  { id: "s5", name: "Jordan 1 Retro High", price: "22,000", brand: "Jordan", type: "Sneakers", img: "https://i.ibb.co.com/qFg9QkTr/view-skateboard-with-retro-memorabilia.jpg", badge: "Hype" },
  { id: "s6", name: "Hiking Waterproof Boots", price: "8,500", brand: "Apex", type: "Boots", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400", badge: "Adventure" },
];

const ShoesPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ক্যাটাগরি ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BF527] rounded-full blur-[180px] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="text-[#5BF527] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Elevate Your Walk</span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                STEP INTO <br /> <span className="text-[#5BF527]">STYLE</span>
              </h1>
              <p className="text-gray-400 mt-6 max-w-sm font-medium">আপনার প্রতি কদমে নতুনত্বের ছোঁয়া। প্রিমিয়াম স্নিকার্স থেকে শুরু করে ফরমাল লেদার—সবই এখন NEONCODE-এ।</p>
            </div>

            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-12 md:mt-0"
            >
               <img 
                 src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" 
                 alt="Main Shoe" 
                 className="w-72 md:w-[450px] drop-shadow-[0_45px_60px_rgba(91,245,39,0.4)]"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ফিল্টারিং */}
      <section className="px-4 md:px-12 mt-10">
        <div className="flex overflow-x-auto gap-3 mb-12 no-scrollbar py-2 justify-center">
          {["All", "Sneakers", "Running", "Formal", "Boots"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 shadow-lg ${filter === cat ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {shoesProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[3.5rem] p-5 shadow-2xl relative group border border-white/50"
            >
              <Link href={`/shoes/${product.id}`}>
                <div className="relative h-80 bg-gray-50 rounded-[3rem] overflow-hidden flex items-center justify-center">
                  <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:rotate-6 transition-all duration-700" />
                  
                  {/* হোভার অ্যাকশন */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                     <span className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2">
                       Explore <MoveRight size={16} />
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4 pb-4">
                <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-[0.3em] mb-2">{product.brand} • {product.type}</p>
                <Link href={`/shoes/${product.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-none mb-4">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                   <p className="text-3xl font-black text-black">৳{product.price}</p>
                   <button 
                     onClick={() => addToCart(product)}
                     className="bg-black text-white p-4 rounded-2xl hover:bg-[#5BF527] hover:text-black transition-all active:scale-90"
                   >
                     <ShoppingCart size={22} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default ShoesPage;
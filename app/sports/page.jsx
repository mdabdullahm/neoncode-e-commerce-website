"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Trophy, Target, Dumbbell, Activity, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. স্পোর্টস প্রোডাক্ট ডাটাবেস
const sportsProducts = [
  { id: "sp1", name: "Grade A Willow Cricket Bat", price: "18,500", brand: "NeonSports", type: "Cricket", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=400", badge: "Pro Grade" },
  { id: "sp2", name: "FIFA Official Match Ball", price: "4,200", brand: "Adidas", type: "Football", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400", badge: "Authentic" },
  { id: "sp3", name: "Adjustable Dumbbell Set", price: "12,800", brand: "NeonGym", type: "Gym", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400", badge: "Home Gym" },
  { id: "sp4", name: "Wilson Pro Tennis Racket", price: "15,500", brand: "Wilson", type: "Tennis", img: "https://i.ibb.co.com/LDkbRdd2/tennis-racket-with-bag-tennis-field.jpg", badge: "Lightweight" },
  { id: "sp5", name: "Premium Yoga Mat", price: "2,200", brand: "NeonFit", type: "Gym", img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=400", badge: "Non-Slip" },
  { id: "sp6", name: "Full Compression Kit", price: "3,500", brand: "NeonSports", type: "Apparel", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400", badge: "Performance" },
];

const SportsPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. স্পোর্টস এনার্জেটিক ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BF527] rounded-full blur-[180px] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="flex items-center justify-center md:justify-start gap-2 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.5em] mb-4">
                <Trophy size={16} /> Be The Champion
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                ULTIMATE <br /> <span className="text-[#5BF527]">SPORTS</span>
              </h1>
              <p className="text-gray-400 mt-6 max-w-sm font-medium leading-relaxed">
                আপনার ভেতরকার অ্যাথলেটকে জাগিয়ে তুলুন। সেরা মানের প্রফেশনাল স্পোর্টস গিয়ার এবং জিমের সরঞ্জাম নিয়ে এলাম আমরা।
              </p>
            </div>

            <motion.div 
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="mt-12 md:mt-0"
            >
               <img 
                 src="https://i.ibb.co.com/S791T6Qd/tennis-girl-professional-tennis-court.jpg" 
                 alt="Sports Energy" 
                 className="w-72 md:w-[450px] drop-shadow-[0_45px_60px_rgba(91,245,39,0.3)] rounded-[3rem] -rotate-3"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. ফিল্টারিং সেকশন */}
      <section className="px-4 md:px-12 mt-10">
        <div className="flex overflow-x-auto gap-3 mb-16 no-scrollbar justify-center py-2">
          {["All", "Cricket", "Football", "Gym", "Tennis"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 ${filter === cat ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ৪. প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {sportsProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3.5rem] p-5 shadow-2xl transition-all duration-500 group relative border border-white/50 overflow-hidden"
            >
              <Link href={`/sports/${product.id}`}>
                <div className="relative h-80 bg-gray-50 rounded-[3rem] overflow-hidden flex items-center justify-center">
                  <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-md">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                     <span className="bg-[#5BF527] text-black px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl">
                       Full Gear Specs
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                   <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-widest">{product.brand}</p>
                   <Activity size={14} className="text-[#5BF527] animate-pulse" />
                </div>
                <Link href={`/sports/${product.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-none mb-6 line-clamp-1 tracking-tighter">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                   <p className="text-3xl font-black text-black tracking-tighter">৳{product.price}</p>
                   <button 
                     onClick={() => {
                        addToCart(product);
                        alert('Gear Added To Kit! 🏆');
                     }}
                     className="bg-black text-white p-4 rounded-2xl hover:bg-[#5BF527] hover:text-black transition-all active:scale-90 shadow-lg"
                   >
                     <ShoppingCart size={22} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৫. স্পোর্টস গ্যারান্টি সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pro Certified", desc: "Approved by professional athletes", icon: <Target size={30}/> },
              { title: "Heavy Duty", desc: "Long lasting durable equipment", icon: <Dumbbell size={30}/> },
              { title: "Global Brands", desc: "Direct from international makers", icon: <Trophy size={30}/> },
            ].map((item, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl p-10 rounded-[3rem] border border-white/50 flex flex-col items-center text-center shadow-lg hover:bg-white transition-all group">
                 <div className="text-black mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                 <h4 className="font-black text-black uppercase text-sm tracking-widest mb-2">{item.title}</h4>
                 <p className="text-black/60 font-bold text-xs uppercase tracking-tighter">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
};

export default SportsPage;
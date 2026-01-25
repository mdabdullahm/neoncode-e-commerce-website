"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Leaf, Zap, Apple, UtensilsCrossed, Wheat, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. খাবারের ডাটাবেস
const foodProducts = [
  { id: "f1", name: "Premium Organic Honey", price: "1,250", brand: "NeonOrganic", type: "Natural", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400", badge: "Pure & Raw" },
  { id: "f2", name: "Roasted Mixed Nuts", price: "850", brand: "NeonSnacks", type: "Snack", img: "https://i.ibb.co.com/rYbM1Tm/top-view-walnuts-with-hazelnuts-with-pistachios-bowl-brown-towel-turquoise-table.jpg", badge: "High Protein" },
  { id: "f3", name: "Fresh Green Apples", price: "450", brand: "FarmFresh", type: "Fruit", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400", badge: "Direct Farm" },
  { id: "f4", name: "Whole Grain Granola", price: "950", brand: "HealthyStart", type: "Breakfast", img: "https://i.ibb.co.com/JwPJfGn8/granola-pink-background.jpg", badge: "No Sugar" },
  { id: "f5", name: "Premium Medjool Dates", price: "1,400", brand: "ArabianTreat", type: "Natural", img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=400", badge: "Imported" },
  { id: "f6", name: "Natural Peanut Butter", price: "680", brand: "NeonOrganic", type: "Natural", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400", badge: "Home Made" },
];

const FoodPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. ফ্রেশ ফুড ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[3.5rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BF527] rounded-full blur-[180px] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="flex items-center justify-center md:justify-start gap-2 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                <Leaf size={16} /> 100% Organic & Fresh
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                PURE <br /> <span className="text-[#5BF527]">NATURE</span>
              </h1>
              <p className="text-gray-400 mt-6 max-w-sm font-medium italic leading-relaxed">
                সরাসরি খামার থেকে সংগৃহীত সেরা মানের খাবার এখন আপনার দরজায়। সুস্থ থাকতে বেছে নিন অর্গানিক লাইফস্টাইল।
              </p>
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-12 md:mt-0"
            >
               <img 
                 src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=400" 
                 alt="Healthy Food" 
                 className="w-72 md:w-[420px] drop-shadow-[0_45px_60px_rgba(91,245,39,0.3)] rotate-3"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. খাবারের ক্যাটাগরি ফিল্টার */}
      <section className="px-4 md:px-12 mt-10">
        <div className="flex overflow-x-auto gap-3 mb-12 no-scrollbar justify-center py-2">
          {["All", "Natural", "Snack", "Fruit", "Breakfast"].map((cat) => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {foodProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] p-4 shadow-2xl transition-all duration-500 group relative border border-white/50"
            >
              <Link href={`/food/${product.id}`}>
                <div className="relative h-64 bg-gray-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <span className="absolute top-5 left-5 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                     <span className="bg-[#5BF527] text-black px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">
                       View Nutrition
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-6 px-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                   <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-widest">{product.brand}</p>
                   <CheckCircle size={14} className="text-[#5BF527]" />
                </div>
                <Link href={`/food/${product.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-tight line-clamp-1">{product.name}</h3>
                </Link>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
                   <p className="text-2xl font-black text-black">৳{product.price}</p>
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

      {/* ৫. খাবারের গ্যারান্টি সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Chemical Free", desc: "No harmful additives used", icon: <Wheat size={30}/> },
              { title: "Hygienic Pack", desc: "Double layer safe packaging", icon: <UtensilsCrossed size={30}/> },
              { title: "Fresh Supply", desc: "Daily restocked from farms", icon: <Apple size={30}/> },
            ].map((item, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl p-10 rounded-[3rem] border border-white/50 flex flex-col items-center text-center shadow-lg hover:bg-white transition-all">
                 <div className="text-black mb-4">{item.icon}</div>
                 <h4 className="font-black text-black uppercase text-sm tracking-widest mb-2">{item.title}</h4>
                 <p className="text-black/60 font-bold text-xs uppercase tracking-tighter">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
};

export default FoodPage;
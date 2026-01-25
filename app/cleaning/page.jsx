"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingCart, Filter, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. ক্লিনিং প্রোডাক্ট ডাটাবেস
const cleaningProducts = [
  { id: "c1", name: "Robotic Vacuum Cleaner Pro", price: "28,500", brand: "NeonTech", type: "Gadget", img: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=400", badge: "Smart Home" },
  { id: "c2", name: "Eco-Friendly Floor Liquid", price: "450", brand: "PureHome", type: "Liquid", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", badge: "Natural" },
  { id: "c3", name: "Microfiber Spin Mop Set", price: "1,850", brand: "EasyClean", type: "Tool", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=400", badge: "Best Seller" },
  { id: "c4", name: "High Pressure Water Gun", price: "3,200", brand: "NeonPower", type: "Gadget", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=400", badge: "Powerful" },
  { id: "c5", name: "Anti-Bacterial Surface Spray", price: "320", brand: "Hygiene+", type: "Liquid", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400", badge: "Safety First" },
  { id: "c6", name: "Professional Window Squeegee", price: "750", brand: "ClearView", type: "Tool", img: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=400", badge: "Handy" },
];

const CleaningPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. ক্যাটাগরি হেডার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-white rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/50">
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#5BF527]/20 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="flex items-center justify-center md:justify-start gap-2 text-black/50 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                <Sparkles size={14} className="text-[#5BF527]" /> Pure & Sparkling Homes
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tighter">
                CLEANING <br /> <span className="text-[#5BF527] drop-shadow-sm">ESSENTIALS</span>
              </h1>
              <p className="text-gray-500 mt-6 max-w-sm font-medium italic">
                "পরিচ্ছন্ন ঘর, সুস্থ জীবন।" আপনার ঘরকে জীবাণুমুক্ত এবং ঝকঝকে রাখতে সেরা সব ক্লিনিং টুলস এখন এক জায়গায়।
              </p>
            </div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-10 md:mt-0 relative"
            >
               <div className="absolute inset-0 bg-[#5BF527] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
               <img 
                 src="https://i.ibb.co.com/7dLGy9KG/young-beautiful-girl-apron-rubber-gloves-holding-basin-with-cleaning-tools-smiling-showing-thumbs-up.jpg" 
                 alt="Cleaning Header" 
                 className="w-64 md:w-80 relative z-10 drop-shadow-2xl rounded-3xl rotate-3"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. ফিল্টারিং সেকশন */}
      <section className="px-4 md:px-12 mt-6">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Liquid", "Gadget", "Tool"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md active:scale-95 ${filter === type ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black/5'}`}
            >
              {type === "All" ? "Full Collection" : `${type}s`}
            </button>
          ))}
        </div>

        {/* ৪. প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cleaningProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] p-4 shadow-2xl transition-all duration-500 group relative border border-white/40"
            >
              <Link href={`/cleaning/${product.id}`}>
                <div className="relative h-64 bg-gray-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <span className="absolute top-5 left-5 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-lg">
                    {product.badge}
                  </span>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Link>

              <div className="mt-6 px-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                   <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-widest">{product.brand}</p>
                   <div className="flex items-center gap-1 text-yellow-400">
                      {"★★★".split("").map((_,i) => <CheckCircle2 key={i} size={10} className="text-[#5BF527]" />)}
                   </div>
                </div>
                <Link href={`/cleaning/${product.id}`}>
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-tight line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-4 flex items-center justify-between">
                   <p className="text-2xl font-black text-black">৳{product.price}</p>
                   <button 
                     onClick={() => {
                        addToCart(product);
                        alert('Added to Cart! 🧼');
                     }}
                     className="bg-black text-white p-3 rounded-2xl hover:bg-[#5BF527] hover:text-black transition-all active:scale-90 shadow-lg"
                   >
                     <ShoppingCart size={20} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৫. ট্রাস্ট সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Non-Toxic", desc: "Safe for kids and pets", icon: "🌱" },
              { title: "Fast Delivery", desc: "Within 24 hours in Dhaka", icon: "🚚" },
              { title: "Premium Quality", desc: "Top rated international brands", icon: "⭐" },
            ].map((item, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 flex flex-col items-center text-center shadow-lg">
                 <span className="text-4xl mb-4">{item.icon}</span>
                 <h4 className="font-black text-black uppercase text-sm tracking-widest">{item.title}</h4>
                 <p className="text-black/60 font-bold text-xs mt-2 uppercase">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
};

export default CleaningPage;
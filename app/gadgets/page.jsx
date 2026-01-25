"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Monitor, Headphones, Watch, BatteryCharging, Cpu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. গ্যাজেট প্রোডাক্ট ডাটাবেস
const gadgetProducts = [
  { id: "g1", name: "Sony WH-1000XM5 ANC", price: "38,500", brand: "Sony", type: "Audio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", badge: "Noise Cancelling" },
  { id: "g2", name: "Razer DeathAdder V3 Pro", price: "12,500", brand: "Razer", type: "Gaming", img: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=400", badge: "Ultra Light" },
  { id: "g3", name: "Insta360 X3 Action Cam", price: "45,000", brand: "Insta360", type: "Camera", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400", badge: "360 Video" },
  { id: "g4", name: "Anker 737 Power Bank", price: "14,500", brand: "Anker", type: "Power", img: "https://i.ibb.co.com/Fb9ptC5R/man-using-external-storage-used.jpg", badge: "140W Fast" },
  { id: "g5", name: "Keychron K2 Mechanical", price: "8,500", brand: "Keychron", type: "Gaming", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=400", badge: "Wireless" },
  { id: "g6", name: "DJI Mini 3 Pro Drone", price: "85,000", brand: "DJI", type: "Camera", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=400", badge: "4K HDR" },
];

const GadgetsPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. গ্যাজেট ফিউচারিস্টিক ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-white/5">
          {/* Neon Glow Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#5BF527]/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="flex items-center justify-center md:justify-start gap-2 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.5em] mb-6">
                <Cpu size={16} /> Next-Gen Technology
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                SMART <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BF527] to-blue-400">GADGETS</span>
              </h1>
              <p className="text-gray-400 mt-8 max-w-md font-medium leading-relaxed italic">
                ভবিষ্যৎ এখন আপনার হাতের মুঠোয়। প্রিমিয়াম অডিও, গেমিং গিয়ার এবং স্মার্ট ডিভাইসের এক বিশাল কালেকশন।
              </p>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 md:mt-0"
            >
               <img 
                 src="https://i.ibb.co.com/nswfxycz/top-view-arrangement-with-gadgets.jpg" 
                 alt="Gadget Hero" 
                 className="w-72 md:w-[450px] relative z-10 drop-shadow-[0_0_50px_rgba(91,245,39,0.4)] rotate-[-5deg] rounded-[3rem]"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. টেক ফিল্টার বার */}
      <section className="px-4 md:px-12 mt-10">
        <div className="flex overflow-x-auto gap-4 mb-16 no-scrollbar justify-start md:justify-center py-4">
          {["All", "Audio", "Gaming", "Camera", "Power"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 shadow-xl active:scale-90 border-2 ${filter === type ? 'bg-black text-[#5BF527] border-black' : 'bg-white/80 backdrop-blur-md text-black border-white hover:border-black'}`}
            >
              {type} Gear
            </button>
          ))}
        </div>

        {/* ৪. গ্যাজেট গ্রিড and cord*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {gadgetProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -15 }}
              className="bg-black/90 rounded-[2rem] p-3 shadow-2xl relative group border border-white/10 overflow-hidden"
            >
              <Link href={`/gadgets/${product.id}`}>
                <div className="relative h-72 bg-gray-900 rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/5">
                  <span className="absolute top-6 left-6 bg-[#5BF527] text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-[0_0_20px_rgba(91,245,39,0.5)]">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
                  
                  {/* ফিউচারিস্টিক হোভার ইফেক্ট */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5BF527]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                     <span className="bg-white text-black px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2">
                       Analyze Gear <Zap size={16} />
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                   <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-widest">{product.brand}</p>
                   <div className="w-2 h-2 rounded-full bg-[#5BF527] animate-pulse"></div>
                </div>
                <Link href={`/gadgets/${product.id}`}>
                  <h3 className="text-xl font-black text-white group-hover:text-[#5BF527] transition-colors uppercase leading-none mb-6 line-clamp-1 tracking-tighter">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                   <p className="text-3xl font-black text-[#5BF527] tracking-tighter">৳{product.price}</p>
                   <button 
                     onClick={() => {
                        addToCart(product);
                        alert('Gear Secured! 🚀');
                     }}
                     className="bg-white text-black p-4 rounded-2xl hover:bg-[#5BF527] transition-all active:scale-90 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                   >
                     <ShoppingCart size={22} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৫. টেক সাপোর্ট সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Original Global", desc: "Direct from authorized makers", icon: <Monitor size={30}/> },
              { title: "Smart Support", desc: "Expert tech assistance 24/7", icon: <Headphones size={30}/> },
              { title: "Super Charging", desc: "Fastest delivery network", icon: <BatteryCharging size={30}/> },
            ].map((item, i) => (
              <div key={i} className="bg-black rounded-[3rem] p-10 border border-white/10 flex flex-col items-center text-center group hover:border-[#5BF527]/50 transition-all shadow-2xl">
                 <div className="text-[#5BF527] mb-6 group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                 </div>
                 <h4 className="font-black text-white uppercase text-sm tracking-widest mb-3">{item.title}</h4>
                 <p className="text-gray-500 font-bold text-[10px] uppercase tracking-tighter">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

    </main>
  );
};

export default GadgetsPage;
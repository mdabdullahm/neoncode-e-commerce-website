"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Laptop, Cpu, ShieldCheck, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. ল্যাপটপ প্রোডাক্ট ডাটাবেস
const laptopProducts = [
  { id: "l1", name: "MacBook Pro M3 Max", price: "3,45,000", brand: "Apple", type: "Ultrabook", img: "https://i.ibb.co.com/k6kwpYf7/still-life-device-table.jpg", badge: "Elite Performance", specs: "16-core CPU // 40-core GPU" },
  { id: "l2", name: "ROG Zephyrus G14", price: "2,15,000", brand: "ASUS", type: "Gaming", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=400", badge: "Gaming Beast", specs: "RTX 4060 // 16GB DDR5" },
  { id: "l3", name: "Dell XPS 13 Plus", price: "1,85,000", brand: "Dell", type: "Ultrabook", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400", badge: "Premium Look", specs: "Core i7 // 1TB SSD" },
  { id: "l4", name: "HP Spectre x360", price: "1,65,000", brand: "HP", type: "Business", img: "https://i.ibb.co.com/N6KxPFnm/still-life-books-versus-technology.jpg", badge: "2-in-1 Touch", specs: "OLED Touch // 16GB RAM" },
  { id: "l5", name: "Lenovo Legion Slim 5", price: "1,45,000", brand: "Lenovo", type: "Gaming", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=400", badge: "Value Gaming", specs: "RTX 4050 // Ryzen 7" },
  { id: "l6", name: "Microsoft Surface Pro 9", price: "1,25,000", brand: "Microsoft", type: "Business", img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=400", badge: "Ultra Portable", specs: "Tablet PC // i5 12th Gen" },
];

const LaptopPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. হাই-পারফরম্যান্স ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[4rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BF527]/20 rounded-full blur-[150px]"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="text-center lg:text-left">
              <span className="bg-[#5BF527] text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-6 inline-block">
                Power Unleashed
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
                PRO <br /> <span className="text-[#5BF527] drop-shadow-[0_0_30px_rgba(91,245,39,0.3)]">LAPTOPS</span>
              </h1>
              <p className="text-gray-400 mt-8 max-w-lg font-medium leading-relaxed italic">
                আপনার কাজের গতিকে বাড়িয়ে দিতে নিয়ে এলাম বিশ্বের সেরা সব ল্যাপটপ। কোডিং, গেমিং বা ডিজাইন—সবকিছুর জন্য পারফেক্ট গিয়ার এখন আপনার হাতের মুঠোয়।
              </p>
            </div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mt-16 lg:mt-0"
            >
               <img 
                 src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=500" 
                 alt="Laptop Hero" 
                 className="w-72 md:w-[450px] drop-shadow-[0_40px_80px_rgba(91,245,39,0.2)] rotate-[-8deg] hover:rotate-0 transition-transform duration-700"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. ফিল্টার বার */}
      <section className="px-4 md:px-12 mt-6">
        <div className="flex overflow-x-auto gap-3 mb-12 no-scrollbar justify-center py-4">
          {["All", "Ultrabook", "Gaming", "Business"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${filter === type ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black/5'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* ৪. ল্যাপটপ প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {laptopProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[2.5rem] p-6 shadow-2xl relative group border border-white/50 overflow-hidden"
            >
              <Link href={`/laptop/${product.id}`}>
                <div className="relative h-64 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-xl">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                  
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-full group-hover:translate-y-0">
                     <span className="bg-white text-black px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">
                       View Machine Specs
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                   <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-[0.2em]">{product.brand}</p>
                   <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{product.specs}</p>
                </div>
                <Link href={`/laptop/${product.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-none mb-6 line-clamp-1 tracking-tighter">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                   <p className="text-2xl font-black text-black tracking-tighter">৳{product.price}</p>
                   <button 
                     onClick={() => addToCart(product)}
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

      {/* ৫. সাপোর্ট সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-xl rounded-[4rem] p-10 md:p-16 border border-white/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
               <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center shadow-2xl">
                  <ShieldCheck size={40} className="text-[#5BF527]" />
               </div>
               <div className="text-center md:text-left">
                  <h2 className="text-2xl font-black text-black uppercase tracking-tight">Official Warranty</h2>
                  <p className="text-black/60 font-bold text-xs mt-1 uppercase">আমরা দিচ্ছি সরাসরি ব্র্যান্ড ওয়ারেন্টি এবং এক্সপার্ট টেকনিক্যাল সাপোর্ট।</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">2 Year Support</div>
               <div className="bg-white text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase shadow-xl">Original Gear</div>
            </div>
         </div>
      </section>

    </main>
  );
};

export default LaptopPage;
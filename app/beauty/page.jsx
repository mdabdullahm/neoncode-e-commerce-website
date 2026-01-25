"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Sparkles, Wand2, Flower2, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. বিউটি প্রোডাক্ট ডাটাবেস
const beautyProducts = [
  { id: "b1", name: "L'Oreal Infallible Foundation", price: "1,850", brand: "L'Oreal", type: "Makeup", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400", badge: "Flawless" },
  { id: "b2", name: "Vitamin C Radiance Serum", price: "2,200", brand: "The Body Shop", type: "Skincare", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400", badge: "Glowing" },
  { id: "b3", name: "Chanel No. 5 Perfume", price: "18,500", brand: "Chanel", type: "Fragrance", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400", badge: "Luxury" },
  { id: "b4", name: "Matte Liquid Lipstick Red", price: "950", brand: "MAC", type: "Makeup", img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=400", badge: "Bold" },
  { id: "b5", name: "Hydrating Hyaluronic Acid", price: "1,450", brand: "Ordinary", type: "Skincare", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400", badge: "Hydrated" },
  { id: "b6", name: "Organic Rose Water Toner", price: "650", brand: "BioPure", type: "Skincare", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=400", badge: "Natural" },
];

const BeautyPage = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. লাক্সারি বিউটি ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5BF527]/10 rounded-full blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="text-center md:text-left">
              <span className="flex items-center justify-center md:justify-start gap-2 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.5em] mb-5">
                <Sparkles size={16} /> Reveal Your Glow
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
                BEAUTY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BF527] to-white italic">EMPIRE</span>
              </h1>
              <p className="text-gray-400 mt-8 max-w-sm font-medium leading-relaxed">
                আপনার রূপচর্চায় আভিজাত্যের ছোঁয়া। প্রিমিয়াম কসমেটিকস এবং স্কিনকেয়ার কালেকশন এখন আপনার নাগালে।
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-12 md:mt-0 relative"
            >
               <div className="absolute inset-0 bg-white rounded-full blur-[80px] opacity-10 animate-pulse"></div>
               <img 
                 src="https://i.ibb.co.com/sv53xG5c/beautiful-lady-wearing-mask-face-care-wearing-hair-curlers-isolated.jpg" 
                 alt="Beauty Banner" 
                 className="w-72 md:w-[450px] relative z-10 drop-shadow-[0_30px_60px_rgba(91,245,39,0.3)] rounded-[3rem] rotate-2"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৩. ফিল্টারিং */}
      <section className="px-4 md:px-12 mt-10">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Skincare", "Makeup", "Fragrance"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-10 py-4 rounded-3xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-90 ${filter === type ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black hover:text-white'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* ৪. বিউটি প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {beautyProducts
            .filter(p => filter === "All" || p.type === filter)
            .map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[4rem] p-6 shadow-2xl relative group border border-white/50 overflow-hidden"
            >
              <Link href={`/beauty/${product.id}`}>
                <div className="relative h-80 bg-gray-50 rounded-[3rem] overflow-hidden flex items-center justify-center">
                  <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-md">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  
                  {/* হোভার গ্লস ইফেক্ট */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-10 translate-y-full group-hover:translate-y-0">
                     <span className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                       View Secrets <Wand2 size={16} />
                     </span>
                  </div>
                </div>
              </Link>

              <div className="mt-8 px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{product.brand}</p>
                   <Heart size={18} className="text-gray-200 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
                <Link href={`/beauty/${product.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-none mb-6 line-clamp-1">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                   <p className="text-3xl font-black text-black tracking-tighter">৳{product.price}</p>
                   <button 
                     onClick={() => addToCart(product)}
                     className="bg-black text-white p-4 rounded-3xl hover:bg-[#5BF527] hover:text-black transition-all active:scale-90 shadow-lg"
                   >
                     <ShoppingCart size={22} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৫. বিউটি গ্যারান্টি সেকশন */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-xl rounded-[4rem] p-10 md:p-16 border border-white/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
               <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-2xl">
                  <ShieldCheck size={40} className="text-[#5BF527]" />
               </div>
               <div>
                  <h2 className="text-2xl font-black text-black uppercase">Dermatologically Tested</h2>
                  <p className="text-sm font-bold text-black/60 mt-1 uppercase">আপনার ত্বকের সুরক্ষায় আমরা দিচ্ছি ১০০% অরিজিনাল প্রোডাক্টের নিশ্চয়তা।</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="bg-black text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">Natural Only</div>
               <div className="bg-[#5BF527] text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Skin Safe</div>
            </div>
         </div>
      </section>

    </main>
  );
};

export default BeautyPage;
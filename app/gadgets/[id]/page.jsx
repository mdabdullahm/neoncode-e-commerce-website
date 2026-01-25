"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, 
  Truck, RefreshCw, Cpu, Battery, Wifi, MousePointer2, Headphones
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. গ্যাজেট ডাটাবেস
const gadgetProducts = [
  { id: "g1", name: "Sony WH-1000XM5 ANC", price: "38,500", brand: "Sony", type: "Audio", desc: "সনি WH-1000XM5 আপনাকে দিচ্ছে পৃথিবীর অন্যতম সেরা নয়েজ ক্যান্সলেশন অভিজ্ঞতা। এর স্মার্ট সেন্সর এবং ৩০ ঘণ্টার ব্যাটারি লাইফ আপনার মিউজিক শোনার অভিজ্ঞতাকে অন্য মাত্রায় নিয়ে যাবে।", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600", specs: { drive: "30mm Driver", battery: "30 Hours", tech: "ANC 2.0", weight: "250g" } },
  { id: "g2", name: "Razer DeathAdder V3 Pro", price: "12,500", brand: "Razer", type: "Gaming", desc: "গেমারদের জন্য তৈরি এই মাউসটি অত্যন্ত হালকা এবং নির্ভুল। এর হাই-স্পিড অপটিক্যাল সেন্সর আপনাকে গেমিং এর সময় দিবে সুপার-ফাস্ট রেসপন্স টাইম।", img: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=600", specs: { drive: "30K DPI", battery: "90 Hours", tech: "HyperPolling", weight: "63g" } },
  { id: "g3", name: "Insta360 X3 Action Cam", price: "45,000", brand: "Insta360", type: "Camera", desc: "অ্যাডভেঞ্চার লাভারদের জন্য ৩৬০ ডিগ্রি ক্যামেরা। এর ৫.৭-কে ভিডিও কোয়ালিটি এবং ফ্লো-স্টেট স্ট্যাবিলাইজেশন আপনার প্রতিটি মুহূর্তকে করবে স্মরণীয়।", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=600", specs: { drive: "1/2\" Sensor", battery: "80 Mins", tech: "5.7K 360", weight: "180g" } },
  { id: "g4", name: "Anker 737 Power Bank", price: "14,500", brand: "Anker", type: "Power", desc: "এঙ্কার ৭৩৭ পাওয়ার ব্যাংক দিয়ে আপনার ল্যাপটপ বা ফোন চার্জ দিন সুপার ফাস্ট। এতে রয়েছে ১৪০ ওয়াট টু-ওয়ে ফাস্ট চার্জিং সুবিধা।", img: "https://i.ibb.co.com/Fb9ptC5R/man-using-external-storage-used.jpg", specs: { drive: "24000mAh", battery: "140W Out", tech: "GaN Prime", weight: "630g" } },
  { id: "g5", name: "Keychron K2 Mechanical", price: "8,500", brand: "Keychron", type: "Gaming", desc: "টাইপিং এর এক নতুন অভিজ্ঞতা। এই মেকানিক্যাল কিবোর্ডটি উইন্ডোজ এবং ম্যাক উভয় সিস্টেমেই খুব চমৎকার কাজ করে।", img: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600", specs: { drive: "Gateron Blue", battery: "4000mAh", tech: "Bluetooth 5.1", weight: "794g" } },
  { id: "g6", name: "DJI Mini 3 Pro Drone", price: "85,000", brand: "DJI", type: "Camera", desc: "আকাশ থেকে অসাধারণ সব শট নিন এই ডিজেআই ড্রোন দিয়ে। এটি ওজনে অনেক হালকা এবং এর ৪৮ মেগাপিক্সেল ক্যামেরা আপনাকে দিবে ঝকঝকে ছবি।", img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=600", specs: { drive: "48MP CMOS", battery: "34 Mins", tech: "OcuSync 3", weight: "249g" } },
];

export default function GadgetDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // সঠিক প্রোডাক্ট খুঁজে বের করা
  const product = gadgetProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-black uppercase text-2xl text-red-500">
        System Error: Gear Not Found!
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] text-white py-10 px-4 md:px-12 selection:bg-[#5BF527] selection:text-black">
      
      {/* ১. ব্যাক বাটন (নিওন স্টাইল) */}
      <Link href="/gadgets" className="inline-flex items-center gap-2 mb-10 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.4em] hover:translate-x-[-5px] transition-all">
        <ArrowLeft size={16} /> RE-ENTER GADGET LAB
      </Link>

      {/* ২. মেইন ডিটেইল কার্ড (ডার্ক গ্লাস-মরফিজম) */}
      <section className="bg-slate-900/50 backdrop-blur-3xl rounded-[4rem] p-6 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5BF527]/5 rounded-full blur-[150px]"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
          
          {/* বাম পাশ: ইমেজ উইথ গ্লো */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="bg-black rounded-[3.5rem] h-[450px] md:h-[600px] flex items-center justify-center relative group overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
               />
               <div className="absolute top-8 left-8 bg-[#5BF527] text-black px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(91,245,39,0.5)]">
                 <Cpu size={14} className="inline mr-2" /> Original Gear
               </div>
            </div>
          </motion.div>

          {/* ডান পাশ: টেকনিক্যাল ইনফো */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.5em] mb-4">
                {product.brand} 
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl md:text-5xl font-black text-[#5BF527] tracking-tighter">৳{product.price}</p>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Star size={14} className="fill-[#5BF527] text-[#5BF527]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Analytic Rated</span>
                </div>
              </div>

              <p className="text-gray-400 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* ৩. টেক স্পেকস গ্রিড (আইকন সহ) */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-black p-5 rounded-2xl border border-white/5 hover:border-[#5BF527]/30 transition-all">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest mb-2 flex items-center gap-2">
                       <Headphones size={14}/> Core Drive
                    </p>
                    <p className="text-xs font-black text-white uppercase">{product.specs.drive}</p>
                 </div>
                 <div className="bg-black p-5 rounded-2xl border border-white/5 hover:border-[#5BF527]/30 transition-all">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest mb-2 flex items-center gap-2">
                       <Battery size={14}/> Stamina
                    </p>
                    <p className="text-xs font-black text-white uppercase">{product.specs.battery}</p>
                 </div>
                 <div className="bg-black p-5 rounded-2xl border border-white/5 hover:border-[#5BF527]/30 transition-all">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest mb-2 flex items-center gap-2">
                       <Zap size={14}/> System Tech
                    </p>
                    <p className="text-xs font-black text-white uppercase">{product.specs.tech}</p>
                 </div>
                 <div className="bg-black p-5 rounded-2xl border border-white/5 hover:border-[#5BF527]/30 transition-all">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest mb-2 flex items-center gap-2">
                       <MousePointer2 size={14}/> Form Factor
                    </p>
                    <p className="text-xs font-black text-white uppercase">{product.specs.weight}</p>
                 </div>
              </div>

              {/* ৪. অ্যাকশন বাটনসমূহ (নিওন ইফেক্ট) */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 border-2 ${isAdded ? 'bg-[#5BF527] text-black border-[#5BF527]' : 'bg-transparent text-white border-white/20 hover:border-[#5BF527] hover:text-[#5BF527]'}`}
                >
                  {isAdded ? '✓ GEAR SECURED' : <><ShoppingCart size={18} /> ADD TO SYSTEM</>}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(91,245,39,0.5)] transition-all active:scale-95"
                >
                  <Zap size={18} /> INITIALIZE BUY
                </button>
              </div>

              {/* ৫. ট্রাস্ট সেকশন (গ্যাজেট স্পেশাল) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#5BF527]/10 rounded-full flex items-center justify-center text-[#5BF527]">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-white">Authentic</p>
                       <p className="text-[8px] font-bold text-gray-500 uppercase">Global Edition</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-white">Quick Pulse</p>
                       <p className="text-[8px] font-bold text-gray-500 uppercase">24H Delivery</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                       <RefreshCw size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-white">Reliability</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Easy Returns</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৬. রিলেটেড গিয়ার্স */}
      <section className="mt-24 max-w-7xl mx-auto">
         <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 px-2 border-l-8 border-[#5BF527] pl-6">
           SIMILAR <span className="text-[#5BF527]">GEARS</span>
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gadgetProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/gadgets/${item.id}`} key={item.id} className="group">
                 <div className="bg-slate-900/50 backdrop-blur-md p-4 rounded-[2.5rem] border border-white/5 hover:border-[#5BF527]/30 transition-all duration-500 shadow-2xl group-hover:-translate-y-3">
                    <div className="h-44 bg-black rounded-[2rem] overflow-hidden mb-6 relative border border-white/5">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute bottom-3 right-3 bg-[#5BF527] text-black text-[9px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg">৳{item.price}</div>
                    </div>
                    <div className="px-2">
                       <p className="text-[8px] font-black text-[#5BF527] uppercase tracking-[0.2em] mb-1">{item.brand}</p>
                       <h3 className="font-black text-[11px] text-white uppercase leading-tight line-clamp-1 tracking-tighter">{item.name}</h3>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </section>

    </main>
  );
}
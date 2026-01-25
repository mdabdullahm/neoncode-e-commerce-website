"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, 
  Truck, RefreshCw, Trophy, Target, Dumbbell, Activity 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// স্পোর্টস পূর্ণাঙ্গ ডাটাবেস (ID গুলোর সাথে ম্যাচ থাকতে হবে)
const sportsProducts = [
  { id: "sp1", name: "Grade A Willow Cricket Bat", price: "18,500", brand: "NeonSports", type: "Cricket", desc: "উচ্চ মানের ইংলিশ উইলো দিয়ে তৈরি এই ব্যাটটি প্রফেশনাল ক্রিকেটারদের জন্য সেরা। এটি ওজনে হালকা কিন্তু স্ট্রোক অত্যন্ত শক্তিশালী। প্রতিটি শটে আপনি পাবেন পাওয়ার এবং কন্ট্রোল।", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600", specs: { material: "English Willow", weight: "1.2 KG", grade: "Grade A", grip: "Octopus Grip" } },
  { id: "sp2", name: "FIFA Official Match Ball", price: "4,200", brand: "Adidas", type: "Football", desc: "অ্যাডিডাস অফিসিয়াল ম্যাচ বল যা ফিফা অনুমোদিত। এটি সিমলেস ডিজাইনে তৈরি যাতে বাতাসের গতিবেগে এটি নিখুঁত ট্র্যাজেক্টোরি বজায় রাখতে পারে।", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600", specs: { material: "Polyurethane", weight: "450g", grade: "FIFA Pro", tech: "Thermal Bonded" } },
  { id: "sp3", name: "Adjustable Dumbbell Set", price: "12,800", brand: "NeonGym", type: "Gym", desc: "বাসায় জিমের জন্য আদর্শ। ৫ কেজি থেকে ৩০ কেজি পর্যন্ত সহজে ওজন বাড়ানো বা কমানো যায়। এর স্পেস-সেভিং ডিজাইন আপনাকে এক সেটেই সব ধরণের ব্যায়াম করতে সাহায্য করবে।", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600", specs: { material: "Cast Iron", weight: "30 KG Max", tech: "Quick Lock", finish: "Chrome" } },
  { id: "sp4", name: "Wilson Pro Tennis Racket", price: "15,500", brand: "Wilson", type: "Tennis", desc: "উইলসন প্রো টেনিস র‍্যাকেট আপনাকে দিবে অসাধারণ গ্রিপ এবং সুইং স্পিড। এর কার্বন ফাইবার ফ্রেম অত্যন্ত শক্তিশালী এবং ওজনে হালকা।", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=600", specs: { material: "Graphite", weight: "300g", length: "27 inch", pattern: "16x19" } },
  { id: "sp5", name: "Premium Yoga Mat", price: "2,200", brand: "NeonFit", type: "Gym", desc: "যোগ ব্যায়াম এবং জিমের ফ্লোর এক্সারসাইজের জন্য সেরা। এর ৬ মিমি পুরুত্ব আপনার জয়েন্টগুলোতে আরাম দিবে এবং ঘামলেও স্লিপ করবে না।", img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=600", specs: { material: "Eco-TPE", weight: "800g", thickness: "6mm", surface: "Double Sided" } },
  { id: "sp6", name: "Full Compression Kit", price: "3,500", brand: "NeonSports", type: "Apparel", desc: "খেলাধুলা বা দৌড়ানোর সময় শরীরের মাংসপেশির সুরক্ষা নিশ্চিত করতে এই কম্প্রেশন কিটটি সেরা। এটি দ্রুত ঘাম শুকায় এবং আপনাকে সতেজ রাখে।", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600", specs: { material: "Nylon/Spandex", fit: "Compression", tech: "Dri-Fit", pieces: "3 Items" } },
];

export default function SportsDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = sportsProducts.find((p) => p.id === id);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl text-red-500">Gear Not Found!</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      <Link href="/sports" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-all">
        <ArrowLeft size={16} /> Return To Arena
      </Link>

      <section className="bg-white rounded-[4rem] p-6 md:p-12 shadow-2xl relative border border-white/50 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ইমেজ সেকশন */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={product.id}
            className="flex-1"
          >
            <div className="bg-gray-50 rounded-[3.5rem] h-[450px] md:h-[600px] flex items-center justify-center relative group overflow-hidden border border-gray-100 shadow-inner">
               <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                 <Trophy size={14} /> Professional Grade
               </div>
            </div>
          </motion.div>

          {/* ইনফরমেশন সেকশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                <Target size={16} /> {product.brand} Elite Kit
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <p className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-8">৳{product.price}</p>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* স্পোর্টস স্পেকস গ্রিড */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 {Object.entries(product.specs).map(([key, value]) => (
                   <div key={key} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{key}</p>
                      <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{value}</p>
                   </div>
                 ))}
              </div>

              {/* কুয়ান্টিটি ও বাটনসমূহ */}
              <div className="flex items-center gap-8 mb-10">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Kit Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-8 border border-gray-200 shadow-sm">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">-</button>
                  <span className="font-black text-lg w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">+</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={handleAddToCart} className={`flex-1 py-5 rounded-[2.5rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-800'}`}>
                  {isAdded ? '✓ Added To Kit' : <><ShoppingCart size={18} /> Add To Cart</>}
                </button>
                <button onClick={() => {addToCart(product); router.push('/cart')}} className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2.5rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(91,245,39,0.3)] transition-all active:scale-95">
                  <Zap size={18} /> Start Training
                </button>
              </div>

              {/* ট্রাস্ট আইকন */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#5BF527]" size={24} />
                    <div><p className="text-[9px] font-black uppercase text-gray-900">Heavy Duty</p><p className="text-[8px] font-bold text-gray-400 uppercase">Long Lasting</p></div>
                 </div>
                 <div className="flex items-center gap-3">
                    <Truck className="text-blue-500" size={24} />
                    <div><p className="text-[9px] font-black uppercase text-gray-900">Fast Deliver</p><p className="text-[8px] font-bold text-gray-400 uppercase">Dhaka Ready</p></div>
                 </div>
                 <div className="flex items-center gap-3">
                    <RefreshCw className="text-orange-500" size={24} />
                    <div><p className="text-[9px] font-black uppercase text-gray-900">7 Days</p><p className="text-[8px] font-bold text-gray-400 uppercase">Return Policy</p></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড স্পোর্টস গিয়ার */}
      <section className="mt-24 max-w-7xl mx-auto px-2">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 flex items-center gap-3">
           Other <span className="text-white">Pro</span> Gears <Activity size={24} className="text-white" />
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sportsProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/sports/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[3rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
                    <div className="h-44 bg-gray-50 rounded-[2rem] overflow-hidden mb-6 relative">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute bottom-3 right-3 bg-black text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase">৳{item.price}</div>
                    </div>
                    <div className="px-2">
                       <p className="text-[8px] font-black text-[#5BF527] uppercase tracking-widest mb-1">{item.brand}</p>
                       <h3 className="font-black text-[11px] text-gray-900 uppercase leading-tight line-clamp-1">{item.name}</h3>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </section>

    </main>
  );
}
"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, 
  Truck, RefreshCw, Sparkles, Wand2, Flower2, Heart 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. বিউটি প্রোডাক্ট ডাটাবেস (ID স্ট্রিং হিসেবে)
const beautyProducts = [
  { id: "b1", name: "L'Oreal Infallible Foundation", price: "1,850", brand: "L'Oreal", type: "Makeup", desc: "লরিয়াল ইনফলিবল ফাউন্ডেশন আপনাকে দিবে ২৪ ঘণ্টা পর্যন্ত ফুল কভারেজ। এটি ওয়াটারপ্রুফ এবং ত্বকের সাথে খুব সুন্দরভাবে মিশে গিয়ে একটি ন্যাচারাল ম্যাট ফিনিশ দেয়।", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600", skinType: "All Skin Types", effect: "Full Coverage" },
  { id: "b2", name: "Vitamin C Radiance Serum", price: "2,200", brand: "The Body Shop", type: "Skincare", desc: "আপনার ত্বকের হারানো উজ্জ্বলতা ফিরিয়ে আনতে এই ভিটামিন সি সিরামটি জাদুর মতো কাজ করে। এটি ত্বকের কালো দাগ দূর করে এবং ত্বককে ভেতর থেকে সতেজ রাখে।", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600", skinType: "Dull Skin", effect: "Brightening" },
  { id: "b3", name: "Chanel No. 5 Perfume", price: "18,500", brand: "Chanel", type: "Fragrance", desc: "চ্যানেল নং ৫ হলো আভিজাত্যের অন্য নাম। এর মোহনীয় সুবাস আপনাকে সারাদিন রাখবে সতেজ এবং আত্মবিশ্বাসী। এটি বিশ্বের অন্যতম জনপ্রিয় লাক্সারি পারফিউম।", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600", skinType: "N/A", effect: "Long Lasting" },
  { id: "b4", name: "Matte Liquid Lipstick Red", price: "950", brand: "MAC", type: "Makeup", desc: "ম্যাক ম্যাট লিকুইড লিপস্টিক আপনাকে দিবে একটি বোল্ড এবং ক্লাসিক রেড লুক। এটি ঠোঁটকে শুষ্ক করে না এবং দীর্ঘক্ষণ ঠোঁটে স্থায়ী থাকে।", img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=600", skinType: "All", effect: "Matte Finish" },
  { id: "b5", name: "Hydrating Hyaluronic Acid", price: "1,450", brand: "Ordinary", type: "Skincare", desc: "ত্বকের আর্দ্রতা ধরে রাখতে হায়ালুরোনিক অ্যাসিডের কোনো বিকল্প নেই। এটি ত্বককে ভেতর থেকে হাইড্রেট করে এবং ত্বককে করে তোলে কোমল ও মসৃণ।", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600", skinType: "Dry Skin", effect: "Hydrating" },
  { id: "b6", name: "Organic Rose Water Toner", price: "650", brand: "BioPure", type: "Skincare", desc: "সম্পূর্ণ ন্যাচারাল গোলাপ জল দিয়ে তৈরি এই টোনারটি আপনার ত্বকের পিএইচ লেভেল ঠিক রাখে এবং ত্বককে প্রাকৃতিকভাবে গ্লোয়িং করে তোলে।", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600", skinType: "Sensitive Skin", effect: "Glowing" },
];

export default function BeautyDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // সঠিক প্রোডাক্ট খুঁজে বের করা
  const product = beautyProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl text-red-500">
        Beauty Product Not Found!
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
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* ব্যাক বাটন */}
      <Link href="/beauty" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
        <ArrowLeft size={16} /> Back to Beauty Empire
      </Link>

      {/* প্রোডাক্ট ডিটেইল কার্ড */}
      <section className="bg-white rounded-[4rem] p-6 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* বাম পাশ: ইমেজ সেকশন */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1"
          >
            <div className="bg-pink-50/30 rounded-[3.5rem] h-[450px] md:h-[600px] flex items-center justify-center relative group overflow-hidden border border-pink-50 shadow-inner">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] shadow-xl flex items-center gap-2">
                 <Sparkles size={14} /> Dermatologist Tested
               </div>
               <button className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-500 shadow-2xl active:scale-90 transition-all">
                  <Heart size={24} />
               </button>
            </div>
          </motion.div>

          {/* ডান পাশ: ইনফরমেশন সেকশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-pink-500 font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2 italic">
                <Flower2 size={16} /> {product.brand} Luxury Care
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl md:text-5xl font-black text-black">৳{product.price}</p>
                <div className="flex items-center gap-2 bg-[#5BF527]/10 px-4 py-1.5 rounded-full border border-[#5BF527]/20">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-[11px] font-black uppercase text-gray-700 tracking-tighter">Premium Quality</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-pink-200 pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* বিউটি স্পেসিফিকেশন গ্রিড */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Skin Type</p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.skinType}</p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Main Effect</p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.effect}</p>
                 </div>
              </div>

              {/* কুয়ান্টিটি সিলেক্টর */}
              <div className="flex items-center gap-8 mb-10">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-8 border border-gray-200">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">-</button>
                  <span className="font-black text-lg w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">+</button>
                </div>
              </div>

              {/* বাটনসমূহ */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-5 rounded-[2.5rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {isAdded ? '✓ Added to Cart' : <><ShoppingCart size={18} /> Add to Cart</>}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2.5rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(91,245,39,0.3)] transition-all active:scale-95"
                >
                  <Zap size={18} /> Buy Secrets
                </button>
              </div>

              {/* ট্রাস্ট আইকনসমূহ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 shadow-sm">
                       <Flower2 size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">100% Organic</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Natural</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Authentic</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Original</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Fast Deliver</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Doorstep</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড প্রোডাক্টস (You May Also Love) */}
      <section className="mt-24 max-w-7xl mx-auto px-2">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 flex items-center gap-3">
           You May Also <span className="text-white italic">Love</span> <Wand2 size={24} className="text-white" />
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {beautyProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/beauty/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[3rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
                    <div className="h-44 bg-gray-50 rounded-[2rem] overflow-hidden mb-6 relative">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart size={14} className="text-pink-500" />
                       </div>
                    </div>
                    <div className="px-2">
                       <p className="text-[8px] font-black text-pink-500 uppercase tracking-widest mb-1">{item.brand}</p>
                       <h3 className="font-black text-[11px] text-gray-900 uppercase leading-tight line-clamp-1">{item.name}</h3>
                       <p className="font-black text-sm text-black mt-2">৳{item.price}</p>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </section>

    </main>
  );
}
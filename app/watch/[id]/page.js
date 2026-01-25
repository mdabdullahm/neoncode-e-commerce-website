"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Zap, ShieldCheck, ArrowLeft, Star, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // কার্ট কন্টেক্সট ইম্পোর্ট

// ঘড়ির ডাটাবেস (অবশ্যই ID স্ট্রিং হিসেবে থাকতে হবে)
const watchProducts = [
  { id: "1", name: "Rolex Submariner Gold", price: "12,50,000", brand: "Rolex", type: "Analog", desc: "রলেক্স সাবমেরিনার হলো আভিজাত্য এবং স্থায়িত্বের এক অনন্য মিশ্রণ। ১৮ ক্যারেট গোল্ড প্লেটেড এই ঘড়িটি আপনাকে দিবে এক রাজকীয় অনুভূতি। এটি ৩০০ মিটার পর্যন্ত ওয়াটার রেজিস্ট্যান্ট।", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600" },
  { id: "2", name: "Apple Watch Series 9", price: "55,000", brand: "Apple", type: "Smart", desc: "অ্যাপল ওয়াচ সিরিজ ৯ নিয়ে এসেছে সবচেয়ে শক্তিশালী চিপ এবং উন্নত হেলথ সেন্সর। এর অল-ওয়েজ অন রেটিনা ডিসপ্লে আপনাকে দিবে এক চমৎকার অভিজ্ঞতা।", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600" },
  { id: "3", name: "Casio G-Shock Black", price: "12,500", brand: "Casio", type: "Digital", desc: "জি-শক মানেই চরম প্রতিকূলতায় টিকে থাকা। এটি শক-প্রুফ এবং স্পোর্টস লাভারদের জন্য একদম পারফেক্ট একটি চয়েস।", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600" },
  { id: "4", name: "Fossil Heritage Leather", price: "18,500", brand: "Fossil", type: "Analog", desc: "ফক্সিল হেরিটেজ লেদার ঘড়িটি আপনাকে দিবে একটি ক্লাসিক এবং ভিন্টেজ লুক। প্রিমিয়াম লেদার স্ট্র্যাপের সাথে এটি অফিসের জন্য সেরা।", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=600" },
  { id: "5", name: "Samsung Galaxy Watch 6", price: "38,000", brand: "Samsung", type: "Smart", desc: "স্যামসাং গ্যালাক্সি ওয়াচ ৬ এর বড় ডিসপ্লে এবং অ্যাডভান্সড স্লিপ ট্র্যাকিং ফিচার আপনার স্বাস্থ্যের প্রতিটি আপডেট দিবে নিমিষেই।", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600" },
  { id: "6", name: "Seiko 5 Sports Automatic", price: "32,000", brand: "Seiko", type: "Analog", desc: "সেইকো ৫ স্পোর্টস অটোমেটিক ঘড়িটি মেকানিক্যাল ঘড়ি প্রেমীদের জন্য একটি মাস্টারপিস। কোনো ব্যাটারি ছাড়াই এটি চলে।", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=600" },
];

export default function WatchDetail() {
  const { id } = useParams();
  const router = useRouter(); // নেভিগেশনের জন্য
  const { addToCart } = useCart(); // কার্ট ফাংশন
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // আইডি অনুযায়ী সঠিক প্রোডাক্টটি খুঁজে বের করা
  const product = watchProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-black uppercase tracking-tighter text-2xl text-red-500">
        Product Not Found!
      </div>
    );
  }

  // ১. Add to Cart ফাংশন
  const handleAddToCart = () => {
    // যতগুলো কুয়ান্টিটি সিলেক্ট করা আছে ততগুলো অ্যাড হবে
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // ২ সেকেন্ড পর বাটন আগের অবস্থায় ফিরবে
  };

  // ২. Buy Now ফাংশন
  const handleBuyNow = () => {
    addToCart(product); // প্রথমে কার্টে অ্যাড করবে
    router.push('/cart'); // তারপর সরাসরি কার্ট বা চেকআউট পেজে নিয়ে যাবে
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* ব্যাক বাটন */}
      <Link href="/watch" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <section className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-white/50 overflow-hidden relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* ইমেজ সেকশন */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1"
          >
            <div className="bg-gray-50 rounded-[3rem] h-[400px] md:h-[600px] flex items-center justify-center relative group overflow-hidden border border-gray-100 shadow-inner">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                 Official Store
               </div>
            </div>
          </motion.div>

          {/* কন্টেন্ট সেকশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4">
                {product.brand} • Limited Edition
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl md:text-5xl font-black text-black">৳{product.price}</p>
                <div className="flex items-center gap-1 bg-yellow-400 text-black px-4 py-1.5 rounded-full shadow-lg">
                  <Star size={14} className="fill-black" />
                  <span className="text-[11px] font-black">4.9 (High Rated)</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* কুয়ান্টিটি সিলেক্টর */}
              <div className="flex items-center gap-8 mb-10">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Quantity</span>
                <div className="flex items-center bg-gray-100 rounded-2xl p-2 gap-8 border border-gray-200 shadow-sm">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">-</button>
                  <span className="font-black text-lg w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">+</button>
                </div>
              </div>

              {/* অ্যাকশন বাটনসমূহ */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {isAdded ? '✓ Added to Cart' : <><ShoppingCart size={18} /> Add to Cart</>}
                </button>
                
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(91,245,39,0.4)] transition-all active:scale-95"
                >
                  <Zap size={18} /> Buy Now
                </button>
              </div>

              {/* ট্রাস্ট ইন্ডিকেটর */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">1 Year Warranty</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Official Brand</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Fast Shipping</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Dhaka Delivery</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                       <RefreshCw size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">7 Days Return</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Easy Policy</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড সেকশন */}
      <section className="mt-24 max-w-7xl mx-auto">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-12 px-2">People Also <span className="text-white">Explored</span></h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {watchProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/watch/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-md p-4 rounded-[2.5rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
                    <div className="h-44 bg-gray-50 rounded-[2rem] overflow-hidden mb-6">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="px-2">
                       <p className="text-[8px] font-black text-[#5BF527] uppercase tracking-widest mb-1">{item.brand}</p>
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
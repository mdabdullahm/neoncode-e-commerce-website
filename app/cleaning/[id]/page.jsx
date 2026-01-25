"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ShieldCheck, ArrowLeft, Star, 
  Truck, RefreshCw, Sparkles, Droplets, Leaf 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. ক্লিনিং প্রোডাক্ট ডাটাবেস (ID স্ট্রিং হিসেবে)
const cleaningProducts = [
  { id: "c1", name: "Robotic Vacuum Cleaner Pro", price: "28,500", brand: "NeonTech", type: "Gadget", desc: "আপনার ঘরকে স্মার্টলি পরিষ্কার রাখতে এই রোবোটিক ভ্যাকুয়াম ক্লিনারটি সেরা। এটি অটোমেটিক চার্জিং এবং সেন্সর প্রযুক্তি ব্যবহার করে কোণায় কোণায় জমে থাকা ধুলোবালি পরিষ্কার করে।", img: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=600" },
  { id: "c2", name: "Eco-Friendly Floor Liquid", price: "450", brand: "PureHome", type: "Liquid", desc: "সম্পূর্ণ ন্যাচারাল এবং ইকো-ফ্রেন্ডলি ফ্লোর ক্লিনার। এটি কোনো ক্ষতিকারক কেমিক্যাল ছাড়াই মেঝেকে করে ঝকঝকে এবং দেয় একটি স্নিগ্ধ ঘ্রাণ। শিশু এবং পোষা প্রাণীর জন্য নিরাপদ।", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
  { id: "c3", name: "Microfiber Spin Mop Set", price: "1,850", brand: "EasyClean", type: "Tool", desc: "৩টি মাইক্রোফাইবার হেড সম্বলিত এই স্পিন মপ সেটটি আপনার ঘর মোছার কাজকে করবে একদম সহজ। এর হাই-স্পিড স্পিন সিস্টেম পানি ঝরিয়ে ঘর দ্রুত শুকাতে সাহায্য করে।", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600" },
  { id: "c4", name: "High Pressure Water Gun", price: "3,200", brand: "NeonPower", type: "Gadget", desc: "গাড়ি, বাইক বা বাগানের জেদি ময়লা দূর করতে এই হাই-প্রেশার ওয়াটার গানটি অত্যন্ত শক্তিশালী। এতে রয়েছে বিভিন্ন মোড যা দিয়ে আপনি আপনার প্রয়োজন মতো প্রেশার সেট করতে পারবেন।", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=600" },
  { id: "c5", name: "Anti-Bacterial Surface Spray", price: "320", brand: "Hygiene+", type: "Liquid", desc: "৯৯.৯% জীবাণু ধ্বংসকারী এই স্প্রেটি টেবিল, কিচেন এবং বাথরুমের সারফেসকে রাখে ১০০% নিরাপদ। এর কোনো তীব্র গন্ধ নেই এবং এটি দ্রুত শুকিয়ে যায়।", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600" },
  { id: "c6", name: "Professional Window Squeegee", price: "750", brand: "ClearView", type: "Tool", desc: "কাঁচের জানালা বা আয়নার পানির দাগ দূর করতে এই প্রফেশনাল স্কুইজিটি অসাধারণ কাজ করে। এর সিলিকন রাবার স্ক্র্যাচ ছাড়াই কাঁচকে করে একদম স্বচ্ছ।", img: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=600" },
];

export default function CleaningDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // সঠিক প্রোডাক্টটি খুঁজে বের করা
  const product = cleaningProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl">
        Product Not Found!
      </div>
    );
  }

  // Add to Cart ফাংশন
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Buy Now ফাংশন
  const handleBuyNow = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* ব্যাক বাটন */}
      <Link href="/cleaning" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
        <ArrowLeft size={16} /> Back to Cleaning List
      </Link>

      {/* মেইন প্রোডাক্ট কার্ড */}
      <section className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* বাম পাশ: ইমেজ */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1"
          >
            <div className="bg-gray-50 rounded-[3rem] h-[400px] md:h-[550px] flex items-center justify-center relative group overflow-hidden border border-gray-100 shadow-inner">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute top-8 left-8 bg-[#5BF527] text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                 <Sparkles size={14} /> Hygiene Guaranteed
               </div>
            </div>
          </motion.div>

          {/* ডান পাশ: ইনফরমেশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                <Droplets size={14} /> {product.brand} • Premium Care
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl font-black text-black">৳{product.price}</p>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-[11px] font-black uppercase">Top Choice</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* কুয়ান্টিটি সিলেক্টর */}
              <div className="flex items-center gap-8 mb-10">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Select Packs</span>
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
                  className={`flex-1 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {isAdded ? '✓ Added' : <><ShoppingCart size={18} /> Add to Cart</>}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(91,245,39,0.4)] transition-all active:scale-95"
                >
                  <Zap size={18} /> Buy Now
                </button>
              </div>

              {/* ট্রাস্ট ব্যাজ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                       <Leaf size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Eco-Friendly</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Non-Toxic</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Express Ship</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">24h Service</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                       <RefreshCw size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Certified</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">High Quality</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড প্রোডাক্টস */}
      <section className="mt-24 max-w-7xl mx-auto">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 px-2 flex items-center gap-3">
           Related <span className="text-white">Essentials</span>
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cleaningProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/cleaning/${item.id}`} key={item.id} className="group">
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
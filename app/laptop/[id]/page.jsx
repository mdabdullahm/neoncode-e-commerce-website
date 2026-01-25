"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, 
  Truck, RefreshCw, Cpu, HardDrive, Monitor, Layers, Activity 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. ল্যাপটপ ডাটাবেস
const laptopProducts = [
  { id: "l1", name: "MacBook Pro M3 Max", price: "3,45,000", brand: "Apple", type: "Ultrabook", desc: "অ্যাপলের সবচেয়ে শক্তিশালী এম৩ ম্যাক্স চিপ এখন আপনার হাতে। প্রফেশনাল ভিডিও এডিটিং, কোডিং এবং থ্রি-ডি রেন্ডারিং এর জন্য এটি পৃথিবীর অন্যতম সেরা ল্যাপটপ। এর লিকুইড রেটিনা এক্সডিআর ডিসপ্লে আপনাকে দিবে এক অবিশ্বাস্য অভিজ্ঞতা।", img: "https://i.ibb.co.com/k6kwpYf7/still-life-device-table.jpg", specs: { cpu: "M3 Max 16-Core", gpu: "40-Core GPU", ram: "36GB Unified", ssd: "1TB Superfast" } },
  { id: "l2", name: "ROG Zephyrus G14", price: "2,15,000", brand: "ASUS", type: "Gaming", desc: "গেমিং দুনিয়ার রাজা হলো এই জেফায়রাস জি-১৪। কমপ্যাক্ট ডিজাইনের ভেতরে রয়েছে শক্তিশালী আরটিএক্স গ্রাফিক্স। এটি যেমন হালকা, তেমনি এর পারফরম্যান্স অত্যন্ত শক্তিশালী।", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=600", specs: { cpu: "Ryzen 9 8945HS", gpu: "RTX 4060 8GB", ram: "16GB DDR5", ssd: "1TB Gen4" } },
  { id: "l3", name: "Dell XPS 13 Plus", price: "1,85,000", brand: "Dell", type: "Ultrabook", desc: "ডেল এক্সপিএস ১৩ প্লাস নিয়ে এসেছে ফিউচারিস্টিক ডিজাইন। এর টাচ বার ফাংশন এবং বেজেল-লেস ডিসপ্লে আপনাকে দিবে এক প্রিমিয়াম এক্সপেরিয়েন্স।", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600", specs: { cpu: "Core i7-1360P", gpu: "Iris Xe Graphics", ram: "16GB LPDDR5", ssd: "512GB NVMe" } },
  { id: "l4", name: "HP Spectre x360", price: "1,65,000", brand: "HP", type: "Business", desc: "টু-ইন-ওয়ান ল্যাপটপ যা আপনি ট্যাবলেট হিসেবেও ব্যবহার করতে পারবেন। এর ওলেড টাচ ডিসপ্লে কালার একুরেসির জন্য সেরা।", img: "https://i.ibb.co.com/N6KxPFnm/still-life-books-versus-technology.jpg", specs: { cpu: "Core i7-1355U", gpu: "Intel Graphics", ram: "16GB RAM", ssd: "1TB SSD" } },
  { id: "l5", name: "Lenovo Legion Slim 5", price: "1,45,000", brand: "Lenovo", type: "Gaming", desc: "বাজেট গেমিং এর জন্য লেজিওন স্লিম ৫ এর কোনো তুলনা নেই। এর উন্নত কুলিং সিস্টেম দীর্ঘক্ষণ গেমিং এ ল্যাপটপকে রাখে একদম ঠান্ডা।", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600", specs: { cpu: "Ryzen 7 7840HS", gpu: "RTX 4050 6GB", ram: "16GB DDR5", ssd: "512GB SSD" } },
  { id: "l6", name: "Microsoft Surface Pro 9", price: "1,25,000", brand: "Microsoft", type: "Business", desc: "সবচেয়ে বেশি পোর্টেবল ল্যাপটপ। এটি ওজনে যেমন হালকা, তেমনি এর ব্যাটারি ব্যাকআপ সারাদিনের কাজের জন্য যথেষ্ট।", img: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=600", specs: { cpu: "Core i5-1235U", gpu: "Iris Xe", ram: "8GB RAM", ssd: "256GB SSD" } },
];

export default function LaptopDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // সঠিক প্রোডাক্ট খুঁজে বের করা
  const product = laptopProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl text-red-500">
        Machine Not Found In Database!
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
      
      {/* ১. ব্যাক বাটন */}
      <Link href="/laptop" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
        <ArrowLeft size={16} /> Back to Laptop Collection
      </Link>

      {/* ২. মেইন ডিটেইল সেকশন */}
      <section className="bg-white rounded-[4rem] p-6 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* বাম পাশ: ইমেজ সেকশন */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="bg-gray-50 rounded-[3.5rem] h-[400px] md:h-[550px] flex items-center justify-center relative group overflow-hidden border border-gray-100 shadow-inner">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2">
                 <Activity size={14} /> High Performance Machine
               </div>
            </div>
          </motion.div>

          {/* ডান পাশ: প্রোডাক্ট ইনফরমেশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4">
                {product.brand} // {product.type} Edition
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">৳{product.price}</p>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-[11px] font-black uppercase tracking-tighter">Professional Choice</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* ৩. টেকনিক্যাল স্পেকস গ্রিড */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                 <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col gap-2">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest flex items-center gap-2">
                       <Cpu size={14} /> Processor
                    </p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.specs.cpu}</p>
                 </div>
                 <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col gap-2">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest flex items-center gap-2">
                       <Monitor size={14} /> Graphics
                    </p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.specs.gpu}</p>
                 </div>
                 <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col gap-2">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest flex items-center gap-2">
                       <Layers size={14} /> Memory
                    </p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.specs.ram}</p>
                 </div>
                 <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex flex-col gap-2">
                    <p className="text-[9px] font-black text-[#5BF527] uppercase tracking-widest flex items-center gap-2">
                       <HardDrive size={14} /> Storage
                    </p>
                    <p className="text-xs font-black text-gray-800 uppercase tracking-tighter">{product.specs.ssd}</p>
                 </div>
              </div>

              {/* ৪. কুয়ান্টিটি ও অ্যাকশন বাটনসমূহ */}
              <div className="flex items-center gap-8 mb-10">
                <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest">Select Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-2xl p-2 gap-8 border border-gray-200">
                  <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">-</button>
                  <span className="font-black text-lg w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-white rounded-xl transition-all">+</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  {isAdded ? '✓ Added to Cart' : <><ShoppingCart size={18} /> Add to Cart</>}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(91,245,39,0.3)] transition-all active:scale-95"
                >
                  <Zap size={18} /> Buy It Now
                </button>
              </div>

              {/* ৫. এলিট সাপোর্ট ব্যাজ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Warranty</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">2 Years Official</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Secure Deliver</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Insurance Pack</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                       <RefreshCw size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Reliable</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Easy Returns</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ৬. সাজেস্টেড মেশিনস */}
      <section className="mt-24 max-w-7xl mx-auto px-2">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10 flex items-center gap-3">
           Other <span className="text-white">Machines</span> <Activity size={24} className="text-white" />
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {laptopProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/laptop/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[3rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
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
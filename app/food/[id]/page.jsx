"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, 
  Truck, RefreshCw, Leaf, Weight, Calendar, CheckCircle 
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

// ১. খাবারের পূর্ণাঙ্গ ডাটাবেস (অবশ্যই ID গুলো লিস্ট পেজের সাথে মিল থাকতে হবে)
const foodProducts = [
  { id: "f1", name: "Premium Organic Honey", price: "1,250", brand: "NeonOrganic", type: "Natural", desc: "সুন্দরবনের গভীর থেকে সংগৃহীত ১০০% খাঁটি প্রাকৃতিক মধু। এতে নেই কোনো কৃত্রিম চিনি বা প্রিজারভেটিভ। এটি আপনার শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে এবং ত্বকের উজ্জ্বলতা বাড়াতে সাহায্য করে।", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400", stats: { weight: "500 Gram", shelf: "24 Months", cals: "304 kcal" } },
  { id: "f2", name: "Roasted Mixed Nuts", price: "850", brand: "NeonSnacks", type: "Snack", desc: "সেরা মানের কাজুবাদাম, পেস্তা এবং কাঠবাদামের এক চমৎকার মিশ্রণ। হালকা রোস্টেড এই বাদামগুলো আপনার বিকেলের নাস্তায় যোগ করবে বাড়তি পুষ্টি এবং শক্তি।", img: "https://i.ibb.co.com/rYbM1Tm/top-view-walnuts-with-hazelnuts-with-pistachios-bowl-brown-towel-turquoise-table.jpg", stats: { weight: "250 Gram", shelf: "6 Months", cals: "160 kcal" } },
  { id: "f3", name: "Fresh Green Apples", price: "450", brand: "FarmFresh", type: "Fruit", desc: "সরাসরি বাগান থেকে বাছাইকৃত তাজা গ্রিন অ্যাপেল। এটি ফাইবার এবং ভিটামিন সি এর চমৎকার উৎস, যা আপনাকে সারাদিন সতেজ রাখতে সাহায্য করবে।", img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400", stats: { weight: "1 KG", shelf: "15 Days", cals: "52 kcal" } },
  { id: "f4", name: "Whole Grain Granola", price: "950", brand: "HealthyStart", type: "Breakfast", desc: "সকালের স্বাস্থ্যকর নাস্তার জন্য হোল গ্রেইন গ্রানোলা। এতে রয়েছে ওটস, বাদাম এবং শুকনো ফলের মিশ্রণ যা আপনার হজম ক্ষমতা বাড়াতে সাহায্য করে।", img: "https://i.ibb.co.com/JwPJfGn8/granola-pink-background.jpg", stats: { weight: "400 Gram", shelf: "12 Months", cals: "450 kcal" } },
  { id: "f5", name: "Premium Medjool Dates", price: "1,400", brand: "ArabianTreat", type: "Natural", desc: "সৌদি আরব থেকে আমদানিকৃত প্রিমিয়াম মানের মেজুল খেজুর। এটি প্রাকৃতিক শক্তির এক বিশাল উৎস এবং রমজান বা প্রতিদিনের পুষ্টির জন্য সেরা।", img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=400", stats: { weight: "500 Gram", shelf: "18 Months", cals: "277 kcal" } },
  { id: "f6", name: "Natural Peanut Butter", price: "680", brand: "NeonOrganic", type: "Natural", desc: "বিনা চিনি এবং লবণে তৈরি ঘরে বানানো খাঁটি পিনাট বাটার। যারা বডি বিল্ডিং বা ডায়েট করছেন তাদের জন্য এটি প্রোটিনের অন্যতম সেরা উৎস।", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400", stats: { weight: "350 Gram", shelf: "9 Months", cals: "588 kcal" } },
];

export default function FoodDetail() {
  const { id } = useParams(); // URL থেকে ID নেওয়া হচ্ছে
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // সঠিক প্রোডাক্ট খুঁজে বের করার লজিক
  const product = foodProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl text-red-500">
        Product Not Found!
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
      <Link href="/food" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-all">
        <ArrowLeft size={16} /> Back to Organic Store
      </Link>

      {/* প্রোডাক্ট ডিটেইল কার্ড */}
      <section className="bg-white rounded-[4rem] p-6 md:p-12 shadow-2xl relative border border-white/50 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* বাম পাশ: ইমেজ */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={product.id}
            className="flex-1"
          >
            <div className="bg-gray-50 rounded-[3.5rem] h-[450px] md:h-[600px] flex items-center justify-center relative group overflow-hidden border border-gray-100 shadow-inner">
               <img 
                 src={product.img} 
                 alt={product.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                 <CheckCircle size={14} /> Certified Fresh
               </div>
            </div>
          </motion.div>

          {/* ডান পাশ: ইনফরমেশন */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                <Leaf size={16} /> {product.brand} Natural Essentials
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <p className="text-4xl md:text-5xl font-black text-black tracking-tighter">৳{product.price}</p>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-[11px] font-black uppercase tracking-tighter">Pure Organic</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
              </p>

              {/* ফুড স্পেকস গ্রিড (Nutrition & Weight) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <Weight size={18} className="text-[#5BF527] mb-2" />
                    <p className="text-[9px] font-black uppercase text-gray-400">Net Weight</p>
                    <p className="text-[11px] font-black uppercase text-gray-800">{product.stats.weight}</p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <Calendar size={18} className="text-[#5BF527] mb-2" />
                    <p className="text-[9px] font-black uppercase text-gray-400">Shelf Life</p>
                    <p className="text-[11px] font-black uppercase text-gray-800">{product.stats.shelf}</p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <Star size={18} className="text-[#5BF527] mb-2" />
                    <p className="text-[9px] font-black uppercase text-gray-400">Calories</p>
                    <p className="text-[11px] font-black uppercase text-gray-800">{product.stats.cals}</p>
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
                  <Zap size={18} /> Buy It Now
                </button>
              </div>

              {/* ট্রাস্ট আইকনসমূহ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Safe Food</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Chemical Free</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                       <Truck size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Fast Deliver</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Hygienic</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                       <RefreshCw size={20} />
                    </div>
                    <div>
                       <p className="text-[9px] font-black uppercase text-gray-900 tracking-tighter">Certified</p>
                       <p className="text-[8px] font-bold text-gray-400 uppercase">Pure Nature</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড প্রোডাক্টস (Related Organic Food) */}
      <section className="mt-24 max-w-7xl mx-auto px-2">
         <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-10">
           Other <span className="text-white">Organic</span> Foods
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {foodProducts.filter(p => p.id !== id).slice(0, 4).map((item) => (
              <Link href={`/food/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[3rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
                    <div className="h-44 bg-gray-50 rounded-[2rem] overflow-hidden mb-6 relative">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute bottom-3 right-3 bg-black text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg">৳{item.price}</div>
                    </div>
                    <div className="px-2">
                       <p className="text-[8px] font-black text-[#5BF527] uppercase tracking-widest mb-1">{item.brand}</p>
                       <h3 className="font-black text-[11px] text-gray-900 uppercase leading-tight line-clamp-1 tracking-tighter">{item.name}</h3>
                    </div>
                 </div>
              </Link>
            ))}
         </div>
      </section>

    </main>
  );
}
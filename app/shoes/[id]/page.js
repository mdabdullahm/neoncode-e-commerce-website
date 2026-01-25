"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Zap, ArrowLeft, Star, ShieldCheck, Truck, Ruler, RefreshCw } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// জুতোর ডাটাবেস
const shoesProducts = [
  { id: "s1", name: "Nike Air Max 270 Neon", price: "14,500", brand: "Nike", type: "Sneakers", desc: "নাইকি এয়ার ম্যাক্স ২৭০ আপনাকে দিচ্ছে সর্বোচ্চ কুশনিং এবং আরাম। এর নিয়ান গ্রিন থিম আপনার লুকে যোগ করবে বাড়তি স্মার্টনেস। জিম হোক বা ক্যাজুয়াল আউটফিট—এটি সবখানে মানানসই।", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" },
  { id: "s2", name: "Adidas Ultraboost White", price: "12,800", brand: "Adidas", type: "Running", desc: "অ্যাডিডাস আল্ট্রাবুস্ট হলো দৌড়ানোর জন্য পৃথিবীর সেরা জুতো। এর বুস্ট টেকনোলজি আপনাকে প্রতি কদমে এনার্জি দিবে এবং পায়ের ক্লান্তি দূর করবে।", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600" },
  { id: "s3", name: "Puma RS-X Bold Black", price: "9,500", brand: "Puma", type: "Sneakers", desc: "পুমা আরএস-এক্স বোল্ড ডিজাইন এবং প্রিমিয়াম ম্যাটেরিয়ালের সমন্বয়ে তৈরি। এটি আপনাকে একটি ইউনিক এবং ফিউচারিস্টিক লুক দিবে।", img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=600" },
  { id: "s4", name: "Classic Italian Leather", price: "7,200", brand: "Bata", type: "Formal", desc: "অফিস বা যেকোনো ফরমাল ইভেন্টের জন্য এই ইতালিয়ান লেদার জুতোটি একদম পারফেক্ট। এটি ১০০% খাঁটি চামড়া দিয়ে তৈরি।", img: "https://i.ibb.co.com/gL341xVd/concentrated-shoemaker-workshop-making-shoes.jpg" },
  { id: "s5", name: "Jordan 1 Retro High", price: "22,000", brand: "Jordan", type: "Sneakers", desc: "জর্ডান ১ রেট্রো হাই হলো একটি লেজেন্ডারি স্নিকার্স। বাস্কেটবল কোর্ট থেকে স্ট্রিট ফ্যাশন—সবখানেই এর রাজত্ব।", img: "https://i.ibb.co.com/qFg9QkTr/view-skateboard-with-retro-memorabilia.jpg" },
  { id: "s6", name: "Hiking Waterproof Boots", price: "8,500", brand: "Apex", type: "Boots", desc: "পাহাড় বা জঙ্গল—যেকোনো অ্যাডভেঞ্চারের জন্য এই ওয়াটারপ্রুফ বুটটি আপনার বিশ্বস্ত সঙ্গী হবে। এর গ্রিপ অনেক মজবুত।", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600" },
];

export default function ShoeDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const product = shoesProducts.find(p => p.id === id);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-black uppercase text-2xl">Product Not Found!</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first! 👟");
      return;
    }
    addToCart({ ...product, size: selectedSize });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* ব্যাক বাটন */}
      <Link href="/shoes" className="inline-flex items-center gap-2 mb-8 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-all">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      {/* মেইন প্রোডাক্ট কার্ড */}
      <section className="bg-white rounded-[4rem] p-6 md:p-12 shadow-2xl relative overflow-hidden border border-white/50">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="flex-1">
             <motion.div 
               key={product.id}
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }}
               className="bg-gray-50 rounded-[3rem] h-[400px] md:h-[600px] flex items-center justify-center relative overflow-hidden group shadow-inner"
             >
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-8 left-8 bg-black text-[#5BF527] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                   {product.brand} Official
                </div>
             </motion.div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
             <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.4em] mb-4">{product.brand} • Elite Performance</p>
             <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase leading-none tracking-tighter mb-6">{product.name}</h1>
             
             <div className="flex items-center gap-6 mb-10">
                <p className="text-5xl font-black text-black">৳{product.price}</p>
                <div className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full">
                   <Star size={14} className="fill-yellow-400 text-yellow-400" />
                   <span className="text-[10px] font-black uppercase tracking-tighter">Top Choice</span>
                </div>
             </div>

             <p className="text-gray-500 font-medium leading-relaxed mb-10 border-l-4 border-[#5BF527] pl-6 italic text-sm md:text-base">
                "{product.desc}"
             </p>

             <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                   <span className="font-black text-[10px] uppercase text-gray-400 tracking-widest flex items-center gap-2">
                     <Ruler size={14} /> Select UK Size
                   </span>
                </div>
                <div className="flex flex-wrap gap-3">
                   {["7", "8", "9", "10", "11"].map(size => (
                     <button 
                       key={size}
                       onClick={() => setSelectedSize(size)}
                       className={`w-14 h-14 rounded-2xl font-black transition-all border-2 ${selectedSize === size ? 'bg-black text-white border-black shadow-xl' : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-[#5BF527]'}`}
                     >
                       {size}
                     </button>
                   ))}
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${isAdded ? 'bg-[#5BF527] text-black' : 'bg-black text-white hover:bg-gray-900'}`}
                >
                  {isAdded ? '✓ Added' : <><ShoppingCart size={18} /> Add to Cart</>}
                </button>
                <button onClick={() => {addToCart(product); router.push('/cart')}} className="flex-1 bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95 hover:shadow-[0_0_30px_rgba(91,245,39,0.4)]">
                  <Zap size={18} /> Buy Now
                </button>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-[#5BF527]" size={24} />
                   <div className="leading-none">
                      <p className="text-[9px] font-black uppercase text-gray-900">100% Original</p>
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Product</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <Truck className="text-blue-500" size={24} />
                   <div className="leading-none">
                      <p className="text-[9px] font-black uppercase text-gray-900">Fast Home</p>
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Delivery</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <RefreshCw className="text-orange-500" size={24} />
                   <div className="leading-none">
                      <p className="text-[9px] font-black uppercase text-gray-900">7 Days</p>
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Returns</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* সাজেস্টেড প্রোডাক্ট সেকশন (Related Products) */}
      <section className="mt-24 max-w-7xl mx-auto">
         <div className="flex items-center justify-between mb-12 px-2">
            <h2 className="text-3xl font-black text-black uppercase tracking-tighter">People Also <span className="text-white">Bought</span></h2>
            <Link href="/shoes" className="text-[10px] font-black uppercase text-black/60 border-b-2 border-black/20 pb-1">View All</Link>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shoesProducts
              .filter(p => p.id !== id) // বর্তমান প্রোডাক্ট বাদে বাকিগুলো
              .slice(0, 4) // ৪টি প্রোডাক্ট দেখাবে
              .map((item) => (
              <Link href={`/shoes/${item.id}`} key={item.id} className="group">
                 <div className="bg-white/40 backdrop-blur-md p-4 rounded-[2.5rem] border border-white/50 hover:bg-white transition-all duration-500 shadow-lg group-hover:-translate-y-3">
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
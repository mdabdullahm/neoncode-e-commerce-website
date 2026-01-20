"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// ১. টি-শার্টের ডাটা
const tshirtProducts = [
  { id: "1", name: "Premium Cotton Black Tee", price: "1,250", brand: "NeonStyle", desc: "১০০% প্রিমিয়াম কটন দিয়ে তৈরি এই টি-শার্টটি আপনাকে দিবে চরম আরাম।", sizes: ["S", "M", "L", "XL"], img: "https://i.ibb.co.com/XrMF7r8z/young-man-black-glasses-wearing-grey-polo-shirt-looking-aside-with-confident-expression-standing-blu.jpg" },
  { id: "2", name: "Summer Breeze White T-Shirt", price: "950", brand: "EcoWear", desc: "সাদা রঙের স্নিগ্ধতা আর আরামদায়ক ফেব্রিক নিয়ে আমাদের এই বিশেষ সামার কালেকশন।", sizes: ["M", "L"], img: "https://i.ibb.co.com/N2yfg2dJ/upset-european-man-white-shirt-with-tattooed-arms-sitting-outdoors.jpg" },
  { id: "3", name: "Vintage Graphic Tee", price: "1,450", brand: "RetroFit", desc: "ভিন্টেজ লুক এবং গ্রাফিক ডিজাইনের চমৎকার সমন্বয় এই টি-শার্টটিতে।", sizes: ["L", "XL"], img: "https://i.ibb.co.com/MyzKtCWp/stylish-casual-woman-leaning-handrail.jpg" },
  { id: "4", name: "Active Wear Sports Tee", price: "1,100", brand: "NeonSports", desc: "স্পোর্টস এবং জিমের জন্য বিশেষভাবে তৈরি এই টি-শার্টটি আপনাকে দিবে সতেজ অনুভূতি।", sizes: ["S", "M", "L"], img: "https://i.ibb.co.com/qMs67HG1/Vintage-Graphic-Tee.jpg" },
  { id: "5", name: "Minimalist Oversized Tee", price: "1,800", brand: "UrbanBox", desc: "মডার্ন ওভারসাইজড ফিটিং যা আপনাকে দিবে এক ইউনিক এবং মডার্ন লুক।", sizes: ["M", "L", "XL"], img: "https://i.ibb.co.com/GfYLg3wr/tourism-travelling-holidays-concept-man-tourist-enjoying-vacation-dancing-straw-hat-sunglasses-posin.jpg" },
  { id: "6", name: "Classic Polo Shirt", price: "1,650", brand: "GentleMan", desc: "ক্লাসিক পলো ডিজাইন যা ক্যাজুয়াল বা ফরমাল উভয় জায়গাতেই মানিয়ে যায়।", sizes: ["S", "M", "L"], img: "https://i.ibb.co.com/RkkNS9t6/man-is-showing-hand-love-sign-symbol.jpg" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = tshirtProducts.find(p => p.id === id) || tshirtProducts[0];

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] py-8 px-4 md:px-12">
      
      {/* Back Button */}
      <Link href="/t-shirt" className="inline-flex items-center gap-2 mb-6 text-black font-black text-[10px] uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
        <span>←</span> Back to Collection
      </Link>

      {/* Main Product Detail Section */}
      <section className="bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl flex flex-col md:flex-row gap-10 border border-white/50 mb-16">
        <div className="flex-1">
          <div className="bg-gray-50 rounded-[2.5rem] h-[400px] flex items-center justify-center overflow-hidden relative group border border-gray-100">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[#5BF527] font-black text-xs uppercase tracking-[0.3em] mb-2">{product.brand}</p>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4 tracking-tighter leading-tight">
            {product.name}
          </h1>
          <p className="text-4xl font-black text-black mb-8">৳{product.price}</p>
          <p className="text-gray-500 font-medium leading-relaxed mb-8 border-l-4 border-[#5BF527] pl-5 italic">
            {product.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
            <button className="flex-1 w-full bg-[#5BF527] text-black py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Add to Cart 🛒
            </button>
            <button className="flex-1 w-full bg-black text-white py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Suggested Styles Section */}
      <section className="mt-20">
         <div className="flex items-center justify-between mb-8 border-l-8 border-black pl-5">
            <h2 className="text-2xl font-black text-black uppercase tracking-tight">
               Suggested <span className="text-white">Styles</span>
            </h2>
            <Link href="/t-shirt" className="text-[10px] font-black uppercase text-black/60 underline">
               View All
            </Link>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tshirtProducts
              .filter(p => p.id !== id)
              .slice(0, 5)
              .map((item) => (
               <Link href={`/t-shirt/${item.id}`} key={item.id} className="group perspective-1000">
                  <div className="bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-lg flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/80">
                     
                     <div className="rounded-[1.5rem] overflow-hidden relative shadow-sm">
                        <img 
                           src={item.img} 
                           alt={item.name} 
                           className="w-full h-[100px] object-cover group-hover:scale-110 transition-transform duration-700 rounded-md"
                        />
                        <div className="absolute top-3 right-3 bg-black text-white text-[9px] font-black px-3 py-1 rounded-full uppercase z-10">
                           ৳{item.price}
                        </div>
                     </div>
                     
                     <div className="pt-4 pb-2 text-center px-2 flex flex-col flex-grow justify-between">
                        <div>
                           <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                              {item.brand}
                           </p>
                           <h3 className="font-black text-xs text-gray-900 uppercase leading-tight line-clamp-2">
                              {item.name}
                           </h3>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>
    </main>
  );
}
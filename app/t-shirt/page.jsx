"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 

const tshirtProducts = [
  { id: 1, name: "Premium Cotton Black Tee", price: "1,250", brand: "NeonStyle", size: "L", color: "Black", img: "https://i.ibb.co.com/XrMF7r8z/young-man-black-glasses-wearing-grey-polo-shirt-looking-aside-with-confident-expression-standing-blu.jpg", badge: "Best Seller" },
  { id: 2, name: "Summer Breeze White T-Shirt", price: "950", brand: "EcoWear", size: "M", color: "White", img: "https://i.ibb.co.com/N2yfg2dJ/upset-european-man-white-shirt-with-tattooed-arms-sitting-outdoors.jpg", badge: "New" },
  { id: 3, name: "Vintage Graphic Tee", price: "1,450", brand: "RetroFit", size: "XL", color: "Gray", img: "https://i.ibb.co.com/MyzKtCWp/stylish-casual-woman-leaning-handrail.jpg", badge: "Sale" },
  { id: 4, name: "Active Wear Sports Tee", price: "1,100", brand: "NeonSports", size: "S", color: "Green", img: "https://i.ibb.co.com/qMs67HG1/Vintage-Graphic-Tee.jpg", badge: "Hot" },
  { id: 5, name: "Minimalist Oversized Tee", price: "1,800", brand: "UrbanBox", size: "L", color: "Beige", img: "https://i.ibb.co.com/GfYLg3wr/tourism-travelling-holidays-concept-man-tourist-enjoying-vacation-dancing-straw-hat-sunglasses-posin.jpg", badge: "Trending" },
  { id: 6, name: "Classic Polo Shirt", price: "1,650", brand: "GentleMan", size: "M", color: "Blue", img: "https://i.ibb.co.com/RkkNS9t6/man-is-showing-hand-love-sign-symbol.jpg", badge: "Premium" },
];

const TShirtPage = () => {
  const [selectedSize, setSelectedSize] = useState("All");

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* 1. Category Header */}
      <section className="px-4 py-8 md:px-12 md:py-12">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/40">
          <div className="relative z-10 text-center md:text-left">
            <span className="text-black/40 font-black text-xs uppercase tracking-[0.3em] mb-4 block">New Summer Collection</span>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase">
              TRENDY <br /> <span className="text-[#5BF527] drop-shadow-md">T-SHIRTS</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-md font-medium">আরামদায়ক কটন ফ্যাব্রিক এবং মডার্ন ডিজাইনের সেরা সব টি-শার্ট কালেকশন এখন আপনার জন্য।</p>
            <button className="mt-8 bg-black text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-xl active:scale-95">
              Explore Collection
            </button>
          </div>

          <div className="mt-10 md:mt-0 relative">
             <div className="absolute inset-0 bg-[#5BF527] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
             <img 
               src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400" 
               alt="T-shirt Header" 
               className="w-64 md:w-96 relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] -rotate-6"
             />
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="px-4 md:px-12 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <div className="bg-black text-white p-8 rounded-[3rem] shadow-2xl border border-gray-800 sticky top-28">
            <h3 className="font-black text-xl mb-8 uppercase tracking-tight text-[#5BF527]">Filter by Size</h3>
            <div className="grid grid-cols-2 gap-3">
              {["All", "S", "M", "L", "XL"].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 rounded-2xl font-black text-xs transition-all border-2 ${selectedSize === size ? 'bg-[#5BF527] text-black border-[#5BF527]' : 'bg-transparent border-gray-700 hover:border-[#5BF527] text-gray-400'}`}
                >
                  {size === "All" ? "ALL SIZE" : size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols- gap-8">
            {tshirtProducts
              .filter(p => selectedSize === "All" || p.size === selectedSize)
              .map((product) => (
              /* কার্ডকে লিঙ্ক দিয়ে মুড়িয়ে দেওয়া হয়েছে */
              <Link href={`/t-shirt/${product.id}`} key={product.id} className="group cursor-pointer bg-white rounded-[3.5rem] p-5 shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="relative bg-gray-50 rounded-[3rem] h-80 flex items-center justify-center overflow-hidden">
                  <span className="absolute top-6 left-6 bg-[#5BF527] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase z-20 shadow-md">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="mt-8 px-2 text-center">
                  <p className="text-[10px] font-black text-[#5BF527] uppercase tracking-[0.2em] mb-2">{product.brand}</p>
                  <h3 className="font-black text-lg text-gray-900 group-hover:text-[#5BF527] transition-colors line-clamp-1 uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <p className="font-black text-2xl text-black mt-4">৳{product.price}</p>
                  <button className="w-full mt-4 bg-black text-white py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#5BF527] hover:text-black transition-all">
                    View Details 🛍️
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TShirtPage;
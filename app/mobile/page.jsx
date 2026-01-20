"use client";

import React, { useState } from 'react';

// কিছু ডামি মোবাইল ডাটা
const mobileProducts = [
  { id: 1, name: "iPhone 15 Pro Max", price: "1,55,000", brand: "Apple", ram: "8GB", storage: "256GB", img: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=400", badge: "Premium" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: "1,35,000", brand: "Samsung", ram: "12GB", storage: "512GB", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400", badge: "New" },
  { id: 3, name: "Google Pixel 8 Pro", price: "95,000", brand: "Google", ram: "12GB", storage: "128GB", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400", badge: "Best Camera" },
  { id: 4, name: "OnePlus 12", price: "82,000", brand: "OnePlus", ram: "16GB", storage: "256GB", img: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=400", badge: "Fast" },
  { id: 5, name: "Xiaomi 14 Ultra", price: "1,10,000", brand: "Xiaomi", ram: "16GB", storage: "512GB", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400", badge: "Flagship" },
  { id: 6, name: "Nothing Phone (2)", price: "65,000", brand: "Nothing", ram: "12GB", storage: "256GB", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=400", badge: "Unique" },
];

const MobilePage = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* 1. Mobile Category Header */}
      <section className="px-4 py-8 md:px-12 md:py-12">
        <div className="bg-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BF527] rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <span className="text-[#5BF527] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Smartphone Collection</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">
              Latest <span className="text-[#5BF527]">Mobile</span> <br /> Phones
            </h1>
            <p className="text-gray-400 mt-6 max-w-md font-medium">আপনার বাজেটের মধ্যে সেরা ফিচার সম্পন্ন স্মার্টফোনগুলো খুঁজে নিন এখানে।</p>
          </div>

          <div className="mt-10 md:mt-0 relative">
             <div className="absolute inset-0 bg-[#5BF527] rounded-full blur-[60px] opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400" 
               alt="Phone Header" 
               className="w-64 md:w-80 relative z-10 drop-shadow-[0_20px_50px_rgba(91,245,39,0.3)] rotate-12"
             />
          </div>
        </div>
      </section>

      {/* 2. Content Section (Sidebar + Grid) */}
      <section className="px-4 md:px-12 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filter */}
        <aside className="lg:w-1/4">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-xl border border-white/40 sticky top-28">
            <h3 className="font-black text-xl mb-6 uppercase tracking-tight">Filter by Brand</h3>
            <div className="space-y-3">
              {["All", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi"].map((brand) => (
                <button 
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`w-full text-left px-5 py-3 rounded-2xl font-bold text-sm transition-all flex justify-between items-center ${selectedBrand === brand ? 'bg-black text-white' : 'bg-white hover:bg-[#5BF527]/10 text-gray-600'}`}
                >
                  {brand}
                  {selectedBrand === brand && <span>✓</span>}
                </button>
              ))}
            </div>

            <div className="mt-10">
               <h3 className="font-black text-xl mb-6 uppercase tracking-tight">Price Range</h3>
               <input type="range" className="w-full accent-black" min="0" max="200000" />
               <div className="flex justify-between text-[10px] font-black mt-2 text-gray-500 uppercase">
                  <span>৳0</span>
                  <span>৳2,00,000+</span>
               </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-8 px-4">
             <p className="font-black text-sm uppercase text-black/60 tracking-widest">Showing {mobileProducts.length} Results</p>
             <select className="bg-white px-4 py-2 rounded-xl font-bold text-xs border-none shadow-sm focus:ring-2 ring-[#5BF527]">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
             </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {mobileProducts
              .filter(p => selectedBrand === "All" || p.brand === selectedBrand)
              .map((product) => (
              <div key={product.id} className="group cursor-pointer bg-white rounded-[3rem] p-4 shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="relative bg-gray-50 rounded-[2.5rem] h-64 flex items-center justify-center overflow-hidden">
                  <span className="absolute top-5 left-5 bg-black text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20">
                    {product.badge}
                  </span>
                  <img src={product.img} alt={product.name} className="w-full h-3/4 object-contain group-hover:scale-110 transition-transform duration-700 p-4" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-xs shadow-2xl active:scale-95 uppercase tracking-widest">
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>

                <div className="mt-6 px-3">
                  <h3 className="font-black text-lg text-gray-900 group-hover:text-[#5BF527] transition-colors line-clamp-1 uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">{product.ram} RAM | {product.storage} Storage</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-black text-xl text-black">৳{product.price}</p>
                    <button className="w-10 h-10 border-2 border-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#5BF527] group-hover:border-[#5BF527] transition-all">
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default MobilePage;
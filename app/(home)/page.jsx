"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const bannerData = [
  { id: 1, title: "LATEST MOBILE PHONES", subtitle: "TECH REVOLUTION", desc: "সেরা সব স্মার্টফোনে পাচ্ছেন আকর্ষণীয় ডিসকাউন্ট অফার।", bgColor: "bg-[#60a5fa]", rightColor: "bg-[#dbeafe]", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", tag: "Mobile" },
  { id: 2, title: "TRENDY T-SHIRTS", subtitle: "STYLISH COTTON", desc: "আরামদায়ক এবং কালারফুল টি-শার্ট কালেকশন এখন আপনার নাগালে।", bgColor: "bg-[#f472b6]", rightColor: "bg-[#fce7f3]", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518", tag: "T-Shirt" },
  { id: 3, title: "LUXURY WATCHES", subtitle: "TIMELESS CLASSIC", desc: "স্মার্ট এবং ক্লাসিক ঘড়ির সমাহারে সাজিয়ে নিন আপনার ব্যক্তিত্ব।", bgColor: "bg-[#2dd4bf]", rightColor: "bg-[#f0fdfa]", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314", tag: "Watch" },
  { id: 4, title: "CLEANING ESSENTIALS", subtitle: "HOME & CARE", desc: "আপনার ঘর থাকুক সবসময় জীবাণুমুক্ত এবং ঝকঝকে পরিষ্কার।", bgColor: "bg-[#fb923c]", rightColor: "bg-[#ffedd5]", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", tag: "Clean" },
  { id: 5, title: "UPCOMING SUMMER STYLE", subtitle: "SNEAKERS COLLECTION", desc: "আপনার প্রতিদিনের চলাফেরাকে আরও সাবলীল করতে সেরা স্নিকার্স।", bgColor: "bg-[#f5c451]", rightColor: "bg-[#f1d5c1]", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", tag: "Sneakers" }
];

const categories = [
  { name: "Mobile", icon: "📱" }, { name: "T-Shirt", icon: "👕" }, { name: "Watch", icon: "⌚" }, { name: "Cleaning", icon: "🧼" }, { name: "Shoes", icon: "👟" }, { name: "Beauty", icon: "💄" }, { name: "Gadgets", icon: "🎧" }, { name: "Laptop", icon: "💻" }, { name: "Food", icon: "🍎" }, { name: "Sports", icon: "⚽" }
];

const products = [
  { id: 1, name: "Premium Smartphone", price: "89,990", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", badge: "Hot" },
  { id: 2, name: "Casual Cotton T-Shirt", price: "1,250", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518", badge: "-20%" },
  { id: 3, name: "Classic Silver Watch", price: "12,500", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314", badge: "New" },
  { id: 4, name: "Pro Running Sneakers", price: "5,400", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", badge: "Top" },
];

export default function HomePage() {
  return (
    // আপনার দেওয়া গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] selection:bg-black selection:text-white">

      {/* section 1: Hero Slider */}
      <section className="px-3 py-3 md:px-8 md:py-6">
        <div className="relative rounded-[35px] md:rounded-[45px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] h-auto md:h-[550px] bg-white">
          <Swiper
            modules={[Autoplay, EffectFade]}
            loop={true}
            speed={1200}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            className="w-full h-full"
          >
            {bannerData.map((banner) => (
              <SwiperSlide key={banner.id}>
                <div className="w-full h-full flex flex-col md:flex-row">
                  {/* Content Area */}
                  <div className={`${banner.bgColor} p-8 md:p-16 flex flex-col justify-center transition-all duration-500`}>
                    <p className="text-black/60 font-black tracking-widest text-[10px] md:text-xs mb-3">{banner.subtitle}</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4 uppercase">
                      {banner.title.split(' ')[0]} <br />
                      <span className="text-white drop-shadow-md">{banner.title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p className="text-black/80 mb-6 max-w-sm text-sm md:text-base font-medium leading-relaxed">
                      {banner.desc}
                    </p>
                    <button className="bg-black text-white w-fit px-8 py-3.5 rounded-2xl font-bold hover:scale-110 hover:shadow-2xl transition-all shadow-lg text-sm active:scale-95">
                      Shop Now
                    </button>
                  </div>

                  {/* Image Area */}
                  <div className={`${banner.rightColor} flex-1 min-h-[300px] md:min-h-0 relative flex items-center justify-center p-8`}>
                    <div className="absolute w-[80%] h-[80%] bg-white/30 rounded-full blur-[70px] animate-pulse"></div>
                    <img src={banner.img} alt={banner.tag} className="relative z-10 w-full max-w-[280px] md:max-w-[420px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105" />
                    <h3 className="absolute bottom-6 right-8 text-[70px] md:text-[130px] font-black text-black/5 select-none uppercase pointer-events-none">
                      {banner.tag}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Categories: Glassmorphism Effect */}
          <div className="hidden lg:block absolute bottom-4 left-0 w-full z-20 px-10">
            <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2.5rem] p-3 flex items-center justify-between shadow-2xl">
              {categories.map((cat, index) => (
                <div key={index} className="flex flex-col items-center min-w-[85px] group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:bg-[#f5c451] group-hover:scale-125 transition-all duration-500">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-black mt-2 text-black/80 uppercase tracking-tighter">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 2: Trending Now */}
      <section className="px-6 py-12 md:px-12">
        <div className="flex items-center justify-between mb-10 bg-white/20 backdrop-blur-md p-6 rounded-[2rem] border border-white/30">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight drop-shadow-sm">
              TRENDING <span className="text-white">NOW</span>
            </h2>
            <p className="text-black/60 font-bold mt-1">সবচেয়ে জনপ্রিয় পণ্যগুলো এখন আপনার হাতের মুঠোয়</p>
          </div>
          <Link href="/all-items">
            <button className="hidden md:block bg-black text-white px-8 py-3 rounded-full font-black text-sm hover:bg-[#f5c451] hover:text-black transition-all shadow-xl active:scale-95">
              View All Items
            </button>
          </Link>
        </div>

        {/* Product Grid: White Cards to pop against green BG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-[3rem] p-4 shadow-2xl transition-all duration-500 hover:-translate-y-3">
              {/* Product Image Area */}
              <div className="relative bg-gray-50 rounded-[2.5rem] h-72 flex items-center justify-center overflow-hidden">
                <span className="absolute top-5 left-5 bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg z-20">
                  {product.badge}
                </span>

                <button className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-10 group-hover:translate-x-0 shadow-lg z-20 hover:bg-red-50">
                  ❤️
                </button>

                <img src={product.img} alt={product.name} className="w-full h-3/4 object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-xl p-4" />

                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-xs shadow-2xl active:scale-95 transition-all uppercase tracking-widest">
                    Add to Cart 🛒
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-6 px-3 pb-2">
                <div className="flex flex-col gap-1">
                  <h3 className="font-black text-lg text-gray-900 line-clamp-1 group-hover:text-[#f5c451] transition-colors uppercase tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-black text-2xl text-black">৳{product.price}</p>
                    <div className="flex items-center gap-1 text-yellow-400 text-[10px]">
                      {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                      <span className="text-gray-400 font-black ml-1">(4.8)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <Link href="/all-items">
          <button className="w-full mt-12 md:hidden bg-black text-white py-5 rounded-[2rem] font-black text-sm shadow-2xl active:scale-95 transition-all">
            VIEW ALL COLLECTIONS
          </button>
        </Link>
      </section>
      {/* section 3: Service Highlights (Trust Badges) */}
      <section className="px-6 py-12 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Free Shipping", desc: "For all orders over ৳5000", icon: "🚚", color: "bg-blue-100" },
            { title: "Secure Payment", desc: "100% secure payment methods", icon: "💳", color: "bg-green-100" },
            { title: "24/7 Support", desc: "Get help anytime you need", icon: "🎧", color: "bg-purple-100" },
            { title: "Easy Return", desc: "30 days easy return policy", icon: "🔄", color: "bg-orange-100" },
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-[2.5rem] flex flex-col items-center text-center shadow-lg border border-white/40 hover:scale-105 transition-transform">
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner`}>
                {item.icon}
              </div>
              <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-xs font-bold mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section 4: Mega Promo Banner */}
      <section className="px-6 py-12 md:px-12">
        <div className="relative w-full bg-black rounded-[45px] overflow-hidden flex flex-col md:flex-row min-h-[400px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5BF527] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C1F863] rounded-full blur-[120px] opacity-20"></div>

          {/* Left Side: Promo Text */}
          <div className="flex-1 p-10 md:p-20 flex flex-col justify-center relative z-10">
            <span className="bg-[#5BF527] text-black w-fit px-4 py-1 rounded-full font-black text-[10px] uppercase mb-6 tracking-widest">
              Limited Time Offer
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              DON'T MISS THE <br />
              <span className="text-[#5BF527]">MEGA SALE</span> UP TO 70%
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm font-medium">
              আপনার পছন্দের সব ব্র্যান্ডের ওপর পাচ্ছেন অবিশ্বাস্য ছাড়। অফারটি শেষ হওয়ার আগেই লুফে নিন।
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-[#5BF527] text-black px-10 py-4 rounded-2xl font-black hover:scale-110 transition-all shadow-[0_0_20px_rgba(91,245,39,0.4)]">
                Claim Discount
              </button>
              <div className="hidden sm:block">
                <p className="text-white font-black text-2xl tracking-tighter">05 : 12 : 45 : 02</p>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Days : Hrs : Min : Sec</p>
              </div>
            </div>
          </div>

          {/* Right Side: Promo Image (Mockup) */}
          <div className="flex-1 relative flex items-center justify-center p-10 bg-gradient-to-br from-gray-900 to-black">
            <div className="relative">
              {/* Product Image Placeholder */}
              <div className="absolute inset-0 bg-[#5BF527] rounded-full blur-[60px] opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600"
                alt="Headphones Promo"
                className="relative z-10 w-full max-w-[350px] drop-shadow-[0_20px_50px_rgba(91,245,39,0.3)] rotate-[-10deg] hover:rotate-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 right-10 bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl rotate-12 border-4 border-[#5BF527]">
              <p className="text-black font-black text-xl leading-none">SAVE</p>
              <p className="text-[#5BF527] font-black text-2xl leading-none">70%</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
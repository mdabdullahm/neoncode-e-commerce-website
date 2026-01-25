"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Hash } from 'lucide-react';

// ১. ব্লগের ডামি ডাটাবেস
const blogPosts = [
  { 
    id: "b1", 
    title: "স্মার্টফোন কেনার আগে ৫টি বিষয় অবশ্যই মাথায় রাখুন", 
    desc: "বর্তমান বাজারে অসংখ্য স্মার্টফোনের ভিড়ে আপনার জন্য সঠিকটি বেছে নেওয়া কঠিন। এই ব্লগে আমরা আলোচনা করব...", 
    category: "Tech", 
    date: "Oct 12, 2024", 
    readTime: "5 min read", 
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400" 
  },
  { 
    id: "b2", 
    title: "শীতকালে ত্বকের যত্ন নেওয়ার সেরা ঘরোয়া উপায়", 
    desc: "শীতের শুষ্ক আবহাওয়ায় ত্বককে সতেজ ও প্রাণবন্ত রাখতে প্রাকৃতিক উপাদানের বিকল্প নেই। জেনে নিন কিছু জাদুকরী টিপস...", 
    category: "Beauty", 
    date: "Oct 15, 2024", 
    readTime: "4 min read", 
    img: "https://i.ibb.co.com/S7mnkkXx/front-view-young-beautiful-female-pink-bathrobe-holding-spray-plant.jpg" 
  },
  { 
    id: "b3", 
    title: "সঠিক জুতো নির্বাচনের গুরুত্ব এবং স্বাস্থ্য ঝুঁকি", 
    desc: "ভুল সাইজের বা নিম্নমানের জুতো আপনার মেরুদণ্ড ও পায়ের দীর্ঘমেয়াদী ক্ষতি করতে পারে। কিভাবে সঠিক জুতো চিনবেন?", 
    category: "Lifestyle", 
    date: "Oct 18, 2024", 
    readTime: "6 min read", 
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400" 
  },
  { 
    id: "b4", 
    title: "কেন অর্গানিক খাবার আমাদের বর্তমান সময়ের সবচেয়ে বড় প্রয়োজন?", 
    desc: "ভেজাল খাবারের ভিড়ে অর্গানিক খাবার কেন আপনার ডায়েটে থাকা জরুরি তা নিয়ে বিস্তারিত আলোচনা...", 
    category: "Food", 
    date: "Oct 20, 2024", 
    readTime: "7 min read", 
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=400" 
  },
  { 
    id: "b5", 
    title: "২০২৪ সালের সেরা গেমিং ল্যাপটপ কালেকশন", 
    desc: "আপনি কি একজন প্রফেশনাল গেমার? তাহলে আপনার জন্য সেরা স্পেকস এবং বাজেটের মধ্যে সেরা ল্যাপটপগুলো দেখে নিন...", 
    category: "Gadgets", 
    date: "Oct 22, 2024", 
    readTime: "8 min read", 
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=400" 
  },
  { 
    id: "b6", 
    title: "স্পোর্টস গিয়ার রক্ষণাবেক্ষণ করার সঠিক নিয়ম", 
    desc: "ব্যাট, বল বা জিমের সরঞ্জাম দীর্ঘদিন ভালো রাখতে চাইলে আপনাকে কিছু বিশেষ নিয়ম মানতে হবে...", 
    category: "Sports", 
    date: "Oct 25, 2024", 
    readTime: "5 min read", 
    img: "https://i.ibb.co.com/XxCcvX4g/t-shirt-painting-indoors-still-life.jpg" 
  },
];

const BlogPage = () => {
  const [filter, setFilter] = useState("All");

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ২. ব্লগ হেডার ব্যানার */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[3.5rem] p-10 md:p-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BF527] rounded-full blur-[180px] opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-[#5BF527] font-black text-[10px] uppercase tracking-[0.5em] mb-6"
            >
              <BookOpen size={16} /> NeonCode Knowledge Hub
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              OUR <span className="text-[#5BF527]">INSIGHTS</span>
            </motion.h1>
            <p className="text-gray-400 mt-8 max-w-2xl mx-auto font-medium leading-relaxed italic">
              নতুন নতুন গ্যাজেট, লাইফস্টাইল টিপস এবং আমাদের লেটেস্ট কালেকশন সম্পর্কে বিস্তারিত জানতে চোখ রাখুন আমাদের ব্লগে।
            </p>
          </div>
        </div>
      </section>

      {/* ৩. ক্যাটাগরি ফিল্টার এবং সার্চ */}
      <section className="px-4 md:px-12 mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto mb-16">
          <div className="flex overflow-x-auto gap-3 no-scrollbar py-2 w-full md:w-auto">
            {["All", "Tech", "Beauty", "Lifestyle", "Food", "Sports"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 shadow-lg active:scale-95 ${filter === cat ? 'bg-black text-[#5BF527]' : 'bg-white text-black hover:bg-black/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input type="text" placeholder="Search articles..." className="w-full bg-white/50 backdrop-blur-md border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-xs outline-none focus:ring-2 ring-black transition-all" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={18} />
          </div>
        </div>

        {/* ৪. ব্লগ গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogPosts
            .filter(p => filter === "All" || p.category === filter)
            .map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[3.5rem] p-5 shadow-2xl transition-all duration-500 group relative border border-white/50 flex flex-col"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-64 bg-gray-50 rounded-[3rem] overflow-hidden mb-8">
                  <span className="absolute top-6 left-6 bg-black text-[#5BF527] px-4 py-1.5 rounded-full text-[9px] font-black uppercase z-20 shadow-md">
                    {post.category}
                  </span>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </Link>

              <div className="px-4 flex-1">
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                   <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-[#5BF527] transition-colors uppercase leading-tight mb-4 tracking-tighter line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.desc}
                </p>
              </div>

              <div className="px-4 pb-4">
                <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-black font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#5BF527] transition-colors">
                  Read Full Article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৫. নিউজলেটার সাবস্ক্রিপশন সেকশন */}
      <section className="px-4 md:px-12 mt-28">
         <div className="max-w-4xl mx-auto bg-black rounded-[4rem] p-10 md:p-16 relative overflow-hidden text-center shadow-2xl border border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#5BF527]"></div>
            <Hash className="text-[#5BF527]/10 absolute -top-10 -right-10 w-40 h-40 rotate-12" />
            
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              Join Our <span className="text-[#5BF527]">Community</span>
            </h2>
            <p className="text-gray-400 font-medium mb-10 text-sm md:text-base uppercase tracking-widest">নতুন ব্লগ পোস্ট এবং স্পেশাল অফারের আপডেট পেতে সাবস্ক্রাইব করুন।</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
               <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white text-xs font-bold outline-none focus:ring-2 ring-[#5BF527]" />
               <button className="bg-[#5BF527] text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Subscribe Now</button>
            </div>
         </div>
      </section>

    </main>
  );
};

export default BlogPage;
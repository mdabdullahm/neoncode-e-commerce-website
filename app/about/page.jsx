"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Sparkles, Rocket, ShieldCheck, Zap, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#5BF527] to-[#C1F863] pb-20">
      
      {/* ১. হিরো সেকশন - আভিজাত্যের পরিচয় */}
      <section className="px-4 py-8 md:px-12">
        <div className="bg-black rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#5BF527]/20 rounded-full blur-[150px]"></div>
          
          <div className="relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#5BF527] font-black text-[10px] uppercase tracking-[0.6em] mb-6 block"
            >
              The Story Behind NeonCode
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter"
            >
              WE DEFINE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BF527] to-white italic">PREMIUM</span>
            </motion.h1>
            <p className="text-gray-400 mt-10 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-xs md:text-sm">
              নিওনকোড শুধুমাত্র একটি ই-কমার্স শপ নয়, এটি একটি আধুনিক লাইফস্টাইল ব্র্যান্ড। আমরা বিশ্বাস করি গুণগত মান এবং কাস্টমার সন্তুষ্টিই আমাদের এগিয়ে যাওয়ার মূল শক্তি।
            </p>
          </div>
        </div>
      </section>

      {/* ২. মিশন এবং ভিশন - ২ টি কার্ড স্টাইল */}
      <section className="px-4 md:px-12 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
         <motion.div 
           whileHover={{ y: -10 }}
           className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden group"
         >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-[#5BF527] transition-colors">
               <Target size={30} className="text-[#5BF527] group-hover:text-black transition-colors" />
            </div>
            <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-6">Our Mission</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি মানুষের কাছে আন্তর্জাতিক মানের অরিজিনাল গ্যাজেট, ফ্যাশন এবং ডেইলি নিডস পৌঁছে দেওয়া। আমরা চাই শপিং হোক সহজ, নিরাপদ এবং আনন্দদায়ক।
            </p>
         </motion.div>

         <motion.div 
           whileHover={{ y: -10 }}
           className="bg-black rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden group"
         >
            <div className="w-16 h-16 bg-[#5BF527] rounded-2xl flex items-center justify-center mb-8 shadow-xl">
               <Rocket size={30} className="text-black" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Our Vision</h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              আমরা আগামী ৫ বছরের মধ্যে দেশের ১ নম্বর প্রিমিয়াম ই-কমার্স প্ল্যাটফর্ম হিসেবে নিজেদের প্রতিষ্ঠিত করতে চাই, যেখানে আধুনিক প্রযুক্তি এবং আভিজাত্যের মিলন ঘটবে প্রতিটি অর্ডারে।
            </p>
         </motion.div>
      </section>

      {/* ৩. কেন আমাদের পছন্দ করবেন? (Core Values) */}
      <section className="px-4 md:px-12 mt-24 max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black uppercase tracking-tighter">Why Choose <span className="text-white">NeonCode?</span></h2>
            <p className="text-black/60 font-bold uppercase text-[10px] tracking-widest mt-2">The pillars of our success</p>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Authenticity", desc: "100% Original Products", icon: <ShieldCheck size={24}/> },
              { title: "Fast Delivery", desc: "Express Home Delivery", icon: <Zap size={24}/> },
              { title: "Innovation", desc: "Next-gen Tech Solutions", icon: <Sparkles size={24}/> },
              { title: "Care", desc: "24/7 Dedicated Support", icon: <Heart size={24}/> },
            ].map((val, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-xl p-8 rounded-[3rem] border border-white/50 flex flex-col items-center text-center shadow-lg hover:bg-white transition-all">
                 <div className="text-black mb-4">{val.icon}</div>
                 <h4 className="font-black text-black uppercase text-xs tracking-widest mb-2">{val.title}</h4>
                 <p className="text-black/50 font-bold text-[8px] uppercase tracking-tighter">{val.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* ৪. স্ট্যাটস সেকশন (Social Proof) */}
      <section className="px-4 md:px-12 mt-24">
         <div className="max-w-5xl mx-auto bg-black rounded-[4rem] p-10 md:p-16 flex flex-wrap justify-center md:justify-between gap-12 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#5BF527]/10 rounded-full blur-3xl"></div>
            
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black text-[#5BF527]">100K+</h3>
               <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black text-white">500+</h3>
               <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-2">Premium Brands</p>
            </div>
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black text-[#5BF527]">24/7</h3>
               <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-2">Live Support</p>
            </div>
            <div className="text-center">
               <h3 className="text-4xl md:text-5xl font-black text-white">99%</h3>
               <p className="text-gray-500 font-black text-[10px] uppercase tracking-widest mt-2">Satisfaction Rate</p>
            </div>
         </div>
      </section>

      {/* ৫. টিমের একটি ছোট পরিচিতি বা আহ্বান */}
      <section className="px-4 md:px-12 mt-24 text-center">
         <div className="max-w-3xl mx-auto">
            <Users className="mx-auto text-black mb-6" size={40} />
            <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-6">Our Small But Mighty Team</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-10">
              আমরা একদল তরুণ এবং প্রযুক্তি-প্রেমী স্বপ্নবাজ যারা প্রতিদিন কাজ করে চলেছি আপনার কেনাকাটার অভিজ্ঞতাকে আরও উন্নত করার জন্য। আমরা শুধু প্রোডাক্ট বিক্রি করি না, আমরা একটি আস্থার সম্পর্ক তৈরি করি।
            </p>
            <button className="bg-black text-white px-12 py-5 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-[#5BF527] hover:text-black transition-all shadow-2xl active:scale-95">
               Start Shopping Today
            </button>
         </div>
      </section>

    </main>
  );
};

export default AboutPage;